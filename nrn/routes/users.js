var express = require('express');
var pool = require('./service/dbPool');
var router = express.Router();



router.get('/', function(req, res, next) {

    pool('select * from scos_cust_base_info where id=110', function (err, data) {
        if (err) {
            console.log(err);
        }else{
            //else   res.send(data);
            res.render('userList', {data:data});
        }

    });

});



/*
router.get('/', function(req, res, next) {
  ibmdb.open("DATABASE=SCOS;HOSTNAME=10.10.12.84;UID=db2inst3;PWD=db2inst3;PORT=60000;PROTOCOL=TCPIP;CURRENTSCHEMA=SCOS", function (err,conn) {
	  if (err) return console.log(err);

	  conn.query('select * from scos_cust_base_info where id=110', function (err, data) {
	    if (err) {
	    	console.log(err);
	    }else{
	    	//else   res.send(data);
	    	console.log(data);
	    	res.render('userList', {data:data});
	    }

	  });

      conn.close(function () {
          console.log('done');
      });
	});
});
*/


module.exports = router;





