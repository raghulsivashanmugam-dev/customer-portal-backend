require("dotenv").config();

const port = 4000;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

const https = require('https');

const httpServer = require("http").createServer(app);
// var httpsServer = https.createServer(httpsOptions, app);
var currentServer = httpServer; // httpServer or httpsServer

currentServer.keepAliveTimeout = 61 * 1000;
currentServer.listen(port, function() {
    console.log('server up and running at %s port------', port);
});

const InitiateMongoServer = require("./Config/db");
InitiateMongoServer()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const Survey = require("./Route/survey.route");
const question = require("./Route/question.route");
const schedule = require("./Route/schedule.route");

app.use("/api", Survey)
app.use("/api", question)
app.use("/api", schedule)