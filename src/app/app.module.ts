import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material';
import { ConsulterComponent } from './consulter/consulter.component';
import { GererComponent } from './gerer/gerer.component';
import { ContacterComponent } from './contacter/contacter.component';
import { SouscrireComponent } from './souscrire/souscrire.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ConsulterComptesComponent } from './consulter/consulter-comptes/consulter-comptes.component';
import { ConsulterEpargneComponent } from './consulter/consulter-epargne/consulter-epargne.component';
import { ConsulterPretsComponent } from './consulter/consulter-prets/consulter-prets.component';
import { ConsulterAssurancesComponent } from './consulter/consulter-assurances/consulter-assurances.component';
import {MatRippleModule} from '@angular/material/core';
import { ConsulterComptesFirstRippleComponent } from './consulter/consulter-comptes/consulter-comptes-first-ripple/consulter-comptes-first-ripple.component';
import { ConsulterComptesSecondRippleComponent } from './consulter/consulter-comptes/consulter-comptes-second-ripple/consulter-comptes-second-ripple.component';
import { FooterComponent } from './footer/footer.component';
import { InformationsComponent } from './informations/informations.component';
import { BackButtonComponent } from './back-button/back-button.component';

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
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatTabsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
