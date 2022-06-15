import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UtilisateursComponent} from "./components/plaques-consomables/utilisateurs/utilisateurs.component";
import {
  EditUtilisateurComponent
} from "./components/plaques-consomables/utilisateurs/edit-utilisateur/edit-utilisateur.component";
import {
  AddUtilisateurComponent
} from "./components/plaques-consomables/utilisateurs/add-utilisateur/add-utilisateur.component";
import {PlaquesComponent} from "./components/plaques-consomables/plaques/plaques.component";
import {EditPlaque2Component} from "./components/plaques-consomables/plaques/edit-plaque2/edit-plaque2.component";
import {NewChuteComponent} from "./components/plaques-consomables/plaques/new-chute/new-chute.component";
import {NewPlaqueComponent} from "./components/plaques-consomables/plaques/new-plaque/new-plaque.component";
import {ListPlaquesComponent} from "./components/plaques-consomables/plaques/list-plaques/list-plaques.component";
import {
  EditListPlaqueComponent
} from "./components/plaques-consomables/plaques/list-plaques/edit-list-plaque/edit-list-plaque.component";
import {
  ConsommerPlaqueComponent
} from "./components/plaques-consomables/plaques/consommer-plaque/consommer-plaque.component";
import {ConsomablesComponent} from "./components/plaques-consomables/consomables/consomables.component";
import {
  ListConsomablesComponent
} from "./components/plaques-consomables/consomables/list-consomables/list-consomables.component";
import {
  UseConsomableComponent
} from "./components/plaques-consomables/consomables/use-consomable/use-consomable.component";
import {AuthenticateComponent} from "./components/plaques-consomables/authenticate/authenticate.component";
import {PlaquesConsomablesComponent} from "./components/plaques-consomables/plaques-consomables.component";
import {VentesComponent} from "./components/plaques-consomables/ventes/ventes.component";
import {
  DetailCommandeComponent
} from "./components/plaques-consomables/ventes/detail-commande/detail-commande.component";


const routes: Routes = [
  {path:"utilisateurs",component:UtilisateursComponent},
  {path:"plaques",component:PlaquesComponent},
  {path:"edit-utilisateur/:url",component:EditUtilisateurComponent},
  {path:"add-utilisateur",component:AddUtilisateurComponent},
  {path:"edit-plaque/:id",component:EditPlaque2Component},
  {path:"new-chute",component:NewChuteComponent},
  {path:"new-plaque",component:NewPlaqueComponent},
  {path:"list-plaques",component:ListPlaquesComponent},
  {path:"edit-list-plaque/:url",component:EditListPlaqueComponent},
  {path:"consommer-plaque/:idPlaque/:idUser",component:ConsommerPlaqueComponent},
  {path:"consomables",component:ConsomablesComponent},
  {path:"list-consomable",component:ListConsomablesComponent},
  {path:"use-consomable/:url",component:UseConsomableComponent},
  {path:"authenticate",component:AuthenticateComponent},
  {path:"",component:PlaquesConsomablesComponent},
  {path:"ventes",component:VentesComponent},
  {path:"detail-commande/:url",component:DetailCommandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
