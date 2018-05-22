var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");

// var phpnode = require('php-node')({bin:"D:\\VertrigoServ\\php.exe"});
// app.engine('php', phpnode);
// app.set('view engine', 'php');

var server = require("http").Server(app);
var io = require("socket.io").listen(server);
var fs = require("fs");

server.listen(process.env.PORT || 3000);

//Connect Mysql
// var Sequelize = require("sequelize");
//
// //Setting up the config
// var sql = new Sequelize('voicefun', 'root', '1', {
//     host:"localhost",
//     port: 3306,
//     dialect: 'mysql'
// });
// var test = sql.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();
//Mongo DB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ugame";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("ugame");
//     /*Return only the documents with the address "Park Lane 38":*/
//     //Insert insertOne
//     // var myobj = { name: "Uocnv", address: "Hà Nam" };
//     // dbo.collection("testTbl").insertOne(myobj, function(err, res) {
//     //     if (err) throw err;
//     //     console.log("1 document inserted");
//     //     db.close();
//     // });
//     // //Inser insertMany
//     // var myobj = [
//     //     { name: 'John', address: 'Highway 71'},
//     //     { name: 'Peter', address: 'Lowstreet 4'},
//     //     { name: 'Amy', address: 'Apple st 652'},
//     //     { name: 'Hannah', address: 'Mountain 21'},
//     //     { name: 'Michael', address: 'Valley 345'},
//     //     { name: 'Sandy', address: 'Ocean blvd 2'},
//     //     { name: 'Betty', address: 'Green Grass 1'},
//     //     { name: 'Richard', address: 'Sky st 331'},
//     //     { name: 'Susan', address: 'One way 98'},
//     //     { name: 'Vicky', address: 'Yellow Garden 2'},
//     //     { name: 'Ben', address: 'Park Lane 38'},
//     //     { name: 'William', address: 'Central st 954'},
//     //     { name: 'Chuck', address: 'Main Road 989'},
//     //     { name: 'Viola', address: 'Sideway 1633'}
//     // ];
//     // dbo.collection("testTbl").insertMany(myobj, function(err, res) {
//     //     if (err) throw err;
//     //     console.log("1 document inserted");
//     //     db.close();
//     // });
//     //Select
//     var query = { name: "Uocnv" };
//     dbo.collection("testTbl").find(query).toArray(function(err, result) {
//         if (err) throw err;
//         // console.log(result);
//
//         db.close();
//     });
// });

io.sockets.on('connection', function (socket) {

    console.log("Co nguoi connect ne");

    io.sockets.emit('serverguitinnhan', { noidung: "okbaby" });

    socket.on('servernhantinnhan', function (data) {
        // emit toi tat ca moi nguoi
        io.sockets.emit('serverguitinnhan', { noidung: data });

        // emit tới máy nguoi vừa gửi
        // socket.emit('serverguitinnhan', { noidung: data });
    });

});
//
// io.on("connection",function (socket) {
//     // console.log(socket)
//     console.log("Có người kết nối đến " + socket.id);
//     io.sockets.emit('serverguitinnhan', { noidung: "okbaby" });
//     // MongoClient.connect(url, function(err, db) {
//     //     if (err) throw err;
//     //     var dbo = db.db("ugame");
//     //     var query = { name: "Uocnv" };
//     //     dbo.collection("testTbl").find(query).toArray(function(err, result) {
//     //         if (err) throw err;
//     //         // console.log(result);
//     //
//     //         io.sockets.emit("send_data",function (result) {
//     //             console.log(result);
//     //         })
//     //         db.close();
//     //     });
//     // });
// });

// router.get('/index.php', function(req, res, next) {
//     res.render('index.php');
// });
app.get("/",function (req,res) {
    res.render("index");
});