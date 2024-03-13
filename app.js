const express =require("express")
const path =require("path")
const app=express()
const port=4444;
const hbs = require("hbs");
const mongoose=require('mongoose')

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')


app.use("/",require("./routes/blog"))


mongoose.connect('mongodb://127.0.0.1:27017/test')//it return the promise
.then(()=>{
    app.listen(port,()=>{
        console.log("http://localhost:"+port); 
    });
})

