import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getCountries() {
    let url = `https://restcountries.eu/rest/v2/all`;
    return this.http
    .get(url)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getCountry(name: string) {
    let url = `https://restcountries.eu/rest/v2/name/`; 
      return this.http
            .get(url + name)
            .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getCountryByRegion(region) {
    let url = `https://restcountries.eu/rest/v2/region/`; 
      return this.http
            .get(url + region)
            .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
