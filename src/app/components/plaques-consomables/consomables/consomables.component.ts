import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../services/plaques-consommables.service";
import {environment} from "../../../../environments/environment";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-consomables',
  templateUrl: './consomables.component.html',
  styleUrls: ['./consomables.component.css']
})
export class ConsomablesComponent implements OnInit {
  consomables: any;
  closeResult?: string;
  private myModalRef: any;
  consomableToUpdate: any;
  constructor(private pcService:PlaquesConsommablesService,
              private modalService:NgbModal,
              private router:Router) { }

  ngOnInit(): void {
    this.getConsomables();
  }

  open(content:any) {
    this.setModalRef(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  setModalRef(modalRef:any){
    this.myModalRef = modalRef;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getConsomables(){
    this.pcService.getResources(environment.host+"/consomables").subscribe(data=>{
      this.consomables=data;

      this.getListConsomableForEachConsomable(this.consomables._embedded.consomables);
      console.log(data);
    });
  }
  getListConsomableForEachConsomable(consomables:any[]){
    consomables.forEach((consomable:any)=>{
      this.getListConsomableForConsomable(consomable);
    });
  }

  getListConsomableForConsomable(consomable:any){
    this.pcService.getResources(consomable._links.listConsomable.href).subscribe(data=>{
      console.log(data);
      consomable.listConsomable=data;
      this.getCategorieForListConsomable(consomable.listConsomable);
    });
  }

  getCategorieForListConsomable(listConsomable:any){
    this.pcService.getResources(listConsomable._links.categorie.href).subscribe(cat=>{
      console.log(cat);
      listConsomable.categorie=cat;
    });
  }


  onDeleteConsomable(consomable: any) {
    let conf=confirm('etes vous sure de suprimer ?');
    if(conf){
      this.pcService.deleteResource(consomable._links.self.href).subscribe(data=>{
        this.getConsomables();
      });
    }
  }

  onUpdateConsomable(consomable: any) {

  }

  onUseConsomable(consomable: any) {
    let url=consomable._links.self.href;
    this.router.navigateByUrl('use-consomable/'+btoa(url));

  }

  openUpdate(content:any,consomable:any) {
    this.pcService.getResources(consomable._links.self.href).subscribe(data=>{
      this.consomableToUpdate=data;
      console.log(this.consomableToUpdate);
      this.setModalRef(content);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason:any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });
  }

  onClose($event: any, modal: any) {
    this.getConsomables();
    modal.dismiss('Cross click');

  }

  onSearch(value: any) {
    console.log(value.longueur+" "+value.largeur);
    this.pcService.getResources(environment.host+"/consomables" +
      "/search/byKeyword?keyword="+value).subscribe(data=>{
      this.consomables=data;
      this.getListConsomableForEachConsomable(this.consomables._embedded.consomables);
    });
  }

  intercept(event: any, mymodalAdd: any) {
    if(event=='open'){
      this.setModalRef(mymodalAdd);
      this.modalService.open(mymodalAdd, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason:any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    else this.onSearch(event);
  }
}
