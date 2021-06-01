import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souscrire-first-step',
  templateUrl: './souscrire-first-step.component.html',
  styleUrls: ['./souscrire-first-step.component.scss']
})
export class SouscrireFirstStepComponent implements OnInit {

  constructor() { }
  credits: any = [
    {title: 'Crédit personnel', montant: '< 2000 euros'},
    {title: 'Crédit personnel', montant: '> 2000 euros'},
    {title: 'Crédit immobillier', montant: '< 500000 euros'},
    {title: 'Crédit immobillier', montant: '> 500000 euros'},
    {title: 'Crédit automobile', montant: '< 13000 euros'},
    {title: 'Crédit automobile', montant: '> 13000 euros'},

  ];
  ngOnInit() {
  }

}
