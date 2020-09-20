import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
url="https://coronavirus-19-api.herokuapp.com/countries"

  constructor(private http:HttpClient) { }
  
  getData()
  {
  return this.http.get(this.url);
  }
}
