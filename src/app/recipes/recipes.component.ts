import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  displayRecipe(recipe: Recipe) {
    console.log('test');
this.selectedRecipe = recipe;
  }
}
