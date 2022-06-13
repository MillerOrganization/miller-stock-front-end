import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  constructor() { }

  isThereCaddy():boolean{
    return localStorage.getItem('caddy')!=null;
  }

  putCaddy(obj:Object){
    localStorage.setItem('caddy',btoa(JSON.stringify(obj)));
  }
  getCaddy(){

    if(this.isThereCaddy()){
      let caddy=localStorage.getItem('caddy');
      // @ts-ignore
      return JSON.parse(atob(caddy));
    }
  }
}
