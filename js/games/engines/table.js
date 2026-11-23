/* Mikrogra: table */
ENGINES.table={get verb(){return L('WSKAŻ!','FIND IT!')},base:7200,pool:()=>TBL,make(it){const e=ELS.find(x=>x[0]===it.s);const z=ELS.indexOf(e)+1;
    return{ins:L(`Znajdź w układzie: ${plain(it.p)}`,`Find it in the table: ${plain(it.p)}`),note:L(`To <b>${it.s}</b> – ${e[1]}, Z = ${z}.`,`It’s <b>${it.s}</b> – ${e[1]}, Z = ${z}.`),review:`${plain(it.p)} → ${it.s} (${e[1]})`,
      render(el,api){el.innerHTML=`<div class="prompt"><small>${L('Układ okresowy','Periodic table')}</small>${L('Wskaż','Find')}: ${fmt(it.p)}</div><div class="pt-wrap"><div class="pt"></div></div>`;const pt=el.querySelector('.pt');
        ELS.forEach((x,i)=>{const b=document.createElement('button');b.type='button';const g=x[3];b.className='el '+(x[0]==='H'?'h':g===18?'ng':g<=2?'s':g>=13?'p':'d');b.style.gridColumn=g;b.style.gridRow=x[2];b.innerHTML=`<small>${i+1}</small>${x[0]}`;b.setAttribute('aria-label',x[1]);
          b.onclick=()=>{const ok=x[0]===it.s;b.classList.add(ok?'right':'wrong');if(!ok)pt.children[z-1].classList.add('right');api.done(ok)};pt.append(b)})}}}};
