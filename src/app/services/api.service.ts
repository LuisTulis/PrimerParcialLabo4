import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private data  = "https://restcountries.com/v3.1/all"
  constructor(private httpClient : HttpClient) { }
  
  getData() : Observable<any>
  {
    return this.httpClient.get<any>(this.data);
  }
}
