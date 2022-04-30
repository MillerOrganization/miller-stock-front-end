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

const routes: Routes = [
  {path:"utilisateurs",component:UtilisateursComponent},
  {path:"edit-utilisateur/:url",component:EditUtilisateurComponent},
  {path:"add-utilisateur",component:AddUtilisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
