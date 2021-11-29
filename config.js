var config = {
    style: 'mapbox://styles/daltonwb/ckwjtn5uv35ao15phx9yz046c',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="images/icg-oj.png" width="60" height="60" /></a><br /><h1>Yemen’s Economic War</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>Credits</h4><strong>Lead Contributor</strong>: Peter Salisbury<br /><strong>Visualizations</strong>: Paul Franz<br /><strong>Support: </strong>Kevin Mazur<br /><br /><h4>Data Sources</h4> <div class="data-sources"><a href="https://www.crisisgroup.org/crisiswatch" target="_blank">CrisisWatch</a>, September, 2021<br /><a href="http://www.esa-landcover-cci.org/?q=node/164" target="_blank">European Space Agency</a>. 2017. Land Cover CCI Product User Guide Version 2.<br /><a href="https://www.gadm.org" target="_blank">GADM</a>. 2012. “Database of Global Administrative Areas”.<br />Luck, M., M. Landis, and F. Gassert. 2015. “Aqueduct Water Stress Projections: Decadal Projections of Water Supply and Demand using CMIP5 GCMs.” <a href="https://www.wri.org/applications/aqueduct/water-risk-atlas/#/?advanced=false&basemap=hydro&indicator=w_awr_def_tot_cat&lat=-14.445396942837744&lng=-142.85354599620152&mapMode=view&month=1&opacity=0.5&ponderation=DEF&predefined=false&projection=absolute&scenario=optimistic&scope=baseline&timeScale=annual&year=baseline&zoom=2" target="_blank">World Resources Institute</a>.<br />Raleigh, C., A. Linke, H. Hegre and J. Karlsen. 2010. “<a href="https://acleddata.com/data-export-tool/" target="_blank">Introducing ACLED Armed Conflict Location and Event Data</a>.” Journal of Peace Research 47(5):651-660.<br /><a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a><br /><a href="https://www.mapbox.com" target="_blank">Mapbox</a> and <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community Team</a><br /><br /><strong>Note</strong>: “Climate Fragility” refers to the average country-wide exposure to interannual variability, seasonal variability, riverine flood risk, coastal flood risk, drought risk (equal weights). “The most climate-fragile countries” refers to the top 50% of countries. Among those, exposure to conflict and crises is twice as high as it is for the bottom 50% of less climate fragile countries.<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
    chapters: [
        {
            id: '01A',
            alignment: 'left',
            hidden: false,
            title: 'Fragmentation',
            image: '',
            description: 'Yemen’s regionalized civil war has split the country into multiple zones of military and political control.',
            location: {
              center: [43.592, 15.871],
              zoom: 2,
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
            id: '04C',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Then, in 2019, with Saudi Arabia’s help, the government started delaying approvals for fuel imports into Hodeida.',
            location: {
              center: [44.781, 16.191],
              zoom: 15.85,
              pitch: 36.00,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
