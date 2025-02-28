import { Routes } from '@angular/router';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';

export const routes: Routes = [
    { path: 'recette/:id', component: RecetteDetailComponent },
    { path: '**', redirectTo: '' } 
];
