import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';
import { OrgService } from './services/org.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    AuthService,
    BaseService,
    OrgService
  ]
})
export class CoreModule { }
