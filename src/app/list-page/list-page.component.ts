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

  public pokemonList: string[];
  public searchTerm: string; //ngModel to store the current data entered into the search term

  constructor(private pokemonAPI: PokemonAPIService, private ac: AppComponent, private currentPokemon: CurrentPokemonService) { }

  ngOnInit() {
    //Call the pokemon API to get a list of pokemon.
    this.pokemonAPI.getPokemonList().subscribe(data=>{ 
      this.pokemonList = data.results;
      this.currentPokemon.setpokemonList(this.pokemonList);        
    })
  }

  //Method to open Pokemon details page with info about the selected Pokemon
  public openPokemonDetail(url: string): void{   
      this.currentPokemon.setCurrentPokemon(url); //Set the value of currentPokemon to the selected pokemon
      this.ac.openDetailPage();  //Navigate to the pokemon detail page
  }

}
