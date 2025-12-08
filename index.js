const express = require("express");
const app = express();
const { createServer } = require('node:http');
const { Server } = require("socket.io");
app.use("/src", express.static("public"))

const fs = require("fs");
const server = createServer(app);
const io = new Server(server);

var agendatitle = "Agenda not updated";
var agendalist = "";

var imgstud = {
    "5":"5.jpg"
}

var alttext = {

}

var alttextlines = fs.readFileSync(__dirname+"/alttext")
alttextlines.toString().split("\n").forEach(line => {
    alttext[line.split(",")[0]] = line.split(",")[1].replace("\r", "")
})

console.log(alttext)

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/students", (req, res) => {
    res.sendFile(__dirname+"/students.html");
})

imagelist = {
    "primary":[],
    "studsos":[]
}


var primary = fs.readdirSync(__dirname+"/public/archive/sd");

primary.forEach(file => {
    imagelist["primary"].push(file)
})

var primary = fs.readdirSync(__dirname+"/public/archive/studsos");

primary.forEach(file => {
    imagelist["studsos"].push(file)
})

console.log(imagelist)

io.on('connection', (socket) => {
    socket.on('requestagenda', () => {
        socket.emit('agendadata', [agendatitle, agendalist]);
    })
    socket.on('requestimage', (img) => {
        socket.emit('imagelist', imagelist[img], alttext)
    })
    socket.on('updateagenda', (pin, datadata, datedate) => {
        console.log(parseInt(pin))
        if(parseInt(pin) == 30109){
            agendalist = datadata;
            agendatitle = datedate;
            console.log("update success");
            socket.emit('updates')
        }
    })
})

app.get("/agenda", (req, res) => {
    res.sendFile(__dirname+"/agenda.html");
})

app.get("/agenda/update", (req, res) => {
    res.sendFile(__dirname+"/agendaupdate.html");
})

app.get("/archive", (req, res) => {
    res.sendFile(__dirname+"/archive.html")
})

app.get("/archive/:id", (req, res) => {
    res.sendFile(__dirname + "/gallery.html")
})


app.get("/weekly", (req, res) => {
    res.sendFile(__dirname+"/weekly.html");
})

app.get("/u/:id", (req, res) => {
    res.sendFile(__dirname+"/user.html")
})

app.get("/img/:id", (req, res) => {
    if(Object.keys(imgstud).includes(req.params.id.toString())){
        res.sendFile(__dirname+"/img/"+imgstud[parseInt(req.params.id)]);
    }else{
        res.sendFile(__dirname+"/img/placeholder.png");
    }
})

app.use(function(req,res){
    res.status(404).sendFile(__dirname+"/underconstruction.html");
});
server.listen(3030)