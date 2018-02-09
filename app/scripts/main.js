


$(document).ready(function(){
    $('.block_now .panel-heading').click();
});


// Function to change color on active accordion
$('.panel-heading').click(function() {
    $('.panel-heading').removeClass('active');
    $(this).addClass('active');
    //If the panel was open and would be closed by this click, do not active it
    if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        $(this).parents('.panel-heading').addClass('active');
 });


// Chart Pie on Traffic
var ctx = $('#traffic-Chart');
var trafficChart = new Chart(ctx,{
    type: 'pie',
    data: {
      labels: ['Feed', 'Orgánico', 'Referencias', 'Directo', 'Email'],
      datasets: [{
        backgroundColor: ['#3e95cd', '#8e5ea2','#9E9E9E','#e8c3b9','#c45850'],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
        legend: {
            display: false,
        },
        plugins: {
            datalabels: {
               display: false,
            }
         },
    }
});

// Display Legend Traffic Chart on div
document.getElementById('chartjsLegendTraffic').innerHTML = trafficChart.generateLegend();

// Chart for active users


var ctx = document.getElementById('now-Chart');
ctx.height = 25;
var nowChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['Risk Level'],
    borderColor: 'rgba(206, 0, 0, 1)',
    borderCapStyle: 'butt',
    datasets: [
      {
        label: 'Directa',
        data: [23.0],
        backgroundColor: '#E95600',
        borderColor: 'white',
        borderWidth: '1',
    },
      {
        label: 'Orgánica',
        data: [37.0],
        backgroundColor: '#0C89C9',
        borderColor: 'white',
        borderWidth: '1',
    },
      {
        label: 'Referencia',
        data: [23.0],
        backgroundColor: '#5EB106',
        borderColor: 'white',
        borderWidth: '1',
    },
      {
        label: 'Campaña',
        data: [17.0],
        backgroundColor: '#39C8D9',
        borderColor: 'white',
        borderWidth: '1',
    }
    ],
  },
  options: {
    tooltips:{
        enabled:false
    },
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
           display: true,
           align: 'center',
           anchor: 'center',
           color: 'white',
           formatter: function(value, context) {
                return value + '%';
            },
        }
     },
    scales: {
      xAxes: [{
          stacked: true,
          display:false,
          gridLines: {
            display:false,
        }
        }],
      yAxes: [{
          stacked: true,
          display:false,
          gridLines: {
            display:false,
        }
        }]
    }
  }
});
nowChart.data.datasets.borderColor = 'red';


// Display Legend Now Chart on div
document.getElementById('chartjsLegendNow').innerHTML = nowChart.generateLegend();




