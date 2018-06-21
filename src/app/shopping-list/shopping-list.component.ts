import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  {
    name: 'Apple',
    amount: 5
  },
  new Ingredient('Tomtoes', 10)
];
  constructor() { }

  ngOnInit() {
  }

}
