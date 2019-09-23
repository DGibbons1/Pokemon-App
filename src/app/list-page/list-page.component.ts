import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public pokemonList: string[];

  constructor(private pokemonAPI: PokemonAPIService) { }

  ngOnInit() {
    //Call the pokemon API to get a list of pokemon.
    this.pokemonAPI.getPokemonList().subscribe(data=>{ 
      this.pokemonList = data.results;     
    })
  }

}
