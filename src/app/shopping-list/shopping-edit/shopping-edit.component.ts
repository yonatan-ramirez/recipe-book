import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
    const newIngredient =new Ingredient(
    this.nameInputRef.nativeElement.value,
    this.amountInputRef.nativeElement.value,
    );
    this.ShoppingListService.addIngredient(newIngredient);
  }
}
