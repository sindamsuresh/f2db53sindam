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

// Handle Costume delete on DELETE.
exports.mercedesBenz_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await MercedesBenz.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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

// Handle a show one view with id specified by query
exports.mercedesBenz_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await MercedesBenz.findById(req.query.id)
        res.render('mercedesBenzdetail', { title: 'MercedesBenz Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a mercedesBenz.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mercedesBenz_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('mercedesBenzcreate', { title: 'MercedesBenz Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a mercedesBenz.
// query provides the id
exports.mercedesBenz_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await MercedesBenz.findById(req.query.id)
        res.render('mercedesBenzupdate', { title: 'MercedesBenz Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.mercedesBenz_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await MercedesBenz.findById(req.query.id)
        res.render('mercedesBenzdelete', {
            title: 'mercedesBenz Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

