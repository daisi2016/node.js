var http = require('http');
//var equal = require('assert').equal;

var username = 'test';
var password = '';
var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64')

var restCall= function(callback){
    var options = {
        host: '127.0.0.1',
        port: 2222,
        path: '/login',
        method: 'POST',
        headers:{
            'accept': '*/*',
            'content-type': "application/xml",
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
            'user-agent': 'nodejs rest client'
        }
    };

    var req = http.request(options, function (res) {
       // console.log('STATUS: ' + res.statusCode);
        //equal(200, res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));

        res.on('data',function (chunk) {
            callback(chunk);

        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
}

module.exports = restCall;