/* ============================================================
   MIKROGRY
   ============================================================ */
const FLASK=(on,col)=>`<svg class="flask" viewBox="0 0 16 18" aria-hidden="true"><path d="M5.5 1h5M6.5 1v5L2 15a1.5 1.5 0 0 0 1.3 2h9.4A1.5 1.5 0 0 0 14 15L9.5 6V1" fill="${on?col:'none'}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" opacity="${on?1:.35}"/></svg>`;

function quizRender(prompt,label,opts,correct){
  return (el,api)=>{el.innerHTML=`<div class="prompt"><small>${label}</small>${prompt}</div><div class="opts"></div>`;
    const box=el.querySelector('.opts');const btns=opts.map((o,i)=>{const b=document.createElement('button');b.type='button';b.className='opt';b.innerHTML=`<span class="k">${i+1}</span>${fmt(o)}`;
      b.onclick=()=>{const ok=o===correct;b.classList.add(ok?'right':'wrong');if(!ok)btns[opts.indexOf(correct)].classList.add('right');api.done(ok)};box.append(b);return b});
    api.onKey=k=>{const n=+k;if(n>=1&&n<=opts.length)btns[n-1].click()}}}

// Rejestr mikrogier – każdy plik w js/games/engines/ dopisuje tu swój silnik.
// Kolejność ładowania plików = kolejność kafelków w menu.
const ENGINES={};
