const User = require("../Model/UserModel");

const getAllUsers = async (reg, res, next) =>{
     
    let Users;

    try{
      users = await User.find();
    }catch (err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message:"user not found"});
    }

    return res.status(200).json({ users});
};  

//
const addUsers = async (req,res,next) =>{

    const {name,gmail,age,address} = req.body;
     
    let users;
    try{
        users = new User({name,gmail,age,address});
        await users.save();
    }catch (err){
        console.log(err);
    }
    if(!users){
        return res.status(400).json({message: "unable to add users"});
    } 
    return res.status(200).json({ users });
};

const getById = async (req,res,next) => {

    const id = req.params.id;

    let user;
    
    try {
        user = await User.findById(id);
    }catch (err){
        console.log(err);
    }
    
    if (!user){
        return res.status(404).json({message: "unable"});
    }
    return res.status(200).json({ user});
}


exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;