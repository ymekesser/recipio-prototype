var demoData = require('../data/recipes.json');

export function LoadDemoRecipes(callback) {
    ParseRecipes(demoData, callback);
}

function ParseRecipes(jsonData, callback){
    var recipes = [];

    jsonData.forEach(inputRecipe => {
        const recipeObject = {
            name: inputRecipe.name,
            description: inputRecipe.description
        };

        recipes.push(recipeObject);
    });

    callback(recipes);
}