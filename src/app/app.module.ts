import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';   //Import bootstrap module
import { HttpModule } from '@angular/http';   //Import Http module to allow http requests
import { CurrentPokemonService } from './services/current-pokemon.service'; //Import the Current Pokemon Service

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,   //Import bootstrap module
    HttpModule
  ],
  providers: [CurrentPokemonService],  //Add CurrentPokemon module to the providers array so that it is globally accessible
  bootstrap: [AppComponent]
})
export class AppModule { }
