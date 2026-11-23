/* Mikrogra: tf */
ENGINES.tf={get verb(){return L('PRAWDA CZY FAŁSZ?','TRUE OR FALSE?')},base:5600,pool:()=>TF,make(it){const ans=it.v?L('PRAWDA','TRUE'):L('FAŁSZ','FALSE');
    return{ins:L('Zdecyduj w mgnieniu oka.','Decide in a flash.'),note:`<b>${ans}.</b> ${it.why?fmt(it.why):fmt(it.s)}`,review:`${plain(it.s)} → ${ans.toLowerCase()}${it.why?'. '+plain(it.why):''}`,
    render(el,api){el.innerHTML=`<div class="prompt"><small>${catName(it.c)}</small>${L('Prawda czy fałsz?','True or false?')}</div><div class="statement">${fmt(it.s)}</div><div class="tf"><button type="button" class="t">${L('PRAWDA','TRUE')}<span class="k">←</span></button><button type="button" class="f">${L('FAŁSZ','FALSE')}<span class="k">→</span></button></div>`;
      el.querySelector('.t').onclick=()=>api.done(it.v===true);el.querySelector('.f').onclick=()=>api.done(it.v===false);
      api.onKey=k=>{if(k==='ArrowLeft')api.done(it.v===true);if(k==='ArrowRight')api.done(it.v===false)}}}}};
