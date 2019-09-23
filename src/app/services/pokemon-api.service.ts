import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  constructor(public http: Http) { }

  //Calls the Pokemon API to get a list of Pokemon. Returns the result as a JSON.
  public getPokemonList(): Observable<any>{
    return  this.http.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
    .pipe(map(obs => obs.json()));
  }
}
