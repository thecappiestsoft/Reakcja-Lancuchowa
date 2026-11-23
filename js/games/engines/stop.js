/* Mikrogra: stop */
ENGINES.stop={verb:'STOP!',base:7500,pool:()=>STOPQ,make(it){let got=null;
    return{ins:L(`Zatrzymaj termometr: ${it.label}`,`Stop the thermometer at ${it.label}`),get note(){return `${it.label}: <b>${it.txt}</b>${got!==null?L(` (zatrzymano na ${Math.round(got)}°C)`,` (you stopped at ${Math.round(got)}°C)`):''}`},review:`${it.label}: ${it.txt}`,
      render(el,api){const MIN=-40,MAX=120;const pct=t=>(t-MIN)/(MAX-MIN)*100;
        el.innerHTML=`<div class="prompt"><small>${L('Termometr · skala Celsjusza','Thermometer · Celsius scale')}</small>${L('Zatrzymaj na','Stop at')}: ${fmt(it.label)}</div><div class="thermo"><div class="tscale">${[-40,-20,0,20,40,60,80,100,120].map(t=>`<span style="left:${pct(t)}%">${t}</span>`).join('')}</div><div class="track"><div class="needle"></div></div><div class="tread"><span>0</span> °C</div><button type="button" class="go stopb">STOP</button></div>`;
        const ndl=el.querySelector('.needle'),tv=el.querySelector('.tread span');let pos=Math.random()*.3,dir=1,last=performance.now(),raf,stopped=false;const per=2.6/api.speed;
        const step=t=>{const dt=Math.min(.05,(t-last)/1000);last=t;if(!api.paused()){pos+=dir*dt/per;if(pos>1){pos=2-pos;dir=-1}if(pos<0){pos=-pos;dir=1}}ndl.style.left=pos*100+'%';tv.textContent=Math.round(MIN+pos*(MAX-MIN));if(!stopped)raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step);
        const stop=()=>{if(stopped)return;stopped=true;cancelAnimationFrame(raf);got=MIN+pos*(MAX-MIN);api.done(Math.abs(got-it.v)<=5)};
        el.querySelector('.stopb').onclick=stop;api.onKey=k=>{if(k===' '||k==='Enter')stop()};return()=>cancelAnimationFrame(raf)}}}};
