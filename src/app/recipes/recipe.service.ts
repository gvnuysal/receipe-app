
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'A Test Recipe',
      'Description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'B Test Recipe',
      'Description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
  getRecipes(){
    return this.recipes.slice();
  }

}
