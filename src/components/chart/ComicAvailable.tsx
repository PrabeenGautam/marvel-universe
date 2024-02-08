import { characters as c } from "@/constant/temp/characters";
import { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";

function CharacterComicChart() {
  const characters = c.data.results;

  const sortedCharacters = characters.sort((a, b) => {
    return a.comics.available - b.comics.available;
  });

  const categories = sortedCharacters.map((c) => c.name);
  const series = sortedCharacters.map((c) => c.comics.available);

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    title: {
      text: "Character Comic Available",
      style: {
        fontSize: "14px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
      },
    },
    plotOptions: {
      bar: { horizontal: true },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories,
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

  return (
    <div>
      <ApexCharts
        options={options}
        series={[{ data: series, name: "Comic" }]}
        type="bar"
        width={"95%"}
        height={350}
      />
    </div>
  );
}

export default CharacterComicChart;
