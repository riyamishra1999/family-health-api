const express = require("express");
const router = express.Router();

const formController = require("../controllers/download.controller");

router.post("/create-form/:id", formController.createForm);
router.get("/download-form/:id", formController.sendPdf);

module.exports = router;
