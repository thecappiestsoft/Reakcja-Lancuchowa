/* ============================================================
   PĘTLA GRY
   ============================================================ */
let G=null;
function nextGame(){const cands=[];
  for(const id in ENGINES){if(!ST.engines.has(id))continue;const items=ENGINES[id].pool().filter(allowed);if(items.length)cands.push({id,items})}
  let pool=cands.filter(c=>c.id!==G.lastEngine);if(!pool.length)pool=cands;
  const weights=pool.map(c=>({quiz:2.4,tf:1.8,catch:1.8,sort:1.8,ph:1.5,bal:1.5,table:1.6,count:1.3,mass:1.3,match:1.8,order:1.6,fill:1.8,scale:1.3,atom:1.4,ions:1.5,stop:1.3,gear:1.3}[c.id]*Math.min(1.6,.6+c.items.length/8)));
  let r=Math.random()*weights.reduce((a,b)=>a+b,0),ch=pool[0];for(let i=0;i<pool.length;i++){r-=weights[i];if(r<=0){ch=pool[i];break}}
  let items=ch.items.filter(it=>!G.recent.includes(it.key));if(!items.length){G.recent=G.recent.filter(k=>!ch.items.some(it=>it.key===k));items=ch.items}
  const w=items.map(it=>ST.school==='sp'?1:(it.lv===1?1:2));let rr=Math.random()*w.reduce((a,b)=>a+b,0),it=items[0];for(let i=0;i<items.length;i++){rr-=w[i];if(rr<=0){it=items[i];break}}
  G.recent.push(it.key);if(G.recent.length>40)G.recent.shift();G.lastEngine=ch.id;
  const eng=ENGINES[ch.id];const g=eng.make(it);g.verb=eng.verb;g.time=eng.base*DIFF[ST.diff].f*(ST.school==='sp'?1.1:1)/G.speed;return g}

function startGame(){
  if(!Object.keys(ENGINES).some(id=>ST.engines.has(id)&&engAvail(id))){show('menu');$('#bestLine').textContent=L('Brak zadań dla tego wyboru. Włącz więcej działów lub mikrogier.','No tasks for this selection. Switch on more topics or microgames.');return}
  const party=ST.mode==='party';
  const players=(party?ST.names:[L('Ty','You')]).map((n,i)=>({name:(n||'').trim()||(L('Gracz ','Player ')+(i+1)),lives:party?3:4,max:party?3:4,score:0,color:COLORS[i]}));
  G={players,turn:0,count:0,speed:1,recent:[],lastEngine:null,mistakes:[],token:Math.random(),phase:null,paused:false,onKey:null,faster:false,party};
  show('game');renderHud();beginRound()}
function show(id){['menu','bio','game','over'].forEach(s=>$('#'+s).hidden=s!==id);$('#tabs').hidden=id==='game';$('#langSw').hidden=id==='game';
  document.querySelectorAll('.tab').forEach(t=>{if(t.dataset.go===(id==='bio'?'bio':'menu'))t.setAttribute('aria-current','page');else t.removeAttribute('aria-current')});
  try{window.scrollTo({top:0})}catch(e){}}
function goMenu(){G=null;show('menu');renderMenu();setHash(menuHash())}
function goBio(){show('bio');setHash(bioHash())}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{if(t.dataset.go==='bio')goBio();else goMenu()});
document.querySelectorAll('.bioPlay').forEach(b=>b.onclick=goMenu);
function routeHash(){const h=location.hash.slice(1);if(G&&!$('#game').hidden)return;G=null;
  if(h==='lancuchow'||h==='chainov'){const l=h==='chainov'?'en':'pl';if(l!==LANG)setLang(l);show('bio')}
  else if(h==='en'||h==='pl'){if(h!==LANG)setLang(h);show('menu')}}
