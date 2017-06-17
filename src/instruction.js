export const instructionElement = (instruction, selectedIngredient) => `
<div class="instruction">
    ${
        instruction.map(instructionElement => renderInstructionElement(instructionElement, selectedIngredient)).join('')
    }
</div>
`;

function renderInstructionElement(instructionElement, selectedIngredient) {
    if(typeof(instructionElement) === 'string'){
        return instructionElement;
    } else {
        return `
        <a class="ingredient ${selectedIngredient === instructionElement.ingredientName ? 'selected' : ''}" 
            href="#" 
            onMouseover="window.recipioApp.updateSelectedIngredient('${instructionElement.ingredientName}');"
            >
            ${instructionElement.string}
        </a>
        `;
    }
}