import React from "react";
import ReactApexChart from "react-apexcharts";
import  './RiskAnalysis.css'
class RiskAnalysis extends React.Component {
  constructor(props) {
    super(props);

    // Define mock data if not provided as props
    const monthDataSeries1 = {
      prices: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      dates: [
        "2023-01-01",
        "2023-02-01",
        "2023-03-01",
        "2023-04-01",
        "2023-05-01",
        "2023-06-01",
        "2023-07-01",
        "2023-08-01",
        "2023-09-01",
      ],
    };

    this.state = {
      series: [
        {
          name: "STOCK ABC",
          data: monthDataSeries1.prices,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        labels: monthDataSeries1.dates,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        }
      },
    };
  }

  render() {
    return (
      <div className="card">
        <nav class="navbar navbar-expand-lg navbar-custom">
          <a class="navbar-brand" href="#">
            <i class="fas fa-chart-line"></i> Risk Analysis
          </a>
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">
              1 week
            </a>
            <a class="nav-item nav-link" href="#">
              1 month
            </a>
            <a class="nav-item nav-link" href="#">
              3 months
            </a>
            <a class="nav-item nav-link active" href="#">
              1 year
            </a>
          </div>
        </nav>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={250}
          />
        </div>
      </div>
    );
  }
}

export default RiskAnalysis;
