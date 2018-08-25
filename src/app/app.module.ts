import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HelloComponent],
  entryComponents: [HelloComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customHomeCompoenent = createCustomElement(HelloComponent, { injector: this.injector });
    customElements.define('custom-hello', customHomeCompoenent);
  }
}
