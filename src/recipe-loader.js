var demoData = require('../data/recipes.json');

export function LoadDemoRecipes(callback) {
    ParseRecipes(demoData, callback);
}

function ParseRecipes(jsonData, callback){
    var recipes = jsonData
        .map(MapInputFormatToRecipeObject)
        .filter(recipe => recipe);

    callback(recipes);
}

function MapInputFormatToRecipeObject(inputRecipe){
    return {
        name: inputRecipe.name,
        description: inputRecipe.description,
        source: inputRecipe.source,
        ingredients: MapInputIngredientsToIngredientObjects(inputRecipe.ingredients),
        instructions: inputRecipe.instructions
    };
}

function MapInputIngredientsToIngredientObjects(inputIngredients){
    return inputIngredients
        .map(MapInputIngredientToIngredientObject)
        .filter(ingredient => ingredient);
}

/*
The input format defines an ingredient as an easy-readable list. Several formats are valid:

name only:
['salt']

name and description:
['pepper', 'freshly ground']

Quantity (must be a number and a unit!) and name:
[3, 'tbsp', 'olive oil']

All of the above:
[0.5, 'cup', 'olives', 'rinsed and chopped']
*/
function MapInputIngredientToIngredientObject(inputIngredient){
    var ingredientObject = {};

    switch(inputIngredient.length) {
    case 0:
        return null;
    case 1:
        ingredientObject.name = inputIngredient[0];
        break;
    case 2:
        ingredientObject.name = inputIngredient[0];
        ingredientObject.description = inputIngredient[1];
        break;
    case 3:
        ingredientObject.quantity = inputIngredient[0];
        ingredientObject.unit = inputIngredient[1];
        ingredientObject.name = inputIngredient[2];
        break;
    case 4:
        ingredientObject.quantity = Number(inputIngredient[0]);
        ingredientObject.unit = inputIngredient[1];
        ingredientObject.name = inputIngredient[2];
        ingredientObject.description = inputIngredient[3];
        break;
    default:
        return null;
    }

    return ingredientObject;
}