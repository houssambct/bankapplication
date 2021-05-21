import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consulter-comptes",
  templateUrl: "./consulter-comptes.component.html",
  styleUrls: ["./consulter-comptes.component.scss"],
})
export class ConsulterComptesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;


  
  constructor() {}

  ngOnInit() {}
}
