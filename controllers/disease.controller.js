const db = require("../models");
const Disease = db.disease;

exports.postdiseaseDetails = async (req, res) => {
  const diseaseDetails = {
    diseaseId: req.body.diseaseId,
    duration: req.body.duration,
    isSurgical: req.body.isSurgical
  };
  await Disease.create(diseaseDetails).then((response) => {
    res.status(200).json({ response: response });
  })
  .catch((error) => {
    res.status(500).json({message:error});
  });

};

exports.getAlldisease = async (req, res) => {
  await Disease.findAll().then((response) => {
    res.status(200).json({ response: response });
  })
  .catch((error) => {
    res.status(500).json({message:error});
  });
};

exports.updatedisease = async (req, res) => {
  const id = req.params.id;
  await Disease.update(req.body, { where: { diseaseId: id } }).then((response) => {
    res.status(200).send("Updated successfully");
  })
  .catch((error) => {
    res.status(500).json({message:error});
  });
};
