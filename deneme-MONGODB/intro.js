var http = require('http')

http.createServer(function(req,res){
    res.write('deneme projesi');
    res.end('');
}).listen(8080);

alert('deneme');