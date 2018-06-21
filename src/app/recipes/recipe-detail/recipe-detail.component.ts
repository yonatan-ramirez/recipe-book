import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
