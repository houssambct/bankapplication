import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulter-cartes",
  templateUrl: "./consulter-cartes.component.html",
  styleUrls: ["./consulter-cartes.component.scss"],
})
export class ConsulterCartesComponent implements OnInit {
  constructor() {}

  plafondTitles = [
    { title: "- 800 € en France dans les distributeurs de la Banque Houssam" },
    {
      title:
        "- 800 € en France dans les distributeurs des autres établissements",
    },
    { title: "- 800 € à l’étranger dans les distributeurs du réseau VISA " },
  ];
  helpTiles = [
    {
      title:
        "Vous prévoyez de faire une dépense importante : vacances, travaux, déco... ",
    },
    { title: "Pensez à augmenter gratuitement votre plafond de paiement" },
  ];

  ngOnInit() {}
}
