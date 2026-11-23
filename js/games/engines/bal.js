/* Mikrogra: bal */
ENGINES.bal={get verb(){return L('ZBALANSUJ!','BALANCE IT!')},base:13000,pool:()=>EQ,make(it){const sp=[...it.l,...it.r];const solved=sp.map((f,i)=>(it.sol[i]>1?it.sol[i]:'')+f);
    const eqTxt=solved.slice(0,it.l.length).join(' + ')+' → '+solved.slice(it.l.length).join(' + ');
    return{ins:L('Klikaj współczynniki, aż liczba atomów się zgodzi.','Click the coefficients until the atoms add up.'),note:`<b>${fmt(eqTxt)}</b>`,review:plain(eqTxt),
      render(el,api){const co=sp.map(()=>1);el.innerHTML=`<div class="prompt"><small>${L('Równanie reakcji','Chemical equation')}</small>${L('Zbalansuj!','Balance it!')}</div><div class="eq"></div><div class="tally"></div><div class="hint">${L('Klik = +1 · „−” zmniejsza','Click = +1 · “−” lowers it')}</div>`;
        const eqEl=el.querySelector('.eq'),tal=el.querySelector('.tally');
        sp.forEach((f,i)=>{if(i===it.l.length){const a=document.createElement('span');a.className='op';a.textContent='→';eqEl.append(a)}else if(i>0){const a=document.createElement('span');a.className='op';a.textContent='+';eqEl.append(a)}
          const s=document.createElement('span');s.className='sp';s.innerHTML=`<span class="coef"><button type="button" class="c one">1</button><button type="button" class="m" aria-label="${L('zmniejsz','decrease')}">−</button></span><span>${fmt(f)}</span>`;
          const c=s.querySelector('.c');c.onclick=()=>{co[i]=co[i]>=9?1:co[i]+1;sTap();upd()};s.querySelector('.m').onclick=()=>{co[i]=co[i]<=1?9:co[i]-1;upd()};c.oncontextmenu=e=>{e.preventDefault();co[i]=co[i]<=1?9:co[i]-1;upd()};eqEl.append(s)});
        const parsed=sp.map(parse);const els=[...new Set(parsed.flatMap(p=>Object.keys(p)))];
        const upd=()=>{eqEl.querySelectorAll('.c').forEach((b,i)=>{b.textContent=co[i];b.classList.toggle('one',co[i]===1)});let all=true;
          tal.innerHTML=els.map(e=>{let Lh=0,Rr=0;parsed.forEach((p,i)=>{if(p[e]){if(i<it.l.length)Lh+=p[e]*co[i];else Rr+=p[e]*co[i]}});if(Lh!==Rr)all=false;return `<span class="tal ${Lh===Rr?'ok':''}"><b>${e}</b> ${Lh} | ${Rr}</span>`}).join('');
          if(all){api.done(true)}};upd()}}}};
