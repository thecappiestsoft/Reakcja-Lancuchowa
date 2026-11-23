/* Mikrogra: ions */
ENGINES.ions={get verb(){return L('ZŁÓŻ WZÓR!','BUILD A FORMULA!')},base:9500,pool:()=>IONQ,make(it){const [ca,an]=pickIons(it.lv);const g=gcd(ca[1],an[1]);const x=an[1]/g,y=ca[1]/g;const name=L(`${an[2]} ${ca[2]}`,`${ca[2]} ${an[2]}`);
    const formula=part(ca,x)+part(an,y);
    return{ins:L(`Złóż wzór z jonów: ${name}`,`Build the formula from ions: ${name}`),note:`${name}: <b>${fmt(formula)}</b><br>${L('ładunki','charges')}: ${x}·(+${ca[1]}) + ${y}·(−${an[1]}) = 0`,review:`${name} → ${formula}`,
      render(el,api){const n=[1,1];el.innerHTML=`<div class="prompt"><small>${L('Wzór sumaryczny z jonów','Formula from ions')}</small>${L('Złóż wzór','Build the formula')}: ${name}</div><div class="ions"><div class="ion"><div class="ionsym">${fmt(ca[0]+'^{'+chg(ca[1])+'}')}</div><button type="button" class="c" data-i="0">×1</button></div><div class="ion an"><div class="ionsym">${fmt(an[0]+'^{'+chg(-an[1])+'}')}</div><button type="button" class="c" data-i="1">×1</button></div></div><div class="fbig" id="fb"></div><div class="tally" id="chs"></div><div class="hint">${L('Klik = +1 · prawy klik = −1','Click = +1 · right-click = −1')}</div>`;
        const btn=el.querySelectorAll('.ion .c');
        const upd=()=>{btn.forEach((b,i)=>b.textContent='×'+n[i]);el.querySelector('#fb').innerHTML=fmt(part(ca,n[0])+part(an,n[1]));const sum=n[0]*ca[1]-n[1]*an[1];
          el.querySelector('#chs').innerHTML=`<span class="tal ${sum===0?'ok':''}">${L('ładunek','charge')}: ${n[0]}·(+${ca[1]}) + ${n[1]}·(−${an[1]}) = <b>${sum>0?'+':''}${sum}</b></span>`;
          if(n[0]===x&&n[1]===y)api.done(true)};
        btn.forEach((b,i)=>{b.onclick=()=>{n[i]=n[i]>=4?1:n[i]+1;sTap();upd()};b.oncontextmenu=e=>{e.preventDefault();n[i]=n[i]<=1?4:n[i]-1;upd()}});upd();
        api.onKey=k=>{if(k==='ArrowLeft'||k==='1')btn[0].click();if(k==='ArrowRight'||k==='2')btn[1].click()}}}}};
