//httpモジュールを読み込む,//ファイルを読み込む
var http = require('http'),
    fs = require('fs');
//settings.jsからの読み込み
var settings = require('./settings.js')
console.log(settings);
//サーバーを作る
var server = http.createServer();
var msg;
//イベントを結びつける
server.on('request', function(req,res){
  fs.readFile(__dirname + '/hello.html', 'utf-8',function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("not found!");
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  // switch (req.url){
  //   case '/about':
  //     msg = "about this page";
  //     break;
  //   case '/profile':
  //     msg = "about me";
  //     break;
  //   default:
  //     msg = 'wrong page';
  //     break;
  // }
  
});
server.listen(settings.port, settings.host);
console.log("server listening");



