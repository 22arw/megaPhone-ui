import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { BaseManagerModule } from './base-manager/base-manager/base-manager.module';
import { OrganizationManagerModule } from './organization-manager/organization-manager/organization-manager.module';
import { OrganizationModule } from './organization/organization/organization.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000', 'https://megaphone-test.herokuapp.com'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    ClarityModule,
    ClrFormsNextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BaseManagerModule,
    OrganizationManagerModule,
    OrganizationModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
