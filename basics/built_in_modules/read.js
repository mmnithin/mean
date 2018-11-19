var read =require('fs')

read.readFile("test.txt",'utf8',function(err,read){
    if(err){console.log("Error"+err)}
    else{console.log("File Content : "+ read)}
})