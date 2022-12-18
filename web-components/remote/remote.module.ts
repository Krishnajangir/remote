import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './remote-routing.module';
import { RemoteComponent } from './remote.component';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from 'src/app/remote/components/home/home.component';

@NgModule({
  declarations: [RemoteComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, routing],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  exports: [RemoteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class RemoteModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const e1 = createCustomElement(RemoteComponent, {
      injector: this.injector,
    });
    customElements.define('rm-wc', e1);
  }
}
