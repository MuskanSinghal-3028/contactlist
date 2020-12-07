const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose');
const Contact=require('./model/contact')
const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList=[];
app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if(err){
            console.log("error");
            return;
        }
        return res.render('home',{
            title:'My contact list',
            contact_list:contacts
        });
    })

});
app.post('/contact',function(req,res){
Contact.create(req.body,function(err,newContact){
if(err){
    console.log("error");
    return;
}
console.log(newContact);
res.redirect('back');

});
});
app.get('/delete',function(req,res){
    
let id=req.query.id;
Contact.findByIdAndDelete(id,function(err){
    if(err){
        console.log("error");
        return;
    }
return res.redirect('back');

})
// return res.redirect('back');
});
app.listen(port,function(err){
if(err)
{
    console.log(err);
    return;
}
console.log(port);
});
