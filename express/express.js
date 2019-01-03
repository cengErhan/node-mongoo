var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listele',function(req,res){
    //res.send('kullanıcı listesi');
    fs.readFile('users2.json','utf8',(err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

app.get('/ekle',function(req,res){
    fs.readFile('users2.json','utf8',(err,data)=>{
        if(err) throw err;
        var newUser = {
            "k3": {
                "isim": req.query.isim,
                "sifre": req.query.sifre,
                "email": req.query.email
            }
        } ;
        data = JSON.parse(data);
        data["k3"] = newUser["k3"];
        fs.writeFile('users2.json',JSON.stringify(data),(err)=>{
            if(err) throw err;
            console.log('dosyaya yazıldı');
        });
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.get('/sil',function(req,res){
    fs.readFile('users2.json',(err,data)=>{
        if(err) throw err;
        var id = "k"+req.query.id;
        data = JSON.parse(data);
        delete data[id];
        data = JSON.stringify(data);
        fs.writeFile('users2.json',data,(err)=>{
            if(err) throw err;
            console.log('DELETED = TRUE ');
        });
        res.end(data);
    });
});

app.get('/sorgula',function(req,res){
    res.end('kullanıcı sorgulama sayfası');
});

var server = app.listen(8080, function(){
    console.log('SERVER = WORKING ');
});