import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-country-name',
  templateUrl: './country-name.component.html',
  styleUrls: ['./country-name.component.css']
})
export class CountryNameComponent implements OnInit {

  public countryNameDescription:any;
  public suggestionArray= [];
  public country = [];

  constructor(public countryService: CountryServiceService) { }

  ngOnInit() { }

  showSuggesstion()
  {
    this.countryService.searchCountryName().subscribe(
      data => {
           this.country = data.RestResponse.result;   
      },
      error =>{
       console.log(error.errorMessage)
      }
    );

    var reformattedArray =  this.country.map(obj =>{ 
      let rObj = {};
      rObj = obj.name;
      return rObj;
   });

   if (this.countryNameDescription.length) {
   
        this.suggestionArray.length = 0;
         if (this.country) {
          let countryName = reformattedArray.filter(x => x.toString().match(new RegExp(`^${this.countryNameDescription}`, 'i')))[0]
          
          this.suggestionArray.push(countryName);
        }
      
      }
  else{this.suggestionArray.length = 0;} 

  console.log(this.suggestionArray);
}

  





}
