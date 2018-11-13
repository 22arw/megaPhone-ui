import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [AdminComponent, HeaderComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ClrFormsNextModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
