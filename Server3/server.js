const express = require('express');
const app = express();

const port = 3002

app.get('/', function (req, res) {
    res.send('Hello World');
})

const server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
