import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ConvertComponent } from './app/convert/convert.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// const ELEMENT_TAG = 'app-convert';

// createApplication().then((appRef) => {
//   const elementCtro = createCustomElement(ConvertComponent, {
//     injector: appRef.injector
//   });
//   if (!customElements.get(ELEMENT_TAG)) {
//     customElements.define(ELEMENT_TAG, elementCtro);
//   }
// });
