var fs = require("fs");
var filename = "./index.html";
var buf = fs.readFileSync(filename, "utf8");

function start(resp) {
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(buf);
    resp.end();
    } 
server.listen(8080) // for heroku use .listen(process.env.PORT || 8080)
console.log("http://127.0.0.1:8000/")

