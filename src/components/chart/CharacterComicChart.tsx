import { CharacterType } from "@/types/response/character.types";
import { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";

interface Props {
  character: CharacterType[];
}

function CharacterComicChart({ character }: Props) {
  const categories = character.map((c) => c.name);
  const series = character.map((c) => c.comics.available);

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
