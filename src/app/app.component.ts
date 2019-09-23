import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pokemon-app';
  public currentPage: string = "home-page";

  //Method to open the home page
  public openHomePage(){
    this.currentPage = "home-page";
  }

  //Method to open the Pokemon List page
  public openListPage(){
    this.currentPage = "list-page";
  }

  //Method to open the Pokemon detail page
  public openDetailPage(url: string){
    this.currentPage = "detail-page";
  }




}
