const http=require('http');
 
const server =http.createServer(function(req,res){
   
   if(req.url=='/'){
    res.write("Hello World");
    res.end();

   }
   else if(req.url=='/user'){
       res.write(JSON.stringify([1,2,3]));
       res.end();

   }
   else if(req.url=='/friends'){
    res.write(JSON.stringify(["nithin","dasd","asd","f"]));
    res.end();

}
});
server.listen(3004);
console.log("Listening 3002...........");