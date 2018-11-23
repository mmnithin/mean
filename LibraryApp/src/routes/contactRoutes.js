const express=require('express');
const contactRouter=express.Router();

function router(nav){
    contactRouter.route('/')
.get((q,r)=>{

    r.render("contactUs",{nav,title:'Library App'});

});

    return contactRouter;

}
module.exports=router;
