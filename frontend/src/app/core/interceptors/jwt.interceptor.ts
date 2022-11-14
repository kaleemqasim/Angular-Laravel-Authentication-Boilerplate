import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
//   import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
  
  @Injectable()
  export class JwtInterceptor implements HttpInterceptor {
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {
      const isLoggedIn = localStorage.getItem('logged_in');
      const token = localStorage.getItem('jwt_token');
      const isApiUrl = request.url.startsWith(environment.apiUrl);
      if (token && isLoggedIn && isApiUrl) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
  
      return next.handle(request);
    }
  }