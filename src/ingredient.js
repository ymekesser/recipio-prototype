export const ingredientElement = (ingredient, selectedIngredient) => `
<div class="ingredient ${selectedIngredient === ingredient.name ? 'selected' : ''}"
    onMouseover="window.recipioApp.updateSelectedIngredient('${ingredient.name}');">
    ${ingredient.quantity ? ingredient.quantity + ' ' + ingredient.unit : '' }
    ${ingredient.name}
    ${ingredient.description ? '<small class="ingredient-description">' + ingredient.description + '</small>' : ''}
</div>
`;