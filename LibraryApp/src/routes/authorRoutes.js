const express=require('express');
const authorsRouter=express.Router();

authors_list=[{name:"Soumya Tripathi",country:"india",img:"http://api.randomuser.me/portraits/thumb/women/56.jpg"},
{name:"Adam Gidwitz",country:"England",img:"https://disneynerd.files.wordpress.com/2015/09/gidwitz-adam-hd.jpg"},
{name:"Walter Lord",country:"England",img:"http://collections.digitalmaryland.org/ui/custom/default/collection/default/images/glwl_overview2.jpg"},
{name:"Walter Lord",country:"England",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Morgan_Robertson.jpg/220px-Morgan_Robertson.jpg"}]

function router(nav){


authorsRouter.route('/')
.get((q,r)=>{

    r.render("author",{nav,title:'Library App',
                        authors_list});

});
authorsRouter.route('/:id')
.get((req,res)=>{

    var id=req.params.id;
    res.render("authorId",{nav,title:'Library App',
    

    author:authors_list[id]
        
    });

})
return authorsRouter;
}
module.exports=router;