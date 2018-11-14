import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseManagerComponent } from './base-manager.component';
import { ManagerMasterComponent } from './manager-master/manager-master.component';
import { MessageServiceComponent } from './message-service/message-service.component';
import { OrgMasterComponent } from './org-master/org-master.component';

const routes: Routes = [
  {
    path: 'base-manager',
    component: BaseManagerComponent,
    children: [
      {
        path: '',
        redirectTo: 'manager-master',
        pathMatch: 'full'
      },
      {
        path: 'manager-master',
        component: ManagerMasterComponent
      },
      {
        path: 'org-master',
        component: OrgMasterComponent
      },
      {
        path: 'message-service',
        component: MessageServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseManagerRoutingModule { }
