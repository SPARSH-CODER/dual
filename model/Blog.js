const mongoose=require('mongoose')

//define the schema of database
const { Schema } =mongoose;
const blogSchema=new Schema({   
    author:String,
    category:String,
    blog:String,
    blogId:String,
})
const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog