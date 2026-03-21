const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.js");

router.route("/dashboard")
 .get(dashboardController.renderdashboard);
 
module.exports = router;