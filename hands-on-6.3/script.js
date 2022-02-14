const meteorsChartOptions =  {
    chart: {
        type: 'line',
        height: "100%",
        id: "meteorschart",
        group: "meteor-sightings"
    },
    series:[

    ],
    noData: {
        "text": "loading..."
    },
    yaxis: {
        labels: {
            minWidth: 40
        }
    }
}
// create the chart
const meteorsChart = new ApexCharts(document.querySelector('#meteors-chart'), meteorsChartOptions);
// render the chart
meteorsChart.render();

const sightingsChartOptions =  {
    chart: {
        type: 'line',
        height: "100%",
        id: "sightingschart",
        group: "meteor-sightings"
    },
    series:[

    ],
    noData: {
        "text": "loading..."
    },
    yaxis: {
        labels: {
            minWidth: 40
        }
    }
};
// create the chart
const sightingsChart = new ApexCharts(document.querySelector('#sightings-chart'), sightingsChartOptions);
// render the chart
sightingsChart.render();


// fetch data when all the DOM elements have been loaded
window.addEventListener('DOMContentLoaded', async ()=>{
    let series1 = await loadData1(); // meteors
    let series2 = await loadData2(); // sightings

    meteorsChart.updateSeries([{
        'name': 'meteors',
        'data': series1
    }])
    
    sightingsChart.updateSeries([{
        'name': 'sightings',
        'data': series2
    }])
  
})