import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationManagerComponent } from './organization-manager.component';

const routes: Routes = [
  {
    path: 'organization-manager',
    component: OrganizationManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationManagerRoutingModule { }
