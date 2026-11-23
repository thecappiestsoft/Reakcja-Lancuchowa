/* Mikrogra: mass */
ENGINES.mass={get verb(){return L('ZWAŻ!','MOLAR MASS!')},base:8200,pool:()=>MASSQ,make(it){const M=molar(it.f);const p=parse(it.f);const u=it.lv===1?'u':'g/mol';
    const calc=Object.entries(p).map(([e,n])=>n>1?`${n}·${num(MASS[e])}`:num(MASS[e])).join(' + ');
    const naive=Object.keys(p).reduce((a,e)=>a+MASS[e],0);const pool=new Set([M]);[naive,M+16,M-16,M+2,M*2,M+18,M-12].forEach(v=>{if(pool.size<4&&v>0&&v!==M)pool.add(v)});let k=3;while(pool.size<4)pool.add(M+k++);
    const opts=shuffle([...pool].map(v=>`${num(v)} ${u}`));const correct=`${num(M)} ${u}`;
    const q=it.lv===1?L(`Masa cząsteczkowa ${fmt(it.f)} to:`,`The molecular mass of ${fmt(it.f)} is:`):L(`Masa molowa ${fmt(it.f)} to:`,`The molar mass of ${fmt(it.f)} is:`);
    return{ins:L('Policz masę i wybierz wynik.','Work out the mass and pick the answer.'),note:`${fmt(it.f)}: ${calc} = <b>${correct}</b>`,review:`${plain(it.f)}: ${calc} = ${correct}`,render:quizRender(q,L('Masy atomowe: H 1, C 12, N 14, O 16, Na 23, S 32, Cl 35,5…','Atomic masses: H 1, C 12, N 14, O 16, Na 23, S 32, Cl 35.5…'),opts,correct)}}};
