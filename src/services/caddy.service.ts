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

  isConsomableInCaddy(consomable:any):boolean{
    if(this.isThereCaddy()){
      let obj=this.getCaddy();
      for(let c of obj.consomables){
        if(c.consomable.listConsomable?.numeroArticle==consomable.listConsomable?.numeroArticle)
          return true;
      };
      /*console.log(obj.consomables)*/
      return false;
    }
    return false;
  }

  removeConsomableFromCaddy(consomable:any){
    if(this.isThereCaddy()){
      let obj=this.getCaddy();
      let removed=false;
      for(let c of obj.consomables){
        /*console.log(obj.consomables);*/

        if(c.consomable.listConsomable?.numeroArticle==consomable.listConsomable?.numeroArticle){
          let index=obj.consomables.indexOf(c);
          obj.consomables.splice(index,1);
          removed=true;
          break;
        }
          /*obj.consomables.remove(c);*/
      }
      if(removed)
        this.putCaddy(obj);
    }
  }
  removeCaddy(){
    localStorage.removeItem('caddy');
  }
}
