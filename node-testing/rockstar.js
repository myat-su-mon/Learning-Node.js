// var http = require('http');
// var fs = require('fs');
// var docroot = "./";

// http.createServer(function(req, res) {
//     var path = docroot + req.url;
//     var result = fs.existsSync(path);

//     if(result) {
//         var body = fs.readFileSync(path, "utf-8");
//         res.writeHead(200, {"Content-Type": "text/html"});
//         res.write(body);
//     } else {
//         res.writeHead(404);
//         res.write("404 Not found");
//     }
//     res.end();
// }).listen(8080);
// console.log("HTTP server running at port 8080...");

// var connect = require('connect');
// const { Http2ServerRequest } = require('http2');
// var serveStatic = require('serve-static');
// connect().use(serveStatic("./")).listen(8081);

// http.get("http://www.example.com", function(res) {
//     res.setEncoding("utf-8");
//     res.on("data", function(chunk) {
//         console.log(chunk);
//     });
//     console.log(res.statusCode);
// });

// var options = {
//     hostname: "www.example.com",
//     port: 80,
//     path: "/api",
//     method: "POST"
// };

// var req = http.request(options, function(res) {
//     res.setEncoding("utf-8");
//     res.on("data", function(chunk) {
//         console.log(chunk);
//     });
//     console.log(res.statusCode);
// });

// req.on("error", function(e) {
//     console.log(e.message);
// });

// req.write("foo=bar");
// req.end();

// var url = require('url');
// var obj = url.parse("http://example.com:8080");
// console.log(obj);
// var format = url.format(obj);
// console.log(format);

// var string = querystring.stringify({foo:'bar', baz: ['qux', 'quus']});
// console.log(string);
// var obj = querystring(string);
// console.log(obj);

// var crypto = require('crypto');
// var md5 = crypto.createHash('md5').update('Apple').digest("hex");
// var sha1 = crypto.createHash('sha1').update('Apple').digest("hex");
// console.log(md5);
// console.log(sha1);

// var dns = require('dns');
// dns.lookup('www.ucsy.edu.mm', function(err, address) {
//     console.log('address: ' + address);
// });

// var punycode = require('punycode');
// console.log(punycode.encode("မ"));
// console.log(punycode.decode("nid"));

// var util = require('util');
// var id = 1, err = "Error", date = "2021-04-20";
// // var string = util.format("ID: %d, Msg: %s, Date: %s", id, err, date);
// console.log("ID: %d, Msg: %s, Date: %s", id, err, date);

// var Person = function() {};
// var User = function() {};
// console.log(util.inherits(User, Person));

var zlib = require('zlib');
var input = "Hello World!";
zlib.gzip(input, function(err, buffer) {
    console.log(buffer.toString('base64'));
});

var buffer = new Buffer("eJzzSM3JyVcIzy/KSVEEABxJBD4=", "base64");
zlib.unzip(buffer, function(err, buffer) {
    console.log(buffer.toString());
});