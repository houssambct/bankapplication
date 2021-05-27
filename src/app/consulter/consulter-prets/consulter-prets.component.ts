import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-prets',
  templateUrl: './consulter-prets.component.html',
  styleUrls: ['./consulter-prets.component.scss']
})
export class ConsulterPretsComponent implements OnInit {

  constructor() { }
  title1 ='Crédit à la consommation'
  text1='Des solutions de financement (1) adaptées pour vous permettre de concrétiser vos projets.  '
  image1 = 'assets/bank.png'
  title2 ='Prêt immobilier'
  text2='La Banque Houssam propose des solutions de financement (2) aux conditions attractives. Parlez-nous de votre projet, nous vous recontacterons. '
  image2 = 'assets/building.jpg'

  ngOnInit() {
  }

}
