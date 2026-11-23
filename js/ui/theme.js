/* motyw / theme */
const mqDark=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
function effTheme(){const a=document.documentElement.getAttribute('data-theme');return a==='dark'||a==='light'?a:(mqDark&&mqDark.matches?'dark':'light')}
function updTheme(){const e=effTheme();$('#themeSw').setAttribute('aria-label',L('Motyw','Theme'));
  document.querySelectorAll('#themeSw button').forEach(b=>{b.setAttribute('aria-pressed',b.dataset.themeSet===e);const lbl=b.dataset.themeSet==='dark'?L('Tryb ciemny','Dark mode'):L('Tryb jasny','Light mode');b.setAttribute('aria-label',lbl);b.title=lbl})}
function setTheme(m){document.documentElement.setAttribute('data-theme',m);try{localStorage.setItem('rl-theme',m)}catch(e){}updTheme()}
document.querySelectorAll('#themeSw button').forEach(b=>b.onclick=()=>setTheme(b.dataset.themeSet));
if(mqDark){try{mqDark.addEventListener('change',updTheme)}catch(e){}}
try{new MutationObserver(updTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']})}catch(e){}
