import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientChanged.subscribe((newIngredients: Ingredient[]) => {
      this.ingredients = newIngredients;
    });
  }

}
