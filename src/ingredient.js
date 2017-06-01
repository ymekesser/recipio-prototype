export const ingredientElement = ingredient => `
<div class="ingredient-container">
    ${ingredient.quantity ? ingredient.quantity + ' ' + ingredient.unit : '' }
    ${ingredient.name}
    ${ingredient.description ? '<small class="ingredient-description">' + ingredient.description + '</small>' : ''}
</div>
`;