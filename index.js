var fs = require("fs");
var file = "./index.html";
var buf = fs.readFileSync(file, "utf8");

function start(resp) {
	resp.writeHead(200, {"Content-type":"text/html"});
	resp.write(buf);
	resp.end();
} 
server.listen(8080)
console.log("http://127.0.0.1:8080/")

