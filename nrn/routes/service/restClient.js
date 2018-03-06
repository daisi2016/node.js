var Client = require('node-rest-client').Client;
var restRequest=function (url,type,json,callBack) {
    var client = new Client();
    var args = {
        data: json,
        headers: { "Content-Type": "application/json" }
    };

    // registering remote methods
    client.registerMethod("postMethod", url, type);

    client.methods.postMethod(args, function (data, response) {
        callBack(data, response);
        console.log(data);

        console.log(response);
    });
}
module.exports = restRequest;