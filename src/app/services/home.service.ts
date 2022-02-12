import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) {}
  getHome(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}general-data`)
  }

  getSlider(): Observable<any>  {
    return this._HttpClient.get(`https://digitalbondmeanmobileapp.digitalbondmena.com/api` , {
      headers:
      new HttpHeaders()
      .set(
        'content-type', 'application/json',
      )
      .set(
        'Access-Control-Allow-Origin',"*"
      ).set(
        "Access-Control-Allow-Methods","*",
      )
    })
  }
  getAboutUs(): Observable<any>  {
    return this._HttpClient.get(`https://digitalbondmeanmobileapp.digitalbondmena.com/api`)
  }
  getSkills(): Observable<any>  {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts`)
  }
  getTeam(): Observable<any>  {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/posts`)
  }


}
