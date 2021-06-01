import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: "app-chat-scatter",
  templateUrl: "./chat-scatter.component.html",
  styleUrls: ["./chat-scatter.component.scss"],
})
export class ChatScatterComponent implements OnInit {
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: "Dépenses A",
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = "scatter";
  constructor() {}

  ngOnInit() {}
}
