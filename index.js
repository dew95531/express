/* โหลด Express มาใช้งาน */
var app = require('express')();

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 3001;

var users = require('./users');
/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});
app.get('/users', function (req, res){
    res.json(users.findAll());
});
app.get('/users/:id', function (req, res){
    var id = req.params.id;
    res.json(users.findById(id));
});


/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
