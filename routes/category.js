var express = require('express');
var router = express.Router();
var categoryCtl = require("../controllers/category");

/* GET packs listing. */
router.get('/all',categoryCtl.getAllCategory);
/* add Pack. */
router.post('/add',categoryCtl.addCategory);
router.put('/update/:id',categoryCtl.updateCat);
router.post('/assigned/:id',categoryCtl.assignedCateg);

router.post('/addMultiple',categoryCtl.addMultipleCat);

module.exports = router;
