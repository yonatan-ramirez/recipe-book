import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
