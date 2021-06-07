import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 8),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push()
  }
}
