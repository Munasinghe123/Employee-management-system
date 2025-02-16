//const express = require('express');
//const router = express.Router();
//const UserModel = require('../Model/userModel');
//const userController = require('../controller/userController');

// router.get('/', userController.getAllusers);

// // This is the user list 
// router.get("/getUsersList", (req, res) => {
//     UserModel.find({})
//         .then(result => {
//             res.json(result);
//         })
//         .catch(err => {
//             res.status(500).json({ error: err.message });
//         });
// });

// // Get a specific user by user ID
// router.get("/getUserData/:userId", (req, res) => {
//     const { userId } = req.params;

//     UserModel.findById(userId)
//         .then(user => {
//             if (!user) {
//                 return res.status(404).json({ message: "User not found" });
//             }
//             res.json(user);
//         })
//         .catch(err => {
//             res.status(500).json({ message: "Internal server error", error: err });
//         });
// });

// // Update a user by user ID
// router.put("/updateUser/:userId", (req, res) => {
//     const { userId } = req.params;
//     const updateData = req.body;

//     UserModel.findByIdAndUpdate(userId, updateData, { new: true })
//         .then(updatedUser => {
//             if (!updatedUser) {
//                 return res.status(404).json({ message: "User not found" });
//             }
//             res.json(updatedUser);
//         })
//         .catch(err => {
//             res.status(500).json({ message: "Internal server error", error: err });
//         });
// });

const express= require('express')
const router = express.Router()

//imported model
const user= require('../Model/userModel')

//imported controller
const userController = require('../controller/UserController')

// getting users
router.get("/", userController.getAllUsers)

//getting users by id
router.get("/:id", userController.getById)

//inserting users
router.post("/adduser", userController.addUsers)

//updating user
router.put("/:id", userController.updateUser)

//delete user
router.delete("/:id", userController.deleteUser)

//exports
module.exports=router;


module.exports = router;
