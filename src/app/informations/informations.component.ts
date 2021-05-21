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
      switch (params.name) {
        case "A-propos-de-La-Banque-Houssam": {
          this.displayTitle = params.name;
          this.message =
            "Filiale du Groupe La Poste, La Banque HOUSSAM est une banque unique et singulière, qui privilégie la proximité, la confiance et la modernité au service de tous. La Banque HOUSSAM, dont les activités couvrent la banque de détail, l’assurance et la gestion d’actifs, a vocation à répondre aux besoins de tous. Jeunes, familles, actifs, retraités, collectivités locales, associations, professionnels et entreprises : elle propose à chacun une gamme de produits adaptés à ses besoins.";
          break;
        }
        case "Tarifs-2021": {
          this.displayTitle = params.name;
          this.message =
            "(1) Conditions et Tarifs en vigueurs susceptibles d'évolution. L’ouverture du compte, la souscription d'une Formule de Compte et la délivrance des moyens de paiement sont soumises à l'acceptation du dossier par La Banque HOUSSAM ainsi qu'à l'autorisation du représentant légal pour les clients mineurs. (2) Gratuit pour toute souscription d'une Formule de Compte par un client âgé entre 16 et 17 ans avec la Carte Visa Classic ou Visa Premier. La Formule de Compte souscrite avec la Carte Realys est au même tarif que la Carte Visa Classic. (3) Réduction de 50 % pour toute souscription d'une Formule de Compte par un client âgé entre 18 et 25 ans avec la Carte Visa Classic ou Visa Premier. La Formule de Compte souscrite avec la Carte Realys est au même tarif que la Carte Visa Classic. (4) Uniquement pour les clients âgés entre 18 et 25 ans. Sous réserve d’acceptation du dossier par La Banque HOUSSAM. Découvert à régulariser sous 30 jours, agios selon taux en vigueur.";
          break;
        }
        case "Conditions-générales": {
          this.displayTitle = params.name;
          this.message =
            "Les présentes Conditions Générales de La Banque HOUSSAM (ci-après désignée « la Banque ») ont pour objet de préciser les modalités d’accès, les moyens mis à disposition et les règles de fonctionnement des services de Banque à distance (ci-après dénommés « services »). Elles constituent une convention additionnelle : - à la convention de Compte Courant (CCP) (Particuliers), - aux Conditions Générales de comptes et produits d’épargne : Livret A, Livret B, Compte d’Épargne Logement, Plan d’Épargne Logement, Plan d’Épargne Populaire, Livret d’Épargne Populaire, Livret Développement Durable et Solidaire, Livret Jeune, Comptes sur Livret, - et à la convention de compte-titres (Particuliers). Le client reconnaît avoir pris connaissance et accepte sans réserve les dispositions stipulées dans lesdites conventions ainsi que celles des contrats d’assurance-vie, de retraite et de prévoyance pour lesquelles les services de banque à distance s’appliquent. Les services se composent, d’une part, des services de Comptes à distance dont tout client de la Banque, bénéficie automatiquement lors de toute ouverture de compte (sauf désactivation, suspension ou résiliation desdits services dans les conditions définies aux présentes), et d’autre part, des services optionnels auxquels tout client de la Banque doit adhérer pour en bénéficier. Les services de Comptes à distance sont les suivants : - les services de consultation de Comptes à distance (CCP, comptes d’épargne, contrats d’assurance-vie, retraite et de prévoyance, comptes-titres). - les services de gestion de Comptes à distance (CCP, comptes et produits d’épargne, comptes-titres). Les services optionnels, qui font l’objet d’une tarification distincte conformément aux Conditions Tarifaires, sont les suivants : - le service d’Alertes Multimédia, - le service de dématérialisation des documents liés au fonctionnement de l’ensemble des comptes du client (incluant le service de relevés de compte électroniques « e-relevés »). Par ailleurs, le client qui souhaite un mode de relation à distance avec la Banque peut adhérer gratuitement à l’agence à distance dénommée « La Banque HOUSSAM Chez Soi » dans les conditions définies au chapitre VIII. Ces services sont ouverts pour une durée indéterminée et ne sont proposés qu’aux clients détenteurs d’un ou plusieurs CCP individuel(s), joint(s) ou indivis, de compte(s) ou produit(s) d’épargne, et/ou de compte(s)-titres (compte-titres « ordinaire » et/ou Plan d’Épargne en Actions et/ou Plan d’Epargne en Actions PME-ETI) ouvert(s) dans les livres de la Banque. Les comptes indivis ne sont que consultables par le client via les services de Comptes à distance. Toutefois, ces comptes indivis peuvent être rendus débitables et créditables sur demande expresse du client qui a reçu tout pouvoir des autres coindivisaires à cet effet.";
          break;
        }
        case "Sécurité": {
          this.displayTitle = params.name;
          this.message =
            "Je sauvegarde mes données. Je mets à jour mon système. Je paramètre ma connexion Internet. J’installe un pare-feu et un antivirus. J’installe des logiciels anti-espions et une barre anti-phishing. Je vérifie l’origine de mes e-mails avant de les ouvrir. Je vérifie le site Internet sur lequel je me connecte.";
          break;
        }
        case "Alertes-fraudes": {
          this.displayTitle = params.name;
          this.message =
            "Nous vous informons sur les bonnes pratiques. La Banque HOUSSAM ne demande jamais à ses clients de lui fournir des informations bancaires, ni les codes que vous auriez reçus par sms (pour valider une opération ou annuler ou activer une fonctionnalité) quelle que soit la raison invoquée, ni même pour votre sécurité. Que ce soit par téléphone, e-mail ou n'importe quel autre moyen, ne répondez pas à la sollicitation et alertez immédiatement votre conseiller. Vos comptes et données bancaires sont personnels, ils sont protégés grâce aux moyens de sécurité Certicode +  de La Banque HOUSSAM. Ce service vous permet de mieux sécuriser les accès à vos comptes de Banque en Ligne, ainsi que de réaliser certaines opérations engageantes (virements, gestions des bénéficiaires, paiements en ligne par carte bancaire). Nos équipes de sécurité dédiées sont toujours sur leurs gardes pour prévenir, détecter et traiter les menaces de sécurité envers nos clients. Nous traitons les tentatives d'escroqueries visant nos clients. Une adresse e-mail est mise à votre disposition pour signaler une éventuelle fraude par phishing ou hameçonnage : alertespam@labanqueHOUSSAM.fr Nous surveillons de manière proactive vos transactions pour déceler celles qui semblent suspectes, afin de détecter les fraudes. Nous répondons aux questions en cas de doute : un numéro est mis à votre disposition pour toute suspicion de fraude de votre part : 3639* dès lors que vous êtes muni de vos codes personnels (identifiant et mot de passe). Nous agissons en cas de fraude avérée : en cas de tentative de fraude, contactez imméditament votre conseiller ou le 3639*.";
          break;
        }
        case "Accessibilité": {
          this.displayTitle = params.name;
          this.message =
            "Une boite aux lettres dédiée à l'accessibilité numérique est disponible pour décrire tout problème en relation avec le handicap ou avec les outils d'adaptation tels que les lecteurs d'écran et synthèses vocales. Décrivez-nous précisément votre problème et n'oubliez pas de nous donner vos coordonnées pour que nous puissions vous répondre. Décrivez-nous précisément votre problème et n'oubliez pas de nous donner vos coordonnées pour que nous puissions vous répondre. Pour toutes questions relatives à votre espace client Banque en ligne (identifiant, mot de passe, virements, ...) ou toutes autres demandes concernant nos produits, un problème rencontré sur le site, veuillez préciser votre besoin à l'aide du Formulaire de Contact  correspondant situé dans l'espace Contacts Client.";
          break;
        }
        case "Espace-Sourds-et-Malentendants": {
          this.displayTitle = params.name;
          this.message =
            "La Banque HOUSSAM  propose, par l’intermédiaire de son prestataire Deafi, aux personnes sourdes ou malentendantes un accès adapté à son service client (accès à une partie des fonctionnalités pour les personnes simplement prospects /accès à l’ensemble des fonctionnalités pour les personnes clientes). Le service permet à une personne sourde ou malentendante (cliente ou prospect) de contacter, depuis un ordinateur ou son téléphone mobile via l’application mobile Deafiline, un vidéo-conseiller salarié de la société Deafi. Ce vidéo-conseiller répond à ses questions ou, le cas échéant, la met en relation avec un autre salarié de Deafi, ayant le statut d’interprète diplômé Français-Langue Française des Signes (« LSF »). Ces derniers traduisent les propos d’une part de la langue des signes française ou de l’écrit vers le Français oral et, d’autre part, du Français oral vers la langue des signes française ou l’écrit. L’interprète permet à la personne sourde ou malentendante d’entrer en relation avec un chargé de clientèle à distance au sein de La Banque HOUSSAM.";
          break;
        }
        case "Mentions-légales": {
          this.displayTitle = params.name;
          this.message =
            "Editeur du Site www.labanqueHOUSSAM.fr : LA BANQUE HOUSSAM, Société anonyme à Directoire et Conseil de Surveillance Capital social : 6 585 350 218 euros Siège social et adresse postale : 115 rue de Sèvres - 75275 Paris Cedex 06 RCS : Paris 421 100 645 Code APE : 6419Z Numéro de TVA intracommunautaire : FR 40 421 100 645 N° ORIAS 07 023 424 www.orias.fr Le Site est hébergé sur les serveurs de LA BANQUE HOUSSAM. LA BANQUE HOUSSAM est un établissement de crédit de droit français soumis au contrôle de l'ACPR et de l'AMF : ACPR - Autorité de Contrôle Prudentiel et de Résolution https://acpr.banque-france.fr 61 rue Taitbout - 75436 Paris Cedex 09 AMF - Autorité des Marchés Financiers www.amf-france.org 17 place de la Bourse - 75082 Paris Cedex 02 Directeur de la Publication : Philippe Heim, Président du Directoire de La Banque HOUSSAM";
          break;
        }
        case "Fonds-de-Garantie-des-dépôts": {
          this.displayTitle = params.name;
          this.message =
            "Le Fonds de Garantie des Dépôts et de Résolution créé par la loi du 25 juin 1999 est chargé de protéger et indemniser les clients en cas de défaillance de leur établissement bancaire. La Garantie des Dépôts couvre les comptes de dépôts et les livrets jusqu'à 100 000 € (hors Livrets garantis par l'Etat). La Garantie des Titres couvre tous les instruments financiers jusqu'à 70 000 €. La Garantie des Cautions couvre les engagements de cautions réglementaires pris par des professionnels pour leurs clients. Le FGDR peut intervenir aussi en Résolution de crise avant faillite, pour éviter les conséquences pour les clients.";
          break;
        }
        case "Données-personnelles": {
          this.displayTitle = params.name;
          this.message =
            "Editeur du Site www.labanqueHOUSSAM.fr : LA BANQUE HOUSSAM, Société anonyme à Directoire et Conseil de Surveillance Capital social : 6 585 350 218 euros Siège social et adresse postale : 115 rue de Sèvres - 75275 Paris Cedex 06 RCS : Paris 421 100 645 Code APE : 6419Z Numéro de TVA intracommunautaire : FR 40 421 100 645 N° ORIAS 07 023 424 www.orias.fr Le Site est hébergé sur les serveurs de LA BANQUE HOUSSAM. LA BANQUE HOUSSAM est un établissement de crédit de droit français soumis au contrôle de l'ACPR et de l'AMF : ACPR - Autorité de Contrôle Prudentiel et de Résolution https://acpr.banque-france.fr 61 rue Taitbout - 75436 Paris Cedex 09 AMF - Autorité des Marchés Financiers www.amf-france.org 17 place de la Bourse - 75082 Paris Cedex 02 Directeur de la Publication : Philippe Heim, Président du Directoire de La Banque HOUSSAM";
          break;
        }
        case "Assistance-technique": {
          this.displayTitle = params.name;
          this.message =
            "";
          break;
        }
        case "Cookies": {
          this.displayTitle = params.name;
          this.message =
            "LA BANQUE HOUSSAM, éditeur des sites www.labanqueHOUSSAM.fr, www.labanqueHOUSSAM.com  et leurs sous- domaines, traite vos données personnelles, en qualité de responsable de traitement tout au long de votre navigation sur le site. La présente politique a pour objet de vous informer aussi bien sur le fonctionnement des cookies que sur le cadre légal de leur utilisation par La Banque HOUSSAM. Celle-ci est complémentaire à la Politique de protection des données à caractère personnel du Groupe La Banque HOUSSAM.";
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
