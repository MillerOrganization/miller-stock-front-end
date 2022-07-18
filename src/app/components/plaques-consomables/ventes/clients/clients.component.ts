import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {PlaquesConsommablesService} from "../../../../../services/plaques-consommables.service";
import {environment} from "../../../../../environments/environment";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  closeResult?: string;
  private myModalRef: any;
  @Output() newItemEvent=new EventEmitter();
  clientUrl: string='';
  constructor(private pcService:PlaquesConsommablesService,
              private modalService:NgbModal,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetClients();
  }

  onGetClients(){
    this.pcService.getResources(environment.host+'/clients').subscribe(data=>{
      this.clients=data;
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
    this.onGetClients();
    modal.dismiss('Cross click');
  }

  delete(client: any) {
    let conf=confirm('etes vous sur de supprimer ce client');
    if(conf)
    this.pcService.deleteResource(client._links.self.href).subscribe(data=>{
      this.onGetClients();
    });
  }

  onSearch(f: NgForm) {
    this.pcService.getResources(environment.host+'/clients/search/byNom?nom='+f.value.nom).subscribe(data=>{
      this.clients=data;
    });
  }

  commandes(client: any) {
    console.log()
    /*this.router.navigateByUrl('commandes-client/'+btoa(client._links.self.href));*/

    this.newItemEvent.emit({client:btoa(client._links.self.href),comp:"client-commandes"});
  }

  openUpdate(mymodalUpdate: TemplateRef<any>, client: any) {
    this.open(mymodalUpdate);

    this.clientUrl=btoa(client._links.self.href);
  }
}
