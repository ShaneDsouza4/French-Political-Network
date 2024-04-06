import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


export function createTranslateLoader(http:HttpClient){
	//return new TranslateHttpLoader(http, './assets/i18n', '.json')
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideToastr(
    {
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }
  ),provideAnimations(), provideAnimationsAsync(),
    importProvidersFrom(HttpClientModule), // or provideHttpClient() in Angular v15+
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
       }
    }))
  ]
};
    
