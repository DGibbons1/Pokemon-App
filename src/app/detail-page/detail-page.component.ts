import { Component, OnInit } from '@angular/core';
import { CurrentPokemonService } from '../services/current-pokemon.service';  //Import the current pokemon shared service
import { PokemonAPIService } from '../services/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';   //Import actived route to get teh parameter passed during routing

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  //Instance variables
  public name: string;
  public imgURL: string;
  public types: string[];
  public moves: string[];
  private pokemonJSON: any;

  constructor(private currentPokemon: CurrentPokemonService, private pokemonAPI: PokemonAPIService, private route: ActivatedRoute) {}

  ngOnInit() {
    //Get the pokemon list from the shared service and store in an instance variable
    this.pokemonJSON = JSON.parse(this.currentPokemon.getpokemonList());
    //Get and store the route parameter
    this.name = this.route.snapshot.params.id;

    //Loop through pokemonList to get url for selected Pokemon
    let i: number;
    for(i = 0; i < this.pokemonJSON.length; i++){
        if(this.pokemonJSON[i].name == this.name){
          this.getPokemonDetails(this.pokemonJSON[i].url);
        }
    }
    //Return scroll to top of screen
    window.scroll(0,0);
  }


  //Method to get the data from the Pokemon API through the Pokemon API Service
  private getPokemonDetails(url: string){
    //Use the URL provided to get data from the Pokemon API Service
    this.pokemonAPI.getPokemonDetail(url).subscribe(data=>{
      //Save the resonse to the instance variables.
      this.name = data.forms[0].name;
      this.imgURL = data.sprites.front_default;   
      this.types = data.types;
      this.moves = data.moves;   
    });
  }

}
