import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Input() title : string
  @Input() route: string 
  constructor() { }

  ngOnInit() {
  }

}
