const db = require("../models");
const User = db.user;
const cloudinary = require("cloudinary").v2;
exports.postuserDetails = async (req, res) => {
  if (req.files) {
    try {
      await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        { resource: "image" },
        async (error, result) => {
          const userDetails = {
            familyFirebaseId: req.body.familyFirebaseId,
            name: req.body.name,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            relation: req.body.relation,
            image: result?.url,
          };
          await User.create(userDetails)
            .then((response) => {
              res.status(200).json({ response: response });
            })
            .catch((error) => {
              res.status(500).json({ message: error });
            });
        }
      );
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
};

exports.getAlluser = async (req, res) => {
  await User.findAll({
    include: ["family"],
  })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
exports.getOneuser = async (req, res) => {
  const id = req.params.id;
  await User.findOne({
    where: { userId: id },
    include: ["family"],
  })
    .then((response) => {
      res.status(200).json({ data: response });
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
