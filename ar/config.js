var config = {
    style: 'mapbox://styles/daltonwb/ckz3003hx001e14p3gmu3o4fc',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: '<a href="https://www.crisisgroup.org" target="_blank"><img src="../images/icg-oj.png" width="60" height="60" /></a><br /><h1>الصراع الاقتصادي في اليمن</h1>',
    subtitle: '',
    byline: '',
    footer: '<h4>أسماء المشاركين</h4>المساهم الرئيسي: بيتر سالزبوري<br />المؤثرات البصرية: بول فرانز<br />تحليل البيانات: كيفين مازور<br />دعم: فينا علي-خان<br /><br /></div><h4 id="footerpara">مصادر البيانات</h4> <div class="data-sources">OpenStreetMap، Mapbox وفريق جماعة Mapbox<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">سياسة الخصوصية والاعتبارات القانونية</a></div>',
    chapters: [
        {
            id: '00',
            alignment: 'left',
            hidden: false,
            title: 'اليمن',
            image: '',
            description: 'اليمن دولة يبلغ عدد سكانها نحو 30 مليون نسمة. تقع على الزاوية الجنوبية الغربية لشبه الجزيرة العربية، وتحدها المملكة العربية السعودية، وعمان، وخطوط الشحن البحري في البحر الأحمر وخليج عدن&#1748;',
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
              },
              {
                  layer: 'sanaa',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'sanaa-dot',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'sanaa-blur',
                  duration: 2000,
                  opacity: 0
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
            description: 'اليمن في حالة حرب منذ مطلع عام 2015، عندما حاول المتمردون الحوثيون وحلفاؤهم السيطرة على البلاد، وحاول تدخل   عسكري بقيادة السعودية، وفشل، في إخراجهم من العاصمة، صنعاء&#1748;<br /><br /> تظهر هذه الخريطة التحولات في السيطرة على مستوى المديريات والمواقع الرئيسية للصراع العنيف في سائر أنحاء اليمن اعتباراً من عام 2015 فصاعداً&#1748;‎',
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
              },
              {
                  layer: 'sanaa',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'sanaa-dot',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'sanaa-blur',
                  duration: 2000,
                  opacity: 1
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
            description: 'تدور الحرب اسمياً بين الحوثيين، الذين يتلقون الدعم من إيران، وحكومة الرئيس عبد ربه منصور هادي المعترف بها دولياً، والمدعومة من المملكة العربية السعودية	&#1748;',
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
            description: 'في الواقع فإن القوى الكثيرة المعادية للحوثيين على الأرض حاربت ضد المتمردين وضد بعضها بعضاً على حد سواء.',
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
            description: 'بحلول عام 2020، كنت البلاد قد انقسمت إلى خمس مناطق تقريباً للسيطرة السياسية والعسكرية. يسيطر الحوثيون على شمال غرب اليمن، وهي المنطقة الأكثر كثافة سكانية في البلاد، وخصوصاً صنعاء، مركزها التاريخي، والسياسي، والتجاري.',
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
              },
              {
                  layer: 'sanaa',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'sanaa-dot',
                  duration: 2000,
                  opacity: 1
              },
              {
                  layer: 'sanaa-blur',
                  duration: 2000,
                  opacity: 1
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
              },
              {
                  layer: 'sanaa',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'sanaa-dot',
                  duration: 2000,
                  opacity: 0
              },
              {
                  layer: 'sanaa-blur',
                  duration: 2000,
                  opacity: 0
              }
          ]
        },
        {
            id: '01E',
            alignment: 'left',
            hidden: false,
            title: 'الوقت الحاضر',
            image: '',
            description: 'لقد قطعت الحرب الطرقات، وقسمت السيطرة على موانئ ومطارات اليمن، التي أغلق عدد كبير منها.',
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
            title: 'في البداية، اقتصاد موحد',
            image: '',
            description: 'في السنوات الأولى للحرب، لم تمتد هذه الانقسامات لتشمل الاقتصاد، الذي ظل موحداً إلى حد كبير. على سبيل المثال، فقد ظلت أسعار القمح هي نفسها في سائر أنحاء البلاد.<br /><br /><div class="flourish-embed flourish-chart" data-src="visualisation/8574224" style="padding: 0 !important;"></div>',
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
            description: '<h2 class="liftout">لكن الوضع تغير منذ مطلع عام 2020. فقد بات اليمن مقسماً اليوم بشكل عام إلى منطقتين اقتصاديتين، واحدة يسيطر عليها الحوثيون، والثانية تمتد على جميع المناطق التي تسيطر عليها الحكومة اسمياً.</h2>',
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
            title: 'انقسام اقتصادي',
            image: '',
            description: 'أسعار القمح أكثر من تضاعفت في مناطق الحكومة منذ عام 2019. ورواتب معظم اليمنيين لم تعدَّل لتتناسب مع التضخم، وبالتالي فإن الأسعار تخفض القوة الشرائية للسكان إلى النصف.<br /><br /><div class="flourish-embed flourish-chart" data-src="visualisation/8574264" style="padding: 0 !important;"></div>',
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
            description: '<h2 class="liftout">لماذا انقسم الاقتصاد؟ الجواب هو أن الحرب اليمنية ليست حرباً عسكرية وسياسية وحسب&#1748;<br /><br /> إنها صراع اقتصادي أيضاً. صراع قتل فيه من اليمنيين أكثر مما قتل على جبهات القتال&#1748;</h2>',
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
            description: 'لقد تطور الصراع الاقتصادي على عدة مراحل مختلفة. أولاً، في عام 2016 بعد انهيار محادثات السلام في الكويت، نقلت الحكومة مقر البنك المركزي اليمني من صنعاء التي يسيطر عليها الحوثيون إلى عاصمتها المؤقتة في عدن&#1748;<br /><br /> اعتقدت الحكومة أن هذا سيعطيها ميزة اقتصادية على الحوثيين. سعت إلى حرمانهم من الوصول إلى احتياطيات البنك بالريال اليمني والعملات الصعبة مثل الدولار، والأكثر أهمية إعادة فرض سيطرتها على التدفقات المالية من وإلى البلاد عبر النظام المصرفي&#1748;',
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
            title: 'مراحل الحرب الاقتصادية',
            image: '',
            description: 'ثم، في عام 2018، شنت قوات مدعومة من الإمارات العربية المتحدة حملة عسكرية للسيطرة على ميناء الحديدة على البحر الأحمر الذي يسيطر عليه الحوثيون.',
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
          description: 'كالرياض، جادلت أبو ظبي أن الحوثيين كانوا يهربون الأسلحة إلى اليمن عبر الحديدة. كما رأت الإمارات أن الحديدة مهمة لأن الحوثيين كانوا يكسبون الكثير من المال بفرض الضرائب على السلع الداخلة إلى الميناء. حينذاك، كان نصف واردات اليمن من الغذاء والوقود يدخل البلاد عبر الحديدة.',
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
          title: 'وقف إطلاق النار في ستوكهولم',
          image: '../images/stockholm.jpeg',
          description: 'إلاّ أن الأمم المتحدة وجهات أخرى شعرت بالقلق من أن معركة للسيطرة على الحديدة ستعطل الواردات بشكل كبير، الأمر الذي سيتسبب في "مجاعة هائلة"، ويمكن أن يتردى إلى حرب مدن وحشية. وهكذا، توسطت الأمم المتحدة في التوصل إلى اتفاق في كانون الأول/ديسمبر  هو اتفاق  ستوكهولم، لمنع وقوع معركة ونزع السلاح من المنطقة.<p class="footnote">(Image: Government of Sweden)</p>',
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
            description: '<h2 class="liftout">أوقف اتفاق ستوكهولم القتال في الحديدة، لكنه لم ينهِ الحرب؛ حيث استمر القتال وتصاعد الصراع الاقتصادي.</h2>',
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
            description: 'أصدرت الحكومة عدداً من القوانين الجديدة لجعل إدخال السلع إلى اليمن عن طريق الحديدة أكثر صعوبة على التجار، ولإجبارهم على استعمال البنك المركزي في عدن لتحويل الأموال من وإلى البلاد&#1748;<br /><br /> بدا أن الحكومة تستعمل مكانتها القانونية لفعل ما مُنع التحالف من فعله عسكرياً، أي قطع الدخل عن الحوثيين من الحديدة وزيادة دخلها هي، مع تدفق المزيد من التجارة عبر الموانئ الواقعة تحت سيطرتها الاسمية&#1748;',
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
            description: 'في عام 2019، وبمساعدة السعودية، بدأت الحكومة بتأخير منح الموافقات على واردات الوقود إلى الحديدة. تظهر هذه الخريطة الرحلة التي قطعتها شحنة وقود إلى الحديدة عام 2019. الخط المنقط يظهر مسار السفينة، والدوائر تظهر عدد الأيام التي رست فيها في مواقع مختلفة على الطريق. احتجزت السفينة في منطقة الحجر التي تشرف عليها السعودية لمدة 60 يوماً قبل أن تمنح الإذن بدخول الحديدة.',
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
            description: 'رداً على ذلك، في نهاية عام 2019، حظر الحوثيون تداول الريال اليمني الجديد الذي كانت الحكومة تطبعه منذ عام 2017 لدفع الرواتب وتكاليف أخرى. الحكومة أكثر من ضاعفت المعروض من العملة اليمنية. قال الحوثيون إن العملة الجديدة كانت تؤدي إلى التضخم وتُفاقم الأزمة الاقتصادية.<div class="flourish-embed flourish-chart" data-src="visualisation/8312606" style="padding: 0 !important;"></div>',
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
            description: 'تظهر هذا الخريطة تركيز السكان في اليمن ومن يسيطر على المديريات التي يعيشون فيها. الغالبية الساحقة من اليمنيين، ربما أكثر من 20 مليون نسمة، يعيشون في المناطق التي يسيطر عليها الحوثيون.',
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
            title: 'تقييم العملة في عام 2017',
            image: '',
            description: 'بحظر أوراق العملة الجديدة، أغرق الحوثيون المناطق ذات الكثافة السكانية الأقل فعلياً بأوراق العملة الجديدة التي كانت الحكومة قد طبعتها. وبدأ الريال بالانخفاض مقابل الدولار في المناطق الواقعة خارج سيطرة الحوثيين. تظهر هذه الخريطة سعر صرف الريال مقابل الدولار في أجزاء مختلفة من اليمن عام 2017، عندما كان موحداً تقريباً في سائر أنحاء البلاد.',
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
            title: 'تقييم العملة في نهاية عام 2021',
            image: '',
            description: 'كما تظهر هذه الخريطة، فإنه بحلول حزيران/يونيو 2021 كان سعر دولار واحد في المناطق الخاضعة اسمياً للحكومة يتجاوز بكثير سعره في المناطق الواقعة تحت سيطرة الحوثيين، حيث ظل سعر الصرف مستقراً نسبياً.',
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
            description: '<h2 class="liftout">تضافرت هذه الصراعات للسيطرة على الوقود والعملة لتعميق الكارثة الاقتصادية والإنسانية في اليمن وتعميق الانقسامات السياسية. <u>كما أنها أحدثت آثاراً عكسية على الحكومة&#1748;</u></h2>‎',
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
            title: 'تضاعف أسعار الأغذية',
            image: '',
            description: 'في المناطق الواقعة تحت سيطرة الحكومة بوجه خاص، ارتفعت كلفة السلع الأساسية بشكل كبير جداً بحيث ارتفع سعر سلة الغذاء العادية التي تشتريها أسرة متوسطة إلى الضعف منذ كانون الثاني/يناير 2020.<div class="flourish-embed flourish-chart" data-src="visualisation/8574353" style="padding: 0 !important;"></div>',
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
            title: 'نظرة مقارنة',
            image: '',
            description: 'يمكن تفسير هذه الزيادة بانخفاض قيمة الريال في مناطق الحكومة.<div class="flourish-embed flourish-chart" data-src="visualisation/8574372" style="padding: 0 !important;"></div>',
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
            title: 'نظرة مقارنة',
            image: '',
            description: 'كما ارتفعت أسعار الوقود أيضاً في مناطق الحوثيين والمناطق الأخرى على حد سواء. ويعود هذا الارتفاع في الأسعار جزئياً إلى حصار الوقود الذي فرضته الحكومة والسعودية على الحديدة منذ كانون الثاني/يناير 2021 وإلى ارتفاع الأسعار في الأسواق العالمية. كما تسبب فيه انخفاض قيمة الريال في المناطق التي لا يسيطر عليها الحوثيون.<div class="flourish-embed flourish-chart" data-src="visualisation/8574394" style="padding: 0 !important;"></div>',
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
            title: 'دخل الحوثيين',
            image: '',
            description: 'وثمة سبب آخر ؛ إذ يتهم خصوم الحوثيين هؤلاء برفع أسعار الوقود في مناطقهم لتعويض الدخل الذي فقدوه بسبب الحظر على شحنات الوقود، وحتى زيادة أيراداتهم بينما يتم تحميل المسؤولية للحكومة.',
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
     description: 'كما يساعد ارتفاع أسعار الوقود في مناطق الحوثيين على تفسير النقص المتزايد للوقود في مناطق سيطرة الحكومة، رغم ارتفاع واردات الوقود إلى الموانئ الواقعة تحت سيطرتها. يمكن للتجار أن يجنوا مبالغ أكبر من المال بنقل الوقود إلى المناطق الواقعة تحت سيطرة الحوثيين مما يحققونه من بيعه في المناطق الواقعة تحت سيطرة الحكومة والمخاطرة بخسارة المال بسبب أزمة التضخم هناك&#1748;<br /><br /> صورة الأقمار الصناعية هذه تظهر منطقة احتجاز ناقلات النفط الداخلة إلى مناطق سيطرة الحوثيين. لقد أصبحت مزدحمة على نحو متزايد منذ عام 2018&#1748;<p class="footnote">(©CNES 2021, Distribution AIRBUSDS)</p>',
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
     title: 'الاحتجاجات',
     image: '',
     description: 'لقد دفعت الأزمة النقدية ونقص الوقود والكهرباء إلى خروج احتجاجات في معظم المدن الكبيرة الواقعة تحت السيطرة الاسمية للحكومة. تعز، وعدن، وعتق والمكلا جميعها هزتها الاحتجاجات في عام 2021.',
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
            alignment: 'center',
            hidden: false,
            title: 'إذاً، ما الذي يمكن فعله؟',
            image: '../images/yemen_end_frame.jpg',
            description: 'لا يتعين على هانز غروندبيرغ، مبعوث الأمم المتحدة الجديد إلى اليمن التوسط للتوصل إلى هدنة عسكرية وتسوية سياسية وحسب. بل ينبغي عليه أيضاً أن يتوصل إلى وقف إطلاق نار اقتصادي&#1748;<br /><br /> لمعرفة المزيد عن الصراع الاقتصادي وكيف يمكن لوقف إطلاق النار الاقتصادي أن يبدو، اقرأ التقرير الجديد لمجموعة الأزمات، <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/231-brokering-ceasefire-yemens-economic-conflict" target="_blank">"التوسط في وقف إطلاق للنار في الصراع الاقتصادي في اليمن"</a>&#1748;<p class="footnote">(Image: Yemenis walk past burning tires during protests calling for the removal of the Saudi-backed coalition government and deteriorating economic and living conditions, in Yemen’s third city of Taiz on 27 September 2021. CRISIS GROUP / Ahmad Al-Basha)</p>',
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
