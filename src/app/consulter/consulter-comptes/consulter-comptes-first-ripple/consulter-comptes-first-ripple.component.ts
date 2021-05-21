import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-comptes-first-ripple',
  templateUrl: './consulter-comptes-first-ripple.component.html',
  styleUrls: ['./consulter-comptes-first-ripple.component.scss']
})
export class ConsulterComptesFirstRippleComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
