const connectDB=require('./config/db')
const mongoose=require('mongoose');
connectDB();
const logoschema=new mongoose.schema({
    name:string,
    data:Buffer,
});
const Logo=mongoose.model('Logo',logoschema)
async function start (){
const images= new Logo(
    {
        name:'logos',
        data:'binary data',//here we are going to add binary  data of the images 
    }
);
const check= await images.save();
}
start();