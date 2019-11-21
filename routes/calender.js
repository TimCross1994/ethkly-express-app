var express = require('express');
var router = express.Router();
var calenderCtrl = require("../controllers/calender")

router.get('/calender', calenderCtrl.calender);

module.exports = router;