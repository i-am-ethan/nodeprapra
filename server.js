//httpモジュールを読み込む
var http = require('http');
//サーバーを作る
var server = http.createServer();
//イベントを結びつける
server.on('request', function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world');
  res.end();
});
server.listen(8000, '127.0.0.1');
console.log("server listening");