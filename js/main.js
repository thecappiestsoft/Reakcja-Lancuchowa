/* start */
ST.engines=new Set(Object.keys(ENGINES));
(function init(){let l='pl';try{const s=localStorage.getItem('rl-lang');if(s==='pl'||s==='en')l=s}catch(e){}
  const h=location.hash.slice(1);if(h==='en'||h==='chainov')l='en';if(h==='pl'||h==='lancuchow')l='pl';
  setLang(l);if(h==='lancuchow'||h==='chainov')show('bio')})();
