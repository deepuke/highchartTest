let chartData = [];
let colors = ["rgb(0, 256, 0)", 'rgb(256, 0, 0)', 'rgb(0, 0, 256)', 'rgb(34, 67, 120)', 'rgb(123, 234, 54)']

for (let i = 0; i <= 4; i++) {
    let tempdata = {
        color: colors[i],
        name: '',
        data: []
    };

    tempdata.name = data[i][0].key.substring(0, 2);
    tempdata.data = data[i];
    chartData.push(tempdata);
}
console.log(chartData);


Highcharts.chart('container-highchart', {
    credits: {
        enabled: false
    },
    chart: {
        zoomType: 'xy'
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    yAxis: {
        //zoomEnabled:true,
        title: {
            text: 'Yield'
        },
        labels: {
            format: '{value} %'
        },
        minorGridLineColor: '#E0E0E0',
        minorGridLineWidth: 1,
        minorTickLength: 0,
        minorTickInterval: 'auto'
    },

    xAxis: {
        //zoomEnabled: true,
        title: {
            text: 'Maturity (Logarithamical)'
        },
        labels: {
            step: 1,
            format: '{value}',
            formatter : function(){
                if(this.value > 12){
                    this.value = parseInt(this.value/12) + " Y"
                } else {
                    this.value = this.value + "M"
                }
                return  this.value;
            }
        },
        //tickPositions: [0, 30, 90, 180, 360],
        minorGridLineColor: '#E0E0E0',
        minorGridLineWidth: 0.5,
        minorTickLength: 0,
        minorTickInterval: 'auto',
        units: [[
            'month',
            [3, 6]
        ], [
            'year',
            [1, 2, 5, 10, 20, 30, 50]
        ]]
    },

    tooltip: {
        //shared: true
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        series: {
            accessibility: {
                enabled: true,
                keyboardNavigation: {
                    enabled: true
                }
            },
            marker: {
                enabled: true
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.displayName} <br/> Maturity {point.values.maturityDate} <br/> Yield : {point.y} %'
            }
        },
        pointStart: -5
    },


    series: chartData

});