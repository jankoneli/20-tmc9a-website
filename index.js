const express = require("express");
const app = express();
app.use("/src", express.static("public"))



app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/students", (req, res) => {
    res.sendFile(__dirname+"/students.html");
})

app.get("/weekly", (req, res) => {
    res.sendFile(__dirname+"/weekly.html");
})

app.get("/u/:id", (req, res) => {
    res.sendFile(__dirname+"/user.html")
})

app.use(function(req,res){
    res.status(404).sendFile(__dirname+"/underconstruction.html");
});
app.listen(3030)