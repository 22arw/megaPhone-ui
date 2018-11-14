import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Base } from '../interfaces/base';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  base$: Observable<Base[]>;

  constructor(private http: HttpClient) { }

  getAllBases() {
    const token = localStorage.getItem('access_token');
    return this.http.get(
      'https://megaphone-test.herokuapp.com/api/base/getAllBases',
      {
        headers: new HttpHeaders().append('x-access-token', token)
      }
    );
  }

  getAllOrgsUnderBase(baseId) {
    const token = localStorage.getItem('access_token');
    return this.http.post(
      'https://megaphone-test.herokuapp.com/api/base/getAllOrgsUnderBase',
      baseId,
      {
        headers: new HttpHeaders().append('x-access-token', token),
      },
    );
  }

  createBase(formData) {
    const token = localStorage.getItem('access_token');
    return this.http.post(
      'https://megaphone-test.herokuapp.com/api/base/createBase',
      formData,
      {
        headers: new HttpHeaders().append('x-access-token', token)
      },
    );
  }

  createBaseManager(formData) {
    const token = localStorage.getItem('access_token');
    return this.http.post(
      'https://megaphone-test.herokuapp.com/api/base/createBaseManager',
      formData,
      {
        headers: new HttpHeaders().append('x-access-token', token)
      },
    );
  }

}
