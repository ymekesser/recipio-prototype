import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class RecipeComponent {
    constructor(container) {
        this.container = container;
    }

    render(){
        this.container.innerHTML = '<h1>Some Recipe</h1>';
    }
}

window.recipe = new RecipeComponent(document.querySelector('#recipio-app'));

window.recipe.render();