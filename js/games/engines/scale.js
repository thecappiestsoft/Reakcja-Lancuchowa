/* Mikrogra: scale */
ENGINES.scale={get verb(){return L('ODWAŻ!','WEIGH OUT!')},base:13000,pool:()=>SCALEQ,make(it){const s=genScale(it);let got=null;
    return{ins:L('Policz w głowie i odważ wynik.','Do the maths in your head and weigh out the answer.'),get note(){return `${fmt(s.calc)}${got!==null&&got!==s.ans?L(` <br>(odważono ${got} g, a trzeba <b>${s.ans} g</b>)`,` <br>(you weighed ${got} g; the answer is <b>${s.ans} g</b>)`):''}`},review:`${plain(s.q)} → ${s.ans} g`,
      render(el,api){el.innerHTML=`<div class="prompt"><small>${catName(it.c)}</small>${fmt(s.q)}${s.eq?`<span class="eqsmall">${fmt(s.eq)}</span>`:''}</div><div class="scalebox"><div class="lcd"><span id="lcd">0</span> g</div><div class="kpad">${[-100,-10,-1,1,10,100].map(d=>`<button type="button" data-d="${d}">${d>0?'+':'−'}${Math.abs(d)}</button>`).join('')}</div><button type="button" class="go">${L('Waż','Weigh')} ✓</button></div>`;
        let v=0;const out=el.querySelector('#lcd');const set=x=>{v=Math.max(0,Math.min(999,x));out.textContent=v};
        el.querySelectorAll('.kpad button').forEach(b=>b.onclick=()=>{set(v+ +b.dataset.d);sTap()});
        const go=()=>{got=v;api.done(v===s.ans)};el.querySelector('.go').onclick=go;
        api.onKey=k=>{if(k==='ArrowUp')set(v+1);if(k==='ArrowDown')set(v-1);if(k==='ArrowRight')set(v+10);if(k==='ArrowLeft')set(v-10);if(k==='Enter')go()}}}}};
