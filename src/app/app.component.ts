import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pokemon-App';

  public pokemonBtnVisible: boolean = false;

  public setPokemonBtnVisibility(val: boolean){
    this.pokemonBtnVisible = val;
  }

}
