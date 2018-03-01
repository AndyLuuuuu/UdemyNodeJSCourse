const express = require("express");
var app = express();

app.get("/", (req,res) => {
    res.status(404).send({
        error: "Page not found.",
        name: "Todo App v1.0"
    });
});

// Get /users
// Give users a name property and age property

app.get("/users", (req,res) => {
    res.status(200).send([{
        name: "Andy",
        age: 25
    }, {
        name: "Daniel",
        age: 25
    }])
});

app.listen(3000, () => {
    console.log("Server started");
});

module.exports.app = app;