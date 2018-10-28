import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryISOComponent } from './country-iso/country-iso.component';
import { CountryNameComponent } from './country-name/country-name.component';
import { CountryServiceService } from './country-service.service';

import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryISOComponent,
    CountryNameComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CountryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
