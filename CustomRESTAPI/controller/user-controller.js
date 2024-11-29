import User from '../model/User.js';

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
