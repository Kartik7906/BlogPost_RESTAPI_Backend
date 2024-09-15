import mongoose from 'mongoose';
import Blog from '../model/Blog.js';
import User from '../model/User.js';

export const getallblogs = async (req,res,next)=>{
    let blogs;
    try{
        blogs = await Blog.find();
    }
    catch(err){
        return console.log(err);
    }

    if(!Blog){
        return res.status(404).json({message: "No Blogs Found yet!"})
    }

    return res.status(200).json({blogs});
}

// for adding blog:
export const addblog = async (req, res, next)=>{
    const {title,description,image,user} = req.body;

    let existinguser;
    try{
        existinguser = await User.findById(user);
    }
    catch(err){
        return console.log(err);
    }

    if(!existinguser){
        return req.status(400).json({message:"Unable to find user by this id"});
    }






    const blog = new Blog({
        title,description,image,user,
    });

    try{
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({session});

        existinguser.blogs.push(blog);
        await existinguser.save({session});
        await session.commitTransaction();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err});

    }

    return res.status(200).json({
        blog
    });
}

// new update function:
export const updateblog = async (req,res,next)=>{
    const {title,description} = req.body;
    const blogid = req.params.id;
    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(blogid,
            {title,description}
        )
    }
    catch(err){
        return console.log(err);
    }

    if(!blog){
        return res.status(500).json({message:"unable to update the blog:"})
    }
    return res.status(200).json({blog});
}

export const getbyid = async (req,res,next)=>{
    const id = req.params.id;

    let blog;
    try{
        blog = await Blog.findById(id);
    }
    catch(err){
        return Console.log(err);
    }

    if(!Blog){
        return res.status(404).json({mesaage:"No Blog Found"});
    }
    return res.status(200).json({blog});
}

// delete funciton here :
export const deleteblog = async (req,res,next) =>{
    const id = req.params.id;

    let blog;
    try{
        blog = await Blog.findByIdAndDelete(id);
    }
    catch(err){
        return console.log(err);
    }

    if(!Blog){
        return res.status(400).json({message:"Unable to delete:"});
    }

    return res.status(200).json({message:"delete successful"});
}