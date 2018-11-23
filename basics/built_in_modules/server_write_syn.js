var fs = require('fs');

var content = "New File Contents";


try {
    const data = fs.writeFileSync('test1.txt', content)
    console,log("Success")
    //file written successfully
  } catch (err) {
    console.error(err)
  }