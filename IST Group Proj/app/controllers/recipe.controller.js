const Recipe = require('../models/recipe.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.ingredients) {
        return res.status(400).send({
            message: "There can not be no ingredients"
        });
    }

    // Create a Note
    const recipe = new Recipe({
        name: req.body.name || "Untitled Recipe",
        ingredients: req.body.ingredients
    });

    // Save Note in the database
    recipe.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Recipe."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Recipe.find()
    .then(recipes => {
        res.send(recipes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving recipes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Recipe.findById(req.params.noteId)
    .then(recipe => {
        if(!recipe) {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        res.send(recipe);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving recipe with id " + req.params.noteId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.ingredients) {
        return res.status(400).send({
            message: "Recipe content can not be empty"
        });
    }

    // Find note and update it with the request body
    Recipe.findByIdAndUpdate(req.params.noteId, {
        name: req.body.name || "Untitled Recipe",
        ingredients: req.body.ingredients
    }, {new: true})
    .then(recipe => {
        if(!recipe) {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        res.send(recipe);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating recipe with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Recipe.findByIdAndRemove(req.params.noteId)
    .then(recipe => {
        if(!recipe) {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        res.send({message: "Recipe deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Recipe not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete recipe with id " + req.params.noteId
        });
    });
};
