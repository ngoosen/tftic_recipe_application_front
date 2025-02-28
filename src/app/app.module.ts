import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LucideAngularModule, Search } from 'lucide-angular';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { RecipeCardsService } from './recipe-cards/recipe-cards.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, FooterComponent, HeaderComponent, RecipeCardsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    LucideAngularModule.pick({ Search }),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()), RecipeCardsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
