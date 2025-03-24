import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from '../app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideRouter(routes)  // You don't need 'providers' here
  ]
};
