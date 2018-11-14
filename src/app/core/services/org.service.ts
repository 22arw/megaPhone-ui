import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient) { }

  getOrgs() {
    const token = localStorage.getItem('access_token');
    return this.http.get(
      'https://megaphone-test.herokuapp.com/api/organization',
      {
        headers: new HttpHeaders().append('x-access-token', token)
      }
    );
  }

}
