const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.js");

router.route("/dashboard")
 .get(adminController.renderDashboard);
 
 
module.exports = router;