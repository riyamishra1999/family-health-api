const express = require("express");

const router = express.Router();

const diseaseController = require("../controllers/disease.controller");

router.post("/create", diseaseController.postdiseaseDetails);
router.get("/all", diseaseController.getAlldisease);
router.put("/update/:id", diseaseController.updatedisease);
module.exports = router;