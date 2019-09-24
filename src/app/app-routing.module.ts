import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import each Component required for routing
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const routes: Routes = [
  { path: 'home',  component: HomePageComponent },
  { path: 'home/list',  component: ListPageComponent },
  { path: 'home/list/detail/:id', component: DetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
