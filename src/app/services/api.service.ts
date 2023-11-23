import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAllCountries() {
    return this.http.get('https://restcountries.com/v2/all');
  }
  
  getACountry(pais:string)
  {
    return this.http.get('https://restcountries.com/v3.1/name/'+pais);
  }
}
