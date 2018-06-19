import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes: Recipe[] = [{
    name: 'A new recipe',
    description: 'test recipe',
    imagePath: 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'
  }, new Recipe('a test recipe','this is a text','https://images.media-allrecipes.com/images/75131.jpg')];

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
