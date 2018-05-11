const express = require('express'),
    app = express(),
    fs = require("fs"),
    path = require("path"),
    root = path.join('./demo'),
    arr = []

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin); //设置来源
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Max-Age", "604800000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.use('/', express.static(__dirname + '/'))

app.post('/p1', function (req, res) {
    let c = readDir(path.join(root))
    res.send(c);
});

function readDir(path){
    fs.readdir(path,function(err,menu){
        arr.splice(0,arr.length)
        if(!menu)
            return;
        menu.forEach(function(ele){
            fs.stat(path+"/"+ele,function(err,info){
                if(info.isDirectory()){
                    readDir(path+"/"+ele);
                }else{
                    arr.push('http://localhost:3000/demo/' + ele)
                }
            })
        })
    })
    return arr
}

const server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});




