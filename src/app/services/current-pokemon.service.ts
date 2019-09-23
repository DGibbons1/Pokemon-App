import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PokemonAPIService } from './pokemon-api.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CurrentPokemonService {

  //Instance variables
  private currentPokemonURL: string;

  constructor(private http: Http, private pokemonAPI: PokemonAPIService) { }

  //Set Current Pokemon Details
  public setCurrentPokemon(url: string): void{
    this.currentPokemonURL = url;
  }

  public getCurrentPokemonURL(): string{
    return this.currentPokemonURL;
  }
}