window.addEventListener('hashchange',routeHash);
function cur(){return G.players[G.turn]}
function renderHud(){const h=$('#hudLeft');
  if(!G.party){const p=G.players[0];h.innerHTML=`<span class="pill"><span class="lbl">${L('Wynik','Score')}</span>${p.score}</span><span class="pill"><span class="lbl">${L('Życia','Lives')}</span><span class="flasks">${Array.from({length:p.max},(_,i)=>FLASK(i<p.lives,'var(--leaf)')).join('')}</span></span><span class="pill"><span class="lbl">${L('Tempo','Speed')}</span>×${num(G.speed)}</span>`}
  else h.innerHTML=G.players.map((p,i)=>`<span class="pill ${i===G.turn?'cur':''} ${p.lives<=0?'out':''}"><span class="swatch" style="background:${p.color}"></span>${esc2(p.name)} <span class="flasks">${Array.from({length:p.max},(_,k)=>FLASK(k<p.lives,p.color)).join('')}</span> ${p.score}</span>`).join('')+`<span class="pill"><span class="lbl">${L('Tempo','Speed')}</span>×${num(G.speed)}</span>`}
const esc2=s=>[...s].map(esc).join('');
function overlay(cls,html){const o=document.createElement('div');o.className='ov '+cls;o.innerHTML=html;$('#stage').append(o);return o}
function clearOverlays(){$('#stage').querySelectorAll('.ov').forEach(o=>o.remove())}

function beginRound(){const tok=G.token;const g=nextGame();G.g=g;G.phase='intro';clearOverlays();$('#play').innerHTML='';$('#burn').style.width='100%';$('#fuse').classList.remove('hurry');
  const p=cur();sIntro();
  overlay('intro',`<div>${G.party?`<div class="who" style="box-shadow:3px 3px 0 ${p.color}">${L('Kolej','Turn')}: ${esc2(p.name)}</div>`:''}<div class="verb">${g.verb}</div><div class="ins">${fmt(g.ins)}</div>${G.faster?`<div class="faster">${L('SZYBCIEJ!','FASTER!')}</div>`:''}</div>`);
  G.faster=false;setTimeout(()=>{if(G&&G.token===tok)play(g)},Math.max(1000,1650/G.speed))}

function play(g){const tok=G.token;clearOverlays();G.phase='play';const el=$('#play');el.innerHTML='';let fin=false,raf,elapsed=0,last=performance.now();
  const api={speed:G.speed,onKey:null,paused:()=>!!(G&&G.paused),done(ok){if(fin||G.token!==tok)return;fin=true;cancelAnimationFrame(raf);G.onKey=null;setTimeout(()=>{cleanup&&cleanup();result(g,ok)},ok?120:380)}};
  G.api=api;const cleanup=g.render(el,api);G.onKey=k=>api.onKey&&api.onKey(k);
  const tick=t=>{if(!G||G.token!==tok)return;const dt=t-last;last=t;if(!G.paused)elapsed+=dt;const f=Math.min(1,elapsed/g.time);$('#burn').style.width=(100-f*100)+'%';$('#fuse').classList.toggle('hurry',f>.7);
    if(f>=1){api.done(false);return}raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick)}

function result(g,ok){const tok=G.token;G.phase='result';const p=cur();
  if(ok){p.score++;sWin()}else{p.lives--;sFail();G.mistakes.push(g.review)}
  G.count++;if(G.count%5===0&&G.speed<1.8){G.speed=Math.round((G.speed+.12)*100)/100;G.faster=true}
  renderHud();
  const good=L(['DOBRZE!','BRAWO!','REAKCJA!','EUREKA!','IDEALNIE!'],['NICE!','BRAVO!','REACTION!','EUREKA!','PERFECT!']),bad=L(['PUDŁO!','UPS!','WYBUCH!','NIESTETY!'],['MISS!','OOPS!','KABOOM!','NOPE!']);
  const o=overlay('result '+(ok?'ok':'bad'),`<div><div class="word">${pick(ok?good:bad)}</div>${ok?'':`<div class="note">${g.note}</div><div class="tap">${L('Dotknij, aby grać dalej','Tap to keep playing')}</div>`}</div>`);
  let moved=false;const next=()=>{if(moved||!G||G.token!==tok)return;moved=true;advance()};
  setTimeout(next,ok?800:3200);if(!ok)setTimeout(()=>{o.onclick=next;G.onKey=k=>{if(k==='Enter'||k===' ')next()}},400)}

