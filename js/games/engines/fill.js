/* Mikrogra: fill */
ENGINES.fill={get verb(){return L('UZUPEŁNIJ!','FILL IN!')},base:7800,pool:()=>FILL,make(it){const opts=shuffle(it.a);const full=it.eq.replace('?',it.a[0]);
    return{ins:L('Wstaw brakujący wzór do równania.','Insert the missing formula.'),note:`<b>${fmt(full)}</b>`,review:plain(full),
      render:quizRender(`${L('Uzupełnij równanie','Complete the equation')}<span class="eqbig">${it.eq.split('?').map(fmt).join('<span class="blank">?</span>')}</span>`,catName(it.c),opts,it.a[0])}}};
