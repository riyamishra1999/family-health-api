const express = require("express");

const router = express.Router();

const familyController = require("../controllers/family.controller");

router.post("/create", familyController.postfamilyDetails);
router.get("/all", familyController.getAllfamily);
router.put("/update/:id", familyController.updatefamily);
module.exports = router;