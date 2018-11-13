import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgOwnerComponent } from './org-owner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'org-owner',
    component: OrgOwnerComponent,
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
export class OrgOwnerRoutingModule { }
