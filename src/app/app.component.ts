import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Pokemon-App';

  constructor(){
    this.isHomePage = true;
  }

  //Variables to control nav functions
  public navConditionTrue: boolean = true;
  public isHomePage: boolean = true;
  public pokemonBtnVisible: boolean = false;
  public detailBtnVisible: boolean = false;
  public isListPage: boolean = false;
  public isDetailPage: boolean = false;
  
  //Method to set the status of the 2nd Nav item
  public setNavToListPage(){
    this.pokemonBtnVisible = true;
    this.detailBtnVisible = false;
    this.isHomePage = false;
    this.isListPage = true;
    this.isDetailPage = false;
  }

  //Method to set the status of the 1st Nav item
  public setNavToHomePage(){
    this.pokemonBtnVisible = false;
    this.detailBtnVisible = false;
    this.isHomePage = true;
    this.isListPage = false;
    this.isDetailPage = false;    
  }

    //Method to set the status of the 3rd Nav item
    public setNavToDetailPage(){
      this.pokemonBtnVisible = true;
      this.detailBtnVisible = true;
      this.isHomePage = false;
      this.isListPage = false;
      this.isDetailPage = true;    
    }



}
