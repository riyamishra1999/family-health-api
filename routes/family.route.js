const express = require("express");

const router = express.Router();

const familyController = require("../controllers/family.controller");

router.post("/create", familyController.postFamilyDetails);
// router.post("/login", familyController.familyLogin);

router.get("/all", familyController.getAllfamily);
router.put("/update/:id", familyController.updatefamily);
module.exports = router;