function advance(){G.onKey=null;
  if(!G.party){if(G.players[0].lives<=0)return gameOver()}
  else{const alive=G.players.filter(p=>p.lives>0);if(alive.length<=1)return gameOver();
    let n=G.turn;do{n=(n+1)%G.players.length}while(G.players[n].lives<=0);G.turn=n;renderHud()}
  beginRound()}

function gameOver(){const g=G;G.token=Math.random();show('over');const c=$('#overCard');
  const rev=[...new Set(g.mistakes)].slice(-10);
  const revHtml=rev.length?`<h3 style="font-family:var(--f-display);margin:0">${L('Do powtórki','To revise')}</h3><ul class="review">${rev.map(r=>`<li>${fmt(r)}</li>`).join('')}</ul>`:`<p class="muted">${L('Ani jednego błędu. Laboratorium jest Twoje.','Not a single mistake. The lab is yours.')}</p>`;
  if(!g.party){const s=g.players[0].score;const best=getBest();const rec=s>best;if(rec)setBest(s);
    const msg=s>=25?L('Mistrz laboratorium!','Lab master!'):s>=15?L('Świetna reakcja!','Great reaction!'):s>=8?L('Dobra robota, katalizator działa.','Good job, the catalyst is working.'):L('Rozgrzewka za Tobą. Spróbuj jeszcze raz.','Warm-up done. Try again.');
    c.innerHTML=`<div class="over-grid"><div><h2>${L('Koniec!','Game over!')}</h2><p class="muted">${msg}</p><div class="score-big">${s}</div><p class="muted">${L('wygranych mikrogier','microgames won')}${rec?L(' · nowy rekord!',' · new record!'):best?L(` · rekord: ${best}`,` · record: ${best}`):''}</p><p class="muted">${L('Poziom','Level')}: ${schoolName()} · ${L('tempo końcowe','final speed')} ×${num(g.speed)}</p></div><div>${revHtml}</div></div>`}
  else{const rk=g.players.slice().sort((a,b)=>(b.lives>0)-(a.lives>0)||b.score-a.score);
    c.innerHTML=`<div class="over-grid"><div><h2>${L(`Wygrywa ${esc2(rk[0].name)}!`,`${esc2(rk[0].name)} wins!`)}</h2><p class="muted">${L('Ostatnia osoba z pełną kolbą.','The last one with a full flask.')} ${L('Poziom','Level')}: ${schoolName()}.</p><div class="rank">${rk.map((p,i)=>`<div><span class="swatch" style="background:${p.color}"></span><span>${i+1}. ${esc2(p.name)}</span><span>${p.score} ${L('pkt','pts')}</span></div>`).join('')}</div></div><div>${revHtml}</div></div>`}
  c.insertAdjacentHTML('beforeend',`<div class="start-row"><button class="big" type="button" id="again">${L('Jeszcze raz','Play again')}</button><button class="big alt" type="button" id="toMenu">Menu</button></div>`);
  $('#again').onclick=startGame;$('#toMenu').onclick=goMenu}
const schoolName=()=>L({sp:'szkoła podstawowa',lo:'liceum',tech:'technikum'},{sp:'primary school',lo:'high school',tech:'technical school'})[ST.school]+', '+L({easy:'łatwa',mid:'średnia',hard:'trudna'},{easy:'easy',mid:'medium',hard:'hard'})[ST.diff];
