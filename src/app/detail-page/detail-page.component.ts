import { Component, OnInit } from '@angular/core';
import { CurrentPokemonService } from '../services/current-pokemon.service';  //Import the current pokemon shared service
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  //Instance variables
  private currentPokemonURL: string;
  public name: string;
  public imgURL: string;
  public types: string[];
  public moves: string[];

  constructor(private currentPokemon: CurrentPokemonService, private pokemonAPI: PokemonAPIService) {}

  ngOnInit() {
    //Get the url for the current pokemon from the CurrentPokemon shared service
    this.currentPokemonURL = this.currentPokemon.getCurrentPokemonURL();
    //Use the URL from above to get data from the Pokemon API Service
    this.pokemonAPI.getPokemonDetail(this.currentPokemonURL).subscribe(data=>{
      //Save the resonse to the instance variables.
      this.name = data.forms[0].name;
      this.imgURL = data.sprites.front_default;   
      this.types = data.types;
      this.moves = data.moves;   
    });


    //Return scroll to top of screen
    window.scroll(0,0);
  }

}
