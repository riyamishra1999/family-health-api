const db = require("../models");
const Diagnosis = db.diagnosis;
const Reports = db.reports;
exports.postdiagnosisDetails = async (req, res) => {
  await Diagnosis.create(req.body)
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getAllDiagnosis = async (req, res) => {
  await Diagnosis.findAll({
    include: ["reports"],
    order: [["createdAt", "DESC"]],
  })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getDiagnosisBydiagId = async (req, res) => {
  const id = req.params.id;
  await Diagnosis.findOne({
    where: { diagnosisId: id },
  })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getDiagnosisById = async (req, res) => {
  const id = req.params.id;
  await Diagnosis.findAll({
    where: { usersUserId: id },
    include: ["reports"],
    order: [["date", "DESC"]],
  })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
exports.updateDiagnosis = async (req, res) => {
  const id = req.params.id;
  await Diagnosis.update(req.body, { where: { diseaseId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
