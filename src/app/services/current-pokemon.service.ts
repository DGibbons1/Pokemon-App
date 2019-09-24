import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPokemonService {

  //Instance variables
  private pokemonList: string[];

  constructor() { }

  public setpokemonList(pokemonList: string[]){
    this.pokemonList = pokemonList;
  }

  public getpokemonList(): string{
    return JSON.stringify(this.pokemonList);
  }


}
