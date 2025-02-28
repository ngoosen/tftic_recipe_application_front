import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Récupérer toutes les recettes
  getAllRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recettes`);
  }

  // Récupérer une recette par ID
  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recettes/${id}`);
  }

  // Rechercher des recettes
  searchRecipes(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recettes/search/${term}`);
  }
}