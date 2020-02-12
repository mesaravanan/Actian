import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public responseCache = new Map();
  constructor(private http: HttpClient) {}

  getCityLocation(city: string): Observable<any> {
    const url = environment.apis.geoCode + city;
    const locationFromCache = this.responseCache.get(url);
    if (locationFromCache) {
      return of(locationFromCache);
    }
    const response = this.http.get<any>(url);
    response.subscribe(res => this.responseCache.set(url, res));
    return response;
  }
}
