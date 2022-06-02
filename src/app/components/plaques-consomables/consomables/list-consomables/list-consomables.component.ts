import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-consomables',
  templateUrl: './list-consomables.component.html',
  styleUrls: ['./list-consomables.component.css']
})
export class ListConsomablesComponent implements OnInit {
  listConsomables: any;
  closeResult?: string;
  private myModalRef: any;
  consomable:any;

  constructor(private pcService:PlaquesConsommablesService,
              private modalService:NgbModal) { }

  ngOnInit(): void {
    this.onGetAllConsomables();
  }

  getCategorieForEachConsomable(consomables:any){
    consomables._embedded.listConsomables.forEach((listConsomable:any)=>{
      this.pcService.getResources(listConsomable._links.categorie.href).subscribe(cat=>{
        console.log(cat);
        listConsomable.categorie=cat;
      });
    });
  }

  onGetAllConsomables(){
    this.pcService.getResources(environment.host+"/listConsomables").subscribe(data=>{
      this.listConsomables=data;
      this.getCategorieForEachConsomable(this.listConsomables);
    });
  }

  onDeleteConsomable(consomable: any) {
    let conf=confirm("êtes vous sure de supprimer ?");
    if(conf){
      this.pcService.deleteResource(consomable._links.self.href).subscribe(data=>{
        this.onGetAllConsomables();
      });

    }
  }

  onEditConsomable(consomable: any) {

  }

  onSearch(f: NgForm) {
    this.pcService.getResources(environment.host+"/listConsomables/search/byKeyword?kw="+
    f.value.keyword).subscribe(data=>{
      this.listConsomables=data;
      this.getCategorieForEachConsomable(this.listConsomables);
    });
  }


  onClose($event: any, modal: any) {
    this.onGetAllConsomables();
    modal.dismiss('Cross click');

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


  setModalRef(modalRef:any){
    this.myModalRef = modalRef;
  }

  open(content:any) {
    this.setModalRef(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openUpdate(content:any,consomable:any) {
    this.pcService.getResources(consomable._links.self.href).subscribe(data=>{
      this.consomable=data;
      this.setModalRef(content);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason:any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });
  }
}
