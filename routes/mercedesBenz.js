// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('mercedesBenz', { title: 'Search Results MercedesBenz' });
// });

// module.exports = router;


var express = require('express');
var mercedesBenz_controller = require('../controllers/mercedesBenz');
var router = express.Router();
/* GET mercedesBenz */
router.get('/', mercedesBenz_controller.mercedesBenz_view_all_Page);

/* GET detail mercedesBenz page */
router.get('/detail', mercedesBenz_controller.mercedesBenz_view_one_Page);



module.exports = router;