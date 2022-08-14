import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UnitTestingComponent } from './unit-testing/unit-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    UnitTestingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
