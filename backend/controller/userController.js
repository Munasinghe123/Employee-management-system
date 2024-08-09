const User = require('../Model/userModel')

//display
const getAllUsers = async(req,res,next)=>{

    let users ; 

    // get all users
    try{
        users = await User.find()
    }
    catch(err){
        console.log(err)
    }

    //no users
    if(!users){
        return res.status(404).json({message:"no users"})
    }

    //displaying all the users
    return res.status(200).json({users})
}

//insert
const addUsers = async (req, res, next) => {
    const { name, userName, password, contactNumber, address, role, email, salary } = req.body;

    let user;

    try {
        user = new User({
            name,
            userName,
            password,
            contactNumber,
            address,
            role,
            email,
            salary
        });
        await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to add user" });
    }

    // No users were added
    if (!user) {
        return res.status(404).json({ message: "No user added" });
    }

    res.status(200).json({ user });
};

//get by id
const getById= async(req,res,next)=>{

    const id=req.params.id;

    let user;

    try{
        user =await User.findById(id)

    }catch(err){
        console.log(err)
    }
    //no users availabel
    if(!user){
        res.status(404).json({message:"no users"})
    }
    res.status(200).json({user})
}
//updating 
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, userName, password, contactNumber, address, role, email, salary } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(id, {
            name,
            userName,
            password,
            contactNumber,
            address,
            role,
            email,
            salary
        }, { new: true }); // `new: true` returns the updated document

        if (user) {
            await user.save();
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to update user" });
    }

    if (!user) {
        return res.status(404).json({ message: "Unable to update user details" });
    }

    res.status(200).json({ user });
};

//delete

const deleteUser= async(req,res,next)=>{

    const id=req.params.id

    let user;

    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
    }
    if(!user){
        res.status(404).json({message:"unabel to delete"})
    }
    res.status(200).json({user})
}


exports.getAllUsers=getAllUsers
exports.addUsers=addUsers
exports.getById=getById
exports.updateUser=updateUser
exports.deleteUser=deleteUser