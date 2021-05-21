import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-informations",
  templateUrl: "./informations.component.html",
  styleUrls: ["./informations.component.scss"],
})
export class InformationsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  message: string;
  title: string;
  displayTitle: string;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("ddddddd", params);
      switch (params.name) {
        case "A-propos-de-La-Banque-Houssam": {
          this.displayTitle = this.title;
          this.message =
            "Filiale du Groupe La Poste, La Banque Postale est une banque unique et singulière, qui privilégie la proximité, la confiance et la modernité au service de tous. La Banque Postale, dont les activités couvrent la banque de détail, l’assurance et la gestion d’actifs, a vocation à répondre aux besoins de tous. Jeunes, familles, actifs, retraités, collectivités locales, associations, professionnels et entreprises : elle propose à chacun une gamme de produits adaptés à ses besoins.";
          break;
        }
        case "Tarifs-2021": {
          this.displayTitle = this.title;
          this.message =
            "(1) Conditions et Tarifs en vigueurs susceptibles d'évolution. L’ouverture du compte, la souscription d'une Formule de Compte et la délivrance des moyens de paiement sont soumises à l'acceptation du dossier par La Banque Postale ainsi qu'à l'autorisation du représentant légal pour les clients mineurs. (2) Gratuit pour toute souscription d'une Formule de Compte par un client âgé entre 16 et 17 ans avec la Carte Visa Classic ou Visa Premier. La Formule de Compte souscrite avec la Carte Realys est au même tarif que la Carte Visa Classic. (3) Réduction de 50 % pour toute souscription d'une Formule de Compte par un client âgé entre 18 et 25 ans avec la Carte Visa Classic ou Visa Premier. La Formule de Compte souscrite avec la Carte Realys est au même tarif que la Carte Visa Classic. (4) Uniquement pour les clients âgés entre 18 et 25 ans. Sous réserve d’acceptation du dossier par La Banque Postale. Découvert à régulariser sous 30 jours, agios selon taux en vigueur.";
          break;
        }

        default: {
          this.displayTitle = '';
          this.message=''
          break;
        }
      }
    });
  }
}
