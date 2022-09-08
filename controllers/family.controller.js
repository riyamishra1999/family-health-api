const db= require("../models");
const Family= db.family;

exports.postfamilyDetails = async (req, res) => {
    const familyDetails = {
      familyId: req.body.familyId
    };
    await Family.create(familyDetails).then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({message:error});
    });
  };
  
  exports.getAllfamily = async (req, res) => {
    await Family.findAll().then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({message:error});
    });
  };
  
  exports.updatefamily = async (req, res) => {
    const id = req.params.id;
    await Family.update(req.body, { where: { familyId: id } }).then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({message:error});
    });
  };
  