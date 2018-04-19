const express = require('express'),
    app = express(),
    fs = require("fs"),
    path = require("path"),
    root = path.join('./demo'),
    arr = []

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
                    arr.push(ele)
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