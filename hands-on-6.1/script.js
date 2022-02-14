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
    let series = await loadData();
    chart.updateSeries([{
        'name': 'temperatures',
        'data': series
    }])
})