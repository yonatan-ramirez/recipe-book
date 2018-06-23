import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {
private recipes: Recipe[] = [
  {
  name: 'A new recipe',
  description: 'test recipe',
  imagePath: 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'
},
new Recipe('a test recipe',
 'this is a text',
 'https://images.media-allrecipes.com/images/75131.jpg')];

  recipeSelected = new EventEmitter<Recipe[]>();

getRecipes(): Recipe[] {
  return this.recipes.slice(); // returns exact cop of original array
 }
}
