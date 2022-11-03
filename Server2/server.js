const express = require('express');
const app = express();

const port = 3001

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post("/name", function (req, res) {
    const body = req.body;
    const name = body.name;
    console.log(name)
})

const server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
