/* Mikrogra: count */
ENGINES.count={get verb(){return L('POLICZ!','COUNT!')},base:6800,pool:()=>COUNT,make(it){const p=parse(it.f);const keys=Object.keys(p);let q,ans;
    if(Math.random()<.3){ans=Object.values(p).reduce((a,b)=>a+b,0);q=L(`Ile atomów łącznie jest w ${fmt(it.f)}?`,`How many atoms in total are in ${fmt(it.f)}?`)}else{const e=pick(keys);ans=p[e];q=L(`Ile atomów <b>${e}</b> jest w ${fmt(it.f)}?`,`How many <b>${e}</b> atoms are in ${fmt(it.f)}?`)}
    const pool=new Set([ans]);[ans+1,ans-1,ans+2,ans*2,...Object.values(p),ans+3,ans-2].forEach(v=>{if(pool.size<4&&v>0)pool.add(v)});let k=4;while(pool.size<4)pool.add(ans+k++);
    const opts=shuffle([...pool].map(String));
    return{ins:L('Policz atomy we wzorze.','Count the atoms in the formula.'),note:`${q} <b>${ans}</b>`,review:`${plain(q.replace(/<[^>]+>/g,''))} → ${ans}`,render:quizRender(q,L('Policz atomy','Count the atoms'),opts,String(ans))}}};
