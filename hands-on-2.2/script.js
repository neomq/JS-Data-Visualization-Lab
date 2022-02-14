const options =  {
    chart: {
        type:'bar',
        height:"100%"
    },
    // each series represents one set of data
    series:[
        {
            name: 'male residents',
            data:[175000, 188000, 190000, 185000, 190760]
        },
        {
            name: 'female residents',
            data: [180000, 190000, 210000, 200000, 210000]
        }
    ],
    // what is are the labels along the x-axis (horizontal line)
    xaxis: {
        categories:[1999, 2000, 2001, 2002, 2003]
    },
    
}

// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
 
// render the chart
chart.render()