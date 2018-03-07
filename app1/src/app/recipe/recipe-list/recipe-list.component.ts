import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("test name","test desc","https://www.edgarsmission.org.au/wp-content/uploads/2017/06/GoogleDoodle.png"),
    new Recipe("test name 2","test desc 2","https://timedotcom.files.wordpress.com/2017/10/celebrating-the-studio-for-electronic-music-4914189628866560-3-2x.png")
  ];
  constructor() { }

  ngOnInit() {
  }

}
