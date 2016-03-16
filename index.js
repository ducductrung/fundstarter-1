var http = require('http')
var fs = require('fs')
var filename = 'index.html'

var server = http.createServer(function(req,response){


	 response.writeHead(200, {"Content-type":"text/html"})
	 fs.readFile(filename, "utf8", function(err,data){
		 if (err) throw err
		 response.write(data)
		 response.end()
	 })

})
server.listen(8000) // for heroku use .listen(process.env.PORT || 8080)
console.log("http://127.0.0.1:8000/")

