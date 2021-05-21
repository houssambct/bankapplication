import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router
    ) {}

    
  arrayOfPagesTitles = [
    {
      title: "A propos de La Banque Houssam",
      route: "",
    },
    {
      title: "Tarifs 2021",
      route: "",
    },
    {
      title: "Conditions générales",
      route: "",
    },
    {
      title: "Sécurité",
      route: "",
    },
    {
      title: "Alertes fraudes",
      route: "",
    },
    {
      title: "Accessibilité",
      route: "",
    },
    {
      title: "Espace Sourds et Malentendants",
      route: "",
    },
    {
      title: "Mentions légales",
      route: "",
    },
    {
      title: "Fonds de Garantie des dépôts",
      route: "",
    },
    {
      title: "Données personnelles",
      route: "",
    },
    {
      title: "Cookies",
      route: "",
    },
  ];
  ngOnInit() {}
}
