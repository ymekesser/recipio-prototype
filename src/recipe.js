import { ingredientElement } from './ingredient';
import { instructionElement } from './instruction';

export const recipeElement = (recipe, selectedIngredient) => `
<div class="recipe-container container">
    <h2> ${recipe.name} </h2>
    <p class="recipe-description">
        ${recipe.description}
        <small> <a href="${recipe.source}">Source</a> </small>
    </p>

    <ul id="ingredients-list-panel" class="list-group col-md-5">
        ${recipe.ingredients
            .map(ingredient => '<li class="list-group-item">' + ingredientElement(ingredient, selectedIngredient) + '</li>')
            .join('')}
    </ul>

    <ol id="instructions-list-panel" class="col-md-7">
        ${recipe.instructions
            .map(instruction => '<li class="">' + instructionElement(instruction, selectedIngredient) + '</li>')
            .join('')}
    <ol>

</div>
`;