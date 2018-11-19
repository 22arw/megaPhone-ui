import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  appLogin(data) {
    return this.http.post<{ token: string }>(
      'https://megaphone-test.herokuapp.com/api/auth/login',
      data
    ).pipe(
      map(
        res => {
          localStorage.setItem('access_token', res.token);
          return res;
        }
      )
    );
  }

  getUser(): Observable<User> {
    const token = localStorage.getItem('access_token');
    return this.http.get<User>(
      'https://megaphone-test.herokuapp.com/api/user',
      {
        headers: new HttpHeaders().append('x-access-token', token)
      }
    );
  }

  appLogOut() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

}
