// var mercedesBenz = require('../models/mercedesBenz');
var MercedesBenz = require("../models/mercedesBenz");

// List of all Costumes
exports.mercedesBenz_list = async function (req, res) {
    try {
        theMercedesBenz = await MercedesBenz.find();
        res.send(theMercedesBenz);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific mercedesBenz.
exports.mercedesBenz_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: mercedesBenz detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.mercedesBenz_create_post = async function(req, res) {
    console.log(req.body)
    let document = new MercedesBenz();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.carModel = req.body.carModel;
    document.carPrice = req.body.carPrice;
    document.carColor = req.body.carColor;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle mercedesBenz delete form on DELETE.
exports.mercedesBenz_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: mercedesBenz delete DELETE ' + req.params.id);
};
// Handle mercedesBenz update form on PUT.
exports.mercedesBenz_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: mercedesBenz update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.mercedesBenz_view_all_Page = async function (req, res) {
    try {
        theMercedesBenz = await MercedesBenz.find();
        res.render('mercedesBenz', { title: 'MercedesBenz Search Results', results: theMercedesBenz });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



