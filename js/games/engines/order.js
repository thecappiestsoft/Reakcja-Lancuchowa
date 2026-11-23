/* Mikrogra: order */
ENGINES.order={get verb(){return L('UŁÓŻ!','IN ORDER!')},base:8500,pool:()=>ORDER,make(it){const idx=shuffle([...it.items.keys()]).slice(0,4).sort((a,b)=>a-b);const seq=idx.map(i=>it.items[i]);
    const line=seq.map(x=>fmt(x[0])+(x[1]?` (${fmt(x[1])})`:'')).join(' → ');
    return{ins:L(`Klikaj po kolei: ${it.title}`,`Click in order: ${it.title}`),note:`<b>${line}</b>`,review:`${it.title}: ${seq.map(x=>plain(x[0])).join(' → ')}`,
      render(el,api){el.innerHTML=`<div class="prompt"><small>${catName(it.c)}</small>${L('Ułóż ','Put in order: ')}${it.title}</div><div class="tiles"></div>`;const box=el.querySelector('.tiles');let n=0;
        shuffle(seq).forEach(x=>{const b=document.createElement('button');b.type='button';b.className='tile';b.innerHTML=fmt(x[0]);
          b.onclick=()=>{if(b.dataset.n)return;if(x===seq[n]){n++;b.dataset.n=n;b.classList.add('on');sTap();if(n===seq.length)api.done(true)}else{b.classList.add('wrong');api.done(false)}};box.append(b)});
        api.onKey=k=>{const i=+k;if(i>=1&&i<=4)box.children[i-1].click()}}}}};
