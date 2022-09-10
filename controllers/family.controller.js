const db = require("../models");
const Family = db.family;
// const bcrypt = require("bcrypt");
// exports.postfamilyDetails = async (req, res) => {
//   const { email, password } = req.body;
//   await bcrypt
//     .hash(password, 10)
//     .then((hash) => {
//       Family.create({
//         email: email,
//         password: hash,
//       }).then((response) => {
//         res.status(200).json({ response: response });
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: error });
//     });
// };

// exports.familyLogin = async (req, res) => {
//   const { email, password } = req.body;
//   const family = await Family.findOne({ where: { email: email } });
//   if (!family) {
//     res.json({ error: "Family doesn't exist" });
//     return;
//   }

//   await bcrypt.compare(password, family.password).then((match) => {
//     if (!match) {
//       res.json({ error: "invalid details" });
//       return;
//     }
//     res.json("logged in");
//     return;
//   });
// };
exports.postFamilyDetails = async (req, res) => {
  await Family.create(req.body)
    .then((response) => {
      res.status(200).json(response);
      return;
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.getAllfamily = async (req, res) => {
  await Family.findAll({
    include: ["users"],
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

exports.updatefamily = async (req, res) => {
  const id = req.params.id;
  await Family.update(req.body, { where: { familyId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
