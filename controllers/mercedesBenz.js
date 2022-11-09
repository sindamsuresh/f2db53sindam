// var mercedesBenz = require('../models/mercedesBenz');
var MercedesBenz = require("../models/mercedesBenz");
// List of all mercedesBenzs
exports.mercedesBenz_list = function(req, res) {
 res.send('NOT IMPLEMENTED: mercedesBenz list');
};
// for a specific mercedesBenz.
exports.mercedesBenz_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: mercedesBenz detail: ' + req.params.id);
};
// Handle mercedesBenz create on POST.
exports.mercedesBenz_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: mercedesBenz create POST');
};
// Handle mercedesBenz delete form on DELETE.
exports.mercedesBenz_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: mercedesBenz delete DELETE ' + req.params.id);
};
// Handle mercedesBenz update form on PUT.
exports.mercedesBenz_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: mercedesBenz update PUT' + req.params.id);
};