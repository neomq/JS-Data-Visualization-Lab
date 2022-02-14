const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    
    series:[

    ],
    
    noData: {
        "text": "loading..."
    }
}

// create the chart
const chart = new ApexCharts(document.querySelector('#linechart'), options);
// render the chart
chart.render();

// fetch data when all the DOM elements have been loaded
window.addEventListener('DOMContentLoaded', async ()=>{
    let series1 = await loadData1();
    let series2 = await loadData2();

    chart.updateSeries([{
        'name': 'meteors',
        'data': series1
    },
    {   'name': 'sightings',
        'data': series2
    }])
})