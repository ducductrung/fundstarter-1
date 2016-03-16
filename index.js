var fs = require("fs");
var filename = "./index.html";
var buf = fs.readFileSync(filename, "utf8");

function start(resp) {
    resp.writeHead(200, {"Content-type":"text/html"});
    resp.write(buf);
    resp.end();
    } 
exports.start=start;
