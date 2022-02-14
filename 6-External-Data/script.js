const options =  {
    chart: {
        type: 'line',
        height:"100%"
    },
    series:[
        
    ],
    noData: {
        "text": "Loading..."
    }
    
}
// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
// render the chart
chart.render()


// fetch data when all the DOM elements have been loaded
window.addEventListener('DOMContentLoaded', async ()=>{
    let series = await loadData();
    chart.updateSeries([{
        'name': 'Sales',
        'data': series
    }])
})
