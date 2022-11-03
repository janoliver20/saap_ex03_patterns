const express = require('express');
const path = require("path");
const app = express();
const request=require('request');

const port = 3000

app.get('/text', function (req, res) {
    console.log(req.query)
    if (req.query.name !== null) {
        const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
        res.send(shuffle(req.query.name))
    }
})

const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});
