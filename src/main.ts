import { bootstrapApplication } from '@angular/platform-browser';
import {CustomButtonComponent} from './app/components/custom-button/custom-button.component';
import {inject, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

(async () => {
  await bootstrapApplication(CustomButtonComponent); // Optional bootstrap
  const injector = inject(Injector);
  const el = createCustomElement(CustomButtonComponent, { injector });
  customElements.define('wc-custom-button', el);
})();
