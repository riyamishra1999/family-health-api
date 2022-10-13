const db = require("../models");
const Diagnosis = db.diagnosis;

exports.postdiagnosisDetails = async (req, res) => {
  const diagnosisDetails = {
    // diagnosisId: req.body.diseaId,
    // duration: req.body.duration,
    // isSurgical: req.body.isSurgical,
  };
  await Diagnosis.create(req.body)
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getAlldisease = async (req, res) => {
  await Disease.findAll()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.updatedisease = async (req, res) => {
  const id = req.params.id;
  await Disease.update(req.body, { where: { diseaseId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
