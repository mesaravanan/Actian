import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cityName = '';
  citySearched = false;
  cityForm = new FormGroup({
    cityName: new FormControl('', Validators.required),
  });

  resetCity() {
    this.citySearched = false;

  }

  searchCity() {
    this.citySearched = true;
    this.cityName = this.cityForm.value.cityName;
  }

}
