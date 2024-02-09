import { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";

import { CharacterType } from "@/types/response/character.types";

interface Props {
  character: CharacterType[];
}

/**
 * Component to render a bar chart displaying the number of comics available for each character.
 */
function CharacterComicChart({ character }: Props) {
  // Extracting categories and series data for the chart
  const categories = character.map((c) => c.name);
  const series = character.map((c) => c.comics.available);

  // Options for the ApexCharts component
  const options: ApexOptions = {
    chart: {
      type: "bar",
      zoom: { enabled: false },
      toolbar: { show: false },
      background: "transparent",
      height: 350,
    },
    theme: {
      mode: "dark",
      palette: "palette4",
    },
    plotOptions: {
      bar: { horizontal: true },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories,
      title: {
        text: "Comics Available",
        offsetY: 10,
        style: {
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          color: "#fff",
        },
      },
      labels: {
        style: { fontSize: "10px", fontFamily: "Roboto, sans-serif" },
      },
    },
    yaxis: {
      labels: {
        style: { fontSize: "10px", fontFamily: "Roboto, sans-serif" },
      },
    },
    stroke: {
      colors: ["transparent"],
      width: 4,
    },
  };

  // Dynamic height calculation based on the number of characters
  const dynamicHeight = Math.max(character.length * 18, 200);

  return (
    <ApexCharts
      options={options}
      series={[{ data: series, name: "Comic" }]}
      type="bar"
      width={"95%"}
      height={dynamicHeight}
    />
  );
}

export default CharacterComicChart;
