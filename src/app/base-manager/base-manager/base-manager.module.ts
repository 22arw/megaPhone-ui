import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseManagerRoutingModule } from './base-manager-routing.module';
import { BaseManagerComponent } from './base-manager.component';

@NgModule({
  declarations: [BaseManagerComponent],
  imports: [
    CommonModule,
    BaseManagerRoutingModule
  ]
})
export class BaseManagerModule { }
