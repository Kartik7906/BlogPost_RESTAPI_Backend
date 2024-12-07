import User from '../model/User.js';
import bcrypt from 'bcryptjs';
// this is user function here:
export const getAllUser = async(req, res, next) =>{
    let users;

    try{
        users = await User.find();
    }
    catch{
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message: "No User Found Here: "});
    }

    return res.status(200).json({users});
}

// lets make here signup function here:
export const signup = async (req, res, next) =>{
    const {name, email, password} = req.body;

    let existinguser;

    try{
        existinguser = await User.findOne({email});
    }
    catch (err){
        return console.log(err);
    }

    if(existinguser){
        return res.status(400).json({message: "User Already Exits, Login Insteed"});
    }
    const user = new User({
        name,
        email,
        password
    });

    try{
       await user.save();
    }
    catch(err){
        return console.log(err);
    }

    return res.status(201).json({user});
}

export const login = async(req, res, next) =>{
    const {email,password} =req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        return console.log(err)
    }
    if(!existingUser){
        return res.status(300).json({message: "could not find!"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"});
    }
    return res.status(200).json({message: "Login Sucessful"})
}