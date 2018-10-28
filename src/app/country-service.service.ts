import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  public allCountry: any;
  public baseUrl = 'http://services.groupkt.com/country/get/all';
  constructor(private http: HttpClient) {
   // console.log("service");
   }

  public searchCountryName() : any
  {
   return this.http.get(this.baseUrl);
     
  }

  public searchCountryIso2(iso) :any {
    return this.http.get('http://services.groupkt.com/country/get/iso2code/'+ iso.toUpperCase());
  }

  public searchCountryIso3(iso) :any {
    return this.http.get('http://services.groupkt.com/country/get/iso3code/'+ iso.toUpperCase());
  }

 
}
