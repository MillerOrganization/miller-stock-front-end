import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaquesConsommablesService {
  headers:HttpHeaders=new HttpHeaders();
  constructor(private http:HttpClient) {

  }
  initHeader(){
    let userToken=localStorage.getItem('token');
    if(userToken!=null)
      this.headers =this.headers.set('Authorization', 'Bearer ' + userToken);

  }

  getResources(url:string):Observable<any>{
    this.initHeader();
    console.log(this.headers);
    return this.http.get<any>(url,{headers:this.headers});
  }
  deleteResource(url:string):Observable<any>{
    this.initHeader();
    return this.http.delete(url,{headers:this.headers});
  }

  updateResource(url:string,resource:any):Observable<any>{
    this.initHeader();
    return this.http.put(url,resource,{headers:this.headers});
  }

  newResource(url:string,resource:any):Observable<any>{
    this.initHeader();
    return this.http.post(url,resource,{headers:this.headers});
  }

  updateResourceByPatch(url:string, resource:any):Observable<any>{
    this.initHeader();
    return this.http.patch(url,resource,{headers:this.headers});
  }
}
