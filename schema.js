const connectDB=require('./config/db')
const mongoose=require('mongoose');
connectDB();
const logoschema=new mongoose.schema({
    name:string,
    data:Buffer,
});
const Logo=mongoose.model('Logo',logoschema)
async function savelogo (name,path){
const data= await fs.readFile(path);
const images= new Logo(
    {
        name:name,
        data:data,
    }
);
const check= await images.save();
}
//I assumed the name and the path will be avaliable, and I stored them
const logos=[{ name:'name the logo',
path:'path of the logo'},
{name:'name the logo',
path:'path of the logo'
},
{name:'name the logo',
path:'path of the logo'
},
{name:'name the logo',
path:'path of the logo'
},
{name:'name the logo',
path:'path of the logo'
}]
// each element along with it name and path will be stored
logos.forEach(logo=>{
    savelogo(logo.name,logo.path);
});

