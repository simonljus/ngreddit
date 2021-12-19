import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   }
   public get<T>(args: {url:string,params?: Record<string,string | number | Array<string | number>>}): Observable<T>{
    const {url,params} = args;
    return this.http.get<T>(url,{params})
   }
}
