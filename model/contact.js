const mongoose=require('mongoose');
//schema creation
const contactSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
}
});
//created collection
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;