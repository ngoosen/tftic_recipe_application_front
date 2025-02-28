import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';

const routes: Routes = [
  { path: 'recette/:id', component: RecetteDetailComponent }, 
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }