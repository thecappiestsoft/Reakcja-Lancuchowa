/* pauza */
$('#pauseBtn').onclick=()=>{if(!G)return;if(G.phase!=='play'||G.paused)return;G.paused=true;
  const o=overlay('pause',`<div><h3>${L('Pauza','Paused')}</h3><div class="row" style="justify-content:center"><button class="big" type="button" id="resume">${L('Wznów','Resume')}</button><button class="big alt" type="button" id="quit">${L('Zakończ','Quit')}</button></div></div>`);
  o.querySelector('#resume').onclick=()=>{G.paused=false;o.remove()};o.querySelector('#quit').onclick=()=>{G.paused=false;o.remove();gameOver()}};

document.addEventListener('keydown',e=>{if(!G||!G.onKey)return;if(e.target.tagName==='INPUT'&&e.target.type!=='range')return;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' ','Backspace'].includes(e.key)&&e.target.type!=='range')e.preventDefault();G.onKey(e.key)});
$('#startBtn').onclick=()=>{beep([0],.01);startGame()};
