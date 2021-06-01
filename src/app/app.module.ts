import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SubHeaderComponent } from "./sub-header/sub-header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDividerModule } from "@angular/material";
import { ConsulterComponent } from "./consulter/consulter.component";
import { GererComponent } from "./gerer/gerer.component";
import { ContacterComponent } from "./contacter/contacter.component";
import { SouscrireComponent } from "./souscrire/souscrire.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { MatTabsModule } from "@angular/material/tabs";
import { ConsulterComptesComponent } from "./consulter/consulter-comptes/consulter-comptes.component";
import { ConsulterEpargneComponent } from "./consulter/consulter-epargne/consulter-epargne.component";
import { ConsulterPretsComponent } from "./consulter/consulter-prets/consulter-prets.component";
import { ConsulterAssurancesComponent } from "./consulter/consulter-assurances/consulter-assurances.component";
import { MatRippleModule } from "@angular/material/core";
import { ConsulterComptesFirstRippleComponent } from "./consulter/consulter-comptes/consulter-comptes-first-ripple/consulter-comptes-first-ripple.component";
import { ConsulterComptesSecondRippleComponent } from "./consulter/consulter-comptes/consulter-comptes-second-ripple/consulter-comptes-second-ripple.component";
import { FooterComponent } from "./footer/footer.component";
import { InformationsComponent } from "./informations/informations.component";
import { BackButtonComponent } from "./back-button/back-button.component";
import { ConsulterMonCompteComponent } from "./consulter/consulter-comptes/consulter-comptes-first-ripple/consulter-mon-compte/consulter-mon-compte.component";
import { MatTableModule } from "@angular/material/table";
import { ConsulterPretRippleComponent } from "./consulter/consulter-prets/consulter-pret-ripple/consulter-pret-ripple.component";
import { ContacterHomeComponent } from "./contacter/contacter-home/contacter-home.component";
import { ContacterPhoneComponent } from "./contacter/contacter-phone/contacter-phone.component";
import { ContacterMessagesComponent } from "./contacter/contacter-messages/contacter-messages.component";
import { ContacterDateComponent } from "./contacter/contacter-date/contacter-date.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatBadgeModule } from "@angular/material/badge";
import { ToastrModule } from "ngx-toastr";
import { ChartsModule, ThemeService } from "ng2-charts";
import { MatStepperModule } from "@angular/material/stepper";
import { MatButtonModule, MatAutocompleteModule } from "@angular/material";

import { MatNativeDateModule } from "@angular/material/core";
import { ConsulterCartesComponent } from "./consulter/consulter-cartes/consulter-cartes.component";
import { ChatScatterComponent } from "./consulter/consulter-cartes/chat-scatter/chat-scatter.component";
import { ChatPolarComponent } from "./consulter/consulter-cartes/chat-polar/chat-polar.component";
import { ChatRadarComponent } from "./consulter/consulter-cartes/chat-radar/chat-radar.component";
import { ChatDonnutComponent } from "./consulter/consulter-cartes/chat-donnut/chat-donnut.component";
import { ChatBarComponent } from "./consulter/consulter-cartes/chat-bar/chat-bar.component";
import { ChatPieComponent } from "./consulter/consulter-cartes/chat-pie/chat-pie.component";
import { SouscrireFirstStepComponent } from "./souscrire/souscrire-first-step/souscrire-first-step.component";
import { SouscrireSecondStepComponent } from "./souscrire/souscrire-second-step/souscrire-second-step.component";
import { SouscrireFinalStepComponent } from "./souscrire/souscrire-final-step/souscrire-final-step.component";
import { MatSelectModule } from "@angular/material/select";
import { ProfilComponent } from './profil/profil.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    ConsulterComponent,
    GererComponent,
    ContacterComponent,
    SouscrireComponent,
    HomepageComponent,
    ConsulterComptesComponent,
    ConsulterEpargneComponent,
    ConsulterPretsComponent,
    ConsulterAssurancesComponent,
    ConsulterComptesFirstRippleComponent,
    ConsulterComptesSecondRippleComponent,
    FooterComponent,
    InformationsComponent,
    BackButtonComponent,
    ConsulterMonCompteComponent,
    ConsulterPretRippleComponent,
    ContacterHomeComponent,
    ContacterPhoneComponent,
    ContacterMessagesComponent,
    ContacterDateComponent,
    ConsulterCartesComponent,
    ChatScatterComponent,
    ChatPolarComponent,
    ChatRadarComponent,
    ChatDonnutComponent,
    ChatBarComponent,
    ChatPieComponent,
    SouscrireFirstStepComponent,
    SouscrireSecondStepComponent,
    SouscrireFinalStepComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatTabsModule,
    MatRippleModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    MatBadgeModule,
    ToastrModule.forRoot(),
    ChartsModule,
    MatStepperModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
