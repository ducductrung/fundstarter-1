var http = require('http')
var fs = require('fs')
var filename = 'index.html'

var server = http.createServer(function(req,response){
	// part 1a
	// var buff = fs.readFileSync('index.html', "utf8")
	// response.writeHead(200, {"Content-type":"text/html"})
	// response.write(buff)
	// response.end()
	//part b
	// response.writeHead(200, {"Content-type":"text/html"})
	// fs.readFile(filename, "utf8", function(err,data){
	// // body
	// if (err) throw err
	// response.write(data)
	// response.end()
	// })
// function part2(response){
fs.stat('index.html', function (error, stast) {
    if (error) {
        // Trouble accessing the file.
        throw error;
    }
    // Output information about the file to the console.
    console.log(stast);
});

response.writeHead(200, {"Content-type":"text/html"})
fs.open('index.html','r',function(err,fd){

	// Create a read buffer, and specify size
    var readBuffer = new Buffer(2489);
    // fs.read requires constraints on reading
    var bufferOffset = 0,
        bufferLength = readBuffer.length,
        filePosition = 0;
    fs.read(fd, 
            readBuffer,
            bufferOffset,
            bufferLength,
            filePosition,
            function (error, readBytes) {
                if (error) { throw error }
                console.log("Just read " + readBytes + " bytes");
                // Log those data to the console
                console.log(readBuffer.slice(0, readBytes));
               
    			response.write(readBuffer.toString())
    			response.end()
            })
    
	})
})
server.listen(8080) // for heroku use .listen(process.env.PORT || 8080)
console.log("http://127.0.0.1:8080/")
