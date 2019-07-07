import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {MatButtonModule, MatMenuModule, MatGridListModule, MatCardModule} from '@angular/material';
import { HouseCardsMenuComponent } from './house-cards-menu/house-cards-menu.component';
import { HouseCardComponent } from './house-card/house-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HouseCardsMenuComponent,
    HouseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
