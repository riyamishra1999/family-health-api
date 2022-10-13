const express = require("express");
const app = express();
const { sequelize } = require("./models");
const db = require("./models");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 5000;

const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

db.sequelize.sync().then(() => {
  app.listen(PORT, async () => {
    console.log(`server is running at ${PORT}`);
    try {
      await sequelize.authenticate();
      console.log("server is up and running");
    } catch (error) {
      console.log("error connecting to database", error);
    }
  });
});

const userRoutes = require("./routes/user.route");
app.use("/user", userRoutes);

const medicineRoutes = require("./routes/medicine.route");
app.use("/medicine", medicineRoutes);

const familyRoutes = require("./routes/family.route");
app.use("/family", familyRoutes);

const diagnosisRoutes = require("./routes/diagnosis.route");
app.use("/diagnosis", diagnosisRoutes);

const reportRoutes = require("./routes/report.route");
app.use("/report", reportRoutes);
