/* Mikrogra: atom */
ENGINES.atom={get verb(){return L('ZBUDUJ ATOM!','BUILD AN ATOM!')},base:10000,pool:()=>ATOMQ,make(it){const target=shellsOf(it.e);const desc=target.map((n,i)=>'KLMN'[i]+': '+n).join(', ');
    return{ins:L(`Rozmieść elektrony na powłokach: ${plain(it.label)}`,`Place the electrons on the shells: ${plain(it.label)}`),note:`${fmt(it.label)}: <b>${desc}</b> (${L('razem','total')} ${it.e} e<sup>−</sup>)`,review:`${plain(it.label)}: ${desc}`,
      render(el,api){const co=[0,0,0,0];const R=[34,58,82,106];
        el.innerHTML=`<div class="prompt"><small>${L('Budowa atomu','Atomic structure')} · Z = ${it.z}</small>${L('Zbuduj','Build')}: ${fmt(it.label)}</div><div class="atom"><svg viewBox="-118 -118 236 236" class="asvg" aria-hidden="true"></svg><div class="shellbtns">${'KLMN'.split('').map((s,i)=>`<button type="button" data-i="${i}">${s} +1</button>`).join('')}<button type="button" class="clr">${L('Wyczyść','Clear')}</button><div class="ecount">${L('Elektrony','Electrons')}: <b id="ec">0</b></div></div></div>`;
        const svg=el.querySelector('.asvg');
        const draw=()=>{let h='';R.forEach((r,i)=>{h+=`<circle r="${r}" class="ring"/>`;for(let k=0;k<co[i];k++){const a=-Math.PI/2+k*2*Math.PI/co[i];h+=`<circle class="eln" r="6" cx="${(r*Math.cos(a)).toFixed(1)}" cy="${(r*Math.sin(a)).toFixed(1)}"/>`}});h+=`<circle r="22" class="nuc"/><text class="nuct" y="5">+${it.z}</text>`;svg.innerHTML=h;el.querySelector('#ec').textContent=co.reduce((a,b)=>a+b,0)};
        const check=()=>{const t=target.concat([0,0,0,0]).slice(0,4);if(co.every((v,i)=>v===t[i]))api.done(true)};
        el.querySelectorAll('.shellbtns [data-i]').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(co[i]<CAP[i]){co[i]++;sTap();draw();check()}});
        el.querySelector('.clr').onclick=()=>{co.fill(0);draw()};draw();
        api.onKey=k=>{const m={k:0,l:1,m:2,n:3,'1':0,'2':1,'3':2,'4':3}[k.toLowerCase()];if(m!==undefined)el.querySelector(`[data-i="${m}"]`).click();if(k==='Backspace')el.querySelector('.clr').click()}}}}};
