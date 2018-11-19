import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('x-access-token');

    if (idToken) {
      return next.handle(
        req.clone({
          setHeaders: {
            'x-access-token': localStorage.getItem('x-access-token')
          }
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
