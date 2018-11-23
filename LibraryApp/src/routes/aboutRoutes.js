const express=require('express');
const aboutRouter=express.Router();

function router(nav){
    aboutRouter.route('/')
.get((q,r)=>{

    r.render("aboutUs",{nav,title:'Library App'});

});

    return aboutRouter;

}
module.exports=router;
