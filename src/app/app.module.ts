import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaquesConsomablesComponent } from './components/plaques-consomables/plaques-consomables.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaquesComponent } from './components/plaques-consomables/plaques/plaques.component';
import { UtilisateursComponent } from './components/plaques-consomables/utilisateurs/utilisateurs.component';
import {HttpClientModule} from "@angular/common/http";
import { EditUtilisateurComponent } from './components/plaques-consomables/utilisateurs/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/plaques-consomables/utilisateurs/add-utilisateur/add-utilisateur.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditPlaque2Component } from './components/plaques-consomables/plaques/edit-plaque2/edit-plaque2.component';
import { NavPlaqueComponent } from './components/plaques-consomables/plaques/nav-plaque/nav-plaque.component';
import { NewPlaqueComponent } from './components/plaques-consomables/plaques/new-plaque/new-plaque.component';
import { NewChuteComponent } from './components/plaques-consomables/plaques/new-chute/new-chute.component';
import { ListPlaquesComponent } from './components/plaques-consomables/plaques/list-plaques/list-plaques.component';
import { EditListPlaqueComponent } from './components/plaques-consomables/plaques/list-plaques/edit-list-plaque/edit-list-plaque.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AddListPlaqueComponent } from './components/plaques-consomables/plaques/list-plaques/add-list-plaque/add-list-plaque.component';
import { ConsommerPlaqueComponent } from './components/plaques-consomables/plaques/consommer-plaque/consommer-plaque.component';
import { ConsomablesComponent } from './components/plaques-consomables/consomables/consomables.component';
import { NavConsomableComponent } from './components/plaques-consomables/consomables/nav-consomable/nav-consomable.component';
import { ListConsomablesComponent } from './components/plaques-consomables/consomables/list-consomables/list-consomables.component';
import { AddListConsomableComponent } from './components/plaques-consomables/consomables/list-consomables/add-list-consomable/add-list-consomable.component';
import { EditListConsomableComponent } from './components/plaques-consomables/consomables/list-consomables/edit-list-consomable/edit-list-consomable.component';
import { AddConsomableComponent } from './components/plaques-consomables/consomables/add-consomable/add-consomable.component';
import { EditConsomableComponent } from './components/plaques-consomables/consomables/edit-consomable/edit-consomable.component';
import { UseConsomableComponent } from './components/plaques-consomables/consomables/use-consomable/use-consomable.component';
import { AuthenticateComponent } from './components/plaques-consomables/authenticate/authenticate.component';
import { VentesComponent } from './components/plaques-consomables/ventes/ventes.component';
import { SidebarVenteComponent } from './components/plaques-consomables/ventes/sidebar-vente/sidebar-vente.component';
import { AddCommandeComponent } from './components/plaques-consomables/ventes/add-commande/add-commande.component';
import { CommandesComponent } from './components/plaques-consomables/ventes/commandes/commandes.component';
import { ToutesCommandesComponent } from './components/plaques-consomables/ventes/toutes-commandes/toutes-commandes.component';
import { SidebarUserComponent } from './components/plaques-consomables/sidebar-user/sidebar-user.component';
import { ProfileComponent } from './components/plaques-consomables/profile/profile.component';
import { PlaquesUsedComponent } from './components/plaques-consomables/plaques-used/plaques-used.component';
import { ConsomablesUsedComponent } from './components/plaques-consomables/consomables-used/consomables-used.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaquesConsomablesComponent,
    NavbarComponent,
    PlaquesComponent,
    UtilisateursComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent,
    EditPlaque2Component,
    NavPlaqueComponent,
    NewPlaqueComponent,
    NewChuteComponent,
    ListPlaquesComponent,
    EditListPlaqueComponent,
    AddListPlaqueComponent,
    ConsommerPlaqueComponent,
    ConsomablesComponent,
    NavConsomableComponent,
    ListConsomablesComponent,
    AddListConsomableComponent,
    EditListConsomableComponent,
    AddConsomableComponent,
    EditConsomableComponent,
    UseConsomableComponent,
    AuthenticateComponent,
    VentesComponent,
    SidebarVenteComponent,
    AddCommandeComponent,
    CommandesComponent,
    ToutesCommandesComponent,
    SidebarUserComponent,
    ProfileComponent,
    PlaquesUsedComponent,
    ConsomablesUsedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
