import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsulterComponent } from './consulter/consulter.component';
import { ContacterComponent } from './contacter/contacter.component';
import { GererComponent } from './gerer/gerer.component';
import { SouscrireComponent } from './souscrire/souscrire.component';


const routes: Routes = [{
  path: 'consulter',
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
