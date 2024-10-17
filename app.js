const express = require("express");
const getTopics = require("./controllers/topics.controllers");
const app = express();

app.get("/api", (request, response) => { 
    response.status(200).send({message: "fine"})
});

app.get("/api/topics", getTopics)
module.exports = app