import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PersonOne2OneMappingComponent } from './person-one2-one-mapping/person-one2-one-mapping.component';
import { PersonOne2OneserviceService } from './personOne2OneMapping/person-one2-oneservice.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonOne2OneMappingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //PersonOne2OneserviceService is a user defined class 
  //so we need to define in the providers then also framework can inject it to the Component
  providers: [PersonOne2OneserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
