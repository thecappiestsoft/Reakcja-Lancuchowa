/* ============================================================
   JĘZYK / LANGUAGE
   ============================================================ */
let LANG='pl';
const L=(pl,en)=>LANG==='pl'?pl:en;
const TX={
  pl:{brand:'Reakcja Łańcuchowa',tabGame:'Gra',tabBio:'Kim był Łańcuchow?',tabsAria:'Zakładki',
    heroH:'Reakcja<br><span>Łańcuchowa</span>',
    heroP:'Błyskawiczne mikrogry z chemii. Kilka sekund na każdą, coraz szybciej. Złap metale, zbalansuj równanie, ustaw pH, wskaż pierwiastek. Graj sam albo w kilka osób przy jednej tablicy.',
    badge:'2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O<br><b>pH</b> 7,0 · Z = 26<br>CH<sub>4</sub> + 2O<sub>2</sub>',
    mode:'Tryb',solo:'Solo',party:'Imprezowy · 2–4 graczy',addP:'+ gracz',remP:'− gracz',
    level:'Poziom',sp:'Szkoła podstawowa',lo:'Liceum',tech:'Technikum',
    diff:'Trudność',easy:'Łatwa',mid:'Średnia',hard:'Trudna',
    cats:'Działy',catsHelp:'Liczba przy dziale to pula zadań dla wybranego poziomu. Zaznacz jeden dział, żeby zrobić powtórkę przed kartkówką.',
    engs:'Mikrogry',engsHelp:'Kliknij kafelek, żeby wyłączyć lub włączyć daną mikrogrę.',
    start:'Start!',pause:'Pauza'},
  en:{brand:'Chain Reaction',tabGame:'Game',tabBio:'Who was Chainov?',tabsAria:'Tabs',
    heroH:'Chain<br><span>Reaction</span>',
    heroP:'Lightning-fast chemistry microgames. A few seconds each, faster and faster. Catch the metals, balance the equation, set the pH, find the element. Play alone or with friends at one whiteboard.',
    badge:'2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O<br><b>pH</b> 7.0 · Z = 26<br>CH<sub>4</sub> + 2O<sub>2</sub>',
    mode:'Mode',solo:'Solo',party:'Party · 2–4 players',addP:'+ player',remP:'− player',
    level:'Level',sp:'Primary school',lo:'High school',tech:'Technical school',
    diff:'Difficulty',easy:'Easy',mid:'Medium',hard:'Hard',
    cats:'Topics',catsHelp:'The number next to each topic is its task pool for the chosen level. Pick a single topic for quick revision before a test.',
    engs:'Microgames',engsHelp:'Click a tile to switch that microgame off or on.',
    start:'Start!',pause:'Pause'},
};
const tr=k=>TX[LANG][k];
const DEF_NAMES={pl:['Ania','Bartek'],en:['Alex','Sam']};
function setHash(h){try{history.replaceState(null,'',h?'#'+h:location.pathname+location.search)}catch(e){try{location.hash=h||''}catch(e2){}}}
const bioHash=()=>LANG==='pl'?'lancuchow':'chainov';
const menuHash=()=>LANG==='pl'?'':'en';
