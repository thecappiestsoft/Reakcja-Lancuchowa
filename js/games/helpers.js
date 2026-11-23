const ENG_DESC={
  pl:{quiz:'Jedna z czterech odpowiedzi.',tf:'Szybka decyzja: ← lub →.',catch:'Klikaj pływające bańki pasujące do hasła.',sort:'Wrzucaj karty do właściwego kubła.',
    ph:'Ustaw wskaźnik uniwersalny.',bal:'Dobierz współczynniki w równaniu.',table:'Znajdź pierwiastek w układzie okresowym.',count:'Policz atomy we wzorze.',mass:'Oblicz masę cząsteczkową lub molową.',
    match:'Połącz w pary, np. symbol i nazwę.',order:'Ułóż po kolei, np. według pH.',fill:'Wstaw brakujący wzór do równania.',scale:'Oblicz i odważ wynik na wadze.',
    atom:'Rozmieść elektrony na powłokach.',ions:'Złóż wzór soli lub tlenku z jonów.',stop:'Zatrzymaj termometr na właściwej temperaturze.',gear:'Rozpoznaj sprzęt laboratoryjny.'},
  en:{quiz:'One of four answers.',tf:'Quick call: ← or →.',catch:'Click the floating bubbles that match the clue.',sort:'Drop each card into the right bin.',
    ph:'Set the universal indicator.',bal:'Choose the coefficients in an equation.',table:'Find the element in the periodic table.',count:'Count the atoms in a formula.',mass:'Work out molecular or molar mass.',
    match:'Make pairs, e.g. symbol and name.',order:'Put things in order, e.g. by pH.',fill:'Insert the missing formula in an equation.',scale:'Calculate and weigh out the answer.',
    atom:'Place electrons on the shells.',ions:'Build a salt or oxide formula from ions.',stop:'Stop the thermometer at the right temperature.',gear:'Identify lab equipment.'}};
const CAP=[2,8,8,2];
function shellsOf(e){const r=[];let left=e;for(const c of CAP){if(left<=0)break;r.push(Math.min(c,left));left-=c}return r}
const part=(ion,n)=>n===1?ion[0]:(ion[4]?`(${ion[0]})${n}`:ion[0]+n);
function pickIons(lv){for(let k=0;k<200;k++){const c=pick(CATI),a=pick(ANI);if(BAN.includes(c[0]+c[1]+'|'+a[0]))continue;
  if(lv===1&&(c[3]>1||a[3]>1))continue;if(lv===2&&c[3]<2&&a[3]<2)continue;return [c,a]}return [CATI[0],ANI[0]]}
function genScale(it){const C=[100,150,200,250,300,400,500],P=[2,4,5,8,10,12,15,20,25];
  if(it.k==='cp'||it.k==='water'){let mr,cp,ms;do{mr=pick(C);cp=pick(P);ms=mr*cp/100}while(!Number.isInteger(ms));
    if(it.k==='cp')return{q:L(`Ile gramów soli trzeba odważyć, aby otrzymać ${mr} g roztworu o stężeniu ${cp}%?`,`How many grams of salt do you weigh out to make ${mr} g of a ${cp}% solution?`),ans:ms,calc:L(`${cp}% · ${mr} g = ${ms} g soli`,`${cp}% · ${mr} g = ${ms} g of salt`)};
    return{q:L(`Ile gramów wody potrzeba do ${mr} g roztworu soli o stężeniu ${cp}%?`,`How many grams of water do you need for ${mr} g of a ${cp}% salt solution?`),ans:mr-ms,calc:L(`sól: ${cp}% · ${mr} g = ${ms} g; woda: ${mr} − ${ms} = ${mr-ms} g`,`salt: ${cp}% · ${mr} g = ${ms} g; water: ${mr} − ${ms} = ${mr-ms} g`)}}
  if(it.k==='molar'){const S=[['NaOH',40],['KOH',56],['H2SO4',98],['Na2CO3',106],['CuSO4',160],['KNO3',101],['NaNO3',85]];let s,c,v,m;
    do{s=pick(S);c=pick([0.1,0.2,0.5,1,2]);v=pick([0.1,0.2,0.25,0.5,1]);m=Math.round(c*v*s[1]*1000)/1000}while(!Number.isInteger(m)||m<2||m>400);
    return{q:L(`Ile gramów ${s[0]} potrzeba do ${num(v)} dm^{3} roztworu o stężeniu ${num(c)} mol/dm^{3}? (M = ${s[1]} g/mol)`,`How many grams of ${s[0]} do you need for ${num(v)} dm^{3} of a ${num(c)} mol/dm^{3} solution? (M = ${s[1]} g/mol)`),ans:m,calc:`n = ${num(c)} · ${num(v)} = ${num(c*v)} mol; m = ${num(c*v)} · ${s[1]} = ${m} g`}}
  if(it.k==='moles'){let s,n,m;do{s=pick([['H2O',18],['CO2',44],['NaOH',40],['O2',32],['CaCO3',100],['H2SO4',98],['NH3',17]]);n=pick([0.5,1,2,3,4,0.25]);m=n*s[1]}while(!Number.isInteger(m));
    return{q:L(`Ile gramów waży ${num(n)} ${molWord(n)} ${s[0]}?`,`What is the mass of ${num(n)} ${n===1?'mole':'moles'} of ${s[0]}?`),ans:m,calc:`M(${s[0]}) = ${s[1]} g/mol; ${num(n)} · ${s[1]} = ${m} g`}}
  const R=[[['węgla','carbon'],['CO2','CO2'],'C + O2 → CO2',12,44],[['wodoru','hydrogen'],['wody','water'],'2H2 + O2 → 2H2O',4,36],[['CaCO3','CaCO3'],['CaO','CaO'],'CaCO3 → CaO + CO2',100,56],
    [['magnezu','magnesium'],['MgO','MgO'],'2Mg + O2 → 2MgO',48,80],[['Fe2O3','Fe2O3'],['żelaza','iron'],'Fe2O3 + 3CO → 2Fe + 3CO2',160,112],[['CuO','CuO'],['miedzi','copper'],'CuO + H2 → Cu + H2O',80,64]];
  const r=pick(R);const li=LANG==='pl'?0:1;let k,a,b;do{k=pick([0.25,0.5,1,2,3]);a=r[3]*k;b=r[4]*k}while(!Number.isInteger(a)||!Number.isInteger(b));
  return{q:L(`Ile gramów ${r[1][li]} powstanie z ${a} g ${r[0][li]}?`,`How many grams of ${r[1][li]} form from ${a} g of ${r[0][li]}?`),eq:r[2],ans:b,calc:L(`${r[3]} g → ${r[4]} g, więc ${a} g → ${a} · ${r[4]}/${r[3]} = ${b} g`,`${r[3]} g → ${r[4]} g, so ${a} g → ${a} · ${r[4]}/${r[3]} = ${b} g`)}}
const catName=id=>CATS.find(c=>c.id===id).name;
function indic(v){const S=[[0,[215,38,61]],[2,[240,84,43]],[4,[247,162,27]],[6,[233,215,42]],[7,[91,191,58]],[8,[42,157,143]],[10,[47,95,208]],[12,[90,63,191]],[14,[123,42,158]]];
  for(let i=0;i<S.length-1;i++){const [a,c1]=S[i],[b,c2]=S[i+1];if(v<=b){const t=(v-a)/(b-a);return `rgb(${c1.map((x,j)=>Math.round(x+(c2[j]-x)*t)).join(',')})`}}return 'rgb(123,42,158)'}
