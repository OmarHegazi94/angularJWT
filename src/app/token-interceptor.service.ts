import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { RegisterService } from './register.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  // use injector because of a dependency error (get an inctence of register service)
  constructor(
    private injector: Injector,
    // private registerService: RegisterService
    ) { }

  

  intercept(request, next) {

    let registerService = this.injector.get(RegisterService);
    // let getToken = this.registerService.getToken();

    // if(getToken !== null ) {

      let interceptedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${registerService.getToken()}`
        }
      })
      return next.handle(interceptedRequest)
      
    // }


  }
}
