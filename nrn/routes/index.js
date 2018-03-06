var express = require('express');
var query = require('./service/dbPool');
var restRequest = require('./service/restClient');
var callRest =require('./service/callRest');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.title='员工平台';
  res.render('index', { title: req.session.title});
});
router.post('/login', function(req, res, next) {

    var uname = req.body.userCode;
    var password =req.body.password;
    var jason ={ 'name':uname,'password':password };
   /* restRequest('http://127.0.0.1:2222/login?name='+uname+'&password='+password+'',"POST",jason,function (data, response) {

        req.session.user=uname;
        res.json({name:uname});
    });*/
    callRest(function(data){


    });
});

router.get('/index', function(req, res, next) {
    res.render('main', { title:req.session.title ,username:req.session.user});

});


router.post('/register', function(req, res, next) {
    var userCode = req.body.userCode;
    var password = req.body.password;
    var userName = req.body.userName;

    query( "INSERT INTO KERNEL_USER_ENTITY_TEST (ENABLE_FLAG, PASSWORD,  USER_CODE, USER_NAME) VALUES ('0', '"+password+"', '"+userCode+"','"+userName+"')", function (err, data) {
        if (err) {
            console.log(err);
            res.json({name:userName,msg:err.message});
        }else{
            res.json({name:userName,msg:'success'});
        }

    });


    // res.sendStatus(200);
});





module.exports = router;


//
//var http = require('http');
//var ip = "IP_Address";
//var port = Port;
//var webserver =	http.createServer(function (req, res) { 
//        res.writeHead(200, {'Content-Type': 'text/plain'});
//        res.end('Hello	World\n');
//});
//webserver.listen(port, ip);