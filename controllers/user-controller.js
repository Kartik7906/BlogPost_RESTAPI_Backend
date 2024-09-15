import User from "../model/User.js";
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }

  if (!users) {
    return res.status(404).json({ message: "No User Found" });
  }

  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existinguser;
  try {
    existinguser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }

  if (existinguser) {
    return res.status(400).json({ message: "User Already Exit! Login Insted" });
  }
  const hasedpassword = bcrypt.hashSync(password);

  const user = new User({
    name,
    email,
    password: hasedpassword,
    blogs: [],
  });

  

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ user });
};

// login function:
export const login = async(req,res,next)=>{
    const {email,password} = req.body;
    let existinguser;
    try {
      existinguser = await User.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
  
    if (!existinguser) {
      return res.status(404).json({ message: "Could Not find user by this email:" });
    }

    const ispasswordcorrect = bcrypt.compareSync(password, existinguser.password);
    if(!ispasswordcorrect){
        return res.status(400).json({message: "Password is incorrect"});
    }

    return res.status(200).json({message: "Login Successful!"})
}
