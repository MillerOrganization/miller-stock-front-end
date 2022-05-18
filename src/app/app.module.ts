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
    ConsommerPlaqueComponent
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
