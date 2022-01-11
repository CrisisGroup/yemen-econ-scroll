var config = {
    style: 'mapbox://styles/daltonwb/cky55fpis3iwn15qsp623xdww',
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
            title: 'Yemen',
            image: '',
            description: 'Yemen is a country of about 30 million people. It occupies the southwestern tip of the Arabian Peninsula and borders Saudi Arabia and Oman, along with the shipping lanes of the Red Sea and Gulf of Aden.',
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
            description: 'Yemen has been at war since early 2015 when Huthi rebels and their allies attempted to take over the entire country and a Saudi-led military intervention sought to displace them from the capital, Sanaa.<br /><br />This map shows shifts in district level control and the major sites of violent conflict across Yemen from 2015 onwards. Crisis Group compiled the control map while the violence heat map uses data gathered by ACLED, The Armed Conflict Location & Event Data Project',
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
                  opacity: .8
              },
              {
                  layer: '2015-acled',
                  duration: 2000,
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2015-ctrl',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: '2015-acled',
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
                  opacity: .8
              },
              {
                  layer: '2016-acled',
                  duration: 2000,
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: '12-2016-ctrl',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: '2016-acled',
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
            description: 'But in reality, the numerous anti-Huthi forces on the ground have battled both the rebels and each other, including forces loyal to the Hadi government.',
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
                  opacity: .8
              },
              {
                  layer: '2018-acled',
                  duration: 2000,
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: '06-2018-ctrl',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: '2018-acled',
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
                  opacity: .8
              },
              {
                  layer: '2020-acled',
                  duration: 2000,
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: '03-2020-ctrl',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: '2020-acled',
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
                  opacity: .8
              },
              {
                  layer: '2021-control-roads',
                  duration: 3000,
                  opacity: .9
              },
              {
                  layer: '2021-points',
                  duration: 3000,
                  opacity: .9
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
            description: 'In the war’s early years these territorial divisions did not extend to the economy, which remained largely unified. Wheat prices, for example, remained largely the same wherever you were.<br /><br /><div class="flourish-embed flourish-chart" data-src="visualisation/7978136"></div>',
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
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<h2 class="liftout">What caused this economic split? The answer is that Yemen’s civil war is not just being fought using military and political tools.<br /><br /><strong><u>It is also, increasingly, an economic conflict.</u></strong> One that has cost as many if not more lives than frontline fighting.</h2>',
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
            description: 'The economic conflict has unfolded over several different phases. First, in 2016, after peace talks in Kuwait collapsed, the government moved the headquarters of Yemen’s central bank from Huthi-held Sanaa to its temporary capital in Aden. The government thought this would give it an economic advantage over the Huthis, who it accused of looting the bank’s reserves of Yemeni riyals and hard currencies like the dollar.',
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
                  layer: '12-2016-ctrl',
                  duration: 2000,
                  opacity: .8
              },
              {
                  layer: 'city-2016-text',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'city-2016-blur',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'city-2016-dot',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: '2016-acled',
                  duration: 2000,
                  opacity: .6
              }
            ],
            onChapterExit: [
              {
                  layer: '12-2016-ctrl',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'city-2016-text',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'city-2016-blur',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'city-2016-dot',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: '2016-acled',
                  duration: 2000,
                  opacity: 0
              }
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
          description: 'Like Riyadh, Abu Dhabi argued that the Huthis were smuggling arms into Yemen via Hodeida. The UAE also saw Hodeida as important because the Huthis earned a lot of money by taxing goods entering the port. At the time, half of Yemen’s food and fuel imports entered the country via Hodeida.',
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
          alignment: 'center',
          hidden: false,
          title: 'Ceasefire in Stockholm',
          image: 'images/stockholm.jpeg',
          description: '<p class="footnote">(Image: Government of Sweden)</p>For the same reason that the UAE saw it as important, the UN worried that a battle for Hodeida would disrupt imports so badly that it would cause a “massive famine”. So in December 2018 it negotiated a deal, the Stockholm Agreement, to prevent a battle and demilitarize the area.',
          location: {
            center: [42.933885, 14.835810],
            zoom: 8,
            pitch: 46.60,
            bearing: 16.80
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
              {
                layer: 'hodeida-cruise',
                duration: 3000,
                opacity: 0
              }
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
              center: [55.649546, 16.346035],
              zoom: 3.95,
              pitch: 9.62,
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
                layer: 'hodeida-cruise',
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
            description: 'Then, in 2019, with Saudi Arabia’s help, the government started delaying approvals for fuel imports into Hodeida.<br /><br /><p class="footnote">(AIS data provided courtesy of exactEarth Ltd)</p>',
            location: {
              center: [49.431930, 15.136481],
              zoom: 4.9,
              pitch: 18.53,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'hodeida-ship',
              duration: 3000,
              opacity: .8
            },
            {
            layer: 'hodeida-ship-label',
            duration: 3000,
            opacity: .8
          }
            ],
            onChapterExit: [
              {
              layer: 'hodeida-ship',
              duration: 3000,
              opacity: 0
            },
            {
            layer: 'hodeida-ship-label',
            duration: 3000,
            opacity: 0
          },
          {
            layer: 'hodeida-cruise',
            duration: 3000,
            opacity: 0
          }
          ]
        },
        {
            id: '04D',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'In response, the Huthis banned new Yemeni riyal bills the government had been printing since 2016 to pay salaries and other expenses. The government had more than doubled the total supply of money in Yemen. The Huthis said the new bills were driving inflation and making the economic crisis worse.<div class="flourish-embed flourish-chart" data-src="visualisation/8312606"></div>',
            location: {
              center: [49.431930, 15.136481],
              zoom: 4.9,
              pitch: 18.53,
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
            id: '04E',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Most of Yemen’s population lives in Huthi areas.This map shows the concentration of Yemen’s population and who controls the districts they live in. The overwhelming majority of Yemenis – probably more than 20 million people – live in Huthi areas.',
            location: {
              center: [46.990774, 14.931359],
              zoom: 6.05,
              pitch: 9.6,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'cartogram-yemen',
                  duration: 3000,
                  opacity: .65
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
            id: '04F',
            alignment: 'right',
            hidden: false,
            title: 'Currency valuation in 2017',
            image: '',
            description: 'By banning the new notes, the Huthis effectively flooded less populous rival territories with the new notes the government had printed. The riyal began to tumble against the dollar in non-Huthi areas. This map shows the cost of one dollar in riyals in Huthi and non-Huthi areas in 2017.',
            location: {
              center: [47.803856, 13.992635],
              zoom: 6,
              pitch: 58,
              bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'currency_2017',
                  duration: 3000,
                  opacity: .7
              }
            ],
            onChapterExit: [
              {
                  layer: 'currency_2017',
                  duration: 3000,
                  opacity: 0
              }
          ]
        },
        {
            id: '04G',
            alignment: 'right',
            hidden: false,
            title: 'Valuation by the end of 2021',
            image: '',
            description: 'As this map shows, by December 2021 the cost of one dollar in nominally government areas far oustripped the exchange rate in Huthi-controlled areas, where it remained relatively stable.',
            location: {
              center: [47.803856, 13.992635],
              zoom: 6,
              pitch: 58,
              bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'currency_2021',
                  duration: 3000,
                  opacity: .7
              }
            ],
            onChapterExit: [
              {
                  layer: 'currency_2021',
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
              bearing: 0,
              speed: .7
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
            alignment: 'center',
            hidden: false,
            title: 'Doubling of food prices',
            image: '',
            description: 'In government-controlled areas especially, the cost of basic goods has risen so much that the normal food basket an average household purchases has doubled since January 2020. <div class="flourish-embed flourish-chart" data-src="visualisation/8311840"></div>',
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
     description: 'Higher fuel prices in Huthi areas also help explains mounting shortages in government controlled areas, despite increasing fuel imports into government controlled ports. Traders can make more money by transporting fuel into Huthi-controlled areas than by selling it in government territory and risk losing money because of the inflation crisis there.<br /><br />This satellite image shows a holding area for fuel trucks entering Huthi-controlled territory that has become increasingly busy since 2018.',
     location: {
       center: [44.782512, 16.189763],
       zoom: 17,
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
       },
       {
           layer: 'truck-depot-2022',
           duration: 3000,
           opacity: 1
       },
       {
           layer: 'truck-highlights',
           duration: 6000,
           opacity: .7
       }
     ],
     onChapterExit: [
       {
           layer: 'satellite',
           duration: 3000,
           opacity: 0
       },
       {
           layer: 'truck-depot-2022',
           duration: 3000,
           opacity: 0
       },
       {
           layer: 'truck-highlights',
           duration: 3000,
           opacity: 0
       }
   ]
 },
 {
     id: '06',
     alignment: 'left',
     hidden: false,
     title: 'Protests',
     image: '',
     description: 'The currency crisis along with fuel and electricity shortages have led to protests in most big cities under the government’s nominal control. Taiz, Aden, Ataq and Mukalla were all rocked by protests in 2021.',
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
           layer: 'yemen-cities',
           duration: 3000,
           opacity: 1
       },
       {
           layer: 'yemen-cities-dot',
           duration: 3000,
           opacity: 1
       },
       {
           layer: 'yemen-cities-dot-blur',
           duration: 3000,
           opacity: 1
       }
     ],
     onChapterExit: [
       {
           layer: 'yemen-cities',
           duration: 3000,
           opacity: 0
       },
       {
           layer: 'yemen-cities-dot',
           duration: 3000,
           opacity: 0
       },
       {
           layer: 'yemen-cities-dot-blur',
           duration: 3000,
           opacity: 0
       }
   ]
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'So what can be done?',
            image: '',
            description: 'Hans Grundberg, the new UN envoy to Yemen, doesn’t just need to broker a military truce and a political settlement. He also needs an economic ceasefire.<br /><br />To learn more about the economic conflict and what an economic ceasefire would look like, read Crisis Group‘s new report, "Brokering a Ceasefire in Yemen’s Economic Conflict"',
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
