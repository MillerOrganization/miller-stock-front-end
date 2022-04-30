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
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PlaquesConsomablesComponent,
    NavbarComponent,
    PlaquesComponent,
    UtilisateursComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
