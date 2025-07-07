export const LECTII = {
  capitole: [
    {
      id: 0,
      nume: "România",
      unitate: 'romania',
      lectii: [
        {
          nume: "Lecția 1",
          continut: `
<h3><img src="/globLectii.svg" alt="icon" /> Poziția Geografică</h3>
<p><strong>Poziția pe glob</strong> – România este situată în emisfera nordică, la paralelele de <strong>45° grade latitudine nordică</strong> și meridianul de <strong>25° grade longitudine estică</strong>, la jumătatea distanței dintre ecuator și polul Nord.</p>
<p><strong>Poziția în Europa</strong> – România se află în partea <strong>central-sudică a Europei</strong>, la 2800 km de cel mai apropiat punct extrem vestic și 2900 km de punctul extrem estic. Deci, <strong>țara noastră se află în partea central-sudică a Europei</strong>.</p>

<p><strong>- Puncte extreme</strong></p>
<ul class="custom-list">
  <li><strong>N:</strong> Horodiștea (48°15’ lat. N)</li>
  <li><strong>S:</strong> Zimnicea (43°37’ lat. N)</li>
  <li><strong>V:</strong> Beba Veche (20°15’ long. E)</li>
  <li><strong>E:</strong> Sulina (29°15’ long. E)</li>
</ul>

<h3><img src="/globLectii.svg" alt="icon" />Personalitatea României:</h3>
<ul class="custom-list">
  <li><strong>Carpații</strong> – pentru că 2/3 din lanțul carpatic se află pe teritoriul țării;</li>
  <li><strong>Câmpia</strong> – ocupă 3/5 din teritoriu;</li>
  <li><strong>Marea Neagră</strong> – pe o lungime de peste 200 km;</li>
  <li><strong>Dunărea</strong> – pentru că 38% din lungimea Dunării se află pe teritoriul României.</li>
</ul>

<p><strong>Consecințe</strong>:</p>
<ul class="custom-list">
  <li>potențial hidroelectric ridicat;</li>
  <li>posibilitate de alimentare cu apă potabilă din Dunăre, irigații, alimentare cu apă pentru industrie și populație;</li>
  <li>facilități din lungul Dunării importante pentru transporturi și comerț.</li>
</ul>

<h3><img src="/globLectii.svg" alt="icon" /> Consecințe ale poziției geografice</h3>
<ul class="custom-list">
  <li>Diversitatea elementelor de vegetație, faună și soluri;</li>
  <li>Rețea hidrografică bine reprezentată;</li>
  <li>Posibilitatea de alimentare cu apă potabilă din numeroase surse;</li>
  <li>Posibilități de irigații;</li>
  <li>Potențial hidroenergetic mare (10775 MW instalați);</li>
  <li>Exploatarea resurselor de hidrocarburi din platforma continentală;</li>
  <li>Poziție favorabilă pentru practicarea transporturilor și comerțului;</li>
  <li>Ieșire la Marea Neagră.</li>
</ul>

<h3><img src="/globLectii.svg" alt="icon" /> Suprafața României</h3>
<p>Este de <strong>238.391 Km²</strong>. Ocupă <strong>locul 12 între statele Europei</strong> și <strong>locul 9 între statele U.E.</strong></p>
<p>România a participat la ambele conflagrații mondiale:</p>
<ul class="custom-list">
  <li>din prima a ieșit câștigătoare (formarea României Mari);</li>
  <li>din a doua a ieșit perdantă (a pierdut Basarabia, N Bucovinei și Ținutul Herța).</li>
</ul>
<p>România este membră <strong>NATO din 2004</strong>, și <strong>U.E. din 2007</strong>.</p>
`,
          imagini: [],
          tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "La ce latitudine se află România?",
              optiuni: [
                "A. 25° latitudine nordică",
                "B. 45° latitudine sudică",
                "C. 45° latitudine nordică",
                "D. 25° latitudine sudică"
              ],
              raspuns: 1,
            },
            {
              continut: "În ce parte a Europei se află România?",
              optiuni: [
                "A. Nord-vestică",
                "B. Sud-estică",
                "C. Central-sudică",
                "D. Estică"
              ],
              raspuns: 1,
            },
            {
              continut: "Care este punctul extrem nordic al României?",
              optiuni: [
                "A. Zimnicea",
                "B. Beba Veche",
                "C. Sulina",
                "D. Horodiștea"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce procent din lanțul carpatic se află în România?",
              optiuni: [
                "A. 50%",
                "B. 2/3",
                "C. 3/4",
                "D. 1/3"
              ],
              raspuns: 0,
            },
            {
              continut: "Ce râu are 38% din lungime pe teritoriul României?",
              optiuni: [
                "A. Prut",
                "B. Mureș",
                "C. Dunărea",
                "D. Olt"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce caracteristică NU este o consecință a poziției geografice?",
              optiuni: [
                "A. Ieșire la Marea Neagră",
                "B. Rețea hidrografică reprezentativă",
                "C. Lipsa resurselor de hidrocarburi",
                "D. Potențial hidroenergetic mare"
              ],
              raspuns: 1,
            },
            {
              continut: "Care este suprafața României?",
              optiuni: [
                "A. 198.000 km²",
                "B. 250.000 km²",
                "C. 238.391 km²",
                "D. 200.300 km²"
              ],
              raspuns: 1,
            },
            {
              continut: "România ocupă locul 9 în U.E. după:",
              optiuni: [
                "A. Populație",
                "B. Suprafață",
                "C. PIB",
                "D. Număr de râuri"
              ],
              raspuns: 0,
            },
            {
              continut: "În ce an a devenit România membră NATO?",
              optiuni: [
                "A. 2000",
                "B. 2004",
                "C. 2007",
                "D. 2010"
              ],
              raspuns: 0,
            },
            {
              continut: "Care este punctul extrem estic al României?",
              optiuni: [
                "A. Zimnicea",
                "B. Horodiștea",
                "C. Sulina",
                "D. Beba Veche"
              ],
              raspuns: 1,
            },
          ]
        },
        {
          nume: "Lecția 2", continut: `
            <h3> <img src="/globLectii.svg" alt="icon" />Caracteristici generale ale reliefului</h3>
<p>Se găsește în partea continentală a Europei, la nord de Peninsula Balcanică.</p>
<p><strong>Țărmurile României</strong> sunt de mai multe tipuri:</p>
<ul class="custom-list">
  <li>cu delte: <strong>Delta Dunării</strong></li>
  <li>cu lagune: <strong>Săcele, Techirghiol</strong></li>
  <li>trepte altimetrice: <strong>Complexul lagunar Razim-Sinoe</strong></li>
</ul>
<p><strong>Proporționalitatea reliefului:</strong> câmpii – 33%, dealuri și podișuri – 33%, munți – 33%</p>

<h4>Alte caracteristici:</h4>
<ul class="custom-list">
  <li>Varietate mare a formelor de relief</li>
  <li>Dispunere în trepte concentrice: în interior <strong>Depresiunea Colinară a Transilvaniei (D.C.T.)</strong>, apoi <strong>Carpații, Subcarpații, podișuri și câmpii</strong></li>
  <li>Disponibilitate mare pentru locuire</li>
</ul>

<h3> <img src="/globLectii.svg" alt="icon" />Unități majore morfostructurale</h3>
<p><strong>România</strong> se compune din două tipuri de unități:</p>

<h4>1. Unitățile de platformă</h4>
<p>Formate prin depunere de sedimente pe un fundament alpin:</p>
<ul class="custom-list">
  <li><strong>Câmpia Română</strong></li>
  <li><strong>Câmpia de Vest</strong></li>
  <li><strong>Dealurile de Vest</strong></li>
  <li><strong>Podișul Moldovei</strong></li>
  <li><strong>Podișul Getic</strong></li>
  <li><strong>D.C.T. – Depresiunea colinară a Transilvaniei</strong></li>
  <li><strong>Podișul Dobrogei de Sud</strong></li>
</ul>

<h4>2. Unitățile de orogen</h4>
<p>Sunt de trei categorii, în funcție de orogeneza care le-a format:</p>
<ul class="custom-list">
  <li><strong>Orogenul Caledonic</strong>: Dobrogea Centrală</li>
  <li><strong>Orogenul Hercinic</strong>: Dobrogea de Nord</li>
  <li><strong>Orogenul Alpin</strong>: Carpații, Subcarpații, Podișul Mehedinți</li>
</ul>

<p><strong>Caracteristici:</strong></p>
<ul class="custom-list">
  <li>S-au format prin cutarea scoarței terestre</li>
  <li>Sunt alcătuite din roci metamorfice sau roci sedimentare cutate (în cazul Subcarpaților)</li>
  <li>Au o structură cutată</li>
</ul>

<h4>Structura câmpiilor</h4>
<p>În <strong>Cuaternar</strong> s-au format câmpiile, modelate de marea în retragere – au structură tabulară:</p>
<ul class="custom-list">
  <li><strong>Câmpia Română</strong></li>
  <li><strong>Câmpia de Vest</strong></li>
</ul>

<p>În <strong>Mezozoic</strong> s-au format dealurile și podișurile care coboară din Carpați:</p>
<ul class="custom-list">
  <li><strong>Podișul Getic</strong></li>
  <li><strong>D.C.T.</strong></li>
  <li><strong>Podișul Dobrogei de Sud</strong></li>
</ul>
`, imagini: [], tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "Care este proporția formelor de relief din România?",
              optiuni: [
                "A. 50% munți, 25% dealuri, 25% câmpii",
                "B. 33% munți, 33% dealuri și podișuri, 33% câmpii",
                "C. 40% câmpii, 30% munți, 30% dealuri",
                "D. 25% câmpii, 25% dealuri, 50% munți"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce tipuri de țărmuri are România?",
              optiuni: [
                "A. Țărmuri stâncoase și fiorduri",
                "B. Țărmuri cu golfuri și peninsule",
                "C. Țărmuri cu delte, lagune și trepte altimetrice",
                "D. Țărmuri cu stânci și recifuri de corali"
              ],
              raspuns: 2,
            },
            {
              continut: "Care este unitatea de relief din interiorul treptelor concentrice?",
              optiuni: [
                "A. Câmpia Română",
                "B. Subcarpații",
                "C. Carpații",
                "D. Depresiunea Colinară a Transilvaniei (D.C.T.)"
              ],
              raspuns: 3,
            },
            {
              continut: "Cum sunt așezate unitățile de relief în România?",
              optiuni: [
                "A. În linie dreaptă de la vest la est",
                "B. De la nord la sud în trepte",
                "C. În trepte concentrice",
                "D. Aleatoriu, fără un model precis"
              ],
              raspuns: 2,
            },
            {
              continut: "Care dintre următoarele unități NU este de platformă?",
              optiuni: [
                "A. Câmpia de Vest",
                "B. Dealurile de Vest",
                "C. Podișul Mehedinți",
                "D. Podișul Moldovei"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce unități s-au format prin depuneri de sedimente pe fundament alpin?",
              optiuni: [
                "A. Unitățile de orogen",
                "B. Unitățile de platformă",
                "C. Subcarpații",
                "D. Munții Carpați"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce orogen a format Dobrogea de Nord?",
              optiuni: [
                "A. Caledonic",
                "B. Hercinic",
                "C. Alpin",
                "D. Cambrian"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce caracteristică este comună unităților de orogen?",
              optiuni: [
                "A. Structură tabulară",
                "B. Structură cutată",
                "C. Relief glaciar",
                "D. Platforme continentale"
              ],
              raspuns: 1,
            },
            {
              continut: "În ce eră geologică s-au format câmpiile actuale?",
              optiuni: [
                "A. Paleozoic",
                "B. Mezozoic",
                "C. Cuaternar",
                "D. Precambrian"
              ],
              raspuns: 2,
            },
            {
              continut: "Care dintre următoarele unități a fost modelată de marea în retragere?",
              optiuni: [
                "A. Carpații Orientali",
                "B. Subcarpații",
                "C. Câmpia Română",
                "D. Podișul Mehedinți"
              ],
              raspuns: 2,
            }
          ]
        },
        {
          nume: "Lecția 3", continut: `<h3> <img src="/globLectii.svg" alt="icon" />Tipuri de relief minor</h3>

<ol >
  <li><strong>Suprafețele de eroziune</strong> – se găsesc în zona montană și s-au format în urma etapelor succesive de înălțare a munților.</li>
  <li><strong>Relieful glaciar</strong> – formele reliefului glaciar s-au format deasupra reliefului glaciar, la peste 2000 m. Se găsește: în Carpații Orientali: Munții Rodnei, în Carpații Meridionali: Munții Făgăraș, Parâng și Retezat, în Carpații Occidentali: Munții Bihorului.</li>
  <li><strong>Relieful vulcanic</strong> – apare în mezozoic în următorii munți vulcanici: Oaș, Gutâi, Țibleș, Călimani, Gurghiu, Harghita. Se găsește: în Carpații Orientali: Munții Rarău, Giumalău, Hășmașu Mare, Ceahlău, Ciucaș, Postăvaru, Piatra Mare; în Carpații Meridionali: Munții Bucegi, Piatra Craiului, Căpățânii.</li>
  <li><strong>Relieful pe roci</strong> – relieful loessic se găsește în Câmpia Română și Câmpia de Vest; relieful pe roci sedimentare prăfoase, cu proprietatea de a se tasa. Apar astfel, microdepresiuni formate în Podișul Dobrogei și Dealurile de Vest, numite <em>croviuri</em>.</li>
  <li><strong>Relieful structural</strong> – este reprezentat de structura petrografică predominantă. Există mai multe tipuri:
    <ul class="custom-list">
      <li><strong>Structura cutată</strong> – apare în zone în care rocile au fost afectate de încrețire (cutare). Se găsește în toate unitățile de orogen.</li>
      <li><strong>Structura de cute diapire</strong> – apare în zone cu depozite de sare. Se găsește în partea externă a Subcarpaților și în D.C.T.</li>
      <li><strong>Structura monoclinală</strong> – apare în zonele în care rocile s-au înclinat într-o singură direcție. Se găsește în Podișul Moldovei, Podișul Getic, Dealurile de Vest, Podișul Transilvaniei.</li>
      <li><strong>Structura tabulară</strong> – apare în zone în care rocile nu au suferit nicio înclinare, astfel se formează straturi de roci orizontale și paralele între ele. Se găsește în unitățile de platformă.</li>
    </ul>
  </li>
</ol>

<h3> <img src="/globLectii.svg" alt="icon" />Evoluția paleogeografică a României</h3>

<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th></th>
      <th>ROMÂNIA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>PRECAMBRIAN</strong></td>
      <td>Scutul Baltic – se află la fundamentul Câmpiei Moldovei; este alcătuit din roci metamorfice</td>
    </tr>
    <tr>
      <td><strong>PALEOZOIC</strong></td>
      <td>Orogeneza caledonică - Se înalță Podișul Casimcei (Dobrogea Centrală), alcătuit din roci metamorfice.
      Orogeneza hercinică - Se înalță M. Măcin (Dobrogea de Nord), alcătuit din roci metamorfice.</td>
    </tr>
    <tr>
      <td><strong>MEZOZOIC</strong></td>
      <td>Orogeneza alpină - se înalță M. Carpați împreună cu Depresiunea Colinară a Transilvaniei. D.C.T. se scufundă și este inundată cu apă.</td>
    </tr>
    <tr>
      <td><strong>NEOZOIC</strong></td>
      <td>Se formează Subcarpații, prin cutarea sedimentelor. Se formează podișurile, prin depunere de sedimente. Apar munții vulcanici: Oraș - Gutâi - Țipleș - Călimani - Gurghiu - Harghita.</td>
    </tr>
    <tr>
      <td><strong>CUATERNAR</strong></td>
      <td>Se formează relieful glaciar, la peste 2000 m. Se formează, prin sedimentare, câmpiile: Câmpia Română, Câmpia de Vest. Se înalță Carpații Meridionali cu 1000 m.</td>
    </tr>
  </tbody>
</table>

`, imagini: [], tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "Ce tip de relief minor s-a format la peste 2000 m altitudine?",
              optiuni: [
                "A. Relieful vulcanic",
                "B. Relieful structural",
                "C. Relieful glaciar",
                "D. Relieful pe roci"
              ],
              raspuns: 2,
            },
            {
              continut: "Care tip de structură apare în zonele cu depozite de sare?",
              optiuni: [
                "A. Structura tabulară",
                "B. Structura cutată",
                "C. Structura monoclinală",
                "D. Structura de cute diapire"
              ],
              raspuns: 3,
            },
            {
              continut: "Ce tip de relief apare în zonele în care rocile nu au nicio înclinare?",
              optiuni: [
                "A. Structura tabulară",
                "B. Structura cutată",
                "C. Structura glaciară",
                "D. Structura vulcanică"
              ],
              raspuns: 0,
            },
            {
              continut: "În ce eră geologică s-au format Subcarpații prin cutare?",
              optiuni: [
                "A. Paleozoic",
                "B. Mezozoic",
                "C. Precambrian",
                "D. Neozoic"
              ],
              raspuns: 3,
            },
            {
              continut: "Ce orogen a determinat înălțarea Munților Măcin?",
              optiuni: [
                "A. Orogeneza alpină",
                "B. Orogeneza caledonică",
                "C. Orogeneza hercinică",
                "D. Orogeneza mezozoică"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce tip de relief minor se găsește în Carpații Orientali, Meridionali și Occidentali?",
              optiuni: [
                "A. Relieful loessic",
                "B. Relieful structural",
                "C. Relieful glaciar",
                "D. Relieful pe crovuri"
              ],
              raspuns: 2,
            },
            {
              continut: "În ce parte a României găsim Podișul Casimcei?",
              optiuni: [
                "A. Dobrogea Centrală",
                "B. Dobrogea de Nord",
                "C. Câmpia Română",
                "D. Subcarpații Getici"
              ],
              raspuns: 0,
            },
            {
              continut: "Ce tip de relief minor este asociat cu munții Oaș, Gutâi și Harghita?",
              optiuni: [
                "A. Relieful glaciar",
                "B. Relieful pe roci",
                "C. Relieful vulcanic",
                "D. Relieful structural"
              ],
              raspuns: 2,
            },
            {
              continut: "Cum se numesc formele depresionare formate în Podișul Dobrogei și Dealurile de Vest?",
              optiuni: [
                "A. Găvane",
                "B. Crovuri",
                "C. Chei",
                "D. Trecători"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce structură este specifică Podișului Moldovei, Podișului Getic și Dealurilor de Vest?",
              optiuni: [
                "A. Structura cutată",
                "B. Structura de cute diapire",
                "C. Structura monoclinală",
                "D. Structura tabulară"
              ],
              raspuns: 2,
            }
          ]
        },
        {
          nume: "Lecția 4", continut: `<h3> <img src="/globLectii.svg" alt="icon" />Clima</h3>

<h4>1. Factorii genetici ai climei</h4>

<ul class="custom-list">
  <li><strong>Radiația globală:</strong> 125 kcal/cm²/an în sud, 115 kcal/cm²/an în nord</li>
  <li><strong>Suprafețele acvatice:</strong> Marea Neagră – apariția brizelor marine și a amplitudinilor termice mai reduse</li>
  <li><strong>Relieful:</strong> influențează etajarea elementelor climatice și prin orientarea catenelor montane</li>
  <li><strong>Circulația maselor de aer:</strong>
    <ul class="custom-list">
      <li>Circulația vestică – 45% din an – ierni blânde și ploioase, veri calde și ploioase</li>
      <li>Circulația polară – 30% din an – scade temperatura, precipitații sub formă de aversă</li>
      <li>Circulația tropicală – 15% din an – crește temperatura aerului</li>
    </ul>
  </li>
</ul>

<h4>2. Elementele climatice</h4>

<h4>a. Temperatura aerului</h4>
<ul class="custom-list">
  <li>Temperatura medie anuală se calculează ca media aritmetică a temperaturilor medii lunare</li>
  <li>Amplitudinea termică = diferența între temperatura maximă și temperatura minimă</li>
  <li>Temperatura este influențată de unghiul de incidență al razelor solare, de altitudine, de expunerea versanților</li>
</ul>

<h4>b. Precipitațiile atmosferice</h4>
<ul class="custom-list">
  <li>Precipitațiile medii anuale = suma precipitațiilor medii lunare</li>
  <li>Cantitatea de precipitații este influențată de altitudine și circulația maselor de aer</li>
</ul>

<h4>Tabel: Temperatura medie anuală</h4>
<table border="1" style="margin: 0 auto;">
  <thead>
    <tr>
      <th>Temperatura medie anuală</th>
      <th>Unități de relief</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>peste 11°C</td><td>Lunca Dunării, S Dobrogei, Delta Dunării, S Banatului</td></tr>
    <tr><td>între 10 - 11°C</td><td>C. Română, S Pod. Getic, C. de Vest, Dl. de Vest</td></tr>
    <tr><td>între 8 - 10°C</td><td>N Pod. Getic, D.C.T., Pod. Moldovei, Dealurile Silvaniei</td></tr>
    <tr><td>între 6 - 8°C</td><td>Subcarpați, estul D.C.T., munți joși</td></tr>
    <tr><td>între 0 - 6°C</td><td>Carpații între 1000 și 1800 m</td></tr>
    <tr><td>sub 0°C</td><td>Carpații peste 1800 m</td></tr>
  </tbody>
</table>

<p><strong>Temperatura minimă absolută:</strong> -38,5°C la Bod, jud. Brașov (25.01.1945)</p>
<p><strong>Temperatura maximă absolută:</strong> 44,5°C la Ion Sion, jud. Brăila (10.08.1951)</p>

<h4>Tabel: Precipitațiile medii anuale</h4>
<table border="1" style="margin: 0 auto;">
  <thead>
    <tr>
      <th>Precipitații medii anuale</th>
      <th>Unități de relief</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>sub 400 mm</td><td>Lunca Dunării, S Dobrogei, Delta Dunării</td></tr>
    <tr><td>400 - 500 mm</td><td>C. Română, S Pod. Getic, C. Moldovei</td></tr>
    <tr><td>500 - 700 mm</td><td>N Pod. Getic, D.C.T., Pod. Sucevei, C. de Vest, Dl. de Vest</td></tr>
    <tr><td>700 - 1000 mm</td><td>Subcarpați, estul D.C.T., munți joși</td></tr>
    <tr><td>1000 - 1200 mm</td><td>Carpații între 1000 și 1800 m</td></tr>
    <tr><td>peste 1200 mm</td><td>Carpații peste 1800 m</td></tr>
  </tbody>
</table>

<h4>c. Vânturile</h4>
<ul class="custom-list">
  <li><strong>Vânturile de Vest:</strong> caracter general, aduc precipitații</li>
  <li><strong>Crivățul:</strong> iarnă, produce viscol și geruri (estul țării)</li>
  <li><strong>Austrul:</strong> vară, cald și secetos, sud-vest</li>
  <li><strong>Föhn:</strong> în depresiunile Făgăraș, Alba Iulia–Turda, Subcarpați</li>
  <li><strong>Brizele marine:</strong> ziua bat de pe mare, noaptea invers, 5–10 km spre uscat</li>
  <li><strong>Brizele de munte:</strong> ziua urcă pe versanți, seara coboară spre văi</li>
</ul>

<h4>3. Nuantele climatice</h4>

<h4>a. Etajele de climă (în funcție de altitudine)</h4>
<table border="1" style="margin: 0 auto;">
  <thead>
    <tr>
      <th>Etajul climatic</th>
      <th>Altitudinea</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>de Deltă și litoral</td><td>0 - 15 m</td></tr>
    <tr><td>de câmpie</td><td>0 - 200 m</td></tr>
    <tr><td>de dealuri joase</td><td>200 - 500 m</td></tr>
    <tr><td>de dealuri înalte</td><td>500 - 800 m</td></tr>
    <tr><td>montan</td><td>800 - 2000 m</td></tr>
    <tr><td>alpin</td><td>peste 2000 m</td></tr>
  </tbody>
</table>

<h4>b. Influențele climatice</h4>
<table border="1" style="margin: 0 auto;">
  <thead>
    <tr>
      <th>Influențe climatice</th>
      <th>Modificări aduse</th>
      <th>Unități de relief</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>oceanice</td><td>precipitații mai bogate, termice mai mici</td><td>C. de Vest, Dl. de Vest, M. Apuseni, D.C.T.</td></tr>
    <tr><td>de tranziție</td><td>fac trecerea între influențele oceanice și continentale</td><td>C. de Vest, Dl. de Vest, C. Română vestică</td></tr>
    <tr><td>submediteraneene</td><td>veri calde și uscate, ierni blânde și ploioase</td><td>SV C. Române, vestul Pod. Getic, Podișul Mehedinți, M. Banatului</td></tr>
    <tr><td>continentale</td><td>temperaturi ridicate vara, scăzute iarna, precipitații mai mici</td><td>Centru și est C. Române, Pod. Getic, Subcarpații Getici și Moldovei</td></tr>
    <tr><td>scandinavo-baltice</td><td>temperaturi mai scăzute și precipitații bogate</td><td>Grupa nordică a Carpaților Orientali</td></tr>
    <tr><td>pontice</td><td>precipitații mai scăzute, amplitudini termice mai mici</td><td>Estul Dobrogei, Delta Dunării</td></tr>
  </tbody>
</table>
`, imagini: [], tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "Care este temperatura medie anuală în Lunca Dunării?",
              optiuni: [
                "A. între 6 - 8°C",
                "B. peste 11°C",
                "C. între 0 - 6°C",
                "D. între 8 - 10°C"
              ],
              raspuns: 1,
            },
            {
              continut: "În ce unități de relief se înregistrează cele mai reduse precipitații medii anuale?",
              optiuni: [
                "A. Carpații peste 1800 m",
                "B. Subcarpații și munții joși",
                "C. Lunca Dunării și Delta Dunării",
                "D. Podișul Getic și Subcarpații Getici"
              ],
              raspuns: 2,
            },
            {
              continut: "Care influență climatică determină veri calde și uscate și ierni blânde și ploioase?",
              optiuni: [
                "A. continentală",
                "B. de tranziție",
                "C. pontică",
                "D. submediteraneană"
              ],
              raspuns: 3,
            },
            {
              continut: "Ce tip de influență climatică este prezentă în Grupa nordică a Carpaților Orientali?",
              optiuni: [
                "A. oceanică",
                "B. de tranziție",
                "C. scandinavo-baltică",
                "D. submediteraneană"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce vânt specific produce viscol și geruri iarna în estul țării?",
              optiuni: [
                "A. Föhn",
                "B. Crivățul",
                "C. Austrul",
                "D. Briza de munte"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce caracteristici are circulația tropicală a maselor de aer?",
              optiuni: [
                "A. determină ierni blânde",
                "B. crește temperatura aerului",
                "C. aduce precipitații bogate",
                "D. scade temperatura"
              ],
              raspuns: 1,
            },
            {
              continut: "Care este etajul climatic caracteristic altitudinilor între 500 - 800 m?",
              optiuni: [
                "A. de câmpie",
                "B. montan",
                "C. de dealuri înalte",
                "D. alpin"
              ],
              raspuns: 2,
            },
            {
              continut: "Unde se manifestă influența climatică pontică?",
              optiuni: [
                "A. Câmpia Română",
                "B. Munții Apuseni",
                "C. Estul Dobrogei și Delta Dunării",
                "D. Depresiunea Brașov"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce vânt se formează în depresiunile Făgăraș, Alba Iulia–Turda?",
              optiuni: [
                "A. Crivățul",
                "B. Föhn",
                "C. Austrul",
                "D. Briza marină"
              ],
              raspuns: 1,
            },
            {
              continut: "Care sunt principalele caracteristici ale influenței continentale?",
              optiuni: [
                "A. Precipitații abundente, temperaturi scăzute",
                "B. Trecere între influențe oceanice și continentale",
                "C. Precipitații reduse, veri calde, ierni reci",
                "D. Amplitudini termice mici, temperaturi constante"
              ],
              raspuns: 2,
            }
          ]
        },
        {
          nume: "Lecția 5", continut: `<h3><img src="/globLectii.svg" alt="icon" /> Hidrografia</h3>

<h4>Caractere generale</h4>
<ul class="custom-list">
  <li>Rețeaua hidrografică complexă, ape cu adăugare bună, ape subterane, Marea Neagră</li>
  <li>Curge prin Porțile de Fier, Cazane, Tr. Severin</li>
  <li>Cea mai mare parte a râurilor izvorăsc din Carpați</li>
  <li>Aproape toate râurile se varsă în Dunăre</li>
</ul>

<h4>Sectoare ale Dunării</h4>

<h5>a. Sectorul de defileu</h5>
<p>Cuprins între Baziaș și Drobeta Turnu Severin. Dunărea are o vale îngustă și numeroase praguri. Cursul Dunării a fost regularizat prin construirea barajului de la Porțile de Fier I și II. Apare lacul de acumulare, care a inundat o parte a satelor și a fost creată Insula Ada Kaleh.</p>

<h5>b. Sectorul de luncă</h5>
<p>Cuprins între Drobeta T. Severin și Călărași. Este sectorul în care Dunărea are o luncă foarte largă și numeroase terase. Sunt insule și ostroave mari: Ostrovul Mare, Ostrovul Calnovăț etc.</p>

<h5>c. Sectorul bălților</h5>
<p>Cuprins între Călărași și Brăila. În acest sector, Dunărea se desparte în două brațe: Dunărea Veche și Dunărea Nouă. Pe fundul lor se depun aluviuni. Între aceste brațe se formează bălțile: Balta Ialomiței, Balta Brăilei. Insula Mare a Brăilei se află aici.</p>

<h5>d. Sectorul Dunărea Maritimă</h5>
<p>Cuprins între Brăila și vărsarea în Marea Neagră. Are două subsecțiuni:</p>
<ul class="custom-list">
  <li><strong>Bălții și Balta Brăilei:</strong> este sectorul în care Dunărea are un singur braț, cuprins între Brăila și Galați.</li>
  <li><strong>Delta Dunării:</strong> este sectorul în care Dunărea se desparte în trei brațe – Chilia, Sulina și Sf. Gheorghe – pentru a se vărsa în Marea Neagră.</li>
</ul>

<h4>Râurile interioare</h4>
<ul class="custom-list">
  <li>Grupa de nord: Iza, Tur, Someș, Crișul Repede</li>
  <li>Grupa de vest: Barcău, Crișul Negru, Crișul Alb, Mureș, Arieș, Timiș, Bega</li>
  <li>Grupa de sud-vest: Motru, Jiu, Gilort, Oltet, Olteț</li>
  <li>Grupa central-sudică: Olt, Argeș, Dâmbovița, Ialomița</li>
  <li>Grupa de est: Siret, Bistrița, Moldova, Suceava, Trotuș, Bârlad, Prut</li>
</ul>

<h4>Lacurile</h4>
<ol>
  <li><strong>Lacuri de origine glaciară:</strong> s-au format în căldările glaciare. Exemple: Bâlea, Mioarele, Bucura, Zănoaga, Iezer, Gâlcescu</li>
  <li><strong>Lacuri de baraj natural:</strong> s-au format prin închiderea unor văi cu aluviuni, prăbușiri sau lavă. Exemple: Lacul Roșu, Lacul Sfânta Ana, Lacul Cuejdel</li>
  <li><strong>Lacuri de baraj antropic:</strong> s-au format prin bararea cursurilor de apă de către oameni. Exemple: Vidraru, Paltinu, Gura Apelor</li>
  <li><strong>Lacuri de luncă și de pe litoral:</strong> se formează prin bararea cursurilor mici de aluviuni. Exemple: Fortuna, 23 August, Gorgova</li>
  <li><strong>Lacuri limanuri fluvio-marine:</strong> sunt lacuri în apropierea litoralului, barate de cordoane de nisip. Exemple: Razelm, Zmeica, Sinoe</li>
  <li><strong>Lacuri tectonice:</strong> formate prin afundări tectonice. Exemple: Techirghiol, Amara, Movila Miresii</li>
  <li><strong>Lacuri carstice:</strong> formate prin dizolvarea calcarelor. Exemple: Lacul Ighiel, Tăul fără fund, Tăul Muced</li>
  <li><strong>Lacuri termale:</strong> formate prin încălzirea apei din pânza freatică. Exemple: Lacul Ursu (Sovata), Lacul Ana</li>
  <li><strong>Lacuri antropice:</strong> construite de om în scopuri hidroenergetice sau recreative. Exemple: Morii, Tei, Floreasca, Herăstrău (în București), Ciric (în Iași)</li>
</ol>

`, imagini: [], tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "Care este sectorul Dunării în care fluviul are o vale îngustă și numeroase praguri?",
              optiuni: [
                "A. Sectorul de luncă",
                "B. Sectorul bălților",
                "C. Sectorul Dunărea Maritimă",
                "D. Sectorul de defileu"
              ],
              raspuns: 3,
            },
            {
              continut: "Între ce localități se desfășoară sectorul de luncă al Dunării?",
              optiuni: [
                "A. Drobeta Turnu Severin – Călărași",
                "B. Călărași – Brăila",
                "C. Brăila – Galați",
                "D. Baziaș – Drobeta Turnu Severin"
              ],
              raspuns: 0,
            },
            {
              continut: "În ce sector al Dunării se desparte fluviul în două brațe și apar Balta Ialomiței și Balta Brăilei?",
              optiuni: [
                "A. Sectorul de defileu",
                "B. Sectorul Dunărea Maritimă",
                "C. Sectorul bălților",
                "D. Sectorul de luncă"
              ],
              raspuns: 2,
            },
            {
              continut: "Care sunt cele trei brațe principale ale Deltei Dunării?",
              optiuni: [
                "A. Olt, Siret, Prut",
                "B. Sulina, Chilia, Sf. Gheorghe",
                "C. Crișul Alb, Crișul Negru, Crișul Repede",
                "D. Ialomița, Dâmbovița, Argeș"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce râu face parte din grupa de est a râurilor interioare?",
              optiuni: [
                "A. Jiu",
                "B. Crișul Alb",
                "C. Bistrița",
                "D. Arieș"
              ],
              raspuns: 2,
            },
            {
              continut: "Ce tip de lac s-a format prin dizolvarea calcarelor?",
              optiuni: [
                "A. Lac carstic",
                "B. Lac glaciar",
                "C. Lac tectonic",
                "D. Lac de baraj natural"
              ],
              raspuns: 0,
            },
            {
              continut: "Care dintre următoarele lacuri este de origine glaciară?",
              optiuni: [
                "A. Techirghiol",
                "B. Cuejdel",
                "C. Gâlcescu",
                "D. Herăstrău"
              ],
              raspuns: 2,
            },
            {
              continut: "Cum se numesc lacurile aflate în apropierea litoralului, barate de cordoane de nisip?",
              optiuni: [
                "A. Lacuri carstice",
                "B. Lacuri limanuri fluvio-marine",
                "C. Lacuri de baraj natural",
                "D. Lacuri antropice"
              ],
              raspuns: 1,
            },
            {
              continut: "Care este un exemplu de lac termal din România?",
              optiuni: [
                "A. Zmeica",
                "B. Ursu (Sovata)",
                "C. Sfânta Ana",
                "D. Morii"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce caracter general este specific hidrografiei României?",
              optiuni: [
                "A. Lipsa râurilor permanente",
                "B. Râurile curg spre vest",
                "C. Toate râurile izvorăsc din Munții Apuseni",
                "D. Aproape toate râurile se varsă în Dunăre"
              ],
              raspuns: 3,
            }
          ]
        },
        {
          nume: "Lecția 6", continut: `<h3><img src="/globLectii.svg" alt="icon" /> Vegetația, fauna și solurile</h3>

<table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Etaj climatic</th>
      <th>Altitudine</th>
      <th>Vegetație</th>
      <th>Faună</th>
      <th>Soluri (tipuri)</th>
      <th>Răspândire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Etaj de câmpie</td>
      <td>0 – 100 m</td>
      <td>Stepa – reprezentată de ierburi mărunte: păiuș, colilie, stipă</td>
      <td>Rozătoare – șoarecele de câmp, popândăul, iepurele de câmp, hârciog</td>
      <td>Molisoluri (cernoziomuri)</td>
      <td>Câmpia Bărăganului, Podișul Dobrogei de Sud</td>
    </tr>
    <tr>
      <td>100 – 200 m</td>
      <td>Silvostepa – stepă cu pădure: stejar pufos, stejar brumăriu</td>
      <td>Aceleași, dar și mistreț</td>
      <td>Molisoluri (cernoziomuri levigate)</td>
      <td>Câmpia de Vest, Câmpia Română, Câmpia Moldovei, Câmpia Transilvaniei, Dobrogea C și de N</td>
    </tr>
    <tr>
      <td>Etaj de deal și podiș</td>
      <td>200 – 500 m</td>
      <td>Pădure de stejar cu cer, gârniță, stejar pedunculat, gorun</td>
      <td>Mistreț, vulpe, păsări – ciocănitoare, cinteză</td>
      <td>Argiluvisoluri (cenușii și brun-roșcate)</td>
      <td>Podișul Getic, Podișul Bârladului, Pod. Mehedinți, D.C.T., Pod Sucevei</td>
    </tr>
    <tr>
      <td>Etaj de dealuri înalte</td>
      <td>500 – 1200 m</td>
      <td>Pădure de fag</td>
      <td>Lup, vulpe, pisică sălbatică</td>
      <td>Cambisoluri (brune acide)</td>
      <td>Subcarpați, Carpați</td>
    </tr>
    <tr>
      <td rowspan="3">Etaj montan</td>
      <td>1200 – 1800 m</td>
      <td>Pădure de conifere – molid, brad, pin, zada</td>
      <td>Urs, lup, râs, cocoșul de munte</td>
      <td>Spodosoluri (soluri podzolice)</td>
      <td>Carpați</td>
    </tr>
    <tr>
      <td>1800 – 2000 m</td>
      <td>Etaj subalpin – arbuști ca ienupăr, jneapăn, merișor</td>
      <td>Aceleași</td>
      <td>Spodosoluri (soluri alpine)</td>
      <td>Carpați</td>
    </tr>
    <tr>
      <td>Peste 2000 m</td>
      <td>Etaj alpin – mușchi și licheni</td>
      <td>Capra neagră, vulturul</td>
      <td>Spodosoluri (soluri alpine)</td>
      <td>Carpați</td>
    </tr>
  </tbody>
</table>

<h3> <img src="/globLectii.svg" alt="icon" />Resursele naturale</h3>

<h4>A. Resursele de subsol</h4>
<ol class="custom-list">
  <li><strong>Unitatea hercinică a Munților Măcin</strong> – minereuri de cupru, granit și calcar.</li>
  <li><strong>Unitatea de orogen a Munților Carpați</strong>:
    <ul class="custom-list">
      <li>minereuri de fier – Grupa Nordică a Carpaților Orientali, Grupa Centrală a Carpaților Orientali, M. Banatului, M. Poiana Ruscă, M. Apuseni</li>
      <li>minereuri neferoase – Grupa Nordică a Carpaților Orientali (cupru, plumb, zinc), M. Banatului</li>
      <li>M. Apuseni (bauxită, cupru, plumb, zinc)</li>
      <li>roci de construcții: granit și bazalt în M. Apuseni; bazalt în Carpații Curburii, andezit în M. Apuseni; marmură în M. Poiana Ruscă</li>
    </ul>
  </li>
  <li><strong>Depresiunea Colinara a Transilvaniei</strong> – gaz metan, sare, roci de construcții.</li>
  <li><strong>Subcarpați</strong> – petrol, cărbuni, gaze naturale, roci de construcții.</li>
  <li><strong>Podișul Moldovei</strong> – gaze naturale, roci de construcții.</li>
  <li><strong>Podișul Getic</strong> – cărbuni (lignit), petrol, gaze naturale.</li>
  <li><strong>Câmpia și Dealurile de Vest</strong> – petrol, gaze naturale, roci de construcții.</li>
  <li><strong>Câmpia Română</strong> – petrol și gaze naturale.</li>
  <li><strong>Platforma Continentală a Mării Negre</strong> – petrol.</li>
</ol>

<h4>B. Resursele de apă</h4>
<p>România deține cantități însemnate de resurse de apă, distribuite neuniform pe suprafața țării. Cele mai mari cantități se găsesc în zona montană, iar cele mai mici în Dobrogea.</p>

<h4>C. Resursele vegetale</h4>
<p>Pădurile și pășunile se găsesc cu precădere în Carpați și Subcarpați.</p>

<h4>D. Resursele de sol</h4>
<p>Cele mai fertile soluri se găsesc în câmpii și în Podișul Dobrogei.</p>

`, imagini: [], tip: 'lectie'
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              continut: "Ce tip de sol este caracteristic etajului de câmpie cu altitudinea de 0 – 100 m?",
              optiuni: [
                "A. Spodosoluri",
                "B. Molisoluri (cernoziomuri)",
                "C. Cambisoluri",
                "D. Argiluvisoluri"
              ],
              raspuns: 1,
            },
            {
              continut: "Care este altitudinea specifică etajului de dealuri înalte?",
              optiuni: [
                "A. 0 – 100 m",
                "B. 100 – 200 m",
                "C. 200 – 500 m",
                "D. 500 – 1200 m"
              ],
              raspuns: 3,
            },
            {
              continut: "Care dintre următoarele animale este caracteristic etajului alpin?",
              optiuni: [
                "A. Mistreț",
                "B. Capra neagră",
                "C. Cocoșul de munte",
                "D. Iepurele de câmp"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce vegetație este specifică etajului de deal și podiș (200 – 500 m)?",
              optiuni: [
                "A. Pădure de fag",
                "B. Stepa",
                "C. Pădure de stejar cu cer, gârniță, stejar pedunculat, gorun",
                "D. Mușchi și licheni"
              ],
              raspuns: 2,
            },
            {
              continut: "Care este principala resursă de subsol extrasă în Podișul Getic?",
              optiuni: [
                "A. Sare",
                "B. Minereuri de fier",
                "C. Petrol, gaze naturale, cărbuni",
                "D. Bauxită"
              ],
              raspuns: 2,
            },
            {
              continut: "Unde se găsesc cele mai fertile soluri din România?",
              optiuni: [
                "A. În Munții Apuseni",
                "B. În Câmpii și Podișul Dobrogei",
                "C. În Carpații Meridionali",
                "D. În Delta Dunării"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce tip de resurse se extrag în Depresiunea Colinara a Transilvaniei?",
              optiuni: [
                "A. Petrol și cărbuni",
                "B. Cupru și zinc",
                "C. Gaz metan, sare, roci de construcții",
                "D. Aur și argint"
              ],
              raspuns: 2,
            },
            {
              continut: "Care este specificul faunei din etajul de dealuri înalte?",
              optiuni: [
                "A. Rozătoare și hârciog",
                "B. Vulpe, pisică sălbatică, lup",
                "C. Urs, lup, râs",
                "D. Cocoșul de munte"
              ],
              raspuns: 1,
            },
            {
              continut: "Ce tip de vegetație se găsește în etajul subalpin?",
              optiuni: [
                "A. Pădure de stejar",
                "B. Etaj alpin – mușchi și licheni",
                "C. Arbuști ca ienupăr, jneapăn, merișor",
                "D. Stepa cu păiuș și colilie"
              ],
              raspuns: 2,
            },
            {
              continut: "Unde se extrag minereuri de cupru, granit și calcar?",
              optiuni: [
                "A. Marea Neagră",
                "B. Câmpia Română",
                "C. Munții Măcin",
                "D. Podișul Getic"
              ],
              raspuns: 2,
            }
          ]
        },
        {
          nume: "Lecția 7", continut: `<h3> <img src="/globLectii.svg" alt="icon" />Populația</h3>

<h2>1. Evoluția numerică a populației</h2>
<p>Populația a înregistrat o evoluție diferită. Evoluția lentă a ținut până în perioada interbelică. În perioada comunistă numărul populației a crescut ajungând la 23 milioane. După 1990, numărul populației a scăzut până la 21,6 milioane locuitori în anul 2005.</p>

<h2>2. Distribuția spațială a populației</h2>
<ul class="custom-list">
  <li>Densitatea medie este de 90 loc/km²;</li>
  <li>Cea mai mare densitate a populației este în jurul orașului București – 184 loc/km²;</li>
  <li>Cea mai mică este în județul Tulcea – 30 loc/km².</li>
</ul>

<h2>3. Mișcarea naturală a populației</h2>
<p>– natalitatea: 10,0%; mortalitatea: 11,9%; bilanțul natural: -1,9%;</p>

<h2>4. Mobilitatea teritorială a populației</h2>
<p>
Migrația internă – S-a realizat înainte de 1990 dinspre mediul rural spre mediul urban, însă după acest an, din cauza ratei mari a șomajului din mediul urban, s-a înregistrat fenomenul de <strong>migrație de reîntoarcere</strong>.<br>
Cel mai important centru de atracție a populației este municipiul București.<br>
Migrația externă – s-a accentuat în ultimii ani, din cauze economice. Românii emigrează spre țări ale Europei de Sud, spre S.U.A., Canada, Australia.
</p>

<h2>5. Structura populației</h2>

<ul class="custom-list">
  <li><strong>Structura etnică:</strong> Români: 89,5%; Maghiari: 6,6%; Romi (țigani): 2,5%; Germani: 0,3%</li>
  <li><strong>Structura religioasă:</strong> Ortodocși: 86,7%; Romano-catolici: 4,7%; Greco-catolici: 0,9%; Reformați: 3,2%</li>
  <li><strong>Structura pe grupe de vârstă:</strong>
    <ul class="custom-list">
      <li>0-14 ani – populație tânără – în scădere;</li>
      <li>15-60 ani – populație activă;</li>
      <li>Peste 60 ani – populație bătrână – în creștere.</li>
    </ul>
  </li>
  <li><strong>Structura pe medii:</strong> Mediul urban – 55%; Mediul rural – 45%</li>
</ul>



<h3> <img src="/globLectii.svg" alt="icon" />Așezările omenești</h3>

<h2>1. Așezările rurale și tipologia lor</h2>

<p><strong>Clasificarea satelor:</strong></p>
<ul class="custom-list">
  <li><strong>după mărime:</strong>
    <ul class="custom-list">
      <li>sate mici – sub 500 locuitori – în zonă montană;</li>
      <li>sate mijlocii – între 500 – 1 500 locuitori – în zonă deluroasă;</li>
      <li>sate mari – între 1 500 și 4 000 locuitori – în zonă de podiș;</li>
      <li>sate foarte mari – peste 4 000 locuitori – la câmpie;</li>
    </ul>
  </li>
</ul>

<h2>2. Așezările urbane</h2>
<p>România are 263 de orașe, iar populația urbană este de 12 milioane de locuitori.</p>

<p><strong>Clasificarea orașelor:</strong></p>

<ul class="custom-list">
  <li><strong>a. după vechime:</strong>
    <ul class="custom-list">
      <li>orașe antice – orașe coloni: Tomis (Constanța), Callatis (Mangalia), Histria (Istria, sit arheologic);</li>
      <li>orașe medievale – orașe cetăți: Alba Iulia, Napoca (Cluj-Napoca), Potaissa (Turda);</li>
      <li>orașe moderne – orașe dezvoltate în perioada industrializării: Drobeta (Drobeta Turnu Severin), Galați, Timișoara, Pitești, Sibiu, Târgu Mureș, Brașov, Sibiu, T. Mureș, Suceava, Iași, Craiova, Piatra Neamț, Râmnicu Vâlcea, Satu Mare, Bistrița, Baia Mare, Deva, Târgoviște;</li>
      <li>orașe foarte moderne – apărute în perioada modernă: Sunt orașe mici și mijlocii (Alexandria, Victoria);</li>
    </ul>
  </li>

  <li><strong>b. după mărime:</strong>
    <ul class="custom-list">
      <li>orașe foarte mici – sub 25 000 locuitori;</li>
      <li>orașe mici – între 25 000 – 50 000 locuitori;</li>
      <li>orașe mijlocii – între 50 000 – 100 000 locuitori;</li>
      <li>orașe mari – peste 100 000 locuitori;</li>
      <li>orașe foarte mari – peste 300 000 locuitori: Iași, Constanța, Timișoara, Cluj-Napoca;</li>
      <li>oraș-metropolă – peste 1,9 mil. locuitori: București</li>
    </ul>
  </li>

  <li><strong>c. după funcție:</strong> industriale, comerciale, porturi, turistice etc.</li>
</ul>

`, imagini: [], tip: 'lectie'
        },
        {
          "tip": "quizz",
          "intrebari": [
            {
              "continut": "Care a fost populația României în anul 2005?",
              "optiuni": [
                "A. 23 milioane",
                "B. 21,6 milioane",
                "C. 18 milioane",
                "D. 20 milioane"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este densitatea medie a populației în România?",
              "optiuni": [
                "A. 184 loc/km²",
                "B. 90 loc/km²",
                "C. 60 loc/km²",
                "D. 30 loc/km²"
              ],
              "raspuns": 1
            },
            {
              "continut": "Unde se înregistrează cea mai mare densitate a populației?",
              "optiuni": [
                "A. Județul Tulcea",
                "B. Câmpia Română",
                "C. În jurul orașului București",
                "D. Subcarpați"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este bilanțul natural al populației conform lecției?",
              "optiuni": [
                "A. 0%",
                "B. +1,5%",
                "C. -1,9%",
                "D. -0,5%"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de migrație a apărut după 1990 în România?",
              "optiuni": [
                "A. Migrație de colonizare",
                "B. Migrație sezonieră",
                "C. Migrație de reîntoarcere",
                "D. Migrație rural-urbană"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este cel mai important centru de atracție a populației?",
              "optiuni": [
                "A. Iași",
                "B. Cluj-Napoca",
                "C. Constanța",
                "D. București"
              ],
              "raspuns": 3
            },
            {
              "continut": "Ce procent din populația României este reprezentat de etnici maghiari?",
              "optiuni": [
                "A. 2,5%",
                "B. 6,6%",
                "C. 4,7%",
                "D. 0,3%"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce categorie de vârstă este în scădere?",
              "optiuni": [
                "A. 0-14 ani",
                "B. 15-60 ani",
                "C. Peste 60 ani",
                "D. Toate sunt în creștere"
              ],
              "raspuns": 0
            },
            {
              "continut": "Cum sunt clasificate satele cu sub 500 de locuitori?",
              "optiuni": [
                "A. Sate mijlocii",
                "B. Sate foarte mari",
                "C. Sate mari",
                "D. Sate mici"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care oraș este considerat oraș-metropolă?",
              "optiuni": [
                "A. Cluj-Napoca",
                "B. București",
                "C. Iași",
                "D. Constanța"
              ],
              "raspuns": 1
            },
          ]
        },
        {
          nume: "Lecția 8", continut: `<h3> <img src="/globLectii.svg" alt="icon" />Agricultura României</h3>

  <h2>A. Premisele naturale ale dezvoltării agriculturii</h2>
  <ul class="custom-list">
    <li><strong>Relieful</strong> favorizează practicarea unor culturi: în zona de câmpie predomină cereale, plante tehnice; legumele, vița-de-vie, pomii fructiferi în zone deluroase; pajiștile montane sunt utilizate pentru creșterea animalelor.</li>
    <li><strong>Clima</strong> permite dezvoltarea unui ciclu vegetativ de 6–7 luni, în regiunile cu precipitații puține sunt necesare irigații.</li>
    <li><strong>Apele</strong> asigură aprovizionarea populației și a fermelor cu apă pentru irigații.</li>
    <li><strong>Solurile</strong> cele mai fertile sunt în câmpii, necesită îngrășăminte.</li>
  </ul>

  <h2>B. Lucrările de îmbunătățiri funciare</h2>
  <ul class="custom-list">
    <li>Combaterea eroziunii solurilor prin: terasări, împăduriri.</li>
    <li>Fixarea nisipurilor prin plantarea pomilor fructiferi, viței-de-vie, culturi leguminoase.</li>
    <li>Prevenirea inundațiilor prin îndiguiri, desecări.</li>
    <li>Combaterea secetei prin irigații.</li>
  </ul>

  <h2>C. Ramurile agriculturii</h2>

  <h4>I. Cultura plantelor</h4>

  <h4>1. Cerealele:</h4>
  <ul class="custom-list">
    <li><strong>Grâul</strong> – se cultivă în: Câmpia Română, Dobrogea, Câmpia Moldovei, Podișul Bârladului, Câmpia Transilvaniei, Câmpia de Vest.</li>
    <li><strong>Porumbul</strong> – se cultivă din Lunca Dunării până la 800 m altitudine.</li>
    <li><strong>Utilizarea cerealelor</strong>: industria morăritului și panificației – în toate orașele mari ale țării.</li>
  </ul>

  <h4>2. Plante tehnice (industriale):</h4>
  <ul class="custom-list">
    <li><strong>Floarea soarelui</strong> – Câmpia Română, Dobrogea, Câmpia Moldovei, Câmpia de Vest.</li>
    <li><strong>Sfecla de zahăr</strong> – Pod. Moldovei, Culoarul Siretului, Podișul Transilvaniei, Câmpia de Vest, Câmpia Română.</li>
    <li><strong>Hameiul</strong> – Câmpia Română.</li>
    <li><strong>Inul pentru ulei</strong> – Podișul Transilvaniei.</li>
    <li><strong>Cânepa</strong> – Câmpia de Vest, Pod. Transilvaniei, Pod. Sucevei.</li>
    <li><strong>Utilizare</strong>: industrie alimentară, textilă, de uleiuri esențiale.</li>
  </ul>

  <h4>3. Cartoful</h4>
  <p>Se cultivă în: Podișul Sucevei, depresiunile intramontane.</p>

  <h4>4. Legumele și leguminoasele</h4>
  <p>Se cultivă în: zonele periurbane.</p>

  <h4>5. Viticultura</h4>
  <ul class="custom-list">
    <li><strong>Subcarpații Curburii</strong>: Panciu, Odobești, Cotești, Valea Călugărească.</li>
    <li><strong>Pod. Moldovei</strong>: Cotnari, Huși.</li>
    <li><strong>Pod. Dobrogei</strong>: Murfatlar, Niculițel.</li>
    <li><strong>Pod. Transilvaniei</strong>: Alba Iulia, Valea lui Mihai.</li>
  </ul>

  <h4>6. Pomicultura</h4>
  <ul class="custom-list">
    <li><strong>Subcarpații dintre Vrancea și Vâlcea</strong>: prun și măr.</li>
    <li><strong>N. Transilvaniei</strong>: măr.</li>
    <li><strong>S și SV Transilvaniei</strong>: cireș și vișin.</li>
    <li><strong>Dobrogea</strong>: cais și piersic.</li>
  </ul>
  <p><strong>Utilizarea fructelor</strong>: industria conservelor (Răureni, Topoloveni, Hațeg, Baia Mare).</p>

  <h4>II. Creșterea animalelor</h4>

  <h4>1. Bovinele</h4>
  <p>Se cresc în zone montane, de deal și podiș, pe baza pășunilor și fânețelor.</p>

  <h4>2. Ovinele</h4>
  <p>În zonele montane și submontane – rasele Țurcană și Țigaie.</p>

  <h4>3. Porcinele</h4>
  <p>În zonele de câmpie – porumb; în zone de deal, podiș și munte – pe bază de resturi menajere.</p>

  <h4>4. Păsările de curte (avicultură)</h4>
  <p>Se practică în zonele periurbane.</p>

  <h4>5. Albinele (apicultură)</h4>
  <p>Se practică în zonele de câmpie și deal.</p>

  <h4>6. Viermii de mătase (sericicultura)</h4>
  <p>Se practică în Banat și Oltenia.</p>

  <h4>Industria produselor animaliere:</h4>
  <ul class="custom-list">
    <li>Industria laptelui: București, Brașov, Sibiu, Mediaș, Brăila, Arad, Buzău, Salonta.</li>
    <li>Industria cărnii: București, Timișoara, Ploiești, Constanța, Bacău.</li>
    <li>Industria ouălor și păsărilor: Ploiești, Buzău, Timișoara.</li>
    <li>Industria pielăriei și încălțămintei: București, Cluj-Napoca, Oradea, Târgu Mureș.</li>
    <li>Industria blănăriei: Oradea.</li>
    <li>Cojocărie: Orăștie.</li>
  </ul>
`, imagini: [], tip: 'lectie'
        },
        {
          "tip": "quizz",
          "intrebari": [
            {
              "continut": "Ce culturi predomină în zona de câmpie?",
              "optiuni": [
                "A. Vița-de-vie și pomi fructiferi",
                "B. Cereale și plante tehnice",
                "C. Pajiști și fânețe",
                "D. Cartof și legume"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce durată are ciclul vegetativ permis de climă în România?",
              "optiuni": [
                "A. 3-4 luni",
                "B. 12 luni",
                "C. 6-7 luni",
                "D. 9-10 luni"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este principala lucrare de combatere a secetei?",
              "optiuni": [
                "A. Desecări",
                "B. Irigații",
                "C. Împăduriri",
                "D. Terasări"
              ],
              "raspuns": 1
            },
            {
              "continut": "În ce regiune se cultivă grâu?",
              "optiuni": [
                "A. Depresiunile intramontane",
                "B. Câmpia Română, Dobrogea și Câmpia Moldovei",
                "C. Zonele periurbane",
                "D. Banat și Oltenia"
              ],
              "raspuns": 1
            },
            {
              "continut": "Unde se cultivă cartoful în România?",
              "optiuni": [
                "A. Câmpia de Vest",
                "B. Podișul Sucevei și depresiunile intramontane",
                "C. Câmpia Română și Dobrogea",
                "D. Zonele montane și submontane"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce se cultivă în zonele periurbane?",
              "optiuni": [
                "A. Plante tehnice",
                "B. Cereale",
                "C. Legume și păsări",
                "D. Legume și leguminoase"
              ],
              "raspuns": 3
            },
            {
              "continut": "Unde se practică viticultura în Pod. Moldovei?",
              "optiuni": [
                "A. Panciu și Odobești",
                "B. Cotnari și Huși",
                "C. Alba Iulia și Valea lui Mihai",
                "D. Murfatlar și Niculițel"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care sunt speciile de pomi cultivate în Dobrogea?",
              "optiuni": [
                "A. Măr și prun",
                "B. Cireș și vișin",
                "C. Cais și piersic",
                "D. Viță-de-vie și nuc"
              ],
              "raspuns": 2
            },
            {
              "continut": "Unde se cresc bovinele?",
              "optiuni": [
                "A. În zone de câmpie",
                "B. În zone montane, de deal și podiș",
                "C. În zonele periurbane",
                "D. În Dobrogea și Banat"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce rase de ovine sunt specifice zonelor montane și submontane?",
              "optiuni": [
                "A. Suffolk și Merinos",
                "B. Țurcană și Țigaie",
                "C. Karakul și Texel",
                "D. Țurcană și Dorper"
              ],
              "raspuns": 1
            },
          ]
        },
        {
          nume: "Lecția 9", continut: `<h3><img src="/globLectii.svg" alt="icon" />Industria României</h3>

<h2>I. Industria extractivă și industria energiei electrice</h2>

<h4>1. Resurse energetice</h4>
<ul class="custom-list">
  <li><strong>Cărbunii</strong> se exploatează:
    <ul class="custom-list">
      <li>Huilă – Depresiunea Petroșani, Carpații Meridionali, Munții Banatului</li>
      <li>Lignit – Podișul și Subcarpații Getici: Rovinari, Motru; Subcarpații Curburii, Câmpia de Vest</li>
      <li>Cărbune brun – Bazinul Comănești (Carpații Orientali)</li>
    </ul>
  </li>
  <li><strong>Petrolul</strong> – Podișul și Subcarpații Getici, Subcarpații Curburii, Podișul Moldovei, Câmpia de Vest, platforma continentală a Mării Negre</li>
  <li><strong>Gaze naturale</strong> – două tipuri:
    <ul class="custom-list">
      <li>Gaze de sondă – asociate petrolului</li>
      <li>Gaz metan – Depresiunea Colinara a Transilvaniei</li>
    </ul>
  </li>
</ul>

<h4>2. Industria energiei electrice</h4>
<p>Folosește materii prime: cărbuni, păcură, gaze naturale, apă.</p>
<ul class="custom-list">
  <li>Termocentrale: Turceni, Rovinari, București, Brazi, Mintia – Deva, Ișalnița, Rogojelu</li>
  <li>Hidrocentrale: Porțile de Fier I și II, Lotru, Stejaru pe Bistrița, Vidraru pe Argeș</li>
  <li>Atomocentrală: Cernavodă</li>
</ul>

<h2>II. Industria metalurgică</h2>

<h4>1. Minereurile feroase și siderurgia</h4>
<ul class="custom-list">
  <li>Materii prime: minereuri de fier – Munții Poiana Ruscă, Munții Apuseni</li>
  <li>Produse: fontă, oțel, laminate</li>
  <li>Centre: combinate siderurgice – Galați, Reșița, Hunedoara; întreprinderi specializate – Târgoviște, Roman, Iași, Buzău, Câmpia Turzii</li>
</ul>

<h4>2. Minereurile neferoase și metalurgia neferoasă</h4>
<ul class="custom-list">
  <li>Materii prime:
    <ul class="custom-list">
      <li>Minereuri complexe: Apuseni, Carpații Orientali, M. Banatului</li>
      <li>Prelucrare: Baia Mare (Cu, Pb), Zlatna (Cu), Copșa Mică (Zn)</li>
      <li>Bauxită – Munții Apuseni, prelucrare la Oradea și Tulcea</li>
      <li>Aur și argint – Apuseni, Carpații Orientali; prelucrare: Baia Mare, Zlatna</li>
    </ul>
  </li>
</ul>

<h4>3. Industria construcțiilor de mașini și prelucrării metalelor</h4>
<p><strong>Produse:</strong> utilaje petroliere – Ploiești; utilaj minier – Tg. Jiu, Petroșani; mașini-unelte – București, Brașov, Arad; tractoare – Brașov; rulmenți – Brașov, Alexandria; aparate de zbor – București, Craiova, Bacău</p>

<h2>III. Industria chimică</h2>
<ul class="custom-list">
  <li>Materii prime: sare, sulf, petrol, gaze naturale, lemn</li>
</ul>

<h4>1. Industria petrochimică</h4>
<ul class="custom-list">
  <li>Centre: Brazi, Borzești, Pitești, Năvodari</li>
  <li>Produse: cauciuc sintetic, mase plastice, fire sintetice</li>
</ul>

<h4>2. Industria produselor clorosodice</h4>
<ul class="custom-list">
  <li>Centre: Ocna Mureș, Govora, Onești, Giurgiu</li>
</ul>

<h4>3. Industria îngrășămintelor chimice</h4>
<ul class="custom-list">
  <li>Centre: București, Năvodari, Târgu Mureș, Slobozia</li>
</ul>

<h4>4. Industria celulozei și hârtiei</h4>
<ul class="custom-list">
  <li>Centre: Brăila, Călărași, Piatra Neamț, Bușteni</li>
</ul>

<h2>IV. Industria lemnului</h2>
<ul class="custom-list">
  <li>Industria cherestelei: Piatra Neamț, Suceava, Bacău</li>
  <li>Industria plăcilor și fibrelor: Brăila, Călărași</li>
  <li>Mobilă: în toate orașele mari</li>
</ul>

<h2>V. Industria materialelor de construcții</h2>
<ul class="custom-list">
  <li>Materii prime: granit, bazalt, marmură, gresii, calcare – în toată țara</li>
  <li>Ramuri:
    <ul class="custom-list">
      <li>Industria lianților: Comarnic, Hoghiz, Brașov, Câmpulung, Turda</li>
      <li>Industria ceramicii de construcții: Alba Iulia, Bacău, Sighișoara, Craiova</li>
      <li>Industria sticlei: Mediaș, Câmpia Turzii, București</li>
    </ul>
  </li>
</ul>

<h3> <img src="/globLectii.svg" alt="icon" />Concentrații industriale</h3>

<h4>1. București și împrejurimi</h4>
<ul class="custom-list">
  <li>Industria chimică – Popești-Leordeni, Jilava</li>
  <li>Industria alimentară – Balotești</li>
  <li>Prelucrarea filmului – Buftea</li>
</ul>

<h4>2. Galați și Brăila</h4>
<p>Centre siderurgice și porturi importante</p>

<h4>3. Ploiești și împrejurimi</h4>
<p>Cel mai mare centru de prelucrare a petrolului – Brazi, Teleajen, Câmpina</p>

<h4>4. Brașov și împrejurimi</h4>
<p>Industria de mașini și electrotehnică – Săcele, Râșnov, Zărnești</p>

<h4>5. Petroșani și împrejurimi</h4>
<p>Exploatare de huilă, utilaj minier</p>

<h4>6. Baia Mare și împrejurimi</h4>
<p>Industria minieră, metalurgică</p>

<h4>7. Târgu Jiu, Motru, Rovinari</h4>
<p>Exploatare de lignit, termocentrale</p>

<h4>8. Craiova și împrejurimi</h4>
<p>Construcții de mașini, transport, aparate de zbor</p>

<h4>9. Constanța, Mangalia</h4>
<p>Industria chimică, șantiere navale</p>

<h4>10. Alte centre</h4>
<p>Iași, Timișoara, Arad, Oradea, Buzău etc.</p>
`, imagini: [], tip: 'lectie'
        },
        {
          "tip": "quizz",
          "intrebari": [
            {
              "continut": "Unde se exploatează huila în România?",
              "optiuni": [
                "A. Depresiunea Colinara a Transilvaniei",
                "B. Munții Poiana Ruscă",
                "C. Depresiunea Petroșani și Munții Banatului",
                "D. Podișul Getic și Dobrogea"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este localitatea unde funcționează singura centrală nucleară?",
              "optiuni": [
                "A. Brazi",
                "B. Turceni",
                "C. Cernavodă",
                "D. București"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce produse se obțin în industria siderurgică?",
              "optiuni": [
                "A. Mase plastice și fire sintetice",
                "B. Fontă, oțel, laminate",
                "C. Gaz metan și păcură",
                "D. Cherestea și mobilă"
              ],
              "raspuns": 1
            },
            {
              "continut": "Unde se prelucrează bauxita extrasă din Munții Apuseni?",
              "optiuni": [
                "A. Zlatna și Copșa Mică",
                "B. Borzești și Pitești",
                "C. Oradea și Tulcea",
                "D. Baia Mare și Sighișoara"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce orașe sunt centre ale industriei celulozei și hârtiei?",
              "optiuni": [
                "A. Brașov, Mediaș, Iași",
                "B. Piatra Neamț, Brăila, Bușteni",
                "C. Galați, Târgoviște, Reșița",
                "D. Mangalia, Câmpia Turzii, Făgăraș"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este centrul industrial cu cea mai mare concentrare a industriei chimice?",
              "optiuni": [
                "A. Mangalia",
                "B. Baia Mare",
                "C. București și împrejurimi",
                "D. Sighișoara"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de resursă energetică este exploatată în zona Rovinari?",
              "optiuni": [
                "A. Gaz metan",
                "B. Huilă",
                "C. Lignit",
                "D. Petrol"
              ],
              "raspuns": 2
            },
            {
              "continut": "Unde se produce cherestea în România?",
              "optiuni": [
                "A. Brăila și Călărași",
                "B. Piatra Neamț, Suceava, Bacău",
                "C. Alba Iulia și Sighișoara",
                "D. București și Craiova"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce centre sunt importante pentru construcția de mașini?",
              "optiuni": [
                "A. Alba Iulia, Câmpulung, Arad",
                "B. Constanța, Mediaș, Onești",
                "C. Craiova, Brașov, Petroșani",
                "D. Ploiești, Turda, Rovinari"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce centre industriale sunt situate în sudul țării?",
              "optiuni": [
                "A. Galați, Mangalia, Brașov",
                "B. Timișoara, Arad, Oradea",
                "C. Ploiești, Câmpina, București",
                "D. Baia Mare, Satu Mare, Suceava"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          nume: "Lecția 10", continut: `<h3><img src="/globLectii.svg" alt="icon" />Sectorul terțiar</h3>

<h2>1. Comerțul interior</h2>
<ul class="custom-list">
  <li><strong>Produse vândute</strong>: agroalimentare (o treime), mărfuri nealimentare (două treimi)</li>
</ul>

<h2>2. Turismul</h2>

<h4>a. Tipuri de turism</h4>
<ul class="custom-list">
  <li>Turism balneoclimateric</li>
  <li>Turism hibernal și al sporturilor de iarnă</li>
  <li>Turism litoral</li>
  <li>Turism cultural</li>
</ul>

<h4>b. Zone de atracție turistică</h4>
<ul class="custom-list">
  <li>București și împrejurimile</li>
  <li>Litoralul Mării Negre</li>
  <li>Delta Dunării</li>
  <li>Valea Prahovei</li>
  <li>Bucovina</li>
  <li>Maramureș</li>
  <li>Munții Apuseni</li>
  <li>Nordul Olteniei</li>
</ul>
          <h3><img src="/globLectii.svg" alt="icon" />Transporturile</h3>

<h2>1. Transporturile feroviare</h2>
<p>Se grupează în magistrale feroviare:</p>
<ul class="custom-list">
  <li><strong>București – Timișoara</strong> trece prin: Roșiori de Vede, Craiova, Drobeta Turnu Severin, Lugoj. Puncte de frontieră: Jimbolia și Moravița.</li>
  <li><strong>București – Arad</strong> trece prin: Pitești, Craiova, Timișoara, punct de frontieră: Curtici.</li>
  <li><strong>București – Oradea</strong> trece prin: Ploiești, Brașov, Sibiu, Deva, punct de frontieră: Episcopia Bihor.</li>
  <li><strong>București – Satu Mare</strong> trece prin: Ploiești, Brașov, Sighișoara, Cluj-Napoca, punct de frontieră: Halmeu.</li>
  <li><strong>București – Suceava</strong> trece prin: Ploiești, Buzău, Adjud, Bacău, Roman, punct de frontieră: Vicșani.</li>
  <li><strong>București – Iași</strong> trece prin: Urziceni, Făurei, Tecuci, Bârlad, Vaslui, punct de frontieră: Ungheni.</li>
  <li><strong>București – Galați</strong> trece prin: Urziceni, Făurei, Brăila. <em>Fără punct de frontieră.</em></li>
  <li><strong>București – Constanța – Mangalia</strong> trece prin: Fetești, Cernavodă, Medgidia. <em>Fără punct de frontieră.</em></li>
</ul>

<h2>2. Transporturile rutiere</h2>
<p>Rețeaua de șosele are o lungime de 72.800 km și este împărțită în:</p>
<ul class="custom-list">
  <li>Drumuri europene (E)</li>
  <li>Drumuri naționale (DN)</li>
  <li>Drumuri județene (DJ)</li>
</ul>
<p>România este tranzitată de:</p>
<ul class="custom-list">
  <li><strong>E60</strong> – intră în țară la Borș (din Franța), trece prin: Oradea, Cluj-Napoca, Târgu Mureș, Sighișoara, Brașov, Ploiești, București, Slobozia, Giurgiu – punct de ieșire spre Bulgaria.</li>
  <li><strong>E85</strong> – trece prin: București, Ploiești, Buzău, Bacău, Suceava – punct de ieșire la Siret (spre Ucraina și Lituania).</li>
  <li><strong>E68</strong> – trece prin: Brașov, Sibiu, Alba Iulia, Deva, Arad – punct de ieșire la Nădlac (spre Ungaria).</li>
  <li><strong>E70</strong> – intră în țară din Serbia, trece prin: Timișoara, Drobeta-Turnu Severin, Craiova, Slatina, Pitești, București – punct de ieșire la Giurgiu (spre Bulgaria).</li>
</ul>

<h2>3. Transporturile aeriene</h2>
<ul class="custom-list">
  <li>Aeroporturi internaționale: București Otopeni</li>
  <li>Aeroporturi cu trafic mixt: București Băneasa, Constanța (Mihail Kogălniceanu), Timișoara, Cluj-Napoca etc.</li>
</ul>

<h2>4. Transporturile pe apă</h2>
<ul class="custom-list">
  <li><strong>Transporturi fluviale</strong>: pe Dunăre, cel mai mare port: Galați</li>
  <li><strong>Transporturi maritime</strong>: pe Marea Neagră, cel mai mare port: Constanța</li>
</ul>
`, imagini: [], tip: 'lectie'
        },
        {
          "tip": "quizz",
          "intrebari": [
            {
              "continut": "Care este ponderea mărfurilor nealimentare în comerțul interior?",
              "optiuni": [
                "A. O treime",
                "B. Jumătate",
                "C. Două treimi",
                "D. Un sfert"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de turism include tratamente balneare și climaterice?",
              "optiuni": [
                "A. Turism litoral",
                "B. Turism cultural",
                "C. Turism hibernal",
                "D. Turism balneoclimateric"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care dintre următoarele zone este cunoscută ca destinație turistică?",
              "optiuni": [
                "A. Valea Jiului",
                "B. Culoarul Rucăr-Bran",
                "C. Valea Prahovei",
                "D. Câmpia Română"
              ],
              "raspuns": 2
            },
            {
              "continut": "Prin ce oraș trece magistrala feroviară București – Timișoara?",
              "optiuni": [
                "A. Ploiești",
                "B. Cluj-Napoca",
                "C. Craiova",
                "D. Vaslui"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este punctul de frontieră al magistralei București – Arad?",
              "optiuni": [
                "A. Halmeu",
                "B. Episcopia Bihor",
                "C. Vicșani",
                "D. Curtici"
              ],
              "raspuns": 3
            },
            {
              "continut": "Ce drum european trece prin Suceava și iese spre Ucraina?",
              "optiuni": [
                "A. E60",
                "B. E70",
                "C. E85",
                "D. E68"
              ],
              "raspuns": 2
            },
            {
              "continut": "Pe unde iese din țară drumul E70?",
              "optiuni": [
                "A. Siret",
                "B. Giurgiu",
                "C. Nădlac",
                "D. Borș"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este cel mai mare port fluvial al României?",
              "optiuni": [
                "A. Brăila",
                "B. Tulcea",
                "C. Galați",
                "D. Drobeta-Turnu Severin"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce aeroport are statut internațional?",
              "optiuni": [
                "A. Cluj-Napoca",
                "B. Timișoara",
                "C. București Otopeni",
                "D. București Băneasa"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este cel mai mare port maritim al României?",
              "optiuni": [
                "A. Mangalia",
                "B. Galați",
                "C. Constanța",
                "D. Brăila"
              ],
              "raspuns": 2
            }
          ]
        },

      ],
    },
    {
      id: 1,
      nume: "Europa",
      unitate: 'europa',
      lectii: [
        {
          tip: 'lectie', nume: "Lecția 11", continut: `<h3><img src="/globLectii.svg" alt="icon" />Europa – elemente geografice de bază</h3>

<h4>Spațiul european</h4>
<ul class="custom-list">
  <li><strong>Suprafața</strong> Europei este de 10.170.340 km², ceea ce reprezintă 7,05% din uscatul planetei (penultimul continent ca suprafață al lumii);</li>
  <li><strong>Populația</strong> Europei era de 725 milioane locuitori în 2004, ceea ce reprezenta 12,5% din populația planetei (al treilea continent ca număr de populație al lumii);</li>
  <li><strong>Numărul statelor europene</strong> este de 46 (în Europa se află cel mai mare stat ca suprafață de pe glob – Rusia, precum și cel mai mic stat ca suprafață de pe glob – Vatican).</li>
</ul>

<h4>a. Așezarea matematică</h4>
<p>Europa este așezată în întregime în emisfera nordică, punctele extreme fiind:</p>
<ul class="custom-list">
  <li>N – Capul Nord (Nordkinn) la 71°08′ latitudine nordică, în Norvegia;</li>
  <li>S – Punta Marroquí la 36° latitudine nordică, în Spania;</li>
  <li>V – C. Roca (Cabo da Roca) la 9°34′ longitudine vestică, în Portugalia;</li>
  <li>E – nord-estul Munților Ural la 67°30′ longitudine estică, în Rusia.</li>
</ul>
<p>Distanța dintre extremitățile vestică și estică este de aproximativ 5.000 km,<br>
iar dintre extremitățile nordică și sudică este de aproximativ 4.000 km.</p>

<h4>b. Vecini</h4>
<ul class="custom-list">
  <li>Nord – Oceanul Arctic;</li>
  <li>Est – Munții Ural;</li>
  <li>Sud-est – Munții Caucaz;</li>
  <li>Sud – Marea Mediterană și Marea Neagră;</li>
  <li>Vest – Oceanul Atlantic.</li>
</ul>

<h4>c. Caracteristici generale</h4>
<ul class="custom-list">
  <li>Un <strong>contur foarte sinuos</strong>, lungimea țărmurilor depășind 80.000 km;</li>
  <li>Un <strong>relief complex</strong>, cu altitudini sub nivelul mării în Câmpia Olandeză și în Câmpia Precaspică, dar cu înălțimi maxime care depășesc 5.000 m în Munții Alpi și 4.000 m în Munții Caucaz; altitudinea medie a Europei este de 340 m, doar 1,5% din spațiul european depășind 2.000 m altitudine.</li>
  <li>Complexitatea reliefului este dată și de vechimea acestuia; astfel, unități de relief foarte vechi, precambriene, se alătură unităților de relief foarte noi, alpine și cuaternare.</li>
  <li>O <strong>climă predominant temperată</strong>, cu nuanțe blânde în vestul și sudul Europei, cu nuanțe excesive în estul Europei, dar favorabilă locuirii și desfășurării unor activități economice diversificate;</li>
  <li>O <strong>rețea hidrografică variabilă</strong>, cu râuri cu debite mari în nordul și vestul continentului, cu lacuri numeroase și o origine variată, predominând lacurile glaciare;</li>
  <li>Un <strong>înveliș biogeografic diversificat</strong>, datorită diversității reliefului și climei;</li>
  <li>O <strong>populație</strong> cu o densitate mare, de 71 loc/km², peste media mondială, dar și cu cea mai mare pondere a populației urbane de pe glob, de peste 70%;</li>
  <li><strong>Leagănul unor civilizații străvechi</strong>: greacă, romană, bizantină;</li>
  <li>Spațiul a două dintre cele mai importante <strong>blocuri regionale de pe glob</strong>: NATO – militar, creat în 1949 și UE – economic, creat în 1957.</li>
</ul>`, imagini: []
        },
        {
          "tip": "quizz",
          "intrebari": [
            {
              "continut": "Care este suprafața Europei?",
              "optiuni": [
                "A. 7.050.000 km²",
                "B. 10.170.340 km²",
                "C. 12.500.000 km²",
                "D. 5.000.000 km²"
              ],
              "raspuns": 1
            },
            {
              "continut": "Câte state sunt în Europa?",
              "optiuni": [
                "A. 36",
                "B. 42",
                "C. 46",
                "D. 50"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este punctul extrem nordic al Europei?",
              "optiuni": [
                "A. Cabo da Roca",
                "B. Capul Nord (Nordkinn)",
                "C. Punta Marroquí",
                "D. Munții Ural"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce se află la estul Europei?",
              "optiuni": [
                "A. Oceanul Arctic",
                "B. Munții Ural",
                "C. Marea Neagră",
                "D. Oceanul Atlantic"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este lungimea aproximativă a țărmurilor Europei?",
              "optiuni": [
                "A. 50.000 km",
                "B. 70.000 km",
                "C. 80.000 km",
                "D. 100.000 km"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este altitudinea medie a Europei?",
              "optiuni": [
                "A. 150 m",
                "B. 340 m",
                "C. 540 m",
                "D. 2.000 m"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce tip de climă predomină în Europa?",
              "optiuni": [
                "A. Tropicală",
                "B. Deșertică",
                "C. Temperată",
                "D. Polară"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce procent din spațiul european depășește 2.000 m altitudine?",
              "optiuni": [
                "A. 15%",
                "B. 5%",
                "C. 1,5%",
                "D. 0,5%"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce procent din populația Europei locuiește în mediul urban?",
              "optiuni": [
                "A. 50%",
                "B. 60%",
                "C. Peste 70%",
                "D. Sub 40%"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce două blocuri regionale majore își au sediul în Europa?",
              "optiuni": [
                "A. NATO și ONU",
                "B. NATO și UE",
                "C. G7 și ASEAN",
                "D. UE și G20"
              ],
              "raspuns": 1
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 12", continut: `<h3><img src="/globLectii.svg" alt="icon" />Elemente de geografie fizică</h3>
    <h3>Relieful major al Europei</h3>
    <ul class="custom-list">
      <li><strong>Altimetric</strong>, Europa se desfășoară între -28 m în Câmpia Precapșică și în polderele olandeze și înălțimi maxime care ajung la 5 642 m în Munții Caucaz (Vârful Elbrus) și 4 807 m în Munții Alpi (Vârful Mont Blanc). 85% din relieful Europei are altitudini sub 500 m, format din câmpii și podișuri joase concentrate în centru și în est, iar 15% reunește munți și dealurile înalte din nord-vestul, sudul și centrul continentului.</li>
    </ul>

    <h4>b. Tectonic</h4>
    <p>Europa aparține Plăcii Eurasiatice, dar relieful este format în moduri variate și în etape geologice diferite:</p>
    <ul class="custom-list">
      <li><strong>precambrian</strong> – unitățile de platformă din nordul și estul continentului;</li>
      <li><strong>paleozoic</strong> – orogeneza caledonică a înălțat Alpii Scandinaviei și munții din Arhipelagul Britanic;</li>
      <li>orogeneza hercinică a format lanțuri muntoase din Franța până în Crimeea, ulterior afectate de eroziune;</li>
      <li><strong>mezozoic</strong> – înălțarea lanțurilor alpine din sudul Europei (Alpi, Carpați, Apenini);</li>
      <li><strong>neozoic</strong> – cutremure actuale, formarea câmpiilor actuale.</li>
    </ul>

    <h4>c. Treptele majore de relief</h4>
    <ul class="custom-list">
      <li><strong>Munții</strong> – peste 1 000 m, formați în trei etape: caledonică, hercinică, alpină;</li>
      <li><strong>Podișurile și dealurile</strong> – 300–800 m, de origine diferită;</li>
      <li><strong>Câmpiile</strong> – sub 250 m, formate prin sedimentare, eroziune fluvioglaciară, sau umplere de bazine tectonice.</li>
    </ul>

    <h4>d. Tipuri genetice de relief</h4>
    <ul class="custom-list">
      <li><strong>structural</strong>: horsturi și grabene (Valea Rinului);</li>
      <li><strong>glaciar</strong>: morene, circuri, văi glaciare;</li>
      <li><strong>fluvial</strong>: văi, terase, lunci;</li>
      <li><strong>carstic</strong>: peșteri, doline, avene (Podisul Karst);</li>
      <li><strong>vulcanic</strong>: conuri, lavă, munți vulcanici activi (Etna, Vezuviu);</li>
      <li><strong>eolian</strong>: dune;</li>
      <li><strong>litoral</strong>: plaje, lagune, estuare (Tamise, Elba).</li>
    </ul>

    <h4>e. Unități majore de relief</h4>

    <h4>I. Europa Nordică</h4>
    <ul class="custom-list">
      <li>Alpii Scandinaviei</li>
      <li>Munții Penini, Grampiani (Britanici)</li>
      <li>Podișul Finlandei</li>
    </ul>

    <h4>II. Europa Centrală</h4>
    <ul class="custom-list">
      <li>Câmpia Nord-Europeană</li>
      <li>Masivul Central Francez</li>
      <li>Munții Jura, Pădurea Neagră</li>
      <li>Patrulaterul Boemiei</li>
    </ul>

    <h4>III. Europa de Est</h4>
    <ul class="custom-list">
      <li>Câmpia Est-Europeană</li>
      <li>Munții Ural</li>
    </ul>

    <h4>IV. Europa sudică</h4>
    <ul class="custom-list">
      <li><strong>Peninsula Iberică</strong>: Cordillerele alpine (Pirinei)</li>
      <li><strong>Peninsula Italică</strong>: Munții Apenini, Câmpia Padului</li>
      <li><strong>Peninsula Balcanică</strong>: Dinarici, Carpați, Rodopi, Rila, Pindului, Olimp, Pădurea Românească</li>
    </ul>

    <h4>V. Europa insulară</h4>
    <p>Arhipelagul Britanic, Azore, Madeira, Canare, Sicilia, Sardinia, Corsica, Cipru, Creta.</p>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Care este cea mai mare altitudine din Europa?",
              "optiuni": [
                "A. Vârful Elbrus - 5.642 m",
                "B. Vârful Mont Blanc - 4.807 m",
                "C. Vârful Etna - 3.330 m",
                "D. Vârful Olympus - 2.917 m"
              ],
              "raspuns": 0
            },
            {
              "continut": "Ce procent din relieful Europei are altitudini sub 500 m?",
              "optiuni": [
                "A. 25%",
                "B. 50%",
                "C. 85%",
                "D. 15%"
              ],
              "raspuns": 2
            },
            {
              "continut": "În ce eră s-au format Alpii Scandinaviei?",
              "optiuni": [
                "A. Precambrian",
                "B. Paleozoic (orogeneza caledonică)",
                "C. Mezozoic",
                "D. Neozoic"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce tip de relief este format din horsturi și grabene?",
              "optiuni": [
                "A. Glaciar",
                "B. Litoral",
                "C. Structural",
                "D. Carstic"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care dintre următoarele unități face parte din Europa Nordică?",
              "optiuni": [
                "A. Munții Jura",
                "B. Munții Penini",
                "C. Munții Carpați",
                "D. Munții Dinarici"
              ],
              "raspuns": 1
            },
            {
              "continut": "Câmpia Nord-Europeană se află în:",
              "optiuni": [
                "A. Europa de Est",
                "B. Europa Sudică",
                "C. Europa Centrală",
                "D. Europa Nordică"
              ],
              "raspuns": 2
            },
            {
              "continut": "Munții Carpați se află în:",
              "optiuni": [
                "A. Peninsula Italică",
                "B. Peninsula Iberică",
                "C. Peninsula Balcanică",
                "D. Peninsula Scandinavă"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care dintre următoarele este un tip de relief carstic?",
              "optiuni": [
                "A. Dune",
                "B. Morene",
                "C. Avene",
                "D. Estuare"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care unitate de relief se găsește în Europa de Est?",
              "optiuni": [
                "A. Munții Jura",
                "B. Câmpia Est-Europeană",
                "C. Munții Penini",
                "D. Masivul Central Francez"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este un exemplu de relief glaciar?",
              "optiuni": [
                "A. Văi, terase, lunci",
                "B. Doline, avene",
                "C. Morene, circuri",
                "D. Plaje, lagune"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 13", continut: `<h3><img src="/globLectii.svg" alt="icon" />Clima Europei</h3>
  <p>Europa intră în cea mai mare parte în <strong>zona de climă temperată</strong> și doar în nord în <strong>zona de climă rece</strong>.</p>

  <h4>a. Factorii genetici ai climei:</h4>
  <ul class="custom-list">
    <li><em>factorii radiativi</em> semnifică <strong>radiația solară globală</strong>, cu rol esențial în distribuția căldurii; valorile acesteia scad de la sud la nord, dar ea este influențată nu numai de latitudine și altitudine, ci și de nebulozitate și ceață; ca atare, și valorile bilanțului radiativ scad de la sud la nord;</li>
    <li><em>factorii dinamici</em> sunt reprezentați de mișcarea generală a maselor de aer de deasupra Europei, de la vest la est, dar și de influența maselor de aer polar, în special iarna, și a celor tropicale, în special vara. Ca atare, pe teritoriul Europei se dezvoltă și evoluează centri de presiune diferenți: Anticiclonul Azorelor, Ciclonul Islandez, Anticiclonul Siberian – iarna, Depresiunea cental-asiatică – vara; mișcarea maselor de aer este afectată de bariera lanțurilor montane din Europa;</li>
    <li><em>factorii fizico-geografici</em>: 
      <ul class="custom-list">
        <li>contactul dintre suprafețele acvatice și cele de uscat: <strong>Oceanul Atlantic, Marea Mediterană, Marea Baltică</strong> moderează regimul termic în zonele de influență, pe când marea masă continentală asiatică impune amplitudini termice mai mari spre estul continentului;</li>
        <li>relieful influențează prin altitudine, dar și prin expunția și înclinarea versanților; în timp ce temperatura aerului scade odată cu înălțimea, precipitațiile cresc și crește și ponderea precipitațiilor solide;</li>
        <li><strong>Curentul Cald al Golfului</strong>, ce scaldă țărmurile Arhipelagului Britanic, ale Islandei și ale Peninsulei Scandinave, duce la creșterea sensibilă a temperaturilor medii anuale în aceste regiuni (Izoterma de 0°C ajunge la 71° latitudine nordică);</li>
      </ul>
    </li>
    <li><em>factorii antropici</em>, prin impactul activităților industriale, de transport, urbanizare, despădurire etc., determină modificări ale elementelor meteorologice.</li>
  </ul>

  <h4>b. Elementele climatice:</h4>
  <ul class="custom-list">
    <li><strong>temperatura</strong> Europei este influențată de radiația solară, de relief, de prezența maselor acvatice, în special a Oceanului Atlantic și de Curentul Atlanticului de Nord:
      <ul class="custom-list">
        <li>temperatura medie anuală scade de la sud la nord și de la vest la est; are valori de 18°C în sudul continentului, de 0°C în nordul Peninsulei Scandinave și de -4°C în extremitatea nord-estică a Europei. Temperatura medie a lunii ianuarie are valori de 10°C în sud și valori mai mici de -15°C în nordul Europei, iar temperatura medie a lunii iulie este de 25°C în sudul extrem și mai mică de 15°C în nordul Europei;</li>
        <li>amplitudinea termică anuală, care reprezintă diferența dintre luna cea mai caldă și luna cea mai rece a anului, crește de la vest la est, odată cu îndepărtarea de Oceanul Atlantic și apropierea de masa continentală asiatică;</li>
      </ul>
    </li>
    <li><strong>precipitațiile atmosferice</strong> sunt influențate în principal de prezența Oceanului Atlantic și de continentul asiatic, precum și de relief. Cantitatea medie anuală de precipitații este de 300–500 mm în nordul Europei, la nord de Marea Caspică și de Marea Neagră și ajunge la 1 000–2 000 mm în vestul continentului și în regiunile montane înalte. Ca repartiție în timp, în vestul continentului precipitațiile cad constant de-a lungul timpului anului, în sud cad iarna, iar în centru și est cad la sfârșitul primăverii–începutul verii;</li>
    <li><strong>vânturile</strong> predominante sunt cele de vest, generate de devierea spre dreapta a aerului, la latitudini temperate. Acestea aduc precipitații bogate și moderarea regimului termic și se deplasează până ating barierele orografice ale Munților Alpi și Carpați;
      <ul class="custom-list" >
        <li><em>Crivățul</em> este un vânt de est și de nord-est, care iarna este foarte geros și violent, cu viscole puternice, iar vara devine un vânt cald și uscat;</li>
        <li><em>Austriul</em> este un vânt uscat și cald, ce coboară de pe pantele Munților Balcani și Dinarici;</li>
        <li><em>Bora</em> este un vânt rece format în Alpii Dinarici și coboară spre Marea Adriatică;</li>
        <li><em>Mistralul</em> suflă din sudul Masivului Central Francez spre Marea Mediterană, provocând chiar furtuni pe mare;</li>
        <li><em>Siroco</em>, vânt fierbinte de origine tropicală, se manifestă vara în sudul Europei;</li>
      </ul>
    </li>
  </ul>

  <h4>c. Regiunarea climatică a Europei:</h4>
  <ul class="custom-list">
    <li><strong>climatul temperat-oceanic</strong> este prezent în vestul continentului, din Peninsula Iberică până în cea Scandinavă și interiorul Scoției. Se caracterizează prin:
      <ul class="custom-list" >
        <li>precipitații bogate (de 1 000 mm), în general sub formă de ploi;</li>
        <li>temperaturi moderate, ierni blânde, veri răcoroase;</li>
        <li>vânturi frecvente, de tipul brizelor marine și ale ciclonilor temperați;</li>
      </ul>
    </li>
    <li><strong>climatul temperat-continental</strong> între 40 și 60° latitudine nordică, se caracterizează prin:
      <ul class="custom-list">
        <li>cantitate de precipitații redusă, uscate, distribuite mai ales primăvara și vara;</li>
        <li>veri toride și ierni reci, cu viscole locale zilnice;</li>
      </ul>
    </li>
    <li><strong>climatul subpolar</strong> în nordul Scandinaviei, Rusiei și Islandei, caracterizat prin:
      <ul class="custom-list">
        <li>temperaturi medii anuale între 0 și -4°C, iarna foarte friguroasă;</li>
        <li>precipitații reduse (200–500 mm);</li>
        <li>vânturi polare puternice;</li>
      </ul>
    </li>
    <li><strong>climatul mediteranean</strong> specific sudului Europei, se caracterizează prin:
      <ul class="custom-list">
        <li>veri fierbinți și secetoase, ierni ploioase;</li>
        <li>precipitații anuale între 700 și 1 200 mm;</li>
        <li>durata iernii este scurtă, dar cu posibile ninsori;</li>
        <li>vânturi uscate, calde (Siroco);</li>
      </ul>
    </li>
    <li><strong>climatul montan</strong> și <strong>alpin</strong> este prezent în Munții Alpi, Pirinei, Caucaz, Alpii Scandinaviei, Carpați;</li>
  </ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "În ce zonă climatică se află cea mai mare parte a Europei?",
              "optiuni": [
                "A. Zona tropicală",
                "B. Zona de climă temperată",
                "C. Zona ecuatorială",
                "D. Zona de climă rece"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care factor genetic se referă la distribuția radiației solare globale?",
              "optiuni": [
                "A. Factorii dinamici",
                "B. Factorii fizico-geografici",
                "C. Factorii radiativi",
                "D. Factorii antropici"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce curent marin influențează pozitiv climatul nord-vestic al Europei?",
              "optiuni": [
                "A. Curentul Benguela",
                "B. Curentul Humboldt",
                "C. Curentul Cald al Golfului",
                "D. Curentul Canarelor"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de vânt este Crivățul în timpul iernii?",
              "optiuni": [
                "A. Cald și umed",
                "B. Geros și violent",
                "C. Fierbinte și tropical",
                "D. Umed și liniștit"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este valoarea aproximativă a precipitațiilor anuale în vestul Europei?",
              "optiuni": [
                "A. 200–400 mm",
                "B. 300–500 mm",
                "C. 1 000–2 000 mm",
                "D. 600–800 mm"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce caracterizează climatul temperat-continental?",
              "optiuni": [
                "A. Precipitații bogate și ierni blânde",
                "B. Precipitații reduse, veri toride și ierni reci",
                "C. Temperaturi moderate și vânturi calde",
                "D. Precipitații sub formă de ninsori abundente tot anul"
              ],
              "raspuns": 1
            },
            {
              "continut": "În ce zonă se manifestă vântul fierbinte Siroco?",
              "optiuni": [
                "A. Europa Centrală",
                "B. Europa de Est",
                "C. Europa de Nord",
                "D. Europa de Sud"
              ],
              "raspuns": 3
            },
            {
              "continut": "Ce caracterizează climatul subpolar al Europei?",
              "optiuni": [
                "A. Precipitații abundente și veri toride",
                "B. Temperaturi medii de 10°C și vânturi calde",
                "C. Ierni foarte friguroase și precipitații reduse",
                "D. Vânturi ciclonice și ierni blânde"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care dintre următorii factori influențează clima prin urbanizare și transport?",
              "optiuni": [
                "A. Factorii dinamici",
                "B. Factorii radiativi",
                "C. Factorii antropici",
                "D. Factorii oceanici"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce fenomen determină amplitudinea termică mai mare spre estul Europei?",
              "optiuni": [
                "A. Apropierea de Oceanul Atlantic",
                "B. Influența maselor de aer tropicale",
                "C. Influența continentală asiatică",
                "D. Prezența reliefului muntos"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 14", continut: `<h3><img src="/globLectii.svg" alt="icon" />Hidrografia Europei</h3>
<p>Europa dispune de importante resurse de apă, dar acestea au o distribuție teritorială neuniformă și dimensiuni și regim hidrologic foarte diferite.</p>

<p><b>Râurile Europei</b> se alimentează dominant din precipitații, zăpezi, ape subterane, ghețari; au o repartitie influențată de climă și relief. Se definesc prin următoarele elemente:</p>

<ul class="custom-list">
  <li><b>a. lungime:</b> Volga este cel mai lung fluviu al Europei, cu peste 3500 km; Dunărea, Ural și Nipru au între 2000 și 3000 km; Don, Peciora, Nistru, Rin, Elba au între 1000 și 2000 km.</li>
  <li><b>b. bazinele oceanice sau marine</b> în care se varsă:
    <ul class="custom-list">
      <li><i>exoreic</i> (se varsă în mările și oceanele învecinate – Oceanul Planetar): majoritatea râurilor europene</li>
      <li><i>endoreic</i> (se varsă în Marea Caspică): Volga, Ural</li>
    </ul>
  </li>
  <li><b>c. debitul:</b> influențat în principal de precipitații și temperatură.</li>
  <li><b>d. regimul de scurgere:</b> dat de variațiile de debit ale unui râu, influențat de climă și relief.
    <ul class="custom-list">
      <li><i>nordic:</i> debite mari la sfârșitul primăverii și vara, debite mici iarna – Peciora, Dvina de Nord</li>
      <li><i>vestic (atlantic):</i> debite mari tot timpul anului, cu un maxim iarna – Loara, Sena, Tamisa</li>
      <li><i>sudic:</i> debite mari primăvara, mici vara și toamna – Tibru, Pad, Rhone</li>
      <li><i>central sau complex:</i> debite variabile, cu viituri vara și chiar iarna – Dunărea, Rin</li>
      <li><i>estic:</i> debite mari primăvara, mici vara – Volga, Don</li>
    </ul>
  </li>
  <li><b>e. gura de vărsare:</b> fluviile Europei se varsă prin:
    <ul class="custom-list">
      <li>delte: Dunărea, Volga, Rin, Vistula, Pad, Rhone</li>
      <li>estuare: Elba, Tamisa</li>
      <li>în limane și lagune: râurile din nord-vestul Mării Negre</li>
    </ul>
  </li>
</ul>

<h4>Lacurile Europei</h4>
<p>Se alimentează din precipitații, râuri, ape subterane, ghețari; au o repartiție neuniformă și o origine diversificată a cuvetelor lacustre:</p>
<ul class="custom-list">
  <li><b>tectonice:</b> Marea Caspică (cel mai mare lac de pe glob), Lacul Balaton (Ungaria)</li>
  <li><b>vulcanice:</b> Bolsena, Albano (Italia), Sf. Ana (România)</li>
  <li><b>glaciare:</b> Ladoga și Onega (Rusia), Vättern și Vänern (Suedia), lacuri în Finlanda</li>
  <li><b>montane:</b> Geneva, Constanța, Bodensee, Como, Garda, Maggiore, în Carpați – Bucura, Zănoaga, Balea, Capra</li>
  <li><b>carstice:</b> în Alpi, Carpați, Munții Dinarici</li>
  <li><b>litorale și fluviale:</b> sudul Franței, litoralul Mării Negre și Baltice</li>
  <li><b>de baraj natural:</b> Lacul Roșu (România)</li>
  <li><b>de baraj antropic (de acumulare):</b> pe Volga – Samara și Volgograd, pe Dunăre – Porțile de Fier I și II</li>
</ul>

<h4> Dunărea</h4>
<p>Izvorăște din Munții Pădurea Neagră și se varsă în Marea Neagră printr-o deltă; are o lungime de 2860 km, ocupând locul II în Europa. Bazinul său hidrografic acoperă 10 țări și 4 capitale:</p>
<ul class="custom-list">
  <li><b>sectorul superior (alpin):</b> 1060 km – izvor până la Ulm</li>
  <li><b>sectorul mijlociu (panonic):</b> 725 km – de la Ulm la Bazias</li>
  <li><b>sectorul inferior (românesc):</b> 1075 km – de la Bazias la vărsare</li>
</ul>
<p><b>Importanță economică multiplă:</b> navigație, hidroenergie, alimentare cu apă industrială și pentru irigații, pescuit, turism.</p>

<h4>Marea Neagră</h4>
<ul class="custom-list">
  <li>Suprafață: 413.390 km², +38.000 km² Marea Azov</li>
  <li>Influență climatică modestă asupra regiunilor din jur</li>
  <li>Lungimea țărmului: 4340 km (245 km în România)</li>
  <li>Platformă litorală extinsă în partea de nord-vest</li>
  <li>Peninsule importante: Crimeea, Iamal</li>
  <li>Insule: Serpilor, Sacalin</li>
  <li>Comunică prin strâmtorile Bosfor și Dardanele cu Marea Mediterană</li>
  <li>Mare închisă – influență redusă asupra Oceanului Planetar</li>
  <li>Maree foarte mici, valuri mari în furtuni (6-8 m)</li>
  <li>Curenți litorali de suprafață, circulare – eroziune, transport, acumulare de nisip</li>
  <li>Salinitatea variază:
    <ul class="custom-list">
      <li>17-18‰ la suprafață (până la 180 m)</li>
      <li>22-23‰ în adâncime</li>
    </ul>
  </li>
  <li>Lipsa curenților verticali – stratul profund e lipsit de viață, conține hidrogen sulfurat</li>
  <li>Porturi importante: Constanța, Odessa, Burgas etc.</li>
</ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Care este cel mai lung fluviu din Europa?",
              "optiuni": [
                "A. Dunărea",
                "B. Nipru",
                "C. Rin",
                "D. Volga"
              ],
              "raspuns": 3
            },
            {
              "continut": "În ce mare se varsă fluviile Volga și Ural?",
              "optiuni": [
                "A. Marea Neagră",
                "B. Marea Caspică",
                "C. Marea Baltică",
                "D. Marea Adriatică"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce caracter are regimul de scurgere al Dunării?",
              "optiuni": [
                "A. Nordic",
                "B. Sudic",
                "C. Estic",
                "D. Central sau complex"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care dintre următoarele râuri se varsă în limane și lagune?",
              "optiuni": [
                "A. Râurile din nord-vestul Mării Negre",
                "B. Dunărea și Volga",
                "C. Elba și Tamisa",
                "D. Rin și Vistula"
              ],
              "raspuns": 0
            },
            {
              "continut": "Lacul Balaton este un exemplu de lac:",
              "optiuni": [
                "A. Glaciar",
                "B. Vulcanic",
                "C. Tectonic",
                "D. Carstic"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este lungimea aproximativă a sectorului inferior (românesc) al Dunării?",
              "optiuni": [
                "A. 725 km",
                "B. 1075 km",
                "C. 1060 km",
                "D. 860 km"
              ],
              "raspuns": 1
            },
            {
              "continut": "Cum se numește strâmtoarea prin care Marea Neagră comunică cu Marea Mediterană?",
              "optiuni": [
                "A. Gibraltar",
                "B. Bosfor",
                "C. La Manche",
                "D. Dardanele"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce valoare are salinitatea apei din Marea Neagră în stratul de adâncime?",
              "optiuni": [
                "A. 12–15‰",
                "B. 18–20‰",
                "C. 22–23‰",
                "D. 10–11‰"
              ],
              "raspuns": 2
            },
            {
              "continut": "De ce stratul profund al Mării Negre este lipsit de viață?",
              "optiuni": [
                "A. Din cauza curenților verticali puternici",
                "B. Din cauza salinității scăzute",
                "C. Din cauza lipsei oxigenului și a hidrogenului sulfurat",
                "D. Din cauza temperaturii ridicate"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este un port important la Marea Neagră?",
              "optiuni": [
                "A. Marsilia",
                "B. Constanța",
                "C. Rotterdam",
                "D. Hamburg"
              ],
              "raspuns": 1
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 15", continut: `<h3><img src="/globLectii.svg" alt="icon" />Zonele biopedogeografice</h3>

  <ul class="custom-list">
    <li><strong>Zona de tundră</strong> ocupă insulele arctice și nordul continentului:
      <ul class="custom-list">
        <li><em>vegetatia</em>: mușchi și licheni, arbori pitici (mesteacănul pitic, salcia pitică);</li>
        <li><em>fauna</em>: renul, lemingul, vulpea polară, găina polară;</li>
        <li><em>soluri</em>: de tundră, neevoluate.</li>
      </ul>
    </li>

    <li><strong>Zona pădurilor de conifere</strong> (taiga) are o extindere mare, până la 50° latitudine:
      <ul class="custom-list">
        <li><em>vegetatia</em>: molid, brad, zădă;</li>
        <li><em>fauna</em>: urs, lup, vulpe, hermelină, elan, păsări etc;</li>
        <li><em>soluri</em>: podzolice.</li>
      </ul>
    </li>

    <li><strong>Zona pădurilor de foioase</strong> se extinde în partea central-vestică a Europei, dar a fost îndepărtată în mare parte în favoarea activităților antropice:
      <ul class="custom-list">
        <li><em>vegetatia</em>: fag (în zonele mai umede și răcoroase), stejar (în cele mai calde și uscate, la care se adaugă tei, frasin, arțar, ulm, arbuști și ierburi);</li>
        <li><em>fauna</em>: lup, vulpe, mistreț, căprioară, cerb, jder, păsări etc;</li>
        <li><em>soluri</em>: argiluvisoluri și cambisoluri.</li>
      </ul>
    </li>

    <li><strong>Zona stepei</strong> specifică Europei de Est, începând din estul României, dar și ea a fost îndepărtată în cea mai mare parte în scopuri antropice:
      <ul class="custom-list">
        <li><em>vegetatia</em>: ierburi xerofile (colilie, păiuș, pelin), puțini arbuști;</li>
        <li><em>fauna</em>: rozătoare și păsări;</li>
        <li><em>soluri</em>: cernoziomuri.</li>
      </ul>
    </li>

    <li><strong>Zona silvostepei</strong> face trecerea de la pădurea de foioase la vegetația de stepă, având caracteristicile ambelor zone.</li>

    <li><strong>Zona mediteraneană</strong> (subtropicală) este prezentă în sudul Europei, în peninsule și în insule:
      <ul class="custom-list">
        <li><em>vegetatia</em>: de pădure (stejar de plută, stejar veșnic verde, pin), cu suprafețe mici; de tufișuri și arbuști – garriga (Franța), frigană (Grecia);</li>
        <li><em>fauna</em>: șacalul, broasca țestoasă, scorpionul, magotul în Gibraltar;</li>
        <li><em>soluri</em>: terra rossa.</li>
      </ul>
    </li>

    <li><strong>Zona de semideșert</strong> din nordul Mării Caspice, cu vegetație xerofită și soluri de semideșert.</li>
  </ul class="custom-list">
          <h3><img src="/globLectii.svg" alt="icon" />Resursele naturale ale Europei</h3>

  <h4> Resursele naturale ale Europei</h4>

  <h4>Resursele subsolului Europei</h4>
  <p>Mineralele utile din subsol sunt legate de structurile geologice în care s-au format:</p>
  <ul class="custom-list">
    <li>în nordul Europei (Peninsula Scandinavică, Platforma Rusă): roci vechi, dure, cu zăcăminte de minereuri feroase (cupru, plumb, zinc, aur, argint), sare;</li>
    <li>în centrul și vestul Europei: zăcăminte de huilă, lignit, bazalt, minereuri neferoase (mangan, plumb, zinc);</li>
    <li>în sudul Europei (Italia, Grecia, România): zăcăminte de bauxită, gaze naturale, petrol.</li>
  </ul>

  <h4>Resursele de apă</h4>
  <p>Râuri, lacuri, ape subterane etc.; toate aceste resurse sunt valorificate în industria extractivă, pentru alimentare și irigații. Repartiție neuniformă, cu rezerve mari în nordul Europei, rezerve moderate în Europa Centrală și rezerve deficitare în Europa de Sud.</p>

  <h4>Resursele de vegetație</h4>
  <p>Pădurile sunt răspândite mai ales în nordul Europei, în sistem montan alpin; pășunile și fânețele naturale în regiunile montane și zonele de dealuri joase și câmpii.</p>

  <h4>Resursele de sol</h4>
  <p>Soluri fertile sunt concentrate în regiunile de câmpie, podișuri și depresiuni joase; sunt folosite pentru culturile plantelor. În regiunile montane, solurile sunt scheletice, cu fertilitate scăzută, dar sunt folosite pentru dezvoltarea pășunilor și a fânețelor.</p>

  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Ce tip de vegetație este caracteristic pentru zona de tundră?",
              "optiuni": [
                "A. Fag și stejar",
                "B. Molid și brad",
                "C. Mușchi, licheni și arbori pitici",
                "D. Tufișuri și arbuști"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de sol este specific zonei pădurilor de conifere (taiga)?",
              "optiuni": [
                "A. Terra rossa",
                "B. Podzolice",
                "C. Cernoziomuri",
                "D. Argiluvisoluri"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care dintre următoarele animale este întâlnită în zona mediteraneană?",
              "optiuni": [
                "A. Elanul",
                "B. Mistrețul",
                "C. Șacalul",
                "D. Renul"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de vegetație găsim în zona de stepă a Europei?",
              "optiuni": [
                "A. Arbori de foioase",
                "B. Ierburi xerofile și puțini arbuști",
                "C. Molid și pin",
                "D. Plante tropicale"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care zonă reprezintă o tranziție între pădurea de foioase și vegetația de stepă?",
              "optiuni": [
                "A. Zona taigalei",
                "B. Zona de tundră",
                "C. Zona mediteraneană",
                "D. Zona silvostepei"
              ],
              "raspuns": 3
            },
            {
              "continut": "În ce parte a Europei sunt concentrate cele mai mari rezerve de apă?",
              "optiuni": [
                "A. Europa de Sud",
                "B. Europa Centrală",
                "C. Europa de Est",
                "D. Europa de Nord"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care sunt resursele subsolului prezente în sudul Europei?",
              "optiuni": [
                "A. Minereuri feroase și sare",
                "B. Huilă și mangan",
                "C. Gaze naturale, petrol, bauxită",
                "D. Cupru și plumb"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de sol este caracteristic zonei de stepă?",
              "optiuni": [
                "A. Cambisoluri",
                "B. Cernoziomuri",
                "C. Podzolice",
                "D. Terra rossa"
              ],
              "raspuns": 1
            },
            {
              "continut": "Unde sunt răspândite pădurile în Europa?",
              "optiuni": [
                "A. În regiunile de câmpie ale Europei de Sud",
                "B. În regiunile nordice și montane",
                "C. Doar în Peninsula Iberică",
                "D. Doar în zona mediteraneană"
              ],
              "raspuns": 1
            },
            {
              "continut": "Cum sunt solurile din regiunile montane?",
              "optiuni": [
                "A. Foarte fertile și umede",
                "B. Acoperite de permafrost",
                "C. Scheletice, cu fertilitate scăzută",
                "D. Acoperite cu argilă roșie"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 16", continut: `<h3><img src="/globLectii.svg" alt="icon" />Elemente de geografie umană a Europei</h3>

    <h4>Harta politică a Europei. România – stat unitar</h4>
    <p>Harta politică a Europei a cunoscut numeroase modificări, cauzate de lungul șir al războaielor, de destrămarea imperiilor (Austro-Ungar, Otoman, Țarist, German, Sovietic) și de proclamarea independenței statelor.</p>
    <p>După 1990, harta politică s-a modificat datorită desființării sistemelor sovietice și federale (Cehoslovacia, URSS, Iugoslavia), în prezent fiind constituite 46 state independente și 6 teritorii dependente.</p>
    <p>Statele se diferențiază:</p>
    <ul class="custom-list">
      <li>după suprafață: Rusia – cel mai mare stat din Europa (peste 4 mil. km² partea europeană) și Vatican – cel mai mic stat de pe glob;</li>
      <li>după numărul de locuitori: Rusia are peste 100 mil. locuitori (partea europeană), restul statelor europene se încadrează între 10 și 80 mil. locuitori; cele mai populate state sunt Germania, Franța, Marea Britanie, Italia, Polonia, Ucraina;</li>
      <li>după forma de guvernământ: republici, parlamentare, prezidențiale, monarhii și un stat papal;</li>
      <li>după nivelul de dezvoltare economică: țări dezvoltate (Europa de Nord, Vest și Sud); țări în dezvoltare (Europa Centrală și de Est).</li>
    </ul>

    <h4>Populația și caracteristicile ei geodemografice</h4>

    <h4>a. Evoluția numerică a populației</h4>
    <p>Populația Europei a evoluat destul de lent, de la 80 milioane în anul 1500, la 40 milioane în 1750, și la 725 milioane în 2004. Dacă se ia în calcul creșterea din ultimele decenii, rezultă că ritmul de creștere a populației europene este aproape zero.</p>

    <h4>b. Densitatea populației</h4>
    <p>Este influențată de climă și relief, dar și de dezvoltarea economică a unei regiuni. Are o valoare medie de 71 loc/km². Densitatea variază între 16 și 200 loc/km² în Europa. Monaco are cea mai mare densitate de pe glob.</p>
    <p>Pe țări:</p>
    <ul class="custom-list">
      <li>densitate scăzută în Islanda: 2,7 loc/km²</li>
      <li>densitate ridicată în Olanda, Belgia, regiunea eco-Ruhr, centrul și sud-estul Angliei, peste 300 loc/km²</li>
      <li>peste 100 loc/km² în Germania, Polonia, Italia și alte țări din Europa de Vest și Centrală</li>
      <li>sub 50 loc/km² în Europa de Est și părți ale Scandinaviei</li>
      <li>sub 10 loc/km² în nordul extrem al continentului</li>
    </ul>

    <h4>c. Mișcarea naturală a populației</h4>
    <p>Este dată de:</p>
    <ul class="custom-list">
      <li><strong>natalitate</strong> – scăzută în Europa, media fiind de 11-12‰. Valori sub 8‰ în Ucraina, 8-9‰ în Bulgaria și Cehia, 10‰ în Austria, Germania, România, Ungaria; între 15-20‰ în Albania, Turcia, Islanda, Irlanda.</li>
      <li><strong>mortalitate</strong> – în Europa variază între 8 și 14‰. Diferențele între natalitate și mortalitate duc la bilanț natural negativ în Europa de Est și Centrală; bilanț pozitiv în Turcia, Islanda, Irlanda, Andorra.</li>
    </ul>

    <h4>d. Mobilitatea teritorială</h4>
    <p>Este influențată în principal de cauze economice, dar și de cauze de ordin politic, demografic sau natural. Emigrarea este specifică țărilor estice, în timp ce țările vestice atrag migranți.</p>

    <h4>e. Structuri geodemografice</h4>
    <p><strong>Structura rasială</strong>: Europa este dominată de rasa europoidă (subgrupuri: scandinav, alpin, mediteranean), dar există și enclave rasiale (evrei, țigani, africani, asiatici).</p>
    <p><strong>Structura lingvistică</strong>: Europa cuprinde două mari familii lingvistice:</p>
    <ul class="custom-list">
      <li><strong>familia indo-europeană</strong>: latină, germanică, slavă, celtică</li>
      <li><strong>familia euroasiatică</strong>: fino-ugrică, altaică</li>
    </ul>
    <p><strong>Structura confesională</strong>: predomină creștinismul (catolicism și protestantism în Europa de Vest, Nord, Centrală și Sud, ortodoxism în Est și Sud-Est). Islamismul este prezent în Albania. Alte culte: mozaic, religii asiatice.</p>
    <p><strong>Structura după vârstă</strong>: Europa are o populație îmbătrânită. Persoanele sub 15 ani reprezintă doar 15% în medie (23% în Islanda, 14% în Italia și Spania). Ponderea populației peste 65 ani este 17%. Populația activă (15–64 ani) este 65–70%, dar peste 40% din aceasta este reprezentată de femei și de persoane aflate în afara forței de muncă.</p>

    <h4>Sistemul de orașe al Europei</h4>
    <p>Europa are o rețea urbană densă, unele orașe depășind 1 milion locuitori. Printre cele mai populate: Moscova, Paris, Londra, Sankt Petersburg, Istanbul.</p>
    <p><strong>Funcții ale orașelor:</strong> administrative (Paris, Londra), industriale (Manchester, Ruhr, Germania), comerciale (Hamburg, Moscova, Praga), culturale și turistice (Viena, Florența, Brașov), religioase (Roma), portuare (Rotterdam, Marsilia).</p>
    <p><strong>Tipuri de orașe:</strong></p>
    <ul class="custom-list">
      <li>orașe monocentrice (Paris)</li>
      <li>orașe policentrice (Germania – Ruhr)</li>
      <li>orașe-răspândite sau diffuse (Italia – Pad)</li>
    </ul>

  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Câte state independente are Europa în prezent?",
              "optiuni": [
                "A. 28",
                "B. 36",
                "C. 46",
                "D. 56"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este cel mai mic stat din Europa ca suprafață?",
              "optiuni": [
                "A. Monaco",
                "B. Liechtenstein",
                "C. San Marino",
                "D. Vatican"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care sunt cele mai populate state europene?",
              "optiuni": [
                "A. Grecia, Austria, Suedia",
                "B. Germania, Franța, Marea Britanie, Italia, Polonia, Ucraina",
                "C. Norvegia, Finlanda, Irlanda",
                "D. Spania, Belgia, Olanda"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este densitatea medie a populației în Europa?",
              "optiuni": [
                "A. 50 loc/km²",
                "B. 71 loc/km²",
                "C. 100 loc/km²",
                "D. 120 loc/km²"
              ],
              "raspuns": 1
            },
            {
              "continut": "În ce țară se înregistrează cea mai mare densitate a populației din Europa?",
              "optiuni": [
                "A. Belgia",
                "B. Olanda",
                "C. Monaco",
                "D. Germania"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este cauza principală a emigrării din Europa de Est?",
              "optiuni": [
                "A. Clima rece",
                "B. Lipsa resurselor naturale",
                "C. Cauze economice",
                "D. Războaie recente"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care sunt cele două mari familii lingvistice din Europa?",
              "optiuni": [
                "A. Slavă și romană",
                "B. Indo-europeană și euroasiatică",
                "C. Latină și germanică",
                "D. Greacă și celtică"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce procent din populația Europei are sub 15 ani (în medie)?",
              "optiuni": [
                "A. 10%",
                "B. 20%",
                "C. 15%",
                "D. 25%"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care dintre următoarele orașe este un exemplu de oraș policentric?",
              "optiuni": [
                "A. Paris",
                "B. Roma",
                "C. Ruhr (Germania)",
                "D. Viena"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este o funcție religioasă importantă a orașelor europene?",
              "optiuni": [
                "A. Hamburg – religioasă",
                "B. Roma – religioasă",
                "C. Paris – religioasă",
                "D. Berlin – religioasă"
              ],
              "raspuns": 1
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 17", continut: `  <h3> <img src="/globLectii.svg" alt="icon" />Activitățile economice</h3>
  <p>Europa cuprinde toate activitățile economice, cu pondere diferită în importanța acestora. Conținutul acestor activități cunoaște diferențe semnificative între Europa de Vest și țările fostului bloc comunist. Astfel, materiile prime sunt variate, dar au rezerve însemnate doar în câteva țări; industria este diversificată, dar se concentrează în jurul zonelor cu tradiție industrială; agricultura este în favoarea „industriilor de vârf”, iar comerțul este performant. În totală expansiune este sectorul serviciilor, care nu sunt consumatoare de resurse de forță de muncă numeroasă și sunt profitabile.</p>

  <h3> <img src="/globLectii.svg" alt="icon" />Agricultura</h3>
  <p>Agricultura are caracter intensiv în țările dezvoltate, iar în Europa central-estică este încă în tranziție spre o agricultură de piață. Deși ponderea populației ocupate în agricultură este mică, Europa are producții importante pe plan mondial, datorită randamentului ridicat.</p>

  <ul class="custom-list">
    <li><strong>Cultura plantelor</strong> este favorizată de un important fond funciar și de condițiile climatice:
      <ul class="custom-list">
        <li>cereale: grâu (Rusia, Franța, Germania, Ucraina), porumb, secară, orz, ovăz;</li>
        <li>plante industriale: floarea soarelui (Rusia, Ucraina, România, Ungaria, Franța, Spania), sfeclă de zahăr (Rusia, Ucraina, Franța, Germania, Polonia);</li>
        <li>cartofi (Rusia, Ucraina, Germania, Polonia, Belarus);</li>
        <li>soia: extinsă în Europa de Sud și de Est;</li>
        <li>viticultură – Europa de Sud și de Sud-Est (Franța, Italia, Spania);</li>
        <li>olivicultură – Europa de Sud și din producția mondială de ulei de măsline.</li>
      </ul>
    </li>
    <li><strong>Creșterea animalelor</strong> are tradiții vechi în Europa:
      <ul class="custom-list">
        <li>bovine – Rusia, Franța, Germania, Marea Britanie, Olanda;</li>
        <li>ovine – se cresc încă în sistem extensiv (Franța și Spania) și transhumanț în Europa de Sud și de Est și în Marea Britanie;</li>
        <li>porcine – Germania, Rusia, Polonia, Spania, Franța, Ucraina;</li>
        <li>caprine (Europa de Sud și Sud-Est) și cabaline (Europa de Est) – cu efective mici.</li>
      </ul>
    </li>
  </ul>

  <h3> <img src="/globLectii.svg" alt="icon" />Industria</h3>
  <p>Industria cunoaște ample mutații tehnice și regionale. Epuizarea sau diminuarea multor resurse de materii prime a impus în multe țări restructurarea industriei și respecializarea forței de muncă.</p>

  <h4>a. Industria extractivă</h4>
  <p>Este însemnată în puține țări europene.</p>

  <h4>b. Industria prelucrătoare</h4>
  <p>Depinde de zăcămintele de cărbuni și de minereuri, este localizată tot mai mult în jurul marilor orașe și pe rețele moderne de transport. Este o industrie grea care este scoasă din marile orașe, fiind foarte poluantă.</p>
  <p>Industria energetică este legată strâns de sursele de energie locale, dar și de importul de combustibili convenționali:</p>
  <ul class="custom-list">
    <li>termocentrale – Rusia, Germania, Marea Britanie, Ucraina;</li>
    <li>nucleare – Marea Britanie, Suedia, Elveția, Austria;</li>
    <li>hidrocentrale – Franța, Italia, Norvegia;</li>
    <li>geotermale – Italia, Islanda;</li>
    <li>solare și eoliene – Germania, Olanda.</li>
  </ul>
  <p>Industrii:</p>
  <ul class="custom-list">
    <li>metalurgică (feroasă și neferoasă) – Rusia, Germania, Franța;</li>
    <li>construcții navale – Danemarca, Islanda, Germania;</li>
    <li>chimică și petrochimică – Germania, Franța, Italia, Rusia, Marea Britanie;</li>
    <li>lemnului – Rusia, Finlanda, Norvegia, Germania, Italia, Franța;</li>
    <li>textilă – Marea Britanie, Franța, Italia, Germania;</li>
    <li>alimentară – Italia, Franța, Elveția;</li>
    <li>alte produse – Grecia, Spania, Italia.</li>
  </ul>

  <h3> <img src="/globLectii.svg" alt="icon" />Comerțul</h3>
  <p>Este cea mai clară expresie a complexității unei societăți, este bine reprezentat în Europa atât ca comerț interior, cât și ca exterior:</p>
  <ul class="custom-list">
    <li>comerțul interior – gamă variată de produse de consum;</li>
    <li>comerțul exterior – poate fi intensificat prin:
      <ul>
        <li>Europa este o regiune receptoare de materii prime;</li>
        <li>Europa este unii din principalii emițători de produse industriale și agricole.</li>
      </ul>
    </li>
  </ul>

  <h3> <img src="/globLectii.svg" alt="icon" />Turismul</h3>
  <p>Europa este considerată „leagănul turismului mondial”, apărut ca o modă în Anglia la începutul secolului al XIX-lea.</p>
  <p>Tipuri principale:</p>
  <ul class="custom-list">
    <li><strong>balneo-maritim</strong> – litoralul Mării Mediterane (Franța, Spania, Italia, Grecia, Turcia), litoralul Mării Negre (Ucraina, Rusia, Bulgaria, România);</li>
    <li><strong>montan și de sporturi de iarnă</strong> – Alpi, Carpați;</li>
    <li><strong>balneoclimateric</strong> – Germania, Austria, Elveția, Franța;</li>
    <li><strong>cultural-istoric</strong> – Roma, Paris, Londra, Berlin etc.</li>
  </ul>

  <h3><img src="/globLectii.svg" alt="icon" />Sisteme de transport în Europa</h3>
  <p>Europa are un sistem de transport foarte diversificat, dens și complementar. Include:</p>

  <h4>Transporturile feroviare</h4>
  <ul class="custom-list">
    <li>lungime de peste 360.000 km</li>
    <li>electrificare – 45% (Elveția 99.7%, Luxemburg 95%)</li>
    <li>densitate mare în Europa Centrală și de Vest</li>
    <li>viteză mare (ex. TGV)</li>
    <li>noduri feroviare: Moscova, Paris, Viena, München, Milano</li>
    <li>tunele: Simplon, Eurotunnel</li>
  </ul>

  <h4>Transporturile rutiere</h4>
  <ul class="custom-list">
    <li>rețea extinsă și modernizată</li>
    <li>densitate ridicată în vest</li>
    <li>tunele, poduri – Øresund, Channel etc.</li>
  </ul>

  <h4>Transporturile maritime</h4>
  <ul class="custom-list">
    <li>porturi: Rotterdam, Anvers, Hamburg, Londra, Le Havre, Marsilia, Constanța</li>
    <li>flote comerciale mari</li>
    <li>mărfuri: petrol, produse petroliere etc.</li>
  </ul>

  <h4>Transporturile fluviale</h4>
  <ul class="custom-list">
    <li>navigabile – 40.000 km</li>
    <li>fluviile principale: Rinul, Volga, Dunărea, Sena, Tamisa</li>
    <li>porturi fluviale: Duisburg, Viena, Bratislava, Paris, Galați etc.</li>
  </ul>

  <h4>Transporturile aeriene</h4>
  <ul class="custom-list">
    <li>cele mai dense și frecvente în Europa de Vest și Centrală</li>
    <li>aeroporturi: Heathrow, Charles de Gaulle, Leonardo da Vinci, Sheremetievo, Otopeni</li>
  </ul>

  <h4>Transporturile speciale</h4>
  <ul class="custom-list">
    <li>conducte – petrol, gaze naturale;</li>
    <li>linii electrice și cabluri subterane.</li>
  </ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Ce caracter are agricultura în țările dezvoltate ale Europei?",
              "optiuni": [
                "A. Extensiv",
                "B. Semi-nomad",
                "C. Intensiv",
                "D. Tradițional"
              ],
              "raspuns": 2
            },
            {
              "continut": "Unde este viticultura predominantă în Europa?",
              "optiuni": [
                "A. Europa de Vest și Nord",
                "B. Europa de Sud și Sud-Est",
                "C. Europa Centrală și de Est",
                "D. Europa de Nord și Est"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care țări europene au o industrie energetică bazată pe energie nucleară?",
              "optiuni": [
                "A. Rusia, Germania, Ucraina",
                "B. Marea Britanie, Suedia, Elveția, Austria",
                "C. Italia, Spania, Norvegia",
                "D. Franța, Olanda, Belgia"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce tip de industrie este prezentă în Rusia, Germania și Franța?",
              "optiuni": [
                "A. Industria alimentară",
                "B. Industria auto",
                "C. Industria textilă",
                "D. Industria metalurgică"
              ],
              "raspuns": 3
            },
            {
              "continut": "Care sunt principalele produse transportate prin porturile maritime europene?",
              "optiuni": [
                "A. Produse agricole",
                "B. Mărfuri petroliere și derivate",
                "C. Textile și materiale plastice",
                "D. Electronice"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care fluviu este considerat cu cel mai mare trafic fluvial din Europa?",
              "optiuni": [
                "A. Volga",
                "B. Dunărea",
                "C. Rinul",
                "D. Sena"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce țări au rețele de transport aerian foarte dezvoltate?",
              "optiuni": [
                "A. Germania și Rusia",
                "B. Marea Britanie și Franța",
                "C. Grecia și Turcia",
                "D. România și Bulgaria"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care oraș este un nod feroviar important în Europa?",
              "optiuni": [
                "A. Zürich",
                "B. Geneva",
                "C. Milano",
                "D. Bruxelles"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de turism este asociat cu Alpii și Carpații?",
              "optiuni": [
                "A. Cultural",
                "B. Balneoclimateric",
                "C. Montan și sporturi de iarnă",
                "D. Maritim"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce țară are una dintre cele mai mari flote comerciale europene?",
              "optiuni": [
                "A. Norvegia",
                "B. Elveția",
                "C. Germania",
                "D. Spania"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 18", continut: ` <h3><img src="/globLectii.svg" alt="icon" />Mediul înconjurător și peisaje</h3>

  <p>Spațiul european se suprapune în mare măsură peste <strong>mediul temperat</strong>, cu excepția nordului extrem și a insulelor arctice, cu regim subpolar și polar și a regiunilor de sud-est, cu influențe deșertice. În cadrul acestui mediu, se disting mai multe <strong>peisaje</strong>, care, în funcție de gradul de intervenție al omului, pot fi considerate peisaje naturale sau antropice.</p>

  <h4>a. Mediul tundrei</h4>
  <ul class="custom-list">
    <li>Se întinde pe o fâșie îngustă în nordul Europei și este caracterizat de:</li>
    <li>condiții climatice nefavorabile, ce impun o densitate foarte mică a populației (2-3 loc/km²);</li>
    <li>activități economice: pescuit, vânătoare, creșterea extensivă a renilor, exploatarea unor minereuri (fier în Suedia), iar în ultimii ani implementarea industriilor de vârf (software, biotehnologii) și a serviciilor financiare;</li>
    <li>orașele se modernizează și se extind, modificând tot mai mult peisajele naturale: Reykjavik, Inari, Nardo etc.</li>
  </ul>

  <h4>b. Mediul temperat-rece</h4>
  <ul class="custom-list">
    <li>Corespunde pădurilor de conifere:</li>
    <li>mediu subpopulat, datorită condițiilor naturale nefavorabile (climă, relief, permafrost, inundații, suprafețe acvatice);</li>
    <li>activități economice: pescuit, vânătoare, exploatarea lemnului, a unor minerale, hidroenergie;</li>
  </ul>

  <h4>c. Mediul temperat-oceanic</h4>
  <ul class="custom-list">
    <li>Ocupă Europa de Vest și Centrală:</li>
    <li>condiții naturale optime (climă blândă cu precipitații bogate, relief jos, păduri de foioase, soluri fertile);</li>
    <li>activitățile economice impun peisaje specifice:</li>
    <ul class="custom-list">
      <li>peisaje agricole: open-field (Germania, Danemarca, Olanda), bocage (Franța), polder (Olanda);</li>
      <li>dezvoltarea urbană și industrială a impus peisaje industriale și urbane de tip Ruhr, noduri de comunicații: Rotterdam, Paris, Hamburg etc.</li>
    </ul>
  </ul>

  <h4>d. Mediul temperat-continental</h4>
  <ul  class="custom-list">
    <li>Ocupă Europa de Est, începând din estul României:</li>
    <li>soluri foarte fertile și climă prielnică, chiar dacă se impun irigații în perioadele de secetă;</li>
    <li>vegetatia de stepă înlocuită aproape în totalitate de culturi agricole, rezultând peisaje agricole tipice cerealiere, de plante tehnice sau legumicole;</li>
    <li>degradarea accentuată a terenurilor, din cauza secetelor, sărăturării, poluării chimice;</li>
    <li>păduri urbane și rurale, cu schimbarea masivă a peisajelor naturale.</li>
  </ul>

  <h4>e. Mediul mediteranean</h4>
  <ul class="custom-list">
    <li>Ocupă Europa de Sud și insulele din Marea Mediterană:</li>
    <li>condiții climatice blânde, chiar dacă verile sunt foarte aride, durata mare de strălucire a Soarelui și soluri nisipoase sunt condiții prielnice pentru locuirea durabilă;</li>
    <li>pădurea inițială de stejar a fost înlocuită cu culturi agricole foarte vechi și foarte intensă;</li>
    <li>peisaje intens antropizate: industriale și portuare, urbane și nu în ultimul rând, peisajul specific al stațiunilor turistice de pe litoral.</li>
  </ul>

  <h4>f. Mediul montan</h4>
  <ul class="custom-list">
    <li>La altitudini mai mari de 1.000 m:</li>
    <li>etajarea biopedoclimatică a regiunilor montane;</li>
    <li>densitatea populației scade odată cu altitudinea, datorită asprimii condițiilor climatice și a accesibilității tot mai reduse;</li>
    <li>activități economice: vânat, exploatarea lemnului și a resurselor subsolice, a hidroenergiei și a potențialului turistic;</li>
    <li>peisajul specific al depresiunilor, cu soluri mai fertile și terenuri accesibile locuinței și activităților economice.</li>
  </ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Ce caracteristici are mediul tundrei din Europa?",
              "optiuni": [
                "A. Densitate mare a populației și climă blândă",
                "B. Vegetație bogată și industrie dezvoltată",
                "C. Condiții climatice nefavorabile și densitate foarte mică a populației",
                "D. Soluri fertile și irigații moderne"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce activități economice sunt specifice mediului temperat-rece?",
              "optiuni": [
                "A. Turism și agricultură intensivă",
                "B. Vânătoare, pescuit, exploatarea lemnului și hidroenergie",
                "C. Construcții navale și IT",
                "D. Pomicultură și viticultură"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este specificul peisajului agricol din mediul temperat-oceanic?",
              "optiuni": [
                "A. Sisteme agricole de tip stepă",
                "B. Open-field, bocage și polder",
                "C. Agricultura nomadă",
                "D. Peisaje viticole tradiționale"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce regiune din Europa este caracterizată prin agricultură de tip cerealiere și legumicole?",
              "optiuni": [
                "A. Europa de Sud",
                "B. Europa Centrală",
                "C. Europa de Est",
                "D. Europa de Nord"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tip de climă predomină în mediul mediteranean?",
              "optiuni": [
                "A. Polară",
                "B. Subarctică",
                "C. Blândă, cu veri aride și mult soare",
                "D. Rece și umedă"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce tipuri de peisaje sunt asociate cu stațiunile de pe litoralul mediteranean?",
              "optiuni": [
                "A. Tundra",
                "B. Pajiști alpine",
                "C. Peisaje industriale și turistice",
                "D. Stepă și pădure boreală"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce activități se desfășoară în mediul montan european?",
              "optiuni": [
                "A. Agricultura intensivă și viticultură",
                "B. Pescuit industrial și exploatări maritime",
                "C. Vânătoare, hidroenergie, turism și exploatarea lemnului",
                "D. Comerț exterior și producție auto"
              ],
              "raspuns": 2
            },
            {
              "continut": "Ce este specific depresiunilor din mediul montan?",
              "optiuni": [
                "A. Climat rece și permafrost",
                "B. Soluri fertile și terenuri accesibile",
                "C. Lipsa completă a resurselor",
                "D. Precipitații abundente și agricultură subtropicală"
              ],
              "raspuns": 1
            },
            {
              "continut": "Cum se modifică densitatea populației în mediul montan?",
              "optiuni": [
                "A. Crește cu altitudinea",
                "B. Este constantă",
                "C. Scade odată cu altitudinea",
                "D. Nu are legătură cu altitudinea"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care regiune este caracterizată de vegetație de stepă înlocuită de culturi agricole?",
              "optiuni": [
                "A. Mediul tundrei",
                "B. Mediul temperat-oceanic",
                "C. Mediul temperat-continental",
                "D. Mediul montan"
              ],
              "raspuns": 2
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 19", continut: ` <h3><img src="/globLectii.svg" alt="icon" />Regiuni geografice din Europa – Carpații</h3>

  <ul class="custom-list">
    <li>Carpații sunt o continuare a Munților Alpi, de care îi desparte Dunărea, în bazinul Vienei, și se termină la sud de Dunăre, fiind separați prin culoarul Timokului de Munții Balcani.</li>
    <li>Reprezintă un lanț muntos tânăr, puternic arcuit, format în orogeneza alpină din mezozoic–neozoic.</li>
    <li>Se adaugă depozite din neogen, care au dat naștere celui mai lung lanț vulcanic din Europa, cu o structură unică.</li>
    <li>Sunt formați din roci foarte variate: metamorfice, sedimentare (calcare, conglomerate, gresii) și roci vulcanice.</li>
    <li>Au o lungime de 1.300 km și se desfășoară pe teritoriul a șase state europene: Slovacia, Polonia, Ucraina, Ungaria, România și Serbia.</li>
    <li>Arcul carpatic include și două mari depresiunii: Depresiunea Panonică și Depresiunea Transilvaniei; de altfel, în ansamblul lor, Carpații sunt mai fragmentați de depresiunii, pasuri, văi și culoare decât alte lanțuri montane europene.</li>
    <li>Urmările glaciațiunii cuaternare sunt prezente în reliefurile glaciare existente: circuri, văi, creste, dar și forme periglaciare (goluri de nival, pergeliș, râuri, fluxuri, structuri).</li>
    <li>Se disting două mari grupe:</li>
  </ul>

  <h4>Carpații Nord-Vestici</h4>
  <ul class="custom-list">
    <li>Se întind din bazinul Vienei până la Pasul Dukla.</li>
    <li>Au o orientare generală vest-est.</li>
    <li>Cuprind Munții Tatra Mare (Vârful Gerlachovska – 2.655 m, cea mai mare altitudine din întregul arc carpatic), Munții Tatra Mică, cu altitudini de 2.000 m, Munții Beskizi cu 1.700 m, Carpații Albi și Carpații Mici, Munții Metaliferi ai Slovaciei, Munții Tatra-Bükk – 1.000 m și Depresiunea Bratislavei.</li>
  </ul>

  <h4>Carpații de Sud-Est</h4>
  <ul class="custom-list">
    <li>Se desfășoară de la Pasul Dukla până la valea Timokului.</li>
    <li>Cuprind Carpații Păduroși, Carpații Orientali, Carpații Meridionali (Vârful Moldoveanu – 2.544 m, cel mai înalt din această grupă) și Carpații Occidentali.</li>
  </ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Care este originea geologică a Carpaților?",
              "optiuni": [
                "A. Orogeneza hercinică",
                "B. Orogeneza alpină din mezozoic-neozoic",
                "C. Eroziunea fluviilor",
                "D. Activitate vulcanică recentă"
              ],
              "raspuns": 1
            },
            {
              "continut": "Pe teritoriul câtor state europene se desfășoară Carpații?",
              "optiuni": [
                "A. 4",
                "B. 5",
                "C. 6",
                "D. 7"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care sunt principalele două mari depresiuni asociate Carpaților?",
              "optiuni": [
                "A. Culoarul Rinului și Podișul Ardeni",
                "B. Depresiunea Panonică și Depresiunea Transilvaniei",
                "C. Valea Loarei și Câmpia Germană",
                "D. Culoarul Rhonului și Podișul Boemiei"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce tipuri de roci formează Carpații?",
              "optiuni": [
                "A. Exclusiv roci vulcanice",
                "B. Roci sedimentare și argiloase",
                "C. Roci metamorfice, sedimentare și vulcanice",
                "D. Doar roci cristaline"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este lungimea aproximativă a lanțului carpatic?",
              "optiuni": [
                "A. 800 km",
                "B. 1000 km",
                "C. 1300 km",
                "D. 1500 km"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este vârful cu cea mai mare altitudine din Carpații Nord-Vestici?",
              "optiuni": [
                "A. Vârful Tatra Mică",
                "B. Vârful Moldoveanu",
                "C. Vârful Gerlachovska",
                "D. Vârful Beskizi"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care este înălțimea Vârfului Gerlachovska?",
              "optiuni": [
                "A. 2.000 m",
                "B. 2.544 m",
                "C. 2.655 m",
                "D. 1.700 m"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care grupă de Carpați cuprinde Munții Păduroși și Carpații Meridionali?",
              "optiuni": [
                "A. Carpații Nordici",
                "B. Carpații de Sud-Est",
                "C. Carpații Occidentali",
                "D. Carpații Centrali"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care este cel mai înalt vârf din Carpații de Sud-Est?",
              "optiuni": [
                "A. Vârful Retezat",
                "B. Vârful Ceahlău",
                "C. Vârful Bucegi",
                "D. Vârful Moldoveanu"
              ],
              "raspuns": 3
            },
            {
              "continut": "Ce elemente de relief glaciare sunt prezente în Carpați?",
              "optiuni": [
                "A. Platouri extinse",
                "B. Circuri, văi glaciare, creste și forme periglaciare",
                "C. Dune de nisip",
                "D. Delte și estuare"
              ],
              "raspuns": 1
            }
          ]
        },
        {
          tip: 'lectie', nume: "Lecția 20", continut: `<h3><img src="/globLectii.svg" alt="icon" />Uniunea Europeană – Formarea Uniunii Europene</h3>

  <p>Uniunea Europeană este un spațiu economic omogen, format în etape succesive, cu scopul întăririi legăturilor economice, sociale și politice dintre statele participante.</p>

  <h4>1. Etapele formării Uniunii Europene:</h4>
  <ul class="custom-list">
    <li><strong>1950</strong> – Înființarea <em>Comunității Europene a Cărbunelui și Oțelului (CECO)</em>, la propunerea Franței, prin ministrul de externe, Robert Schuman; reunea șase țări: Belgia, Franța, Germania, Italia, Luxemburg și Olanda;</li>
    <li><strong>1957</strong> – Înființarea, prin Tratatul de la Roma, a <em>Comunității Economice Europene (CEE)</em>, reunea inițial aceleași șase state membre, dar la care se adaugă treptat alte state;</li>
    <li><strong>1992</strong> – Transformarea CEE în <em>Uniunea Europeană (UE)</em>, prin semnarea Tratatului de la Maastricht; au fost stabilite și principalele obiective definitive:
      <ul class="custom-list">
        <li>crearea unei uniuni vamale;</li>
        <li>crearea unor politici comune (agricolă, comercială, a energiei, concurențială etc.);</li>
        <li>crearea unei Piețe Unice, caracterizată de libera circulație a bunurilor, a forței de muncă, a serviciilor și a capitalului.</li>
      </ul>
    </li>
  </ul>

  <h4>2. Evoluția integrării europene:</h4>
  <ul class="custom-list">
    <li><strong>1973</strong> – Danemarca, Irlanda și Marea Britanie;</li>
    <li><strong>1981</strong> – Grecia;</li>
    <li><strong>1986</strong> – Portugalia și Spania;</li>
    <li><strong>1994</strong> – Austria, Finlanda și Suedia;</li>
    <li><strong>2004</strong> – Cehia, Cipru, Estonia, Letonia, Lituania, Malta, Polonia, Slovacia, Slovenia și Ungaria;</li>
    <li><strong>2007</strong> – Bulgaria și România;</li>
    <li><strong>2013</strong> – Croația.</li>
  </ul>
  `, imagini: []
        },
        {
          tip: 'quizz',
          intrebari: [
            {
              "continut": "Care a fost primul pas în formarea Uniunii Europene?",
              "optiuni": [
                "A. Semnarea Tratatului de la Maastricht",
                "B. Înființarea Comunității Economice Europene",
                "C. Înființarea Comunității Europene a Cărbunelui și Oțelului",
                "D. Aderarea Marii Britanii"
              ],
              "raspuns": 2
            },
            {
              "continut": "În ce an a fost înființată Comunitatea Economică Europeană (CEE)?",
              "optiuni": [
                "A. 1950",
                "B. 1957",
                "C. 1992",
                "D. 1973"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce document a transformat CEE în Uniunea Europeană?",
              "optiuni": [
                "A. Tratatul de la Roma",
                "B. Pactul de la Varșovia",
                "C. Tratatul de la Maastricht",
                "D. Tratatul de la Lisabona"
              ],
              "raspuns": 2
            },
            {
              "continut": "Care dintre următoarele NU a fost unul dintre primele șase state membre?",
              "optiuni": [
                "A. Belgia",
                "B. Luxemburg",
                "C. Grecia",
                "D. Germania"
              ],
              "raspuns": 2
            },
            {
              "continut": "În ce an a aderat România la Uniunea Europeană?",
              "optiuni": [
                "A. 2004",
                "B. 2007",
                "C. 2013",
                "D. 1994"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce țări au aderat în anul 2004 la Uniunea Europeană?",
              "optiuni": [
                "A. Cehia, Cipru, Estonia, Letonia, Lituania, Malta, Polonia, Slovacia, Slovenia și Ungaria",
                "B. Bulgaria și România",
                "C. Austria, Finlanda și Suedia",
                "D. Danemarca, Irlanda și Marea Britanie"
              ],
              "raspuns": 0
            },
            {
              "continut": "Ce obiectiv NU a fost prevăzut prin Tratatul de la Maastricht?",
              "optiuni": [
                "A. Crearea unei uniuni vamale",
                "B. Introducerea monedei euro",
                "C. Crearea unei Piețe Unice",
                "D. Politici comune în energie și agricultură"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care țări au aderat în 1986 la Uniunea Europeană?",
              "optiuni": [
                "A. Grecia și Danemarca",
                "B. Portugalia și Spania",
                "C. Suedia și Austria",
                "D. Polonia și Cehia"
              ],
              "raspuns": 1
            },
            {
              "continut": "Ce definește Piața Unică Europeană?",
              "optiuni": [
                "A. Restricții comerciale între state",
                "B. Libertatea circulației bunurilor, serviciilor, capitalului și persoanelor",
                "C. Crearea unei armate comune",
                "D. Aderarea automată a tuturor statelor europene"
              ],
              "raspuns": 1
            },
            {
              "continut": "Care stat a fost ultimul care a aderat la UE conform lecției?",
              "optiuni": [
                "A. Bulgaria",
                "B. România",
                "C. Croația",
                "D. Lituania"
              ],
              "raspuns": 2
            }
          ]
        },
      ]
    },
  ],
};
