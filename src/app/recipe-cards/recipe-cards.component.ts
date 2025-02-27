import { Component } from '@angular/core';

import db from '../../../db.json';
@Component({
  selector: 'app-recipe-cards',
  standalone: false,
  templateUrl: './recipe-cards.component.html',
  styleUrl: './recipe-cards.component.scss',
})
export class RecipeCardsComponent {
  recettes: any[] = [];

  ngOnInit(): void {
    this.recettes = db.recettes;
  }
}
