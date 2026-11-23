/* Mikrogra: gear */
ENGINES.gear={get verb(){return L('CO TO JEST?','WHAT IS IT?')},base:6500,pool:()=>GEARQ,make(it){const wrong=shuffle(GEARQ.filter(g=>g.name!==it.name).map(g=>g.name)).slice(0,3);const opts=shuffle([it.name,...wrong]);
    return{ins:L('Rozpoznaj sprzęt laboratoryjny.','Identify the lab equipment.'),note:L(`To <b>${it.name}</b>. ${it.use}`,`It’s a <b>${it.name}</b>. ${it.use}`),review:`${it.name}: ${it.use}`,
      render:quizRender(`${L('Jak się nazywa ten sprzęt?','What is this called?')}<div class="gear"><svg viewBox="0 0 140 160" aria-hidden="true">${it.svg}</svg></div>`,L('Sprzęt laboratoryjny','Lab equipment'),opts,it.name)}}};
