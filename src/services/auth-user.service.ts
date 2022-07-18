import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {PlaquesConsommablesService} from "./plaques-consommables.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http:HttpClient,private pcService:PlaquesConsommablesService,
              private router:Router) { }

  login(resource:any):Observable<any>{
    return this.http.post(environment.host+"/login",resource,{
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    });
  }

  isAuthenticated():boolean{
    return this.getToken()!=null;
  }
  getToken():string{
    // @ts-ignore
    return localStorage.getItem("token");
  }

  public roleMatches(role:string):boolean{
    for (let r of this.getRoles())
      if (role==r)
        return true;
    return false
  }

  getObject():Object|null{
    if(this.isAuthenticated()){
      let token=this.getToken();
      let jwt=token.split('.');
      return JSON.parse(atob(jwt[1]));
    }
    return null;
  }

  getUsernameFromToken():string | null{
    let obj=this.getObject();
    // @ts-ignore
    return obj != null ? obj?.['sub'] : null;

  }

  getRoles():String[]{
    /*if(this.isAuthenticated()){
      let token=this.getToken();
      let jwt=token.split('.');
      let roles=JSON.parse(atob(jwt[1]))?.['roles'];
      return roles;
    }*/
    let obj=this.getObject();
    // @ts-ignore
    return obj != null ? obj?.['roles'] : [];
  }

  getDuration():number{
    let obj=this.getObject();
    /*let date=new Date(0);
    let date1=new Date(0);
    console.log(date1);
    // @ts-ignore
    date.setUTCSeconds(parseInt(obj?.['exp']));*/
    // @ts-ignore
    let duration=(parseInt(obj?.['exp'])-parseInt(obj?.['iat']))*1000;
    console.log(duration);
    return duration;
  }

  logout(){
    localStorage.clear();
    this?.router?.navigateByUrl('authenticate');
  }
}
