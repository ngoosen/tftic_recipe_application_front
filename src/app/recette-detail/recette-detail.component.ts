import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recette-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss']
})
export class RecetteDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);

  recipe: any;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (!idParam) {
      this.handleMissingId();
      return;
    }

    const id = +idParam;
    
    if (isNaN(id)) {
      this.handleInvalidId();
      return;
    }

    this.loadRecipe(id);
  }

  private loadRecipe(id: number): void {
    this.http.get<any>(`http://localhost:3000/recettes/${id}`).subscribe({
      next: (data) => this.recipe = data,
      error: () => this.handleInvalidId()
    });
  }

  private handleMissingId(): void {
    console.error('ID de recette manquant');
    this.router.navigate(['/not-found']); // Redirection vers une page 404
  }

  private handleInvalidId(): void {
    console.error('ID de recette invalide');
    this.router.navigate(['/not-found']);
  }
}