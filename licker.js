var log = require("fs").createWriteStream('log.txt', {'flags': 'a'});
var sys = require("sys");
require("http").createServer(function(req, res) {
  // DEBUG: sys.puts(sys.inspect(req));
  res.writeHead(200, {"Content-Type": "image/png", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"});
  var now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  
//   console.log(req.headers['x-real-ip']);
//   console.log(req.headers['x-forwarded-for']);
//   console.log(req.connection.remoteAddress);
//   console.log(req.socket.remoteAddress);
//   console.log(req.connection.socket && req.connection.socket.remoteAddress);
  
  var ip =  req.headers['x-real-ip'] || 
     req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  
  var x = "\n\n-> " + now + " " + ip + " " + require('url').parse(req.url, true).query.x;
    
  log.write(x);
  console.log(x);
    
  res.end(":P "+(+new Date));
    
}).listen(1337);

console.log("\nlicking ;P... ");
