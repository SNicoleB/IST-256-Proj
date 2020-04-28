
const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name: String,
    ingredients: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', RecipeSchema);
