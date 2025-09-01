const express = require("express");
const app = express();
app.use("/src", express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.get("/students", (req, res) => {
    res.sendFile(__dirname+"/students.html");
})

app.get("/agenda", (req, res) => {
    res.sendFile(__dirname+"/agenda.html");
})

app.listen(3030)