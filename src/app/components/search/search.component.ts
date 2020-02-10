import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html"
})
export class SearchComponent {
  cityName = "";
  citySearched = false;
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
  cityForm = new FormGroup({
    cityName: new FormControl("", [
      Validators.required,
      this.noWhitespaceValidator
    ])
  });

  resetCity() {
    this.citySearched = false;
  }

  searchCity() {
    this.citySearched = true;
    this.cityName = this.cityForm.value.cityName;
  }
}
