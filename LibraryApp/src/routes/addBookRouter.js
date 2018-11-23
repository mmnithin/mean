const express=require('express');
const addBookRouter=express.Router();

function router(nav){
    addBookRouter.route('/')
.get((q,r)=>{

    r.render("addBook",{nav,title:'Library App'});

});

    return addBookRouter;

}
module.exports=router;
