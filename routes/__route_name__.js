const express = require("express");
const router = express.Router();

const { funs } = require("../controllers/__route_controller__");

router.route("/").get(funs);

module.exports = router;
