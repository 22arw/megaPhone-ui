import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseManagerComponent } from './base-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'base-manager',
    component: BaseManagerComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseManagerRoutingModule { }
