//require library
const mongoose=require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/contact_db');
//acquire connection
const db=mongoose.connection;
//on error
db.on('error',console.error.bind(console,'error'));
//on successfully connecting
db.once('open',function(){
    console.log('Successfully Connected');
})