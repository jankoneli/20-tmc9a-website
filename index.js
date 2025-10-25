const express = require("express");
const app = express();
app.use("/src", express.static("public"))

var imgstud = {
    "5":"5.jpg"
}

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/students", (req, res) => {
    res.sendFile(__dirname+"/students.html");
})

app.get("/agenda", (req, res) => {
    res.sendFile(__dirname+"/agenda.html");
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
app.listen(3030)