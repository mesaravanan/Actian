import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  cityName = '';
  citySearched = false;
  cityForm = new FormGroup({
    cityName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
      this.noWhitespaceValidator
    ])
  });
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  resetCity() {
    this.citySearched = false;
  }

  searchCity() {
    this.citySearched = true;
    this.cityName = this.cityForm.value.cityName;
  }
}
