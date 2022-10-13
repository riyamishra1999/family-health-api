const db = require("../models");
const Report = db.report;
require("dotenv").config();
var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.postreportDetails = async (req, res) => {
  if (req.files.images?.length > 0) {
    try {
      for (var i = 0; i < req.files.images.length; i++) {
        await cloudinary.uploader.upload(
          req.files.images[i].tempFilePath,
          { resource: "image" },
          (error, result) => {
            Report.create({
              reportURL: result.url,
              diagnosesDiagnosisId: req.body.diagnosisId,
            });
          }
        );
      }
    } catch (error) {
      res.send(500, { message: error });
    }
  } else {
    await cloudinary.uploader.upload(
      req.files.images.tempFilePath,
      { resource: "image" },
      async (error, result) => {
        await Report.create({
          reportURL: result.url,
          diagnosesDiagnosisId: req.body.diagnosisId,
        });
      }
    );
  }
  res.send(200, { message: "success" });
};
exports.getallreport = async (req, res) => {
  await Report.findAll({
    include: ["diagnoses"],
  })
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
exports.updatereport = async (req, res) => {
  const id = req.params.id;
  await Report.update(req.body, { where: { ReportId: id } })
    .then((response) => {
      res.status(200).send("Updated successfully");
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
