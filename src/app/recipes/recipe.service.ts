import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
private recipes: Recipe[] = [
  {
  name: 'A new recipe',
  description: 'test recipe',
  imagePath: 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg',
  ingredients: [
    {
    name: 'Meat',
    amount: 1
    },
    new Ingredient('Tomatoes', 5)
    ]
},
new Recipe('a test recipe',
 'this is a text',
 'https://images.media-allrecipes.com/images/75131.jpg',
[
  new Ingredient('Meat', 1),
  new Ingredient('Coconut milk', 1)
])
];

  recipeSelected = new EventEmitter<Recipe>();

getRecipes(): Recipe[] {
  return this.recipes.slice(); // returns exact cop of original array
 }
}
