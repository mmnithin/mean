const http=require('http');
 
const server =http.createServer(function(req,res){
    res.write("Hello World");
     res.end();
});
server.listen(3001);
console.log("Listening 3001...........");