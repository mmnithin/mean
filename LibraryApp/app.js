const express=require('express');
const chalk=require('chalk');
var path = require('path');

var nav=[{link:"/books",title:'Books'},
{link:"/authors",title:"Authors"},
{link:"/aboutUs",title:"About Us"},
{link:"/contactUs",title:"Contact Us"},
{link:"/addBook",title:"Add Book"}];

var app=new express();
const booksRouter=require("./src/routes/booksRoutes.js")(nav)
const authorRouter=require("./src/routes/authorRoutes.js")(nav)
const aboutRouter=require("./src/routes/aboutRoutes.js")(nav)
const contacRouter=require("./src/routes/contactRoutes.js")(nav)
const addBookRouter=require("./src/routes/addBookRouter.js")(nav)




app.use(express.static(path.join(__dirname,"/public")))
app.use("/books",booksRouter);
app.use("/authors",authorRouter);
app.use("/aboutUs",aboutRouter);
app.use("/contactUs",contacRouter);
app.use("/addBook",addBookRouter);



// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,"views/index.html"));

// });





app.set('views','./src/views/');
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render("index",{title:'Library App',
                        nav});
})

app.listen(3018,function(){
    console.log("Listen 3006........."+chalk.green('3006'));
});