import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm: string = '';
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm = inputElement.value;
    console.log('Terme de recherche :', this.searchTerm);
  }

  validateSearch(): void {
    console.log('Recherche validée :', this.searchTerm);
  }
}
