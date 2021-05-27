import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulter-pret-ripple',
  templateUrl: './consulter-pret-ripple.component.html',
  styleUrls: ['./consulter-pret-ripple.component.scss']
})
export class ConsulterPretRippleComponent implements OnInit {

  constructor() { }
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;

  @Input() title : string
  @Input() text: string 
  @Input() image: string 
  ngOnInit() {
  }

}
