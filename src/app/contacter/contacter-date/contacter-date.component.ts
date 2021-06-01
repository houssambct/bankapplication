import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDatepickerInputEvent } from "@angular/material";
import { ActivatedRoute, Route, Router } from "@angular/router";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contacter-date",
  templateUrl: "./contacter-date.component.html",
  styleUrls: ["./contacter-date.component.scss"],
})
export class ContacterDateComponent implements OnInit {
  constructor(private toastr: ToastrService,private router: Router ) {}
  events: string[] = [];
  startDate: any;
  houreTime: any;
  today = new Date();
  hiddenTime = true;
  hiddenText = true;
  changeDate(event: MatDatepickerInputEvent<Date>) {
    console.log("event", event);
    this.startDate = moment(event.value).format("dddd, D MMMM YYYY");
    this.hiddenTime = false;
  }
  changeTime(event: MatDatepickerInputEvent<Date>) {
    console.log("event", event);
    this.houreTime = event.value;
    this.hiddenText = false;
  }
  sendRequest() {
    this.toastr.success(
      "Votre requete doit etre gérée par votre conseiller, On reviendra vers vous le plutot possible"
    );
    this.router.navigate(['/consulter']);
  }
  ngOnInit() {}
}
