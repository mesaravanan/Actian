import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locationFound: boolean = false;
  citySearched: boolean = false;
  isError: boolean = false;
  geoCodeResponse: any;
  cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  resetCity() {
    this.locationFound = false;
    this.citySearched = false;
    this.isError = false;
  }

  searchCity() {
    this.isError = false;
    this.spinner.show();
    let city = this.cityForm.value.cityName;
    this.apiService.getCityLocation(city).subscribe((response: any) => {
      this.spinner.hide();
      this.citySearched = true;
      if (response.results.length > 0) {
        this.locationFound = true;
        this.geoCodeResponse = response.results[0];
      } else {
        this.locationFound = false;
      }
    }, (error) => {
      this.spinner.hide();
      this.citySearched = true;
      this.isError = true;
    });
  }
}
