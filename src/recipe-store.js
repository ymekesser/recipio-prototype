export class RecipeStore {

    constructor() {
        this._recipes = [];
        this.subscribers = [];
    }

    subscribe(subscriber){
        this.subscribers.push(subscriber);
        this.notify();
    }

    notify(){
        this.subscribers.forEach(
            subscriber => subscriber.call(subscriber, this.recipes)
        );
    }

    get recipes() {
        return this._recipes;
    }

    addRecipe(recipe){
        this._recipes.push(recipe);
        this.notify();
    }
}