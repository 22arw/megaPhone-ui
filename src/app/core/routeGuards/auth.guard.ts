import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (isTokenExpired()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}

function getTokenExpirationDate(token: string): Date {
  const decoded = jwtDecode(token) as { foo: string; exp: number; iat: number };

  if (decoded.exp === undefined) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(decoded.exp);
  return date;
}

function isTokenExpired(token?: string): boolean {
  if (!token) {
    token = localStorage.getItem('x-access-token');
  }
  if (!token) {
    return true;
  }

  const date = getTokenExpirationDate(token);
  if (date === undefined) {
    return true;
  }
  return !(date.valueOf() > new Date().valueOf());
}

@Injectable({
  providedIn: 'root'
})
export class ForwardIfLoggedIn implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = !isTokenExpired();
    if (isAuthenticated) {
      this.router.navigate(['dashboard']);
    }
    return true;
  }
}
