import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgManagerComponent } from './org-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'org-manager',
    component: OrgManagerComponent,
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
export class OrgManagerRoutingModule { }
