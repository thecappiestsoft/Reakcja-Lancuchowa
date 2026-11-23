/* ============================================================
   NARZĘDZIA
   ============================================================ */
const $=s=>document.querySelector(s);
const esc=c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c]||c);
function fmt(s){s=String(s);let o='',i=0;while(i<s.length){const ch=s[i];
  if((ch==='_'||ch==='^')&&s[i+1]==='{'){const j=s.indexOf('}',i);const inner=[...s.slice(i+2,j)].map(esc).join('');o+=ch==='_'?`<sub>${inner}</sub>`:`<sup>${inner}</sup>`;i=j+1;continue}
  if(/[0-9]/.test(ch)&&i>0&&/[A-Za-z)\]]/.test(s[i-1])){let j=i;while(j<s.length&&/[0-9]/.test(s[j]))j++;o+=`<sub>${s.slice(i,j)}</sub>`;i=j;continue}
  o+=esc(ch);i++}return o}
const plain=s=>String(s).replace(/[_^]\{([^}]*)\}/g,'$1');
const rnd=n=>Math.floor(Math.random()*n);
const pick=a=>a[rnd(a.length)];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
const num=x=>{const v=String(Math.round(x*1000)/1000);return LANG==='pl'?v.replace('.',','):v};
const gcd=(a,b)=>b?gcd(b,a%b):a;
const molWord=n=>n===1?'mol':(Number.isInteger(n)&&n<5)?'mole':'mola';

function parseGroup(s){const st=[{}];let i=0;while(i<s.length){const ch=s[i];
  if(ch==='('||ch==='['){st.push({});i++}
  else if(ch===')'||ch===']'){i++;let n='';while(i<s.length&&/\d/.test(s[i]))n+=s[i++];const g=st.pop(),k=n?+n:1,top=st[st.length-1];for(const e in g)top[e]=(top[e]||0)+g[e]*k}
  else if(/[A-Z]/.test(ch)){let e=ch;i++;while(i<s.length&&/[a-z]/.test(s[i]))e+=s[i++];let n='';while(i<s.length&&/\d/.test(s[i]))n+=s[i++];const top=st[st.length-1];top[e]=(top[e]||0)+(n?+n:1)}
  else i++}return st[0]}
function parse(f){const tot={};f.split('·').forEach(part=>{let k=1;const m=part.match(/^(\d+)(.*)$/);if(m){k=+m[1];part=m[2]}const c=parseGroup(part);for(const e in c)tot[e]=(tot[e]||0)+c[e]*k});return tot}
const molar=f=>{const p=parse(f);let s=0;for(const e in p)s+=MASS[e]*p[e];return s};
