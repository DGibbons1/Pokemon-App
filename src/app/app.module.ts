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
import { FormsModule } from '@angular/forms'; //Import FormsModule to allow ngModel function
import { PokemonFilter } from './pipes/filterpipe'; //Import Filter to search pokemon list

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    DetailPageComponent,
    PokemonFilter //Import Filter to search pokemon list
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //Import routing module to allow rounting between components
    NgbModule,   //Import bootstrap module
    HttpModule,   //Import Http module to allow http requests
    FormsModule  //Import FormsModule to allow ngModel function
  ],
  providers: [CurrentPokemonService],  //Add CurrentPokemon module to the providers array so that it is globally accessible
  bootstrap: [AppComponent]
})
export class AppModule { }
