import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertComponent } from './convert/convert.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ConvertComponent]
})

// install npm i @angular/elements
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ConvertComponent, {injector});
    customElements.define('app-convert', el);
  }
}
