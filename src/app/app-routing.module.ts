import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {DetailHouseComponent} from "./components/detail-house/detail-house.component";

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'detail/:name', component: DetailHouseComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
