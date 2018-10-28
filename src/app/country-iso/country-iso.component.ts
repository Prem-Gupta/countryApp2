import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceService } from '../country-service.service';


@Component({
  selector: 'app-country-iso',
  templateUrl: './country-iso.component.html',
  styleUrls: ['./country-iso.component.css']
})
export class CountryISOComponent implements OnInit {


  public countryDescription:any;
  public countryIso :any;
  public notFound : string;
  

  constructor(public countryService: CountryServiceService) { }

  ngOnInit() {}

  onEnter(countryDescription) {
    if(this.countryDescription.length == 3){
     
      this.countryService.searchCountryIso3(this.countryDescription).subscribe(
        data => {
          if(data.RestResponse.result) {
            this.countryIso = data.RestResponse.result;
            this.notFound = '';
          } else {
            this.notFound = data.RestResponse.messages[0] || 'Country not found!';
            this.countryIso = [];
          }
        },
        error => {
          console.error();   
        })
    }

    else if(this.countryDescription.length == 2)
    {
      this.countryService.searchCountryIso2(this.countryDescription).subscribe(
        data => {
          if(data.RestResponse.result) {
            this.countryIso = data.RestResponse.result;
            this.notFound = '';
          } else {
            this.notFound = data.RestResponse.messages[0] || 'Country not found!';
            this.countryIso = [];
          }
        },
        error => {
          console.error();
        })
    }
    else {
         this.countryIso=[];
         this.notFound = "Country not found!";
    }
  }

}
