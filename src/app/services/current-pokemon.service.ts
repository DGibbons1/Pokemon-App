import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPokemonService {

  //Instance variables
  private pokemonList: string[];

  constructor() { }

  //Method to set the value of the Pokemon List variable
  public setpokemonList(pokemonList: string[]){
    this.pokemonList = pokemonList;
  }


  //Method to return the Pokemon List variable
  public getpokemonList(): string{
    return JSON.stringify(this.pokemonList);
  }


}
