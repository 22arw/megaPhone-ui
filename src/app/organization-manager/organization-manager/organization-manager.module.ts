import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationManagerRoutingModule } from './organization-manager-routing.module';
import { OrganizationManagerComponent } from './organization-manager.component';

@NgModule({
  declarations: [OrganizationManagerComponent],
  imports: [
    CommonModule,
    OrganizationManagerRoutingModule
  ]
})
export class OrganizationManagerModule { }
