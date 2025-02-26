import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
;

@NgModule({
  declarations: [AppComponent, SearchBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Search }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
