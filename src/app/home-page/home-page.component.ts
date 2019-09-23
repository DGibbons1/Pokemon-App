import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public ac: AppComponent) { }

  ngOnInit() {
  }

  //Open the list page when the Go buttom=n is pressed.
  public openListPage(){
    this.ac.openListPage();
  }

}
