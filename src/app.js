import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecipeStore } from './recipe-store';
import { LoadDemoRecipes } from './recipe-loader';
import { recipeElement } from './recipe';

class RecipesAppComponent {

    constructor(container) {
        this.container = container;

        this.recipeStore = new RecipeStore();
        this.recipeStore.subscribe(recipes => this.render(recipes));

        LoadDemoRecipes(recipes => recipes.forEach(recipe => this.recipeStore.addRecipe(recipe)));
    }

    render(recipes){
        this.container.innerHTML = `
        <h1> Recipes <small>(${recipes.length})</small>  </h1>

        <ul class="recipe-list-panel" class="list-group">
            ${recipes.map(recipe => '<li>' + recipeElement(recipe) + '</li>').join('')}
        </ul>
        `;
    }
}

window.recipe = new RecipesAppComponent(document.querySelector('#recipio-app'));