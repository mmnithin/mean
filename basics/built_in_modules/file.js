const files =require("fs")

files.readdir('./',function(err,files){
    if (err){console.log("Error"+err)}
else{
    console.log("Result",files);
}


})