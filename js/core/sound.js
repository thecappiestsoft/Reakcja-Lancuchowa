/* ---------- dźwięk ---------- */
let AC=null,soundOn=true;
function beep(freqs,dur=.09,type='square',vol=.045){if(!soundOn)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const t=AC.currentTime;freqs.forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(vol,t+i*dur);g.gain.exponentialRampToValueAtTime(.0001,t+i*dur+dur*.95);o.connect(g).connect(AC.destination);o.start(t+i*dur);o.stop(t+i*dur+dur)})}catch(e){}}
const sWin=()=>beep([660,880,1320],.08),sFail=()=>beep([240,160],.16,'sawtooth',.05),sIntro=()=>beep([523,784],.07,'triangle',.06),sTap=()=>beep([990],.04,'triangle',.04);
