const express = require("express");

const router = express.Router();

const diagnosisController = require("../controllers/diagnosis.controller");

router.post("/create", diagnosisController.postdiagnosisDetails);
router.get("/all", diagnosisController.getAllDiagnosis);
router.put("/update/:id", diagnosisController.updateDiagnosis);
module.exports = router;
