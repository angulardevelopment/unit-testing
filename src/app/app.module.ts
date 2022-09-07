import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, Injectable, NgModule } from '@angular/core';
// import * as Sentry from '@sentry/browser'
import * as Sentry from "@sentry/angular";

import { RewriteFrames } from '@sentry/integrations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { UnitComponent } from './unit/unit.component';
import { TestDirective } from './test.directive';
import { BrowserTracing } from '@sentry/tracing';

// Sentry.init({
//   dsn: <your-sentry-dsn>,
//   release: <should be the same with the deployed code>,
//   integrations: [
//     new RewriteFrames(),
//   ],
// })

Sentry.init({
  dsn: "https://ea7c80aa610c4cc5a9133f73decfaa2a@o336580.ingest.sentry.io/6714172",
  integrations: [
    new BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    console.error(error)
  }
}


@NgModule({
  declarations: [
    AppComponent,
    UnitComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useValue : AuthInterceptor,
    multi: true
  },
  { provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }



