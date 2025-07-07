const an2024 = {
  an: 2024,
  subiecte: [
    {
      tip: "bac2024",
      nume: "Examenul național de bacalaureat 2024",
      info: "Toate subiectele sunt obligatorii. Se acordă zece puncte din oficiu.",
      puncte: [
        {
          cerinta:
            "Harta de mai sus se referă la subiectul I A – E. Pe hartă sunt marcate state cu litere şi oraşe - capitală cu numere.",
          imagine: "examen2024-s1.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizati:",
                intrebari: [
                  {
                    intrebare: "numele statului marcat, pe hartă, cu litera C;",
                    raspunsuri: ["Finlanda"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "numele oraşului-capitală marcat, pe hartă, cu numărul 10.",
                    raspunsuri: ["Berlin"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală marcat, pe hartă, cu numărul 3 se numește... ",
                    raspunsuri: ["Atena"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Fluviul Tamisa străbate orașul-capitală marcat, pe hartă, cu numărul ... ",
                    raspunsuri: ["15"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera A se numește...",
                    raspunsuri: ["Danemarca"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  "Scrieţi, pe foaia de examen, doar litera (a, b, c sau d) corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală al statului marcat, pe hartă, cu litera F se numește:",
                    optiuni: ["Amsterdam", "Berna", "Bruxelles", "Luxembourg"],
                    raspunsuri: ["Bruxelles"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul-capitală al statului marcat, pe hartă, cu litera I este străbătut de fluviul:",
                    optiuni: ["Dunărea", "Pad", "Rin (Rhin)", "Sena"],
                    raspunsuri: ["Dunărea"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "În statul marcat, pe hartă, cu litera B se află versantul sudic al Munților:",
                    optiuni: ["Alpi", "Apenini", "Carpați", "Pirinei"],
                    tip: "alegere",
                    raspunsuri: ["Pirinei"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera G se numește:",
                    optiuni: [
                      "Albania",
                      "Bosnia și Herțegovina",
                      "Croația",
                      "Slovenia",
                    ],
                    tip: "alegere",
                    raspunsuri: ["Albania"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul-capitală marcat, pe hartă, cu numărul 12 se numește:",
                    optiuni: ["Copenhaga", "Helsinki", "Oslo", "Stockholm"],
                    tip: "alegere",
                    raspunsuri: ["Stockholm"],
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între clima statului marcat, pe hartă, cu litera E şi clima statului marcat, pe hartă, cu litera H.",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "În statul marcat cu litera E este mai frig decât în statul marcat cu litera H.",
                      "În statul marcat cu litera E, verile sunt răcoroase, cu temperaturi medii sub 15°C, în timp ce în statul marcat cu litera H, verile sunt calde, cu temperaturi care pot depăși frecvent 25°C.",
                      "Statul marcat cu litera E are o climă influențată de ocean, cu vânturi frecvente și umiditate ridicată, în timp ce statul marcat cu litera H are o climă continentală, cu vânturi mai slabe și precipitații distribuite inegal.",
                      "Statul marcat cu litera H are o climă tropicală, cu temperaturi constante tot anul, spre deosebire de statul marcat cu litera E, unde este mult mai uscat.",
                      "În statul marcat cu litera H, amplitudinea termică este mai ridicată, cu diferențe mari între vară și iarnă, în timp ce în statul marcat cu litera E, amplitudinea termică este redusă, datorită influenței oceanului.",
                    ],
                    raspunsuri: [
                      "În statul marcat cu litera E, verile sunt răcoroase, cu temperaturi medii sub 15°C, în timp ce în statul marcat cu litera H, verile sunt calde, cu temperaturi care pot depăși frecvent 25°C.",
                      "Statul marcat cu litera E are o climă influențată de ocean, cu vânturi frecvente și umiditate ridicată, în timp ce statul marcat cu litera H are o climă continentală, cu vânturi mai slabe și precipitații distribuite inegal.",
                      "În statul marcat cu litera H, amplitudinea termică este mai ridicată, cu diferențe mari între vară și iarnă, în timp ce în statul marcat cu litera E, amplitudinea termică este redusă, datorită influenței oceanului.",
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2, //2 per bifa corecta
                  },
                ],
              },
              E: {
                cerinta: "Precizați numele a:",
                intrebari: [
                  {
                    intrebare:
                      "două orașe din statul marcat, pe hartă, cu litera D.",
                    optiuni: ["Zagreb", "Sofia", "Burgas", "Chișinău", "Viena"],
                    raspunsuri: ["Sofia", "Burgas"],
                    tip: "alegere-speciala",
                    punctaj: 1, // 1 per raspuns corect
                  },
                  {
                    intrebare:
                      "două unități de relief din statul marcat, pe hartă, cu litera D.",
                    optiuni: [
                      "Munții Tatra",
                      "Podisul Transilvaniei",
                      "Munții Balcani",
                      "Câmpia Traciei",
                      "Câmpia Panonică",
                    ],
                    raspunsuri: ["Munții Balcani", "Câmpia Traciei"],
                    tip: "alegere-speciala",
                    punctaj: 1, //per raspuns corect
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Harta de mai sus se referă la subiectul II A – E. Pe hartă sunt marcate unităţi de relief cu litere, râuri cu numere de la 1 la 6 şi oraşe cu numere de la 7 la 12.",
          imagine: "examen2024-s2.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizati:",
                intrebari: [
                  {
                    intrebare:
                      "numele oraşului marcat, pe hartă, cu numărul 11;",
                    raspunsuri: ["Brașov"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare: "numele râului marcat, pe hartă, cu numărul 5.",
                    raspunsuri: ["Bistrița"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Râul marcat, pe hartă, cu numărul 1 se numește ...",
                    raspunsuri: ["Prut"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 10 se numește...",
                    raspunsuri: ["Arad"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Munții Banatului reprezintă unitatea de relief marcată, pe hartă, cu litera ... ",
                    raspunsuri: ["F"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  "Scrieţi, pe foaia de examen, doar litera (a, b, c sau d) corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 9 este străbătut de râul:",
                    optiuni: ["Jijia", "Moldova", "Siret", "Suceava"],
                    raspunsuri: ["Suceava"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "În unitatea de relief marcată, pe hartă, cu litera E pătrund influențe climatice:",
                    optiuni: [
                      "continentale (de ariditate)",
                      "oceanice",
                      "pontice",
                      "submediteraneene",
                    ],
                    raspunsuri: ["oceanice"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Râul marcat, pe hartă, cu numărul 2 străbate orașul:",
                    optiuni: ["Baia Mare", "Oradea", "Satu Mare", "Timișoara"],
                    raspunsuri: ["Oradea"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "În unitatea de relief marcată, pe hartă, cu litera A există resurse de: ",
                    optiuni: [
                      "minereuri neferoase",
                      "minereuri de aur și argint",
                      "minereu de fier",
                      "petrol și gaze naturale",
                    ],
                    raspunsuri: ["petrol și gaze naturale"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 8 se numește:",
                    optiuni: [
                      "Craiova",
                      "Râmnicu Vâlcea",
                      "Slatina",
                      "Târgu Jiu",
                    ],
                    raspunsuri: ["Slatina"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între relieful unităţii marcate, pe hartă, cu litera D şi relieful unităţi marcate, pe hartă, cu litera H",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "Unitatea marcată cu litera D are altitudini ridicate, frecvent peste 2000 m, în timp ce unitatea marcată cu litera H prezintă altitudini joase, sub 200 m.",
                      "Unitatea marcată cu litera H este alcătuită în principal din relief glaciar, în timp ce unitatea marcată cu litera D este formată din relief vulcanic.",
                      "Ambele unități, D și H, sunt caracterizate de același tip de roci și au un grad de fragmentare similar.",
                      "Relieful din unitatea marcată cu litera D este format predominant din roci cristaline și metamorfice, în timp ce relieful din unitatea marcată cu litera H s-a format pe roci sedimentare.",
                      "În unitatea marcată cu litera D se remarcă un grad mare de fragmentare, cu văi adânci și versanți abrupți, pe când în unitatea marcată cu litera H fragmentarea este redusă, relieful având forme line și întinse.",
                    ],
                    raspunsuri: [
                      "Unitatea marcată cu litera D are altitudini ridicate, frecvent peste 2000 m, în timp ce unitatea marcată cu litera H prezintă altitudini joase, sub 200 m.",
                      "Relieful din unitatea marcată cu litera D este format predominant din roci cristaline și metamorfice, în timp ce relieful din unitatea marcată cu litera H s-a format pe roci sedimentare.",
                      "În unitatea marcată cu litera D se remarcă un grad mare de fragmentare, cu văi adânci și versanți abrupți, pe când în unitatea marcată cu litera H fragmentarea este redusă, relieful având forme line și întinse.",
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2, //2 puncte per bifa corecta
                  },
                ],
              },
              E: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Prezentați modul în care un factor natural a contribuit la formarea unității de relief marcate, pe hartă, cu litera C.",
                    optiuni: [
                      "Relieful unității C s-a format prin eroziunea ghețarilor.",
                      "Activitatea vulcanică a dus la formarea reliefului unității C.",
                      "Cutările tectonice au generat înălțimi de peste 2000 m în unitatea C.",
                      "Depunerile de aluviuni aduse de fluviu au contribuit la formarea reliefului unității C.",
                      "Relieful unității C este format din roci metamorfice și magmatice.",
                    ],
                    raspunsuri: [
                      "Depunerile de aluviuni aduse de fluviu au contribuit la formarea reliefului unității C.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Precizați numele a două orașe cu peste 50.000 de locuitori situate în subunitatea de relief marcată, pe hartă, cu litera B.",
                    optiuni: [
                      "Ploiești",
                      "Buzău",
                      "Târgu Jiu",
                      "Tulcea ",
                      "Oradea",
                    ],
                    raspunsuri: ["Ploiești", "Buzău"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                    //1 puncter per desebire corecta
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Reprezentarea grafică de mai jos se referă la subiectul III A-B și prezintă bilanțul (sporul) natural în Europa, în perioada 1950-2015. Sursa: population.un.org/wpp/DataQuery",
          imagine: "examen2024-s3.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizati:",
                intrebari: [
                  {
                    intrebare:
                      "valoarea maximă a bilanțului (sporului) natural, precum și perioada în care s-a înregistrat;",
                    optiuni: [
                      "Valoare: 10,6%, Perioada: 1955-1960",
                      "Valoare: 10,4%, Perioada: 1950-1955",
                      "Valoare: 10,9%, Perioada: 1960-1965",
                      "Valoare: 11,6%, Perioada: 1970-1975",
                      "Valoare: 11,4%, Perioada: 1980-1985",
                    ],
                    raspunsuri: ["Valoare: 10,6%, Perioada: 1955-1960"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "valoarea minimă a bilanțului (sporului) natural, precum și perioada în care s-a înregistrat.",
                    optiuni: [
                      "Valoare: -1%, Perioada: 1995-2000",
                      "Valoare: -0,5%, Perioada: 2010-2015",
                      "Valoare: 0,5%, Perioada: 1990-1995",
                      "Valoare: -1,5%, Perioada: 2000-2005",
                      "Valoare: -2%, Perioada: 2000-2005",
                    ],
                    raspunsuri: ["Valoare: -1,5%, Perioada: 2000-2005"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Calculați diferența dintre valoarea maximă și valoarea minimă a bilanțului (sporului) natural din Europa.",
                    optiuni: ["11,1%", "11,8%", "12,1%", "12,5%", "12,6%"],
                    raspunsuri: ["12,1%"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Calculați diferența dintre valoarea bilanțului (sporului) natural în perioada 1965-1970 și valoarea bilanțului (sporului) natural în perioada 1985-1990.",
                    optiuni: ["4%", "3.7%", "4,4%", "4,5%", "3,6%"],
                    raspunsuri: ["4%"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Prezentați o cauză care explică scăderea bilanțului (sporului) natural din Europa, începând din anul 1990.",
                    optiuni: [
                      "Creșterea accentuată a natalității în rândul tinerilor.",
                      "Explozia demografică produsă după 1990.",
                      "Creșterea numărului de căsătorii la vârste fragede.",
                      "Colonizarea unor teritorii europene de populații străine.",
                      "Scăderea natalității ca urmare a schimbărilor socio-economice.",
                    ],
                    raspunsuri: [
                      "Scăderea natalității ca urmare a schimbărilor socio-economice.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta: "Pentru Ungaria, precizaţi numele a:",
                intrebari: [
                  {
                    intrebare: "trei state vecine;",
                    optiuni: [
                      "Grecia",
                      "România",
                      "Slovacia",
                      "Cehia",
                      "Serbia",
                    ],
                    raspunsuri: ["România", "Slovacia", "Serbia"],
                    tip: "alegere-speciala",
                    punctaj: 1, //1 per raspuns corect
                  },
                  {
                    intrebare: "două unități de relief;",
                    optiuni: [
                      "Munții Tatra",
                      "Câmpia Panonică",
                      "Munții Mátra",
                      "Podișul Transilvaniei",
                      "Munții Pirinei",
                    ],
                    raspunsuri: ["Câmpia Panonică", "Munții Mátra"],
                    tip: "alegere-speciala",
                    punctaj: 1, //1 per raspuns corect
                  },
                  {
                    intrebare: "două ape curgătoare; ",
                    optiuni: ["Volga", "Seine ", "Dunărea", "Prut ", "Tisa"],
                    raspunsuri: ["Dunărea", "Tisa"],
                    tip: "alegere-speciala",
                    punctaj: 1, //1 per raspuns corect
                  },
                  {
                    intrebare: "trei orașe",
                    optiuni: [
                      "Szeged",
                      "Cluj-Napoca",
                      "Debrecen",
                      "Budapesta",
                      "Bratislava",
                    ],
                    raspunsuri: ["Budapesta", "Debrecen", "Szeged"],
                    tip: "alegere-speciala",
                    punctaj: 1, //1 per raspuns corect
                  },
                ],
              },
              D: {
                cerinta:
                  "Tabelul de mai jos prezintă temperaturile medii lunare în ianuarie și în iulie, la stațiile meteorologice din orașele Paris (48,8º latitudine N și 2,5º longitudine E) și Kiev (50,4º latitudine N și 30,5º longitudine E).",
                imagine: "examen2024-s3D.png",
                intrebari: [
                  {
                    intrebare:
                      "Calculați amplitudinea termică medie anuală în orașul Paris.",
                    optiuni: ["15,2C", "15,1C", "15,3C", "14,9C", "15C"],
                    raspunsuri: ["15,1C"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Calculați amplitudinea termică medie anuală în orașul Kiev.",
                    optiuni: ["24,4C", "24,3C", "24,6C", "24,7C", "24,5C"],
                    raspunsuri: ["24,5C"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      " Prezentați o cauză care explică diferența dintre valoarea amplitudinii termice anuale din cele două orașe, deși sunt situate la latitudini apropiate.",
                    optiuni: [
                      "Kiev are o amplitudine termică mai mare din cauza altitudinii foarte ridicate.",
                      "Paris are amplitudine termică mai mică pentru că este situat mai aproape de Ecuator.",
                      "Kiev are amplitudine termică mai mare pentru că se află pe litoral.",
                      "Paris are o amplitudine termică mai mare deoarece este afectat de vânturi reci din Siberia.",
                      "Paris este influențat de Oceanul Atlantic, ceea ce determină o amplitudine termică mai mică față de Kiev, care are climă continentală.",
                    ],
                    raspunsuri: [
                      "Paris este influențat de Oceanul Atlantic, ceea ce determină o amplitudine termică mai mică față de Kiev, care are climă continentală.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: "Prezentați o cauză care explică:",
                intrebari: [
                  {
                    intrebare:
                      "suprafețele mari cultivate cu cereale în Câmpia de Vest;",
                    optiuni: [
                      "Altitudinea mare și pantele abrupte sunt ideale pentru cultivarea cerealelor.",
                      "Prezența numeroaselor lacuri glaciare determină extinderea culturilor de cereale.",
                      "Solurile fertile și relieful jos, neted, favorizează cultivarea cerealelor în Câmpia de Vest.",
                      "Climatul rece și umed din Câmpia de Vest limitează culturile, dar favorizează creșterea cerealelor.",
                      "Câmpia de Vest este acoperită în mare parte de păduri, unde se cultivă cereale printre arbori.",
                    ],
                    raspunsuri: [
                      "Solurile fertile și relieful jos, neted, favorizează cultivarea cerealelor în Câmpia de Vest.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "lipsa viețuitoarelor în stratul de adâncime al apelor Mării Negre",
                    optiuni: [
                      "Concentrația ridicată de hidrogen sulfurat în straturile de adâncime face mediul toxic pentru viețuitoare.",
                      "Lipsa totală a oxigenului în Marea Neagră împiedică dezvoltarea viețuitoarelor și la suprafață.",
                      "Salinitatea extrem de scăzută în adâncime face imposibilă viața marină.",
                      "Valurile puternice de la suprafață afectează condițiile din adâncime.",
                      "Apele Mării Negre îngheață frecvent până la fund, ceea ce duce la dispariția viețuitoarelor.",
                    ],
                    raspunsuri: [
                      "Concentrația ridicată de hidrogen sulfurat în straturile de adâncime face mediul toxic pentru viețuitoare.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      tip: "simulareBac2024",
      nume: "Simulare examen național de bacalaureat 2024",
      info: "Toate subiectele sunt obligatorii. Se acordă zece puncte din oficiu.",
      puncte: [
        {
          cerinta:
            "Harta de mai sus se referă la subiectul I A – E. Pe hartă sunt marcate state cu litere şi oraşe - capitală cu numere.",
          imagine: "simulare2024-s1.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizaţi:",
                intrebari: [
                  {
                    intrebare: "numele statului marcat, pe hartă, cu litera F;",
                    raspunsuri: ["Polonia"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "numele oraşului-capitală marcat, pe hartă, cu numărul 5",
                    raspunsuri: ["Chișinău"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală marcat, pe hartă, cu numărul 1 se numește ...",
                    raspunsuri: ["Dublin"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera I se numește ...",
                    raspunsuri: ["Elveția"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      " Orașul Podgorica este capitala statului marcat, pe hartă, cu litera ...",
                    raspunsuri: ["D"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  "Scrieţi, pe foaia de examen, litera corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos: ",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală marcat, pe hartă, cu numărul 7 se numește:",
                    optiuni: ["Sarajevo", "Skopje", "Tirana", "Zagreb"],
                    raspunsuri: ["Skopje"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul-capitală Amsterdam este marcat, pe hartă, cu numărul:",
                    optiuni: ["8", "10", "13", "14"],
                    raspunsuri: ["8"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Fluviul Nipru străbate orașul-capitală marcat, pe hartă, cu numărul:",
                    optiuni: ["2", "4", "5", "11"],
                    tip: "alegere",
                    raspunsuri: ["4"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera B se numește:",
                    optiuni: [
                      "Belarus",
                      "Estonia",
                      "Finlanda",
                      "Lituania",
                    ],
                    tip: "alegere",
                    raspunsuri: ["Finlanda"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "În partea de nord-est a statului marcat, pe hartă, cu litera A se află Munții:",
                    optiuni: ["Apenini", "Carpați", "Dinarici", "Pirinei"],
                    tip: "alegere",
                    raspunsuri: ["Pirinei"],
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între clima statului marcat, pe hartă, cu litera E şi clima statului marcat, pe hartă, cu litera H.",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "În statul marcat cu litera E, amplitudinea termică anuală este redusă datorită influenței oceanice, pe când în statul marcat cu litera H, diferențele dintre vară și iarnă sunt mai mari.",
                      "În statul marcat cu litera H, verile sunt calde și uscate, cu temperaturi ce depășesc 30°C, în timp ce în statul marcat cu litera E, verile sunt răcoroase, cu temperaturi în jur de 15–18°C.",
                      "Statul marcat cu litera H este influențat predominant de mase de aer polare reci, în timp ce statul marcat cu litera E este influențat de mase de aer tropicale uscate.",
                      "În statul marcat cu litera E, precipitațiile sunt reduse tot timpul anului, în timp ce în statul marcat cu litera H, precipitațiile sunt bogate și frecvente tot anul.",
                      "Statul marcat cu litera E are o climă oceanică, cu influențe maritime evidente, în timp ce statul marcat cu litera H are o climă mediteraneană, cu veri secetoase și ierni blânde."
                    ],
                    raspunsuri: [
                      "Statul marcat cu litera E are o climă oceanică, cu influențe maritime evidente, în timp ce statul marcat cu litera H are o climă mediteraneană, cu veri secetoase și ierni blânde.",
                      "În statul marcat cu litera E, amplitudinea termică anuală este redusă datorită influenței oceanice, pe când în statul marcat cu litera H, diferențele dintre vară și iarnă sunt mai mari.",
                      "În statul marcat cu litera H, verile sunt calde și uscate, cu temperaturi ce depășesc 30°C, în timp ce în statul marcat cu litera E, verile sunt răcoroase, cu temperaturi mai mici."
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Explicați faptul că în statul marcat, pe hartă, cu litera G densitatea populației este mare.",
                    optiuni: ["Statul este situat într-o zonă cu relief predominant muntos, ceea ce favorizează densitatea mare a populației.",
                      "Densitatea populației este mare deoarece statul are o climă polară, ceea ce determină concentrarea populației în sud.",
                      "Este un stat puternic industrializat, cu multe orașe dezvoltate și infrastructură avansată, ceea ce atrage populația și duce la o densitate mare pe un teritoriu relativ mic.",
                      "Populația se concentrează în zonele rurale din cauza agriculturii tradiționale, ceea ce explică densitatea mare.",
                      "Densitatea este ridicată deoarece statul este foarte întins și majoritatea teritoriului este nelocuit."],
                    raspunsuri: ["Este un stat puternic industrializat, cu multe orașe dezvoltate și infrastructură avansată, ceea ce atrage populația și duce la o densitate mare pe un teritoriu relativ mic."],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Precizați numele a două unități de relief din statul marcat, pe hartă, cu litera C.",
                    optiuni: [
                      "Câmpia Panonică",
                      "Munții Matra",
                      "Munții Pirinei",
                      "Câmpia Padului",
                      "Alpii Dinarici"
                    ],
                    raspunsuri: ["Câmpia Panonică", "Munții Matra"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Harta de mai sus se referă la subiectul II A – D. Pe hartă sunt marcate unităţi de relief cu litere, râuri cu numere de la 1 la 6 şi oraşe cu numere de la 7 la 12.",
          imagine: "simulare2024-s2.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizaţi:",
                intrebari: [
                  {
                    intrebare:
                      "numele oraşului marcat, pe hartă, cu numărul 11;",
                    raspunsuri: ["Sibiu"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare: "numele râului marcat, pe hartă, cu numărul 4.",
                    raspunsuri: ["Bârlad"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 8 se numește ...",
                    raspunsuri: ["Tulcea"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Influențe climatice submediteraneene pătrund în unitatea de relief marcată, pe hartă, cu litera ...",
                    raspunsuri: ["H"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Râul marcat, pe hartă, cu numărul 5 se numește ...",
                    raspunsuri: ["Prut"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  "Scrieţi, pe foaia de examen, litera corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 7 este străbătut de râul:",
                    optiuni: ["Bistrița", "Moldova", "Siret", "Suceava"],
                    raspunsuri: ["Suceava"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Soluri din clasa molisoluri (de tip cernoziom) se găsesc pe suprafețe mari în unitățile de relief marcate, pe hartă, cu literele:",
                    optiuni: [
                      "A și F",
                      "B și C ",
                      "D și E",
                      "G și H",
                    ],
                    raspunsuri: ["A și F"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Relief vulcanic s-a format în unitatea de relief marcată, pe hartă, cu litera:",
                    optiuni: ["A", "D", "E", "G"],
                    raspunsuri: ["D"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Râul marcat, pe hartă, cu numărul 6 se numește:",
                    optiuni: [
                      "Barcău",
                      "Crișul Repede",
                      "Mureș",
                      "Someș",
                    ],
                    raspunsuri: ["Someș"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 9 se numește:",
                    optiuni: [
                      "Alexandria",
                      "Craiova",
                      "Râmnicu Vâlcea",
                      "Slatina",
                    ],
                    raspunsuri: ["Slatina"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între relieful unităţii marcate, pe hartă, cu litera C şi relieful unităţii marcate, pe hartă, cu litera E.",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "Unitatea marcată cu litera C este formată din munți cu altitudini mari, în timp ce unitatea marcată cu litera E este o câmpie cu altitudini mici.",
                      "Relieful unității marcate cu litera C este fragmentat de numeroase văi adânci și culmi orientate nord-sud, în timp ce în unitatea marcată cu litera E predomină suprafețele netede, slab fragmentate.",
                      "În unitatea marcată cu litera C se întâlnesc frecvent formațiuni carstice (pe roci calcaroase), în timp ce în unitatea marcată cu litera E astfel de forme lipsesc.",
                      "Unitatea marcată cu litera C are numeroase văi glaciare și ghețari activi, în timp ce unitatea marcată cu litera E este un podiș înalt, de peste 2000 m altitudine.",
                      "În unitatea marcată cu litera E predomină rocile vulcanice dure, în timp ce în unitatea marcată cu litera C predomină depozitele nisipoase și argiloase."
                    ],
                    raspunsuri: [
                      "Unitatea marcată cu litera C este formată din munți cu altitudini mari, în timp ce unitatea marcată cu litera E este o câmpie cu altitudini mici.",
                      "Relieful unității marcate cu litera C este fragmentat de numeroase văi adânci și culmi orientate nord-sud, în timp ce în unitatea marcată cu litera E predomină suprafețele netede, slab fragmentate.",
                      "În unitatea marcată cu litera C se întâlnesc frecvent formațiuni carstice (pe roci calcaroase), în timp ce în unitatea marcată cu litera E astfel de forme lipsesc."
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Prezentați o cauză și o consecință ale bilanțului (sporului) natural negativ al populației României.",
                    optiuni: [
                      "Scăderea natalității din cauza instabilității economice și a migrației tinerilor determină un spor natural negativ.",
                      "Populația României este mai numeroasă decât în anii 1990, ceea ce explică sporul negativ.",
                      "Creșterea numărului de spitale moderne duce la un spor natural negativ.",
                      "Sporul natural negativ determină reducerea populației active și îmbătrânirea demografică.",
                      "Natalitatea a scăzut, iar mortalitatea a crescut."
                    ],
                    raspunsuri: [
                      "Scăderea natalității din cauza instabilității economice și a migrației tinerilor determină un spor natural negativ.",
                      "Sporul natural negativ determină reducerea populației active și îmbătrânirea demografică."
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2,
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Reprezentarea grafică de mai jos se referă la subiectul III A-B și prezintă temperatura și precipitațiile medii lunare de la stația meteorologică din orașul-capitală Roma.",
          imagine: "simulare2024-s3.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizați:",
                intrebari: [
                  {
                    intrebare:
                      "valoarea minimă a temperaturii medii lunare, precum și luna în care se înregistrează;",
                    optiuni: [
                      "Valoare: 7.5, Luna: octombrie",
                      "Valoare: 6.9, Luna: decembrie",
                      "Valoare: 8, Luna: martie",
                      "Valoare: 7.5, Luna: ianuarie",
                      "Valoare: 6.9, Luna: februarie",
                    ],
                    raspunsuri: ["Valoare: 7.5, Luna: ianuarie"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "valoarea maximă a cantității de precipitații medii lunare, precum și luna în care se înregistrează.",
                    optiuni: [
                      "Valoare: 140 mm, Luna: februarie",
                      "Valoare: 133 mm, Luna: ianuarie",
                      "Valoare: 125 mm, Luna: decembrie",
                      "Valoare: 137 mm, Luna: octombrie",
                      "Valoare: 135 mm, Luna: noiembrie",
                    ],
                    raspunsuri: ["Valoare: 135 mm, Luna: noiembrie",],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Calculați amplitudinea termică medie anuală.",
                    optiuni: ["18%", "16%", "20%", "16.9%", "20.1%"],
                    raspunsuri: ["18%"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Calculați diferența dintre cea mai ridicată și cea redusă cantitate de precipitații medii lunare.",
                    optiuni: ["108 mm", "111 mm", "114 mm", "115 mm", "107 mm"],
                    raspunsuri: ["111 mm"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Precizați tipul de climă.",
                    optiuni: [
                      "climă mediteraneeană",
                      "climă subpolară",
                      "climă temperat-oceanică",
                      "climă temperat-continentală",
                      "climă montană",
                    ],
                    raspunsuri: [
                      "climă mediteraneeană",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta: "Pentru Serbia, precizaţi:",
                intrebari: [
                  {
                    intrebare: "numele a patru state vecine;",
                    optiuni: [
                      "România",
                      "Cehia",
                      "Bulgaria",
                      "Ungaria",
                      "Croația",
                    ],
                    raspunsuri: ["România", "Bulgaria", "Ungaria", "Croația"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare: "numele a două unități de relief;",
                    optiuni: [
                      "Munții Dinarici",
                      "Câmpia Panonică",
                      "Câmpia Padului",
                      "Munții Pirinei",
                      "Munții Scandinaviei"
                    ],
                    raspunsuri: ["Munții Dinarici", "Câmpia Panonică"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare: "numele a trei cursuri de apă; ",
                    optiuni: [
                      "Dunărea",
                      "Morava",
                      "Sava",
                      "Loara",
                      "Tibrul"
                    ],
                    raspunsuri: [
                      "Dunărea",
                      "Morava",
                      "Sava"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare: "numele orașului-capitală.",
                    optiuni: [
                      "Belgrad",
                      "Sofia",
                      "Zagreb",
                      "Podgorica",
                      "Budapesta"
                    ],
                    raspunsuri: ["Belgrad"],
                    tip: "alegere",
                    punctaj: 1,
                  },
                ],
              },
              D: {
                cerinta:
                  "Tabelul de mai jos se referă la subiectul III D-E și precizează numele a trei fluvii europene, precum și țara în care acestea își au izvoarele.",
                imagine: "simulare2024-s3D.png",
                intrebari: [
                  {
                    intrebare:
                      "Precizați numele: țării în care este situată gura de vărsare a fluviului Rin;",
                    optiuni: [
                      "Germania",
                      "Olanda",
                      "Franța",
                      "Belgia",
                      "Elveția"],
                    raspunsuri: ["Olanda"],
                    tip: "alegere",
                    punctaj: 1,
                  },
                  {
                    intrebare:
                      "Precizați numele: unității acvatice în care se varsă fluviul Sena;",
                    optiuni: [
                      "Marea Mânecii",
                      "Marea Nordului",
                      "Oceanul Atlantic",
                      "Marea Mediterană",
                      "Marea Neagră"],
                    raspunsuri: ["Marea Mânecii"],
                    tip: "alegere",
                    punctaj: 1,
                  },
                  {
                    intrebare:
                      "Precizați numele: a patru orașe-port situate la fluviul Dunărea.",
                    optiuni: [
                      "Galați",
                      "Brăila",
                      "Severin (Drobeta-Turnu Severin)",
                      "Tulcea",
                      "Cluj-Napoca"
                    ],
                    raspunsuri: [
                      "Galați",
                      "Brăila",
                      "Severin (Drobeta-Turnu Severin)",
                      "Tulcea"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
              E: {
                cerinta: "Precizați numele:",
                intrebari: [
                  {
                    intrebare:
                      "a trei unități de relief pe care le străbate sau le delimitează fluviul Dunărea;",
                    optiuni: [
                      "Câmpia Română",
                      "Podișul Dobrogei",
                      "Munții Banatului",
                      "Munții Apuseni",
                      "Podișul Transilvaniei"
                    ],
                    raspunsuri: [
                      "Câmpia Română",
                      "Podișul Dobrogei",
                      "Munții Banatului"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare:
                      "celui mai mare port fluvial, ca volum al traficului de mărfuri, situat pe fluviul Rin, în Germania.",
                    optiuni: [
                      "Hamburg",
                      "Stuttgart",
                      "Duisburg",
                      "Munchen",
                      "Hanovra"
                    ],
                    raspunsuri: [
                      "Duisburg",
                    ],
                    tip: "alegere",
                    punctaj: 1,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      tip: "bacAugust2024",
      nume: "Examenul național de bacalaureat August 2024",
      info: "Toate subiectele sunt obligatorii. Se acordă zece puncte din oficiu.",
      puncte: [
        {
          cerinta:
            "Harta de mai sus se referă la subiectul I A – D. Pe hartă sunt marcate state cu litere şi oraşe - capitală cu numere.",
          imagine: "examenAugust2024-s1.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizaţi:",
                intrebari: [
                  {
                    intrebare: "numele statului marcat, pe hartă, cu litera A;",
                    raspunsuri: ["Suedia"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "numele oraşului-capitală marcat, pe hartă, cu numărul 12.",
                    raspunsuri: ["Londra"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală marcat, pe hartă, cu numărul 2 se numește ...",
                    raspunsuri: ["Atena"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera J se numește ...",
                    raspunsuri: ["Croația"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Podișul numit Meseta se află în statul marcat, pe hartă, cu litera ...",
                    raspunsuri: ["B"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  " Scrieţi, pe foaia de examen, doar litera (a, b, c sau d) corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul-capitală Berna este marcat, pe hartă, cu numărul:",
                    optiuni: ["1", "4", "5", "6"],
                    raspunsuri: ["1"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Se cultivă trandafiri pe suprafețe mari în Valea Trandafirilor (străbătută de râurile Marița și Tundja) în statul marcat, pe hartă, cu litera:",
                    optiuni: ["E", "G", "H", "I"],
                    raspunsuri: ["G"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul-capitală al statului marcat, pe hartă, cu litera E se numește: ",
                    optiuni: ["Bratislava", "Budapesta", "Praga", "Viena"],
                    tip: "alegere",
                    raspunsuri: ["Bratislava"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Statul marcat, pe hartă, cu litera I se numește:",
                    optiuni: [
                      "Belarus",
                      "Estonia",
                      "Letonia",
                      "Lituania",
                    ],
                    tip: "alegere",
                    raspunsuri: ["Lituania"],
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Vulcani activi există în statul marcat, pe hartă, cu litera:",
                    optiuni: ["A", "B", "F", "I"],
                    tip: "alegere",
                    raspunsuri: ["F"],
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între clima statului marcat, pe hartă, cu litera D şi clima statului marcat, pe hartă, cu litera H.",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "Statul marcat cu litera D are o climă influențată de ocean, cu temperaturi moderate și precipitații bogate tot timpul anului, în timp ce statul marcat cu litera H are o climă continentală, cu precipitații mai reduse și inegal distribuite.",
                      "În statul marcat cu litera D, verile sunt blânde, cu temperaturi în jur de 18°C, în timp ce în statul marcat cu litera H, verile sunt calde, cu temperaturi ce depășesc frecvent 25°C.",
                      "Amplitudinea termică este mai mare în statul marcat cu litera D, din cauza influenței curenților polari maritimi, în timp ce în statul marcat cu litera H, amplitudinea este mai redusă.",
                      "Statul marcat cu litera H are ierni reci, cu temperaturi sub -5°C, în timp ce statul marcat cu litera D are ierni blânde, cu temperaturi de aproximativ 2–4°C.",
                      "În statul marcat cu litera D, clima este tropicală, cu anotimp ploios și secetos, pe când în statul marcat cu litera H, predomină clima de tundră."
                    ],
                    raspunsuri: [
                      "Statul marcat cu litera D are o climă influențată de ocean, cu temperaturi moderate și precipitații bogate tot timpul anului, în timp ce statul marcat cu litera H are o climă continentală, cu precipitații mai reduse și inegal distribuite.",
                      "În statul marcat cu litera D, verile sunt blânde, cu temperaturi în jur de 18°C, în timp ce în statul marcat cu litera H, verile sunt calde, cu temperaturi ce depășesc frecvent 25°C.",
                      "Statul marcat cu litera H are ierni reci, cu temperaturi sub -5°C, în timp ce statul marcat cu litera D are ierni blânde, cu temperaturi de aproximativ 2–4°C."
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: "Prezentați:",
                intrebari: [
                  {
                    intrebare:
                      "un factor natural care influențează diversitatea învelișului biopedogeografic în Europa.",
                    optiuni: [
                      "Tipul de guvernare al fiecărei țări",
                      "Nivelul de dezvoltare economică",
                      "Tipul de religie predominantă",
                      "Limba oficială a regiunii",
                      "Clima variată de la oceanică la continentală, mediteraneană și polară"],
                    raspunsuri: ["Clima variată de la oceanică la continentală, mediteraneană și polară"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "o cauză care determină densitatea ridicată a populației în Țările de Jos (Olanda).",
                    optiuni: [
                      "Climatul tropical și vegetația specifică atrag populația.",
                      "Relieful predominant muntos favorizează așezările în trepte.",
                      "Activitatea vulcanică intensă a dus la formarea de soluri fertile și așezări dense.",
                      "Existența unui sistem hidrografic redus determină concentrarea populației în zone restrânse.",
                      "Dezvoltarea economică ridicată și urbanizarea intensă pe un teritoriu restrâns determină o densitate mare a populației."
                    ],
                    raspunsuri: ["Dezvoltarea economică ridicată și urbanizarea intensă pe un teritoriu restrâns determină o densitate mare a populației."],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Harta de mai sus se referă la subiectul II A – D. Pe hartă sunt marcate unităţi de relief cu litere, râuri cu numere de la 1 la 6 şi oraşe cu numere de la 7 la 12.",
          imagine: "examenAugust2024-s2.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizaţi:",
                intrebari: [
                  {
                    intrebare:
                      "numele oraşului marcat, pe hartă, cu numărul 8;",
                    raspunsuri: ["Botoșani"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare: "numele râului marcat, pe hartă, cu numărul 1.",
                    raspunsuri: ["Siret"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta:
                  "Scrieţi, pe foaia de examen, răspunsurile corecte care completează afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 11 se numește ...",
                    raspunsuri: ["Giurgiu"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Hidrocentrala Porțile de Fier I se află pe artera hidrografică marcată, pe hartă, cu numărul ...",
                    raspunsuri: ["6"],
                    tip: "completare",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Cel mai mare oraș, ca număr de locuitori, pe care îl străbate râul marcat, pe hartă, cu numărul 5 se numește ...",
                    raspunsuri: ["București"],
                    tip: "completare",
                    punctaj: 2,
                  },
                ],
              },
              C: {
                cerinta:
                  "Scrieţi, pe foaia de examen, doar litera (a, b, c sau d) corespunzătoare răspunsului corect pentru fiecare dintre afirmaţiile de mai jos:",
                intrebari: [
                  {
                    intrebare:
                      "Zăcăminte de petrol, gaze naturale și cărbuni se găsesc în subunitatea de relief marcată, pe hartă, cu litera:",
                    optiuni: ["A", "B", "C", "D"],
                    raspunsuri: ["B"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Orașul marcat, pe hartă, cu numărul 10 se numește:",
                    optiuni: [
                      "Bacău",
                      "Focșani",
                      "Iași",
                      "Vaslui",
                    ],
                    raspunsuri: ["Vaslui"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      " Rafinării de petrol se găsesc în orașul marcat, pe hartă, cu numărul:",
                    optiuni: ["7", "9", "10", "12"],
                    raspunsuri: ["9"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Influențe climatice (scandinavo)-baltice pătrund în subunitatea de relief marcată, pe hartă, cu litera:",
                    optiuni: [
                      "A",
                      "B",
                      "C",
                      "D",
                    ],
                    raspunsuri: ["A"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Râul marcat, pe hartă, cu numărul 4 se numește:",
                    optiuni: [
                      "Cerna",
                      "Jiu",
                      "Lotru",
                      "Motru",
                    ],
                    raspunsuri: ["Jiu"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              D: {
                cerinta:
                  "Prezentați trei deosebiri între relieful subunităţii marcate, pe hartă, cu litera G şi relieful subunităţii marcate, pe hartă, cu litera H.",
                intrebari: [
                  {
                    intrebare: "",
                    optiuni: [
                      "Unitatea marcată cu litera G are altitudini ridicate, frecvent peste 1800 m, în timp ce unitatea marcată cu litera H prezintă altitudini joase, în general sub 600 m.",
                      "Unitatea marcată cu litera H este alcătuită în principal din relief glaciar, în timp ce unitatea marcată cu litera G este formată din relief vulcanic.",
                      "Relieful din unitatea marcată cu litera G este predominant jos și neted, în timp ce relieful din unitatea marcată cu litera H este montan și abrupt.",
                      "Relieful din unitatea marcată cu litera G este format predominant din roci cristaline și metamorfice, în timp ce relieful din unitatea marcată cu litera H s-a format pe roci sedimentare.",
                      "În unitatea marcată cu litera G se remarcă un grad mare de fragmentare, cu văi adânci și versanți abrupți, pe când în unitatea marcată cu litera H fragmentarea este redusă, relieful având forme line și întinse."
                    ],
                    raspunsuri: [
                      "Unitatea marcată cu litera G are altitudini ridicate, frecvent peste 1800 m, în timp ce unitatea marcată cu litera H prezintă altitudini joase, în general sub 600 m.",
                      "Relieful din unitatea marcată cu litera G este format predominant din roci cristaline și metamorfice, în timp ce relieful din unitatea marcată cu litera H s-a format pe roci sedimentare.",
                      "În unitatea marcată cu litera G se remarcă un grad mare de fragmentare, cu văi adânci și versanți abrupți, pe când în unitatea marcată cu litera H fragmentarea este redusă, relieful având forme line și întinse."
                    ],
                    tip: "alegere-speciala",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Prezentați o cauză a prezenței lacurilor glaciare în Carpații Românești.",
                    optiuni: [
                      "Activitatea vulcanică intensă din ultimele decenii",
                      "Construirea de baraje artificiale pentru producerea de energie electrică",
                      "Temperaturi tropicale constante în zonele montane",
                      "Topirea ghețarilor formatori în perioadele glaciare și acumularea apei în căldări glaciare la temperaturi scăzute și altitudini mari.",
                      "Depunerea excesivă de aluviuni în câmpii"
                    ],
                    raspunsuri: [
                      "Topirea ghețarilor formatori în perioadele glaciare și acumularea apei în căldări glaciare la temperaturi scăzute și altitudini mari.",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Precizați numele a două subunități de relief (din Carpații Românești) în care există lacuri glaciare.",
                    optiuni: [
                      "Munții Retezat",
                      "Munții Făgăraș",
                      "Podișul Moldovei",
                      "Câmpia Română",
                      "Dealurile Subcarpatice"
                    ],
                    raspunsuri: [
                      "Munții Retezat",
                      "Munții Făgăraș"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
            },
          ],
        },
        {
          cerinta:
            "Reprezentarea grafică de mai jos se referă la subiectul III A-B și prezintă lungimea în km a unor cursuri de apă de pe teritoriul României. Sursa: Anuarul statistic al României, 2022, INS",
          imagine: "examenAugust2024-s3.png",
          subpuncte: [
            {
              A: {
                cerinta: "Precizați:",
                intrebari: [
                  {
                    intrebare:
                      "numele cursului de apă cu cea mai mare lungime și valoarea acesteia;",
                    optiuni: [
                      "Mureș, 1000 km",
                      "Dunărea, 1075 km",
                      "Olt, 900 km",
                      "Mureș, 1200 km",
                      "Siret, 1000 km",
                    ],
                    raspunsuri: ["Dunărea, 1075 km"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "numele cursului de apă cu cea mai mică lungime și valoarea acesteia.",
                    optiuni: [
                      "Olt, 230 km",
                      "Dâmbovița, 220 km",
                      "Siret, 220 km",
                      "Prahova, 200 km",
                      "Dâmbovița, 180 km",
                    ],
                    raspunsuri: ["Prahova, 200 km"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              B: {
                cerinta: "",
                intrebari: [
                  {
                    intrebare:
                      "Calculați cu cât este mai mare lungimea râului Mureș (în România) față de cea a râului Olt.",
                    optiuni: ["150 km", "110 km", "115 km", "185 km", "190 km"],
                    raspunsuri: ["150 km"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Calculați cu cât este mai mare lungimea râului Dâmbovița față de cea a râului Prahova.",
                    optiuni: ["110 km", "60 km", "65 km", "75 km", "105 km"],
                    raspunsuri: ["75 km"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Precizați numele a două capitale europene traversate de cursul de apă cu cea mai mare lungime.",
                    optiuni: [
                      "Viena",
                      "Budapesta",
                      "Praga",
                      "Varșovia",
                      "Roma"
                    ],
                    raspunsuri: [
                      "Viena",
                      "Budapesta"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
              C: {
                cerinta: "Pentru Franța, precizaţi numele a: ",
                intrebari: [
                  {
                    intrebare: "trei unități de relief;",
                    optiuni: [
                      "Masivul Central",
                      "Munții Pirinei",
                      "Câmpia Padului",
                      "Alpii Francezi",
                      "Podișul Podolic"
                    ],
                    raspunsuri: [
                      "Masivul Central",
                      "Munții Pirinei",
                      "Alpii Francezi"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare: "trei ape curgătoare;",
                    optiuni: [
                      "Loara",
                      "Seine",
                      "Ron",
                      "Lacul Geneva",
                      "Tisa"
                    ],
                    raspunsuri: [
                      "Loara",
                      "Seine",
                      "Ron"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                  {
                    intrebare: "patru orașe.",
                    optiuni: [
                      "Paris",
                      "Lyon",
                      "Marsilia",
                      "Toulouse",
                      "Bruxelles"],
                    raspunsuri: [
                      "Paris",
                      "Lyon",
                      "Marsilia",
                      "Toulouse"],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
              D: {
                cerinta:
                  "Tabelul de mai jos prezintă numărul imigranților și pe cel al emigranților din Republica Moldova, în anii 2014 și 2018.",
                imagine: "examenAugust2024-s3D.png",
                intrebari: [
                  {
                    intrebare:
                      "Calculaţi diferența dintre numărul imigranților și numărul emigranților din Republica Moldova (bilanțul migratoriu al populației) în anul 2014.",
                    optiuni: ["-24.660 persoane", "-24.669 persoane", "-24.670 persoane", "-24.570 persoane", "-24.670 persoane"],
                    raspunsuri: ["-24.670 persoane"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Calculaţi cu cât a crescut numărul de emigranți din Republica Moldova în anul 2018 față de anul 2014.",
                    optiuni: ["34.762 persoane", "34.763 persoane", "34.765 persoane", "34.760 persoane", "34.768 persoane"],
                    raspunsuri: ["34.763 persoane"],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "Prezentați o cauză care determină mișcarea migratorie a populației din Republica Moldova.",
                    optiuni: [
                      "Climatul tropical al regiunii atrage migrația sezonieră.",
                      "Potențialul turistic ridicat determină emigrarea masivă.",
                      "Suprasaturarea pieței muncii cu locuri de muncă bine plătite.",
                      "Nivelul foarte ridicat al natalității forțează populația să emigreze.",
                      "Lipsa oportunităților economice și salariile reduse determină migrarea în căutarea unui trai mai bun."
                    ],
                    raspunsuri: [
                      "Lipsa oportunităților economice și salariile reduse determină migrarea în căutarea unui trai mai bun."
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                ],
              },
              E: {
                cerinta: " Uniunea Europeană reprezintă o entitate politică, socială şi economică, formată, în prezent, din 27 de state. Precizaţi:",
                intrebari: [
                  {
                    intrebare:
                      "anul în care România a devenit stat membru al Uniunii Europene.",
                    optiuni: [
                      "2005",
                      "2006",
                      "2003",
                      "2007",
                      "2008",
                    ],
                    raspunsuri: [
                      "2007",
                    ],
                    tip: "alegere",
                    punctaj: 2,
                  },
                  {
                    intrebare:
                      "numele a douǎ state vecine cu România, membre ale Uniunii Europene.",
                    optiuni: [
                      "Ungaria",
                      "Bulgaria",
                      "Serbia",
                      "Ucraina",
                      "Republica Moldova"
                    ],
                    raspunsuri: [
                      "Ungaria",
                      "Bulgaria"
                    ],
                    tip: "alegere-speciala",
                    punctaj: 1,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};

module.exports = an2024;
