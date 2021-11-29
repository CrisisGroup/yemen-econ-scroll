var config = {
    style: 'mapbox://styles/daltonwb/ckwl7bycd3m0e14p8kccklxju',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>Yemen’s Economic War</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Peter Salisbury<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support: </strong>Kevin Mazur<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.crisisgroup.org/crisiswatch" target="_blank">CrisisWatch</a>, September, 2021<br /><a href="http://www.esa-landcover-cci.org/?q=node/164" target="_blank">European Space Agency</a>. 2017. Land Cover CCI Product User Guide Version 2.<br /><a href="https://www.gadm.org" target="_blank">GADM</a>. 2012. “Database of Global Administrative Areas”.<br />Luck, M., M. Landis, and F. Gassert. 2015. “Aqueduct Water Stress Projections: Decadal Projections of Water Supply and Demand using CMIP5 GCMs.” <a href="https://www.wri.org/applications/aqueduct/water-risk-atlas/#/?advanced=false&basemap=hydro&indicator=w_awr_def_tot_cat&lat=-14.445396942837744&lng=-142.85354599620152&mapMode=view&month=1&opacity=0.5&ponderation=DEF&predefined=false&projection=absolute&scenario=optimistic&scope=baseline&timeScale=annual&year=baseline&zoom=2" target="_blank">World Resources Institute</a>.<br />Raleigh, C., A. Linke, H. Hegre and J. Karlsen. 2010. “<a href="https://acleddata.com/data-export-tool/" target="_blank">Introducing ACLED Armed Conflict Location and Event Data</a>.” Journal of Peace Research 47(5):651-660.<br /><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: '[Global geographical context goes here.]',
            location: {
              center: [43.592, 15.871],
              zoom: 4,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'yemen',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'yemen',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: '2015',
            image: '',
            description: '2015 Control',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: '03-2015-ctrl',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2015-ctrl',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01B',
            alignment: 'left',
            hidden: false,
            title: '2016',
            image: '',
            description: '2016 Control',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: '12-2016-ctrl',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '12-2016-ctrl',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01C',
            alignment: 'left',
            hidden: false,
            title: '2018',
            image: '',
            description: '2018 Control',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: '06-2018-ctrl',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '06-2018-ctrl',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01D',
            alignment: 'left',
            hidden: false,
            title: '2020',
            image: '',
            description: '2020 Control',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: '03-2020-ctrl',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2020-ctrl',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01E',
            alignment: 'left',
            hidden: false,
            title: 'The Present Day',
            image: '',
            description: 'By November 2021, the country was split into roughly five zones of political and military control.',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  duration: 3000,
                  opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '01F',
            alignment: 'left',
            hidden: false,
            title: 'The Hadi Government',
            image: '',
            description: 'Although government of President Abed Rabbo Mansour Hadi says it controls the parts of Yemen not held by the Huthi rebels in the north. Legally, the government remains Yemen’s internationally recognized authority.',
            location: {
              center: [45.731866, 15.500622],
              zoom: 5.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

          ]
        },
        {
            id: '01G',
            alignment: 'center',
            hidden: false,
            title: 'The Start of Economic Warfare',
            image: '',
            description: 'In the war’s early years these territorial divisions did not extend to the economy, which remained largely unified.<br /><br /><iframe src="highcharts/diesel/diesel.html" width="100%" height="500px" frameborder="0"></iframe>',
            location: {
              center: [45.731866, 15.500622],
              zoom: 10,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  duration: 3000,
                  opacity: 0
              }
            ],
            onChapterExit: [

          ]
        },
        {
          id: '03D',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'The UAE saw Hodeida as important because the Huthis earned a lot of money by taxing goods entering the port. At the time, half of Yemen’s food and fuel imports entered the country via Hodeida',
          location: {
            center: [42.933885, 14.835810],
            zoom: 16.17,
            pitch: 46.60,
            bearing: 16.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
          {
          layer: 'satellite',
          duration: 3000,
          opacity: 1
          }
        ],
            onChapterExit: [

          ]
        },
        {
            id: '05F',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Higher fuel prices in Huthi areas also help explains mounting shortages in government controlled areas, despite indreasing fuel imports into government controlled ports.',
            location: {
              center: [44.781, 16.191],
              zoom: 15.85,
              pitch: 36.00,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'truck-depot',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [

          ]
        },
        {
            id: '11',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
              center: [19.133761, 26.268723],
              zoom: 1.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
    ]
};
