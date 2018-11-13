import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgOwnerRoutingModule } from './org-owner-routing.module';
import { OrgOwnerComponent } from './org-owner.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    OrgOwnerComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    OrgOwnerRoutingModule
  ]
})
export class OrgOwnerModule { }
