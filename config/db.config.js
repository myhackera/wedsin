const mongoose = require('mongoose');

const db_url = 'mongodb+srv://shivanshu:shivanshu@cluster0.uo1et40.mongodb.net/Wedsin?retryWrites=true&w=majority'

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("DB Connected Successfully");
})
.catch(error=>{
    console.log("Erorr is", error);
})

const connection = mongoose.connection;
module.exports = connection;

