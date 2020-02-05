import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cityName = '';
  locationFound = false;
  citySearched = false;
  isError = false;
  //geoCodeResponse: any;
  cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
  });

  resetCity() {
    this.locationFound = false;
    this.citySearched = false;
    this.isError = false;
  }

  searchCity() {
    this.cityName = this.cityForm.value.cityName;
  }

}
