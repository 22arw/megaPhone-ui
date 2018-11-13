import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BaseService } from './services/base.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    AuthService,
    BaseService
  ]
})
export class CoreModule { }
