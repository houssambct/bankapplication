import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { Label, SingleDataSet } from "ng2-charts";

@Component({
  selector: "app-chat-polar",
  templateUrl: "./chat-polar.component.html",
  styleUrls: ["./chat-polar.component.scss"],
})
export class ChatPolarComponent implements OnInit {
  public polarAreaChartLabels: Label[] = [
    "Dormir",
    "Cinéma",
    "Bars",
    "Night Club",
    "Courire",
  ];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = "polarArea";

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
