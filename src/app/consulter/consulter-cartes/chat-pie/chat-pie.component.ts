import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import {
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  SingleDataSet,
} from "ng2-charts";

@Component({
  selector: "app-chat-pie",
  templateUrl: "./chat-pie.component.html",
  styleUrls: ["./chat-pie.component.scss"],
})
export class ChatPieComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [
    ["Bouffe", "A boire"],
    ["Dormir", "Cinéma"],
    "Night Club",
    "Courire",
  ];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {}
}
