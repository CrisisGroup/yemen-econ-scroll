var config = {
    style: 'mapbox://styles/daltonwb/ckxp6vvno0ebn14m58uyfh2v7',
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
            title: 'Yemen’s Place in the World',
            image: '',
            description: 'Yemen is a country of about 30 million people. It occupies the southwestern tip of the Arabian Peninsula and borders Saudi Arabia, Oman, and the shipping lanes of the Red Sea.',
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
                  duration: 2000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'yemen',
                  duration: 2000,
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
            description: 'Yemen has been at war since early 2015 when Huthi rebels and their allies attempted to take over the entire country and a Saudi-led military intervention sought to displace them from the capital, Sanaa.',
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
                  duration: 2000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2015-ctrl',
                  duration: 2000,
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
            description: 'The war nominally pits the Huthis, who receive some support from Iran, against the Saudi-backed internationally recognised government of Abed Rabbo Mansour Hadi.',
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
                  duration: 2000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '12-2016-ctrl',
                  duration: 2000,
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
            description: 'But in reality, the numerous anti-forces on the ground have battled both the rebels and each other, including forces loyal to the Hadi government.',
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
                  duration: 2000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '06-2018-ctrl',
                  duration: 2000,
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
            description: 'By 2020, the country had been split into roughly five zones of political and military control.',
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
                  duration: 2000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2020-ctrl',
                  duration: 2000,
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
            description: 'The fighting has cut off roads and divided control of Yemen’s ports and airports, many of which have been shuttered.',
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
              },
              {
                  layer: '2021-control',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: '2021-control-roads',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: '2021-points',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: '2021-control',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: '2021-control-roads',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: '2021-points',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '02A',
            alignment: 'center',
            hidden: false,
            title: 'At First, A Unified Economy',
            image: '',
            description: 'In the war’s early years these territorial divisions did not extend to the economy, which remained largely unified.<br /><br /><div class="flourish-embed flourish-chart" data-src="visualisation/7978136"></div>',
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
            id: 'QUOTE1',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">But since early 2020 that has changed. Food prices are now much higher in nominally government-controlled areas than Huthi-controlled ones.</h2>',
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
            id: '02B',
            alignment: 'center',
            hidden: false,
            title: 'The Start of Economic Warfare',
            image: '',
            description: 'Wheat prices have increased by more than 50 per cent in government areas since 2019. Most Yemeni salaries are not adjusted for inflation, so a price increase like this essentially halves people’s purchasing power.<br /><br /><div class="flourish-embed flourish-chart" data-src="visualisation/7978176"></div>',
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
            id: '02C',
            alignment: 'center',
            hidden: false,
            title: 'The Economic War',
            image: '',
            description: 'What caused this economic split? The answer is that Yemen’s civil war is not just being fought using military and political tools. <strong><u>It is also, increasingly, an economic conflict.</u></strong> One that may have cost as many lives as frontline fighting.',
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
            id: '03A',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The economic conflict has unfolded over several different phases. First, in 2016, after peace talks in Kuwait collapsed, the government moved the headquarters of Yemen’s central bank from Huthi-held Sanaa to its temporary capital in Aden. The government thought this would give it an economic advantage over the Huthis, who it accused of looting the bank’s reserves of Yemeni riyals and hard currencies like the dollar. [Control map data forthcoming...]',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '03B',
            alignment: 'left',
            hidden: false,
            title: 'Phases of Economic Warfare',
            image: '',
            description: 'Then, in 2018, UAE-backed forces mounted a military campaign to seize the Huthi controlled Red Sea port of Hodeida.',
            location: {
              center: [42.948151, 14.789725],
              zoom: 10.62,
              pitch: 31,
              bearing: 28
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
          id: '03C',
          alignment: 'left',
          hidden: false,
          title: '',
          image: '',
          description: 'The UAE saw Hodeida as important because the Huthis earned a lot of money by taxing goods entering the port. At the time, half of Yemen’s food and fuel imports entered the country via Hodeida.',
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
              {
              layer: 'satellite',
              duration: 3000,
              opacity: 0
              }
          ]
        },
        {
          id: '03D',
          alignment: 'left',
          hidden: false,
          title: 'Ceasefire in Stockholm',
          image: 'images/stockholm.jpeg',
          description: 'For the same reason that the UAE saw it as important, the UN worried that a battle for Hodeida would disrupt imports so badly that it would cause a “massive famine”. So in December 2018 it negotiated a deal, the Stockholm Agreement, to prevent a battle and demilitarize the area. (Image: Government of Sweden)',
          location: {
            center: [44.703737, 15.172698],
            zoom: 5.5,
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
            id: 'QUOTE2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">The Stockholm Agreement stopped the fighting in Hodeida. But didn’t end the war.<br /><br /> Frontline fighting continued and the economic conflict escalated.</h2>',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '04B',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The government introduced a series of new laws to make it harder for importers to bring goods into Yemen through Hodeida, and to force  them to use the Aden central bank to transfer money in and out of the country. The government appeared to be using its legal status to do what the coalition had been prevented from doing militarily – cutting off Huthi income from Hodeida and increasing its own.',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '04C',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Then, in 2019, with Saudi Arabia’s help, the government started delaying approvals for fuel imports into Hodeida. [probably needs a geotiff or just a marker point in this part of the sea]',
            location: {
              center: [40.8282835, 16.5160884],
              zoom: 8,
              pitch: 36,
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
              }
            ],
            onChapterExit: [
              {
              layer: 'satellite',
              duration: 3000,
              opacity: 0
              }
          ]
        },
        {
            id: '04D',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'In response, the Huthis banned new Yemeni riyal bills the government had been printing since 2016 to pay salaries and other expenses. The government had more than doubled the total supply of money in Yemen. The Huthis said the new bills were driving inflation and making the economic crisis worse.',
            location: {
              center: [45.601893, 17.712406],
              zoom: 5.5,
              pitch: 55,
              bearing: 7.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'yemen',
                  duration: 3000,
                  opacity: 1
              },
              {
                  layer: 'saudi',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'yemen',
                  duration: 3000,
                  opacity: 0
              },
              {
                  layer: 'saudi',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '04E',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Most of Yemen’s population lives in Huthi areas. By banning the new notes, the Huthis effectively flooded rival territories with the new notes the government had printed. The riyal began to tumble against the dollar in non-Huthi areas.',
            location: {
              center: [45.924454, 14.650321],
              zoom: 6.2,
              pitch: 60,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'cartogram-yemen',
                  duration: 3000,
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'cartogram-yemen',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: 'QUOTE3',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">These economic conflicts for control of fuel and money supply have combined to deepen Yemen’s economic and humanitarian disaster. And they have backfired on the government</h2>',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '05A',
            alignment: 'left',
            hidden: false,
            title: 'Doubling of food prices',
            image: '',
            description: 'In government-controlled areas especially, the cost of basic goods has risen so much that the normal food basket an average household purchases has doubled since January 2020. [WFP chart]',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '05B',
            alignment: 'full',
            hidden: false,
            title: 'A comparative look',
            image: '',
            description: 'This increase can mainly be explained by the riyal’s depreciation.<div class="flourish-embed flourish-chart" data-src="visualisation/7978910"></div>',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '05C',
            alignment: 'center',
            hidden: false,
            title: 'A comparative look',
            image: '',
            description: 'Fuel prices have also risen in both Huthi and non-Huthi areas. This price increase is in part due to the government-Saudi decision fuel embargo on Hodeida since January 2021, and also because of the depreciating riyal in non-Huthi areas.<div class="flourish-embed flourish-chart" data-src="visualisation/7979000"></div>',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
            id: '05D',
            alignment: 'center',
            hidden: false,
            title: 'Huthi income',
            image: '',
            description: 'There is another reason. The Huthis appear to be pushing fuel prices up in their areas to replace lost income from blocked fuel shipments and even increase their revenues while the government takes the blame.',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
     id: '05E',
     alignment: 'left',
     hidden: false,
     title: '',
     image: '',
     description: 'Higher fuel prices in Huthi areas also help explains mounting shortages in government controlled areas, despite indreasing fuel imports into government controlled ports. Traders can make more money by transporting fuel into Huthi-controlled areas than by selling it in government territory and risk losing money because of the inflation crisis there.<br /><br />This satellite image shows a holding area for fuel trucks entering Huthi-controlled territory that has become increasingly busy since 2018.',
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
     id: '06',
     alignment: 'center',
     hidden: false,
     title: 'Protests',
     image: '',
     description: 'The currency crisis along with fuel and electricity shortages have led to protests in most big cities under the government’s nominal control.',
     location: {
       center: [44.703737, 15.172698],
       zoom: 5.5,
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
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'So what can be done?',
            image: '',
            description: 'In a new Crisis Group report we argue that the new UN envoy doesn’t just need to broker a military truce and a political settlement. They also need an economic ceasefire.<br /><br /> To learn more about the economic conflict and what an economic ceasefire would look like, read our new report, "Brokering a Ceasefire in Yemen’s Economic Conflict"',
            location: {
              center: [44.703737, 15.172698],
              zoom: 5.5,
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
