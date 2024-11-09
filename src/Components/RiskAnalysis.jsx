import React from 'react';
import ReactApexChart from 'react-apexcharts';

class RiskAnalysis extends React.Component {
    constructor(props) {
        super(props);

        // Define mock data if not provided as props
        const monthDataSeries1 = {
            prices: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            dates: [
                "2023-01-01", "2023-02-01", "2023-03-01", "2023-04-01", 
                "2023-05-01", "2023-06-01", "2023-07-01", "2023-08-01", 
                "2023-09-01"
            ]
        };

        this.state = {
            series: [{
                name: "STOCK ABC",
                data: monthDataSeries1.prices
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Fundamental Analysis of Stocks',
                    align: 'left'
                },
                subtitle: {
                    text: 'Price Movements',
                    align: 'left'
                },
                labels: monthDataSeries1.dates,
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                }
            }
        };
    }

    render() {
        return (
            <div className='card'>
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
