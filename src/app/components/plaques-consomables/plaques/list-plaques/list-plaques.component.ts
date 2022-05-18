import { Component, OnInit } from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-list-plaques',
  templateUrl: './list-plaques.component.html',
  styleUrls: ['./list-plaques.component.css']
})
export class ListPlaquesComponent implements OnInit {
  listPlaques: any;
  closeResult?: string;
  private myModalRef: any;
  constructor(private pcService:PlaquesConsommablesService,
              private router:Router,
              private modalService:NgbModal) { }

  ngOnInit(): void {
    this.onGetAllListPlaques();
  }

  onGetAllListPlaques(){
    this.pcService.getResources(environment.host+"/listPlaqueses").subscribe(data=>{
      this.listPlaques=data._embedded.listPlaqueses;
      this?.listPlaques.forEach((plaque:any)=>{
        let groupeArticleLink=plaque?._links?.groupeArticle?.href;
        this.pcService.getResources(groupeArticleLink).subscribe(data=>{
          plaque.groupeArticle=data;
        });
      });
      console.log(this.listPlaques);
    });
  }

  onSearch(f: NgForm) {
    this.pcService.getResources(environment.host+"/listPlaqueses/search/byKeyword?kw="+f.value.keyword).subscribe(
      data=>{
        this.listPlaques=data._embedded.listPlaqueses;
        this?.listPlaques.forEach((plaque:any)=>{
          let groupeArticleLink=plaque?._links?.groupeArticle?.href;
          this.pcService.getResources(groupeArticleLink).subscribe(data=>{
            plaque.groupeArticle=data;
          });

        });

      }
    );
  }

  onDeletePlaque(plaque: any) {
    let conf=confirm("êtes vous sure de supprimer ?");
    if(conf){
      this.pcService.deleteResource(plaque._links.self.href).subscribe(data=>{
        this.onGetAllListPlaques();
      });

    }
    //this.pcService.deleteResource(environment.host+"/listPlaqueses/"+plaque._links.self.href);
  }

  onEditPlaque(plaque: any) {
    let url=plaque._links.self.href;
    //console.log(btoa(url));
    this.router.navigateByUrl("edit-list-plaque/"+btoa(url));

  }

  open(content:any) {
    this.setModalRef(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onAddPlaque() {

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

  onClose(event: any) {
    //console.log(event);
    this.onGetAllListPlaques();
    this.modalService.dismissAll();
  }

  setModalRef(modalRef:any){
    this.myModalRef = modalRef;
  }
}
