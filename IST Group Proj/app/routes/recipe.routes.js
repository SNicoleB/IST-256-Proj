module.exports = (app) => {
    const recipes = require('../controllers/recipe.controller.js');

    // Create a new Note
    app.post('/recipes', recipes.create);

    // Retrieve all Notes
    app.get('/recipes', recipes.findAll);

    // Retrieve a single Note with noteId
    app.get('/recipes/:noteId', recipes.findOne);

    // Update a Note with noteId
    app.put('/recipes/:noteId', recipes.update);

    // Delete a Note with noteId
    app.delete('/recipes/:noteId', recipes.delete);
}
