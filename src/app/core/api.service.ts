import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_BASE_URL = 'https://megaphone-test.herokuapp.com';

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else if (error.status === 401) {
      console.log('You are not authorized to access that route.');
    } else {
      console.error(
        `API returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
  }

  private handleStandardResponse(res: i.StandardResponse) {
    localStorage.setItem('x-access-token', res.token);
    if (!res.success) {
      // send feedback to user.
      console.log(res.error);
    }
    // caller handles success.
  }

  login(email: string, pass: string): void {
    console.log('Logging in...');
    this.http
      .post<i.LoginReturns>(this.API_BASE_URL + '/api/auth/login', {
        email: email,
        password: pass
      })
      .toPromise()
      .then(
        res => {
          localStorage.setItem('x-access-token', res.token);
          localStorage.setItem(
            'needsPasswordChange',
            `${res.needsPasswordChange}`
          );
          localStorage.setItem('role', res.role.toString());
          console.log('logged in!');
          this.router.navigate(['/home']);
        },
        err => {
          this.handleError(err);
        }
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
