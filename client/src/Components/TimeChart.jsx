import React, { useState } from "react";
import Chart from "react-apexcharts";

const TimeChart = () => {
  const [chartDate] = useState({
    options: {
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        axisBorder: { show: true },
        axisTicks: { show: false },
        labels: { show: true },
      },
      yaxis: { show: false },
      grid: { show: false },
      chart: {
        sparkline: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <div className="card mt-2">
      <Chart options={chartDate.options} series={chartDate.series} type="bar" height={200}/>
    </div>
  );
};

export default TimeChart;
