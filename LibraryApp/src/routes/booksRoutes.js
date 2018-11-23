const express=require('express');

const booksRouter = express.Router();


var book_list=[{number:1,name:"Yours Lovingly: A Collection of Short Love Stories",Author:"Soumya Tripathi ",img:'/img/0.jpg'},
{number:2,name:"The Wreck of the Titan",Author:"Morgan Robertson, ‎Sam Leith ",img:'/img/1.jpg'},
{number:3,name:"A Night to Remember: The Sinking of the Titanic",Author:"Walter Lord",img:'/img/2.jpg'},
{number:4,name:"The Grimm Conclusion",Author:"Adam Gidwitz",img:'/img/3.jpg'},
{number:5,name:"In a Glass Grimmly",Author:"Adam Gidwitz",img:'/img/4.jpg'}];


function router(nav){


booksRouter.route('/')
.get((req,res)=>{
    res.render("books",{title:'Library App',
    nav,
book_list});

});
booksRouter.route('/:id')
.get((req,res)=>{

    var id=req.params.id;
    res.render("bookId",{nav,title:'Library App',

    book:book_list[id]
        
    });

});
   return booksRouter;
}

module.exports=router;
