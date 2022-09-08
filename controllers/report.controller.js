const db = require("../models");
const Report = db.report;

exports.postreportDetails = async (req, res) => {
  const reportDetails = {
    reportId: req.body.reportId,
  };

  await Report.create(reportDetails)
    .then((response) => {
      res.status(200).json({ response: response });
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};
exports.getallreport = async (req, res) => {
  await Report.findAll()
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

