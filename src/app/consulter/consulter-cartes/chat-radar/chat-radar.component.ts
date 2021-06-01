import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: "app-chat-radar",
  templateUrl: "./chat-radar.component.html",
  styleUrls: ["./chat-radar.component.scss"],
})
export class ChatRadarComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [
    "Bouffe",
    "A boire",
    "Dormir",
    "Cinéma",
    "Bars",
    "Night Club",
    "Courire",
  ];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: "Dépenses A" },
    { data: [28, 48, 40, 19, 96, 27, 100], label: "Dépenses B" },
  ];
  public radarChartType: ChartType = "radar";

  constructor() {}

  ngOnInit() {}
}
