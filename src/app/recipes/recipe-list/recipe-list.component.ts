import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test', 
    'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.jpg'),
    new Recipe('A test recipe', 'test', 
    'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/04/cb/T-T-14316-Chilli-Recipe-Cards.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
