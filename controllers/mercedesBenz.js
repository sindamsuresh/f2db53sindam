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


// for a specific Costume.
exports.mercedesBenz_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await MercedesBenz.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Costume create on POST.
exports.mercedesBenz_create_post = async function (req, res) {
    console.log(req.body)
    let document = new MercedesBenz();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.carModel = req.body.carModel;
    document.carPrice = req.body.carPrice;
    document.carColor = req.body.carColor;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle mercedesBenz delete form on DELETE.
exports.mercedesBenz_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: mercedesBenz delete DELETE ' + req.params.id);
};



// Handle Costume update form on PUT.
exports.mercedesBenz_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await MercedesBenz.findById(req.params.id)
        // Do updates of properties
        if (req.body.carModel)
            toUpdate.carModel = req.body.carModel;
        if (req.body.carPrice)
            toUpdate.carPrice = req.body.carPrice;
        if (req.body.carColor)
            toUpdate.carColor = req.body.carColor;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
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



