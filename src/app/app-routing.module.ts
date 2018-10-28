import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { CountryNameComponent } from './country-name/country-name.component';
import { CountryISOComponent } from './country-iso/country-iso.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'countryName', component: CountryNameComponent },
  { path: 'countryIso',  component: CountryISOComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
