/* Mikrogra: match */
ENGINES.match={get verb(){return L('DOPASUJ!','MATCH!')},base:9500,pool:()=>MATCH,make(it){const pr=shuffle(it.pairs).slice(0,4);let bad=null;
    return{ins:L(`Połącz w pary: ${it.title}`,`Make pairs: ${it.title}`),get note(){return (bad?`<b>${fmt(bad[0])} – ${fmt(bad[1])}</b><br>`:'')+pr.filter(p=>p!==bad).map(p=>`${fmt(p[0])} – ${fmt(p[1])}`).join(' · ')},
      get review(){const p=bad||pr[0];return `${it.title}: ${plain(p[0])} – ${plain(p[1])}`},
      render(el,api){el.innerHTML=`<div class="prompt"><small>${catName(it.c)}</small>${L('Dopasuj','Match')}: ${it.title}</div><div class="match"><div class="col L"></div><div class="col R"></div></div>`;
        let sel=null,ok=0;
        const mk=(side)=>shuffle(pr.map((p,i)=>({t:p[side==='L'?0:1],i}))).forEach(o=>{const b=document.createElement('button');b.type='button';b.className='mbtn';b.innerHTML=fmt(o.t);
          b.onclick=()=>{if(b.classList.contains('ok'))return;if(!sel||sel.side===side){if(sel)sel.b.classList.remove('sel');sel={o,b,side};b.classList.add('sel');sTap();return}
            if(sel.o.i===o.i){sel.b.classList.remove('sel');[sel.b,b].forEach(x=>{x.classList.add('ok');x.dataset.p=ok});sel=null;ok++;sTap();if(ok===pr.length)api.done(true)}
            else{bad=pr[sel.o.i];b.classList.add('bad');api.done(false)}};
          el.querySelector('.col.'+side).append(b)});mk('L');mk('R')}}}};
