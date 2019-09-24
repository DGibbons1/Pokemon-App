import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';
import { AppComponent } from '../app.component';
import { CurrentPokemonService } from '../services/current-pokemon.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public pokemonList: string[]; //Variable to store the data returned from the Pokemon API
  public searchTerm: string; //ngModel to store the current data entered into the search term

  constructor(private pokemonAPI: PokemonAPIService, private ac: AppComponent, private currentPokemon: CurrentPokemonService) { 
    //Set the pokemonBtnVisible variable to visible
    this.ac.setNavToListPage();
  }

  ngOnInit() {
    //Call the pokemon API to get a list of pokemon.
    this.pokemonAPI.getPokemonList().subscribe(data=>{ 
      this.pokemonList = data.results;
      this.currentPokemon.setpokemonList(this.pokemonList);        
    })
  }

}
