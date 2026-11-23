/* ============================================================
   USTAWIENIA / MENU
   ============================================================ */
const COLORS=['#FF3D7F','#2F5BFF','#12A874','#FF8A1F'];
const ST={mode:'solo',school:'sp',diff:'mid',cats:new Set(['uklad','wzory','reakcje','ph','org','lab','oblicz']),engines:null,names:DEF_NAMES.pl.slice()};
const DIFF={easy:{f:1.4},mid:{f:1},hard:{f:.75}};
const DIFF_TXT={easy:()=>L('Więcej czasu, spokojniejsze tempo.','More time, calmer pace.'),
  mid:()=>L('Standardowe tempo. Przyspiesza co 5 mikrogier.','Standard pace. Speeds up every 5 microgames.'),
  hard:()=>L('Mniej czasu na każdą mikrogrę. Dla mistrzów.','Less time for each microgame. For masters.')};
function maxLv(){if(ST.school==='sp')return 1;return ST.diff==='easy'?2:3}
function allowed(it){if(!ST.cats.has(it.c))return false;if(it.lv>maxLv())return false;if(it.t&&ST.school!=='tech')return false;return true}
const ALLSETS=()=>Object.keys(ENGINES).map(id=>ENGINES[id].pool());

function chipGroup(id,key,after){const box=$(id);box.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b||!b.dataset.v)return;ST[key]=b.dataset.v;box.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));after&&after()})}
chipGroup('#modeChips','mode',renderMenu);chipGroup('#schoolChips','school',renderMenu);chipGroup('#diffChips','diff',renderMenu);
$('#addP').onclick=()=>{if(ST.names.length<4){ST.names.push(L('Gracz ','Player ')+(ST.names.length+1));renderMenu()}};
$('#remP').onclick=()=>{if(ST.names.length>2){ST.names.pop();renderMenu()}};
function renderCats(){const box=$('#catChips');const saved=ST.cats;
  box.innerHTML='';CATS.forEach(c=>{ST.cats=new Set([c.id]);let n=0;ALLSETS().forEach(set=>set.forEach(it=>{if(allowed(it))n++}));
    const b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',saved.has(c.id));b.innerHTML=`${c.name}<span class="n">${n}</span>`;
    b.onclick=()=>{if(saved.has(c.id)){if(saved.size>1)saved.delete(c.id)}else saved.add(c.id);renderCats();renderEngs();renderBest()};box.append(b)});
  ST.cats=saved;
  const all=document.createElement('button');all.type='button';all.className='chip';all.textContent=saved.size===CATS.length?L('Tylko jeden…','Just one…'):L('Zaznacz wszystkie','Select all');
  all.onclick=()=>{ST.cats=saved.size===CATS.length?new Set([CATS[0].id]):new Set(CATS.map(c=>c.id));renderCats();renderEngs()};box.append(all)}
function renderPlayers(){const box=$('#players');box.innerHTML='';ST.names.forEach((n,i)=>{const l=document.createElement('label');l.innerHTML=`<span class="swatch" style="background:${COLORS[i]}"></span><input id="pname${i}" maxlength="14" aria-label="${L('Imię gracza','Player name')} ${i+1}">`;const inp=l.querySelector('input');inp.value=n;inp.oninput=()=>{ST.names[i]=inp.value};box.append(l)})}
function engAvail(id){return ENGINES[id].pool().filter(allowed).length}
function renderEngs(){const box=$('#engChips');box.innerHTML='';let on=0;
  for(const id in ENGINES){const n=engAvail(id);const b=document.createElement('button');b.type='button';b.className='eng';b.disabled=!n;const act=ST.engines.has(id)&&n>0;if(act)on++;
    b.setAttribute('aria-pressed',act);b.innerHTML=`<b>${ENGINES[id].verb}</b>${n?ENG_DESC[LANG][id]:L('Brak zadań dla tych ustawień.','No tasks for these settings.')}`;
    b.onclick=()=>{if(ST.engines.has(id)){if([...ST.engines].filter(e=>engAvail(e)).length>1)ST.engines.delete(id)}else ST.engines.add(id);renderEngs()};box.append(b)}
  $('#engCount').textContent=L(`· ${on} z ${Object.keys(ENGINES).length} włączonych`,`· ${on} of ${Object.keys(ENGINES).length} on`)}
function bestKey(){return `rl-best-${ST.school}-${ST.diff}`}
function getBest(){try{return +localStorage.getItem(bestKey())||0}catch(e){return 0}}
function setBest(v){try{localStorage.setItem(bestKey(),v)}catch(e){}}
function renderBest(){const b=getBest();$('#bestLine').textContent=ST.mode==='solo'&&b?L(`Twój rekord na tym poziomie: ${b}`,`Your record at this level: ${b}`):''}
function renderMenu(){const party=ST.mode==='party';$('#players').hidden=!party;$('#playerBtns').hidden=!party;
  $('#modeHelp').textContent=party?L('Gracze zmieniają się po każdej mikrogrze. Każdy ma 3 życia. Wygrywa ostatni z kolbą w ręku.','Players take turns after every microgame. Everyone has 3 lives. The last one holding a flask wins.'):L('4 życia. Graj, aż skończą się kolby.','4 lives. Play until your flasks run out.');
  if(party)renderPlayers();
  $('#diffHelp').textContent=DIFF_TXT[ST.diff]()+(ST.school==='sp'?'':ST.diff==='easy'?L(' Bez zadań z zakresu rozszerzonego.',' No advanced-level tasks.'):L(' Z zadaniami z zakresu rozszerzonego.',' Includes advanced-level tasks.'))+(ST.school==='tech'?L(' Plus zadania technikalne: procesy przemysłowe, miareczkowanie, BHP.',' Plus technical-school tasks: industrial processes, titration, lab safety.'):'');
  renderCats();renderEngs();renderBest()}
function updSound(){$('#soundBtn').textContent=L('Dźwięk: ','Sound: ')+(soundOn?L('wł.','on'):L('wył.','off'));$('#soundBtn').setAttribute('aria-pressed',soundOn)}
$('#soundBtn').onclick=()=>{soundOn=!soundOn;updSound()};

function setLang(l){LANG=l==='en'?'en':'pl';try{localStorage.setItem('rl-lang',LANG)}catch(e){}
  document.documentElement.lang=LANG;
  (LANG==='pl'?loadPL:loadEN)();
  document.querySelectorAll('[data-t]').forEach(el=>{el.innerHTML=tr(el.dataset.t)});
  $('#tabs').setAttribute('aria-label',tr('tabsAria'));
  document.querySelectorAll('#langSw button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===LANG));
  document.querySelectorAll('[data-lang-block]').forEach(b=>b.hidden=b.dataset.langBlock!==LANG);
  const prev=DEF_NAMES[LANG==='pl'?'en':'pl'];ST.names=ST.names.map((n,i)=>n===prev[i]?DEF_NAMES[LANG][i]:n.replace(/^(Gracz|Player) (\d)$/,(m,a,d)=>L('Gracz ','Player ')+d));
  updSound();updTheme();renderMenu();
  if(!$('#bio').hidden)setHash(bioHash());else if(!$('#menu').hidden)setHash(menuHash())}
document.querySelectorAll('#langSw button').forEach(b=>b.onclick=()=>{if(b.dataset.lang!==LANG)setLang(b.dataset.lang)});
