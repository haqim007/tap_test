<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Map <?php echo $title ?></title>
        <style>
            /* Set HTML and body to full viewport height */
            html, body {
                height: 100%;
                margin: 0;
                overflow: hidden;
            }
            /* Make the map container full-screen */
            #mapContainer {
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
        <div id="mapContainer"></div>
    </body>

    <script src="highchart/highchart.js"></script>
    <script src="highchart/highchart-map.js"></script>
    <script src="highchart/highchart-exporting.js"></script>
    <script>

         // Initialize the chart
            Highcharts.mapChart('mapContainer', {

                title: {
                    text: '<?php echo $title ?>'
                },

                accessibility: {
                    description: 'Map where city locations have been defined using latitude/longitude.'
                },

                mapNavigation: {
                    enabled: true
                },

                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.properties.name}</b><br>'
                },

                series: [
                    {
                        name: '<?php echo $title ?>',
                        borderColor: '#A0A0A0',
                        nullColor: 'rgba(200, 200, 200, 0.9)',
                        showInLegend: false
                    }, {
                        name: 'Separators',
                        type: 'mapline',
                        nullColor: '#707070',
                        showInLegend: false,
                        enableMouseTracking: false,
                        accessibility: {
                            enabled: false
                        }
                    }, 
                    {
                        type: 'map',
                        name: '<?php echo $title ?>',
                        data: <?php echo $highchartMap; ?>,
                        dataLabels: {
                            enabled: true,
                            format: '{point.properties.name}'
                        },
                        states: {
                            hover: {
                            color: '#BADA55'
                            }
                        },
                    }
                ]
            });
    </script>



</html>