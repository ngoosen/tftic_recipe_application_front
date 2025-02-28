import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
  Search,
} from 'lucide-angular';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Search }),
    RecetteDetailComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}