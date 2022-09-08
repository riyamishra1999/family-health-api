const db = require("../models");
const Medicine = db.medicine;

exports.postmedicineDetails = async (req, res) => {
  const medicineDetails = {
    medicineId: req.body.medicineId,
    doses: req.body.doses,
    usage: req.body.usage,
    duration: req.body.duration,
  };
  await Medicine.create(medicineDetails).then((response) => {
    res.status(200).json({ response: response });
  })
  .catch((error) => {
    res.status(500).json({message:error});
  });
};

exports.getAllmedicine = async (req, res) => {
  await medicine.findAll().then((response) => {
    res.status(200).json({ response: response });
  })
  .catch((error) => {
    res.status(500).json({message:error});
  });
};

exports.updatemedicine = async (req, res) => {
  const id = req.params.id;
  await medicine
    .update(req.body, { where: { medicineId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({message:error});
    });
};
