//httpモジュールを読み込む
const { read } = require('fs');
var http = require('http');
//settings.jsからの読み込み
var settings = require('./settings.js')
console.log(settings);

//サーバーを作る
var server = http.createServer();

var msg;
//イベントを結びつける
server.on('request', function(req,res){
  switch (req.url){
    case '/about':
      msg = "about this page";
      break;
    case '/profile':
      msg = "about me";
      break;
    default:
      msg = 'wrong page';
      break;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(msg);
  res.end();
});
server.listen(settings.port, settings.host);
console.log("server listening");



