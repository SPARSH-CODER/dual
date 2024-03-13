const express=require("express")
const Blog = require("../model/Blog")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');

// save in database
router.post("/addblog",async(req,res)=>{
    const {author,category,blog}=req.body
    console.log(req.body)
        const obj={
            author,
            category,
            blog,
            blogId:uuidv4()
        }

    await Blog.create(obj)

    res.redirect("/getblog")
})


router.get("/getaddblog",(req,res)=>{
    res.render("blogpage")
})


//retriving by database
router.get("/getblog",async(req,res)=>{
    let blogs= await Blog.find()    
    res.render('allblog',{
        blogs
    })
})


//to delete added blog
router.get("/delete/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    await Blog.deleteOne({blogId})
    res.redirect("/getblog")


})


//to update use database
router.get("/update/:blogId",async(req,res)=>{
    let blogId=req.params.blogId
    const updateblog=await Blog.findOne({blogId})
    res.render("updateblog",{
         updateblog:updateblog
    })


})

router.post("/updateblog",async(req,res)=>{
    const {author,category,blog,blogId}=req.body
    const newobj={
        author,
        category,
        blog,
        blogId
    }
    await Blog.updateOne({blogId},newobj)
    res.redirect("/getblog")
})
                
module.exports=router