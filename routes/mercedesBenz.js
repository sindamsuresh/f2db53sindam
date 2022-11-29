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


// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
    
/* GET create update page */
router.get('/update', secured, mercedesBenz_controller.mercedesBenz_update_Page);



/* GET delete mercedesBenz page */
router.get('/delete', mercedesBenz_controller.mercedesBenz_delete_Page);



module.exports = router;