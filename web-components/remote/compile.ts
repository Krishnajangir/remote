import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RemoteModule } from './remote.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(RemoteModule, {
    ngZone: (window as any).ngZone,
  })
  .catch((err) => console.log(err));
