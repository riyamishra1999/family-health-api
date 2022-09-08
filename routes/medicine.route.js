const express = require("express");

const router = express.Router();

const medicineController = require("../controllers/medicine.controllers");

router.post("/create", medicineController.postmedicineDetails);
router.get("/all", medicineController.getAllmedicine);
router.put("/update/:id", medicineController.updatemedicine);
module.exports = router;
