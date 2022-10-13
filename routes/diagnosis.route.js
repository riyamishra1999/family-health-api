const express = require("express");

const router = express.Router();

const diagnosisController = require("../controllers/diagnosis.controller");

router.post("/create", diagnosisController.postdiagnosisDetails);
// router.get("/all", diseaseController.getAlldisease);
// router.put("/update/:id", diseaseController.updatedisease);
module.exports = router;
