import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseManagerRoutingModule } from './base-manager-routing.module';
import { BaseManagerComponent } from './base-manager.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { ManagerComponent } from './manager/manager.component';
import { ManagerMasterComponent } from './manager-master/manager-master.component';
import { OrgMasterComponent } from './org-master/org-master.component';
import { MessageServiceComponent } from './message-service/message-service.component';

@NgModule({
  declarations: [
    BaseManagerComponent,
    HeaderComponent,
    ManagerComponent,
    ManagerMasterComponent,
    OrgMasterComponent,
    MessageServiceComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    BaseManagerRoutingModule
  ]
})
export class BaseManagerModule { }
