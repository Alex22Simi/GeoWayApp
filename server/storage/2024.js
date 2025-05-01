const an2024 = {
  an: 2024,
  subiecte: [
    {
      tip: "bac",
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
    { tip: "simulare", nume: "Simulare 2024", puncte: [] },
    { tip: "test", nume: "Test" },
  ],
};

module.exports = an2024;
