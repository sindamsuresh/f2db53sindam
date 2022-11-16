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

/* GET create mercedesBenz page */
router.get('/create', mercedesBenz_controller.mercedesBenz_create_Page);

/* GET create update page */
router.get('/update', mercedesBenz_controller.mercedesBenz_update_Page);

/* GET delete mercedesBenz page */
router.get('/delete', mercedesBenz_controller.mercedesBenz_delete_Page);



module.exports = router;