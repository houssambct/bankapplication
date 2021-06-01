import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contacter-messages",
  templateUrl: "./contacter-messages.component.html",
  styleUrls: ["./contacter-messages.component.scss"],
})
export class ContacterMessagesComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["reception"];
  dataSource = [
    {
      title: "Réception d`'un virement instantané",
      message:
        "Le 18/05/2021, vous avez reçu un  virement instantané  d'un montant de 29,00 euros en provenance de BAC SA sous la référence 6454545745454.",
    },
    { title: "Nouvelle autorisation de prélèvement", message: "Bonjour MONSIEUR HOUSSAM BOUCETTA, Nous avons reçu une nouvelle autorisation de prélèvement en provenance de Free Telecom sur le compte n° 5465454." },
    { title: "BIENVENUE DANS VOTRE MESSAGERIE", message: "Madame, Monsieur, Nous sommes heureux de vous accueillir dans votre messagerie personnelle sécurisée La Banque Houssam." },
    { title: "Votre commande de carte est expédiée", message: "Chère cliente, cher client, Votre nouvelle carte vient d’être expédiée. Si vous n’êtes pas à l’origine de cette demande, merci de contacter votre Centre Financier." },
  ];
  ngOnInit() {}
}
