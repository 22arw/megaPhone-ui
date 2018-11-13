import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './dashboard/tree/tree.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent, DashboardComponent, TreeComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
