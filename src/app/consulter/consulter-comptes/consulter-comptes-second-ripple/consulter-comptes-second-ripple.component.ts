import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-comptes-second-ripple',
  templateUrl: './consulter-comptes-second-ripple.component.html',
  styleUrls: ['./consulter-comptes-second-ripple.component.scss']
})
export class ConsulterComptesSecondRippleComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  constructor() { }

  ngOnInit() {
  }

}
