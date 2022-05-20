import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenAddInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('my_token');
    if (token) {
      let cloneRequest = request.clone({
        headers: new HttpHeaders().set('Authorization', 'bearer ' + token),
      });
      return next.handle(cloneRequest);
    } else {
      return next.handle(request);
    }
  }
}

export const provide_interceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenAddInterceptor,
  multi: true,
};
