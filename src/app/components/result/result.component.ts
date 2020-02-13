import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApiService } from '../../service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input() cityName: string;
  locationFound = false;
  citySearched = false;
  isError = false;
  geoCodeResponse: any;
  serviceResponse: Subscription;

  constructor(
    private apiService: ApiService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    if (this.cityName !== '') {
      this.isError = false;
      this.ngxLoader.start();
      this.serviceResponse = this.apiService
        .getCityLocation(this.cityName)
        .subscribe(
          (response: any) => {
            this.ngxLoader.stop();
            this.citySearched = true;
            if (response.results.length > 0) {
              this.locationFound = true;
              this.geoCodeResponse = response.results[0];
            } else {
              this.locationFound = false;
            }
          },
          error => {
            this.ngxLoader.stop();
            this.citySearched = true;
            this.isError = true;
          }
        );
    }
  }

  ngOnDestroy() {
    this.serviceResponse.unsubscribe();
  }
}
