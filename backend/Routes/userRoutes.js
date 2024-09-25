
const express = require('express')
const router = express.Router()

//imported model
const user = require('../Model/userModel')

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
module.exports = router;


module.exports = router;
