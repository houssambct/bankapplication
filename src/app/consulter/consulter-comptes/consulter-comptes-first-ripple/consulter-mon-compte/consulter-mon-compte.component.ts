import { Component, OnInit } from "@angular/core";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

@Component({
  selector: "app-consulter-mon-compte",
  templateUrl: "./consulter-mon-compte.component.html",
  styleUrls: ["./consulter-mon-compte.component.scss"],
})
export class ConsulterMonCompteComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["date", "libelle", "montant"];
  backTo = "/consulter";
  title: string = "Mes comptes";

  dataSource = [
    {
      date: "26/05/2021",
      libelle: "ACHAT CB UBEREATS 25.05.21CARTE NUMERO 543",
      montant: "- 8,25 €",
    },
    {
      date: "26/05/2021",
      libelle: "CARTE 253 25/05/21 A 15H41 RETRAIT DAB LA BANQUE HOUSSAM",
      montant: "- 20,00 €",
    },
    {
      date: "25/05/2021	",
      libelle: "CARTE 586 22/05/21 A 18H56 RETRAIT DAB LA BANQUE HOUSSAM",
      montant: "	- 30,00 €",
    },
    {
      date: "25/05/2021		",
      libelle: "CARTE 363 21/05/21 A 18H25 RETRAIT DAB LA BANQUE HOUSSAM",
      montant: "- 30,00 €",
    },
    {
      date: "19/05/2021	",
      libelle: "VIREMENT DE CPAM VAL D OISE 54511  REFERENCE : 54854841",
      montant: "	+ 20,00 €",
    },
    {
      date: "18/05/2021		",
      libelle: "ACHAT CB CDISCOUNT 17.05.21 CARTE NUMERO 363",
      montant: "- 2,84 €",
    },
    {
      date: "17/05/2021		",
      libelle: "ACHAT CB UBER EATS 16.05.21 EUR 12,58 CARTE NO 5885",
      montant: "- 12,58 €",
    },
    {
      date: "17/05/2021		",
      libelle: "ACHAT CB DOMINO S PIZZA 13.05.21 CARTE NUMERO 575",
      montant: "- 7,99 €",
    },
    {
      date: "14/05/2021		",
      libelle: "ACHAT CB DR KAMOUCHE 12.05.21 CARTE NUMERO 695",
      montant: "- 50,00 €",
    },
    {
      date: "11/05/2021		",
      libelle: "ACHAT CB SNCF 10.05.21 CARTE NUMERO 918",
      montant: "- 22,80 €",
    },
    {
      date: "10/05/2021",
      libelle: "	COMMISSION PAIEMENT PAR CARTE	",
      montant: "- 1,00 €",
    },
    {
      date: "10/05/2021		",
      libelle:
        "ACHAT CB PLAYSTATIONNET 07.05.21 GBP 6,99 CARTE NO 5741 1GBP 1,154506EUR",
      montant: "- 8,07 €",
    },
    {
      date: "07/05/2021		",
      libelle:
        "VIREMENT EMIS A CERGY GRAND CE P CPH IMMOBILIER GESTION L COMPTE csc REFERENCE : vdvs",
      montant: "- 680,00 €",
    },
    {
      date: "06/05/2021		",
      libelle: "VIREMENT POUR BOUCETTA IMAD COMPTE 1757825 REFERENCE : 74752",
      montant: "- 25,00 €",
    },
    {
      date: "05/05/2021		",
      libelle:
        "PRELEVEMENT DE TOTAL DIRECT :  Prelevement Total  Energie ectricite-Reference client ",
      montant: "- 32,00 €",
    },
    {
      date: "05/05/2021		",
      libelle:
        "PRELEVEMENT DE LBP IARD REF : 65783123426 2727 NM19223482 IDENT : 585",
      montant: "- 5,89 €",
    },
    {
      date: "27/04/2021		",
      libelle: "ACHAT CB AUCHAN CERGY 26.04.21 CARTE NUMERO 252",
      montant: "- 3,98 €",
    },
    {
      date: "26/02/2021		",
      libelle: "ACHAT CB SM CASINO 4174 25.02.21 CARTE NUMERO 252",
      montant: "- 26,14 €",
    },
  ];
  print() {
    let doc = new jsPDF();

    autoTable(doc, { html: "#myTable", startY: 30 });

    doc.save("table.pdf");
  }
  ngOnInit() {}
}
