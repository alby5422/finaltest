const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://albygeorgeb21ec1116:alby12345678@cluster0.jjkjpkj.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
