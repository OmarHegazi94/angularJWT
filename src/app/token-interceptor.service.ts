import { Injectable } from '@angular/core';
// import { Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  // use injector because of a dependency error (get an inctence of register service)
  constructor(
    // private injector: Injector,
    private registerService: RegisterService
    ) { }

  

  intercept(request, next) {

    // let registerService = this.injector.get(RegisterService);

    let interceptedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.registerService.getToken()}`
      }
    })

    return next.handle(interceptedRequest)

  }
}
