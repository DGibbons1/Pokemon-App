import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PokemonAPIService } from './pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentPokemonService {

  //Instance variables
  private name: string;
  private imgURL: string;
  private types: string[];
  private moves: string[];

  constructor(private http: Http, private pokemonAPI: PokemonAPIService) { }

  //Set Current Pokemon Details
  public setCurrentPokemon(url: string): void{
    this.pokemonAPI.getPokemonDetail(url).subscribe(data=>{
      this.name = data.forms[0].name;
      this.imgURL = data.sprites.front_default;   
      this.types = data.types;
      this.moves = data.moves;
    })
  }

  //Getter methods
  public getname(): string{
    return this.name;
  }


  public getImgURL(): string{
    return this.imgURL;
  }


  public getTypes(): string[]{
    return this.types;
  }


  public getMoves(): string[]{
    return this.moves;
  }
}
