const express = require("express");

const router = express.Router();

const reportController = require("../controllers/report.controller");

router.post("/create", reportController.postreportDetails);
router.get("/all", reportController.getallreport);
router.get("/get/:id", reportController.getReportByDiagnosisId);
router.put("/update/:id", reportController.updatereport);
module.exports = router;
