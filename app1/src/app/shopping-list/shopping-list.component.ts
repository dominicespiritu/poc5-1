import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("test1", 5),
    new Ingredient("test2", 2),
    new Ingredient("test3", 3)
  ];

  constructor() { }

  ngOnInit() {
  }

}
