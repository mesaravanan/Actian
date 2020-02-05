import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  locationFound = false;
  citySearched = false;
  isError = false;
  geoCodeResponse: any;
  cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  resetCity() {
    this.locationFound = false;
    this.citySearched = false;
    this.isError = false;
  }

  searchCity() {
    this.isError = false;
    //this.spinner.show();
    const city = this.cityForm.value.cityName;
    
  }
}
