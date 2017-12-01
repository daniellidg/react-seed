/**
 * Created by Daguang Li on 11/29/2017.
 */
let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname, './build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

let server = app.listen(8088, "localhost", () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('server url is: http://%s:%s', host, port);
});