import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseManagerComponent } from './base-manager.component';

const routes: Routes = [
  {
    path: 'base-manager',
    component: BaseManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseManagerRoutingModule { }
