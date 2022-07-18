import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {AuthUserService} from "../../../../../services/auth-user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  closeResult?: string;
  private myModalRef: any;
  commandes:any;
  constructor(private modalService:NgbModal,
              private pcService:PlaquesConsommablesService,
              private authService:AuthUserService,
              private router:Router) { }



  ngOnInit(): void {
    this.onGetCommandes();
  }

  onGetCommandes(){
    this.pcService.getResources(environment.host+"/commandes/search/byCommercial?username="+this.authService.getUsernameFromToken())
      .subscribe(data=>{
      this.commandes=data;
      console.log(this.commandes);
      this.getClientForCommandes(this.commandes);
    });
  }

  getClientForCommandes(commandes:any){
    commandes._embedded.commandes.forEach((commande:any)=>{
      /*console.log(commande._links.client.href);*/
      this.pcService.getResources(commande._links.client.href).subscribe(data=>{
        commande.client=data;
      });
    });
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
  onClose($event: any, modal: any) {
    modal.dismiss('Cross click');

  }

  detail(commande: any) {
    let url=btoa(commande._links.self.href);
    this.router.navigateByUrl("detail-commande/"+url);
  }

  onSearch(f: NgForm) {
    this.pcService.getResources(environment.host+'/commandes/search/byClient?nom='+f.value.nom)
      .subscribe(data=>{
        this.commandes=data;
        this.getClientForCommandes(this.commandes);
      });
  }
}
