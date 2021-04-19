import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/first/first.components';
import { SecondComponent } from './Components/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    /** 
     * here we can import
     * components
     * pipes
     * directives
    */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /**
     * external modules
     */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
