import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../services/pokemon-api.service'; //Import the Pokemon API service

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private pokemonAPI: PokemonAPIService) { }

  ngOnInit() {
  }

}
