<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title><?php echo $title ?></title>
        <style>
            /* Set HTML and body to full viewport height */
            html, body {
                height: 100%;
                margin: 0;
                overflow: hidden;
            }
            /* Make the map container full-screen */
            #container {
                width: 100%;
                height: 100%;
            }
            .loading {
                margin-top: 10em;
                text-align: center;
                color: gray;
            }
        </style>
    </head>

    <body>
        <div id="container"></div>
    </body>

    <script src="highchart/highchart.js"></script>
    <script src="highchart/highchart-map.js"></script>
    <script src="highchart/highchart-exporting.js"></script>
    <script>
        let data = <?php echo $data ?>;

        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: '<?php echo $title ?>',
                align: 'left'
            },
            xAxis: {
                categories: data.categories,
                 labels: {
                    formatter: function() {
                        return "Kelompok umur: "+this.value;
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Jumlah Penduduk'
                },
                stackLabels: {
                    enabled: true
                }
            },
            legend: {
                align: 'left',
                x: 70,
                verticalAlign: 'top',
                y: 70,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>Kelompok umur: {point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: data.series
        });

    </script>



</html>