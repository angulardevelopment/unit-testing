import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, HttpClientModule],
    providers: [
      AuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should be ', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);


    let response: HttpResponse<any>;

    const next: any = {
      handle: (responseHandle:any) => {
        response = responseHandle;
      }
    };

    const request: HttpRequest<any> = new HttpRequest<any>("GET", `f`);

    interceptor.intercept(request, next);


    // expect(response.headers.get("Authorization")).toEqual(token);
  });

//   it('should test', fakeAsync(() => { // Add FakeAsync
//     const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);

//     let test =  spyOn(interceptor, 'intercept');
//      let response: HttpResponse<any>;

//     const next: any = {
//       handle: (responseHandle:any) => {
//         response = responseHandle;
//       }
//     };

//     const request: HttpRequest<any> = new HttpRequest<any>("GET", `${'API_URL'}`);

//     interceptor.intercept(request, next);
//     tick(); // Add this
//     expect(test).toHaveBeenCalled();
// }))

// it('adding header test', inject([HttpClient], (http: HttpClient) => {
//   http.get('/data').subscribe(
//     response => {
//         expect(response).toBeTruthy();
//     }
// );

//     const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor);

//     let test =  spyOn(interceptor, 'intercept');
//      let response: HttpResponse<any>;

//     const next: any = {
//       handle: (responseHandle:any) => {
//         response = responseHandle;
//       }
//     };

//     const request: HttpRequest<any> = new HttpRequest<any>("GET", `${'API_URL'}`);

//     interceptor.intercept(request, next);


//   // expect(response.status).toEqual('401');
// }));
});
