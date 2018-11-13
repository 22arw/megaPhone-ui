import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseManagerRoutingModule } from './base-manager-routing.module';
import { BaseManagerComponent } from './base-manager.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    BaseManagerComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    BaseManagerRoutingModule
  ]
})
export class BaseManagerModule { }
