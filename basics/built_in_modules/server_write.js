var fs = require('fs');

var data = "New File Contents";

fs.writeFile('temp.txt', data, function(err, data){
    if (err) console.log("error",err);
    console.log("Successfully Written to File.");
});
