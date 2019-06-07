import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MegamenuComponent} from './megamenu/megamenu.component';

const routes: Routes = [
  {
    path: '',
    component: MegamenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
