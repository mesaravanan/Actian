import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  @Cacheable()
  getCityLocation(city: string) {
    const url = environment.apis.geoCode + city;
    const response = this.http.get<any>(url);
    return response;
  }
}
