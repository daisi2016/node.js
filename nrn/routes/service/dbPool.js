var Pool = require("ibm_db").Pool
    , pool = new Pool()
    , connectionString = "DATABASE=SCOS;HOSTNAME=10.10.12.84;UID=db2inst3;PWD=db2inst3;PORT=60000;PROTOCOL=TCPIP;CURRENTSCHEMA=SCOS_DEV2";

pool.setMaxPoolSize(9); // Max no of active connections.
pool.setConnectTimeout(5); // Connection timeout in seconds.
var ret = pool.init(6, connectionString); // Initialize pool with n no of connections.

var query = function (sql,rollback) {

    pool.open(connectionString, function (err, connection) {
        if (err) {return console.log(err);}
        connection.query(sql, function (err, data) {
            rollback(err, data);
        });

        connection.close(function () {
            console.log('close connection');
        });

    });
}
// exports.query = query;
module.exports = query;