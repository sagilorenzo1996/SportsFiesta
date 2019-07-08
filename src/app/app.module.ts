import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {MatButtonModule, MatMenuModule, MatGridListModule, MatCardModule, MatDividerModule, MatTableModule} from '@angular/material';
import { HouseCardsMenuComponent } from './house-cards-menu/house-cards-menu.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { SportComponent } from './sport/sport.component';
import { HomeComponent } from './home/home.component';
import { SportPageComponent } from './sport-page/sport-page.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailTableComponent } from './detail-table/detail-table.component';
import { IFrameComponent } from './i-frame/i-frame.component';
import { SafePipe } from './safe.pipe';
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sport', component: SportPageComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HouseCardsMenuComponent,
    HouseCardComponent,
    SportsListComponent,
    SportComponent,
    HomeComponent,
    SportPageComponent,
    DetailTableComponent,
    IFrameComponent,
    SafePipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {}),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
