import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private API_URL = 'https://6564dd03ceac41c0761ef296.mockapi.io/'; 
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  public getAll<T>(route: string):Observable<T> {
    
    return this.http.get<T>(this.API_URL + route);
  }

  public get<T>(route:string):Observable<T> {
    return this.http.get<T>(this.API_URL + route);
  }

  public postData<T>(route:string,data:object):Observable<T>{
    return this.http.post<T>(this.API_URL + route,data);
  }

  public delete(route:string){
    return this.http.delete(this.API_URL + route);
  }
}
