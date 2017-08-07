// ROUTES
import { routes } from './app.router';

// MODULE EXTERNES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BrowserModule }  from '@angular/platform-browser';
import {  HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MODULES GABI
import { EmailModule } from './model/email/email.module';

/** COMPONENTS GABI */
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    routes,
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    EmailModule
  ],
  exports: [JsonpModule],
  
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
