import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { Label, MultiDataSet } from "ng2-charts";

@Component({
  selector: "app-chat-donnut",
  templateUrl: "./chat-donnut.component.html",
  styleUrls: ["./chat-donnut.component.scss"],
})
export class ChatDonnutComponent implements OnInit {
  public doughnutChartLabels: Label[] = ["Cinéma", "Bars", "Night Club"];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = "doughnut";
  constructor() {}

  ngOnInit() {}
}
