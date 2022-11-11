var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mercedesBenz_controller = require('../controllers/mercedesBenz');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// mercedesBenz ROUTES ///
// POST request for creating a mercedesBenz.
router.post('/mercedesBenz', mercedesBenz_controller.mercedesBenz_create_post);
// DELETE request to delete mercedesBenz.
router.delete('/mercedesBenz/:id', mercedesBenz_controller.mercedesBenz_delete);

// PUT request to update mercedesBenz.
router.put('/mercedesBenz/:id', mercedesBenz_controller.mercedesBenz_update_put);


// GET request for one mercedesBenz.
router.get('/mercedesBenz/:id', mercedesBenz_controller.mercedesBenz_detail);


// GET request for list of all mercedesBenz items.
router.get('/mercedesBenz', mercedesBenz_controller.mercedesBenz_list);
module.exports = router;