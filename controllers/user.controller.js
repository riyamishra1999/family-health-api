const db = require("../models");
const User = db.user;

exports.postuserDetails = async (req, res) => {
  const userDetails = {
    userId: req.body.userId,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    address: req.body.address,
    dateOfBirth: req.body.dateOfBirth,
  };
  await User.create(userDetails)
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getAlluser = async (req, res) => {
  await User.findAll()
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.updateuser = async (req, res) => {
  const id = req.params.id;
  await User.update(req.body, { where: { userId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
