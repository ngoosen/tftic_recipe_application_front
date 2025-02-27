// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeCardsService {
  private apiUrl = 'api/recettes';

  constructor(private http: HttpClient) {}

  getRecettes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
