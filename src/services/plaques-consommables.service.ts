import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaquesConsommablesService {
  constructor(private http:HttpClient) {

  }

  getResources(url:string):Observable<any>{
    return this.http.get<any>(url);
  }
  deleteResource(url:string):Observable<any>{
    return this.http.delete(url);
  }

  updateResource(url:string,resource:any):Observable<any>{
    return this.http.put(url,resource);
  }

  newResource(url:string,resource:any):Observable<any>{
    return this.http.post(url,resource);
  }

  updateResourceByPatch(url:string, resource:any):Observable<any>{
    return this.http.patch(url,resource);
  }
}
