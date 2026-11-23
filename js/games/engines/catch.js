/* Mikrogra: catch */
ENGINES.catch={get verb(){return L('ZŁAP!','CATCH!')},base:6800,pool:()=>CATCH,make(it){const yes=shuffle(it.yes).slice(0,3),no=shuffle(it.no).slice(0,4);let wrongTap=null;
    return{ins:L(`Złap wszystkie: ${it.label}`,`Catch all the ${it.label}`),
      get note(){return wrongTap?L(`<b>${fmt(wrongTap)}</b> nie należy do grupy: ${it.label}. Szukane: ${yes.map(fmt).join(', ')}.`,`<b>${fmt(wrongTap)}</b> is not one of the ${it.label}. You wanted: ${yes.map(fmt).join(', ')}.`):L(`Do złapania były: <b>${yes.map(fmt).join(', ')}</b>.`,`You needed to catch: <b>${yes.map(fmt).join(', ')}</b>.`)},
      review:`${it.label}: ${L('np.','e.g.')} ${it.yes.slice(0,4).join(', ')}`,
      render(el,api){el.innerHTML=`<div class="prompt"><small>${catName(it.c)}</small>${L('Złap','Catch')}: ${it.label}</div><div class="counter">${L('Złapane','Caught')}: <b id="cc">0</b> / 3</div><div class="catch"></div>`;
        const area=el.querySelector('.catch');const R=area.getBoundingClientRect();const W=R.width,H=Math.max(R.height,220);const B=Math.max(58,Math.min(86,W/5.2));
        const cells=shuffle([...Array(12).keys()]);let caught=0;const items=shuffle([...yes.map(v=>({v,y:1})),...no.map(v=>({v,y:0}))]);
        const bs=items.map((it2,i)=>{const cx=cells[i]%4,cy=Math.floor(cells[i]/4);const b=document.createElement('button');b.type='button';b.className='bubble';b.style.width=b.style.height=B+'px';b.innerHTML=fmt(it2.v);if(it2.v.length>6)b.style.fontSize='12px';
          const o={el:b,x:cx*(W-B)/3,y:cy*(H-B)/2,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,dead:false};const sp=(55+rnd(40))*api.speed;const m=Math.hypot(o.vx,o.vy)||1;o.vx=o.vx/m*sp;o.vy=o.vy/m*sp;
          b.onclick=()=>{if(o.dead)return;if(it2.y){o.dead=true;sTap();b.style.setProperty('--t',`translate(${o.x}px,${o.y}px)`);b.classList.add('pop');caught++;el.querySelector('#cc').textContent=caught;if(caught===3)api.done(true)}else{wrongTap=it2.v;api.done(false)}};
          area.append(b);return o});
        let last=performance.now(),raf;const step=t=>{const dt=Math.min(.05,(t-last)/1000);last=t;if(!api.paused()){bs.forEach(o=>{if(o.dead)return;o.x+=o.vx*dt;o.y+=o.vy*dt;if(o.x<0){o.x=0;o.vx*=-1}if(o.x>W-B){o.x=W-B;o.vx*=-1}if(o.y<0){o.y=0;o.vy*=-1}if(o.y>H-B){o.y=H-B;o.vy*=-1}o.el.style.transform=`translate(${o.x}px,${o.y}px)`})}raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step);
        return()=>cancelAnimationFrame(raf)}}}};
