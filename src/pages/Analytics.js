import React from "react";
import { Chart } from "react-google-charts";
import "../Styles/Analytics.css"

export const data = [
  ["Country",""],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
  ["INDIA", 1000]
];

export default function Analaytic() {
  return (
    <Chart className="Chart"
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
    
      data={data}
    />
  );
}