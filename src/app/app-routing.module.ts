import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterMonCompteComponent } from './consulter/consulter-comptes/consulter-comptes-first-ripple/consulter-mon-compte/consulter-mon-compte.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { ContacterComponent } from './contacter/contacter.component';
import { GererComponent } from './gerer/gerer.component';
import { InformationsComponent } from './informations/informations.component';
import { ProfilComponent } from './profil/profil.component';
import { SouscrireComponent } from './souscrire/souscrire.component';


const routes: Routes = [{
  path: 'consulter',
  component: ConsulterComponent  
},
{
  path: '',
  component: ConsulterComponent  
},
{
  path: 'gerer',
  component: GererComponent  
},{
  path: 'contacter',
  component: ContacterComponent  
},{
  path: 'souscrire',
  component: SouscrireComponent  
},{
  path: 'informations/:name',
  component: InformationsComponent  
},{
  path: 'consulter/consultermoncompte',
  component: ConsulterMonCompteComponent  
},{
  path: 'profil',
  component: ProfilComponent  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
