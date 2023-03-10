const express = require('express');
const EventEmitter = require('events');
const app = express();
const events = new EventEmitter();

// Event Hendalig.....
let count = 0
events.on("countAPI", () => {
    count++;
    console.log("Event Alled", count);
});

app.get("/", (req, resp) => {
    resp.send("API Called");
    events.emit("countAPI"); // Event Called.....
});

app.get("/search", (req, resp) => {
    resp.send("Search API Called");
    events.emit("countAPI"); // Event Called.....
});

app.get("/update", (req, resp) => {
    resp.send("Update API Called");
    events.emit("countAPI"); // Event Called.....s
});


app.listen(9000);