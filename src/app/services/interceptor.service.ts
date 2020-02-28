import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // here we will write code to modify out going request.
    console.log("Interceptor Called")
    return next.handle(req)
      .pipe(
      tap(
        (event: HttpEvent<any>) => {
          console.log("response returned to interceptor")
          //Here we will write code that we want to execute once response is returned
        }

      ));
  }




}
