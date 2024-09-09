const express = require("express");
const router = express.Router();

const User = require("../Model/UserModel");

const UserController = require ("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
module.exports = router;
