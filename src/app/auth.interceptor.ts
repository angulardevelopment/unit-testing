import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  show() {
    return true;
  }

  hide() {
    return false;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      finalize(() => {
        console.log('hide');

      })
    );
  }
}
