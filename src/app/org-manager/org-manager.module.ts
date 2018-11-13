import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgManagerRoutingModule } from './org-manager-routing.module';
import { OrgManagerComponent } from './org-manager.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    OrgManagerComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    OrgManagerRoutingModule
  ]
})
export class OrgManagerModule { }
