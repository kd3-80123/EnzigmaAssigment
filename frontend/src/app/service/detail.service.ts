import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Detail from '../types/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  apiUrl="http://localhost:4550";
  httpClient = inject(HttpClient)
  constructor() { }

  getDetails()
  {
    console.log("in detail services")
    return this.httpClient.get <Detail[]> (this.apiUrl+'/detail')
  }

  addDetail(model:Detail)
  {
    return this.httpClient.post(this.apiUrl+'/detail',model);
  }
}
