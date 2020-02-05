import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() cityName;
  locationFound = false;
  citySearched = false;
  isError = false;
  geoCodeResponse: any;

  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    let city = this.cityName;
    if(this.cityName !== ''){
      this.isError = false;
      this.spinner.show();
      this.apiService.getCityLocation(this.cityName).subscribe((response: any) => {
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

}
