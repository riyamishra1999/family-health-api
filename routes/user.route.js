const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/create", userController.postuserDetails);
router.get("/all", userController.getAlluser);
router.get("/:id", userController.getOneuser);
router.put("/update/:id", userController.updateuser);
module.exports = router;
