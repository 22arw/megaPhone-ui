import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BasesComponent } from './bases/bases.component';
import { AuthGuard, ForwardIfLoggedIn } from './core/routeGuards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [ForwardIfLoggedIn]
  },
  {
    path: 'home',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bases',
    component: BasesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
