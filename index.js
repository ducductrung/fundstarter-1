var http = require('http')
var fs = require('fs')
var file = 'index.html'

var server = http.createServer(function(req,response){
	response.writeHead(200, {"Content-type":"text/html"})
	fs.open(file,'r',function(err,fd){
		// Create a read buffer, and specify size
		var readBuffer = new Buffer(2489);
		// fs.read requires constraints on reading
		var bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 0;
		fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function (error, readBytes)
		{
			if (error) { throw error }
			console.log("Just read " + readBytes + " bytes");
			// Log those data to the console
			console.log(readBuffer.slice(0, readBytes));
			response.write(readBuffer.toString())
			response.end()
            })
    
	})
})
server.listen(8000)
console.log("http://127.0.0.1:8000/")
