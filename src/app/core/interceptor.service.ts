import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('x-access-token');

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('received response.');

          if (event.body.token) {
            localStorage.setItem('x-access-token', event.body.token);
          }

          if (event.body.error) {
            console.log(event.body.error);
          }

          return event;
        } else if (idToken) {
          const cloned = req.clone({
            headers: req.headers.set('x-access-token', idToken)
          });
          return cloned;
        }
        return event;
      })
    );
  }
}
