import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public locResponseCache = new Map();
  constructor(private http: HttpClient) {}

  getCityLocation(city: string): Observable<any> {
    const url = environment.apis.geoCode + city;
    const locationFromCache = this.locResponseCache.get(url);
    if (locationFromCache) {
      return of(locationFromCache);
    }
    return this.http
      .get<any>(url)
      .pipe(tap(response => this.locResponseCache.set(url, response)));
  }
}
