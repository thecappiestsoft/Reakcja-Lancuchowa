function loadPL(){
/* ============================================================
   DANE
   ============================================================ */
CATS=[
  {id:'uklad',name:'Układ okresowy i atom'},
  {id:'wzory',name:'Substancje, wzory i nazwy'},
  {id:'reakcje',name:'Reakcje i równania'},
  {id:'ph',name:'Kwasy, zasady, pH'},
  {id:'org',name:'Chemia organiczna'},
  {id:'lab',name:'Bezpieczeństwo w pracowni'},
  {id:'oblicz',name:'Obliczenia'},
];
// Q(kategoria, poziom 1-3, pytanie, [poprawna, błędne...], tylkoTechnikum)
QUIZ=[];
function Q(c,lv,q,a,t){QUIZ.push({c,lv,q,a,t:!!t,key:'q'+QUIZ.length})}
// --- układ okresowy
Q('uklad',1,'Symbol sodu to:',['Na','So','S','N']);
Q('uklad',1,'Symbol potasu to:',['K','P','Po','Pt']);
Q('uklad',1,'Symbol srebra to:',['Ag','Sr','Si','Au']);
Q('uklad',1,'Symbol złota to:',['Au','Zl','Ag','Go']);
Q('uklad',1,'Pierwiastek o symbolu Pb to:',['ołów','platyna','fosfor','pallad']);
Q('uklad',1,'Pierwiastek o symbolu Hg to:',['rtęć','wodór','hel','hafn']);
Q('uklad',1,'Ile protonów ma atom węgla (Z = 6)?',['6','12','4','14']);
Q('uklad',1,'Gazy szlachetne leżą w grupie:',['18','1','2','17']);
Q('uklad',1,'Najlżejszy pierwiastek to:',['wodór','hel','lit','tlen']);
Q('uklad',2,'Ile neutronów ma atom ^{23}Na (Z = 11)?',['12','11','23','34']);
Q('uklad',2,'Ile elektronów walencyjnych ma atom chloru?',['7','17','1','5']);
Q('uklad',2,'Izotopy jednego pierwiastka różnią się liczbą:',['neutronów','protonów','elektronów','powłok']);
Q('uklad',2,'Konfiguracja elektronowa magnezu (Z = 12):',['1s^{2} 2s^{2} 2p^{6} 3s^{2}','1s^{2} 2s^{2} 2p^{6} 3s^{1}','1s^{2} 2s^{2} 2p^{8}','1s^{2} 2s^{2} 2p^{6} 3p^{2}']);
Q('uklad',2,'Najbardziej elektroujemny pierwiastek to:',['fluor','tlen','chlor','cez']);
Q('uklad',2,'Atom glinu tworzy jon:',['Al^{3+}','Al^{3-}','Al^{2+}','Al^{+}']);
Q('uklad',3,'Okres półtrwania izotopu to 8 dni. Ile z 80 g zostanie po 24 dniach?',['10 g','20 g','40 g','0 g']);
Q('uklad',3,'Poboczna liczba kwantowa l = 1 oznacza orbital typu:',['p','s','d','f']);
Q('uklad',3,'Ile elektronów maksymalnie mieści podpowłoka d?',['10','6','14','18']);
Q('uklad',3,'Przemiana α zmniejsza liczbę masową jądra o:',['4','2','1','0']);
Q('uklad',3,'Która para drobin jest izoelektronowa?',['Na^{+} i F^{-}','Na^{+} i Cl^{-}','K^{+} i F^{-}','Mg^{2+} i S^{2-}']);
// --- wzory
Q('wzory',1,'Wzór wody to:',['H2O','HO2','H2O2','OH']);
Q('wzory',1,'Wzór tlenku węgla(IV):',['CO2','CO','C2O','CO4']);
Q('wzory',1,'NaCl to:',['chlorek sodu','siarczek sodu','chloran sodu','wodorotlenek sodu']);
Q('wzory',1,'Wzór kwasu siarkowego(VI):',['H2SO4','H2SO3','H2S','HSO4']);
Q('wzory',1,'Wzór wodorotlenku wapnia:',['Ca(OH)2','CaOH','CaO','Ca(OH)3']);
Q('wzory',1,'CaCO3 to:',['węglan wapnia','tlenek wapnia','węglik wapnia','węglan potasu']);
Q('wzory',2,'Wartościowość żelaza w Fe2O3:',['III','II','VI','I']);
Q('wzory',2,'KNO3 to:',['azotan(V) potasu','azotan(III) potasu','azotek potasu','węglan potasu']);
Q('wzory',2,'Wzór siarczanu(VI) glinu:',['Al2(SO4)3','Al3(SO4)2','AlSO4','Al2SO3']);
Q('wzory',2,'Na2SO3 to:',['siarczan(IV) sodu','siarczan(VI) sodu','siarczek sodu','tiosiarczan sodu']);
Q('wzory',3,'Stopień utlenienia manganu w KMnO4:',['+VII','+II','+IV','+VI']);
Q('wzory',3,'Stopień utlenienia chromu w K2Cr2O7:',['+VI','+III','+VII','+II']);
Q('wzory',3,'Stopień utlenienia siarki w H2S:',['−II','+II','+IV','+VI']);
Q('wzory',3,'NaHCO3 to:',['wodorowęglan sodu','węglan sodu','wodorotlenek sodu','węglik sodu']);
// --- reakcje
Q('reakcje',1,'Produktem spalania wodoru jest:',['woda','tlen','metan','tlenek węgla(IV)']);
Q('reakcje',1,'Do rdzewienia żelaza potrzebne są:',['tlen i woda','azot i wodór','sam azot','hel i woda']);
Q('reakcje',1,'Reakcja A + B → AB to reakcja:',['syntezy','analizy','wymiany','zobojętniania']);
Q('reakcje',1,'Reakcja 2H2O → 2H2 + O2 to:',['analiza (rozkład)','synteza','wymiana pojedyncza','zobojętnianie']);
Q('reakcje',2,'Kwas + zasada → sól + woda. To reakcja:',['zobojętniania','hydrolizy','estryfikacji','polimeryzacji']);
Q('reakcje',2,'Katalizator:',['przyspiesza reakcję i się nie zużywa','zużywa się w reakcji','zmienia produkty reakcji','zawsze spowalnia reakcję']);
Q('reakcje',2,'Produkty reakcji Zn + HCl to:',['ZnCl2 i H2','ZnCl i H2O','ZnH2 i Cl2','ZnO i HCl']);
Q('reakcje',2,'Po zmieszaniu AgNO3 i NaCl strąca się osad:',['AgCl','NaNO3','NaCl','AgNO3']);
Q('reakcje',3,'W ogniwie Daniella anodą jest:',['cynk','miedź','mostek elektrolityczny','platyna']);
Q('reakcje',3,'Ogrzanie układu z reakcją egzotermiczną przesuwa równowagę w stronę:',['substratów','produktów','nie przesuwa jej','zależy od katalizatora']);
Q('reakcje',3,'W reakcji Zn + Cu^{2+} → Zn^{2+} + Cu utleniaczem jest:',['Cu^{2+}','Zn','Zn^{2+}','Cu']);
Q('reakcje',3,'Równanie kinetyczne v = k[A]^{2} opisuje reakcję rzędu:',['drugiego','pierwszego','zerowego','trzeciego']);
Q('reakcje',3,'Metodą Habera i Boscha produkuje się:',['amoniak','kwas siarkowy(VI)','metanol','chlor'],1);
Q('reakcje',3,'Metoda kontaktowa służy do produkcji:',['kwasu siarkowego(VI)','kwasu azotowego(V)','amoniaku','sody'],1);
Q('reakcje',3,'Podczas elektrolizy stężonego wodnego roztworu NaCl na anodzie wydziela się:',['chlor','sód','wodór','azot'],1);
// --- pH
Q('ph',1,'Odczyn obojętny ma pH równe:',['7','0','14','1']);
Q('ph',1,'Fenoloftaleina w zasadzie barwi się na kolor:',['malinowy','niebieski','żółty','zielony']);
Q('ph',1,'Lakmus w kwasie barwi się na kolor:',['czerwony','niebieski','zielony','pomarańczowy']);
Q('ph',1,'Kwasy w roztworze wodnym odszczepiają jony:',['H^{+}','OH^{-}','Na^{+}','Cl^{-}']);
Q('ph',2,'pH roztworu, w którym [H^{+}] = 10^{-5} mol/dm^{3}:',['5','9','−5','10']);
Q('ph',2,'Roztwór o pH 3 ma ile razy więcej jonów H^{+} niż roztwór o pH 5?',['100','2','10','1000']);
Q('ph',2,'Wodny roztwór Na2CO3 ma odczyn:',['zasadowy','kwasowy','obojętny','zależny od koloru']);
Q('ph',2,'Wodny roztwór NH4Cl ma odczyn:',['kwasowy','zasadowy','obojętny','zależny od koloru']);
Q('ph',3,'pH roztworu NaOH o stężeniu 0,01 mol/dm^{3}:',['12','2','10','13']);
Q('ph',3,'Zasadą sprzężoną z H2SO4 (wg Brønsteda) jest:',['HSO4^{-}','SO4^{2-}','H3SO4^{+}','OH^{-}']);
Q('ph',3,'Bufor octanowy to mieszanina:',['CH3COOH i CH3COONa','HCl i NaCl','NaOH i NaCl','CH3COOH i HCl']);
Q('ph',3,'pOH roztworu o pH 4 wynosi:',['10','4','14','7']);
Q('ph',3,'Punkt końcowy miareczkowania HCl roztworem NaOH wyznacza:',['wskaźnik, np. fenoloftaleina','termometr','waga analityczna','palnik'],1);
// --- organiczna
Q('org',1,'Główny składnik gazu ziemnego to:',['metan','etan','propan','butan']);
Q('org',1,'Wzór metanu to:',['CH4','CH3','C2H6','CH2']);
Q('org',1,'Etanol to inaczej:',['alkohol etylowy','ocet','aceton','gliceryna']);
Q('org',1,'Kwas octowy to inaczej kwas:',['etanowy','metanowy','propanowy','butanowy']);
Q('org',2,'Wzór ogólny alkanów:',['C_{n}H_{2n+2}','C_{n}H_{2n}','C_{n}H_{2n−2}','C_{n}H_{n}']);
Q('org',2,'Eten odbarwia wodę bromową, bo:',['ma wiązanie podwójne','jest alkanem','zawiera tlen','jest gazem']);
Q('org',2,'Grupa funkcyjna alkoholi to:',['−OH','−COOH','−CHO','−NH2']);
Q('org',2,'Grupa karboksylowa to:',['−COOH','−OH','−CHO','−NH2']);
Q('org',2,'Kwas karboksylowy + alkohol daje:',['ester','eter','aldehyd','keton']);
Q('org',2,'Destylacja frakcyjna ropy naftowej rozdziela składniki według:',['temperatury wrzenia','barwy','gęstości','zapachu']);
Q('org',3,'But-1-en i but-2-en to izomery:',['położenia wiązania podwójnego','optyczne','funkcyjne','łańcuchowe']);
Q('org',3,'Próba Tollensa wykrywa grupę:',['aldehydową','ketonową','hydroksylową','aminową']);
Q('org',3,'Bromowanie benzenu (katalizator FeBr3) to reakcja:',['substytucji','addycji','eliminacji','polimeryzacji']);
Q('org',3,'Aminokwasy w białkach łączy wiązanie:',['peptydowe','glikozydowe','estrowe','wodorowe']);
Q('org',3,'Nazwa związku CH3–CH(CH3)–CH3:',['2-metylopropan','butan','1-metylopropan','propan']);
Q('org',3,'Polietylen powstaje w reakcji:',['polimeryzacji','polikondensacji','estryfikacji','hydrolizy']);
Q('org',3,'Kraking służy do:',['rozkładu długich węglowodorów na krótsze','łączenia gazów w ciecze','usuwania wody z ropy','barwienia benzyny'],1);
// --- laboratorium
Q('lab',1,'Jak rozcieńczyć stężony kwas?',['wlewać kwas do wody','wlewać wodę do kwasu','wlać oba naraz','kwasu się nie rozcieńcza']);
Q('lab',1,'Skórę oblaną kwasem najpierw:',['spłukujemy dużą ilością wody','zasypujemy solą','smarujemy masłem','zobojętniamy stężoną zasadą']);
Q('lab',1,'Jak bezpiecznie powąchać substancję?',['nakierować opary dłonią','wąchać prosto z naczynia','spróbować językiem','wsadzić nos do probówki']);
Q('lab',1,'Piktogram z płomieniem oznacza substancję:',['łatwopalną','żrącą','wybuchową','groźną dla środowiska']);
Q('lab',1,'Ciecz do pipety zasysamy:',['gruszką lub pipetorem','ustami','słomką','nie zasysamy, tylko wlewamy']);
Q('lab',2,'Piktogram z trupią czaszką oznacza:',['toksyczność ostrą','substancję żrącą','gaz pod ciśnieniem','substancję utleniającą']);
Q('lab',2,'Z lotnymi, trującymi substancjami pracujemy:',['pod wyciągiem','przy otwartym oknie','na korytarzu','w szafce']);
Q('lab',2,'Ogrzewając ciecz w probówce, wylot kierujemy:',['od siebie i od innych','do siebie','w stronę sąsiada','prosto w płomień']);
Q('lab',2,'Stłuczony termometr z rtęcią:',['zgłaszamy nauczycielowi','odkurzamy odkurzaczem','zamiatamy miotłą','zostawiamy na ławce']);
Q('lab',3,'Karta charakterystyki substancji zawiera m.in.:',['zagrożenia i pierwszą pomoc','cenę hurtową','datę odkrycia','przepis kulinarny'],1);
Q('lab',3,'Pożar urządzenia pod napięciem gasimy gaśnicą:',['śniegową (CO2) lub proszkową','wodną','pianową','gasimy wiadrem wody'],1);
Q('lab',3,'Zwroty H na etykiecie dotyczą:',['zagrożeń','środków ostrożności','składu','producenta'],1);
Q('lab',3,'Do odmierzania objętości titranta podczas miareczkowania służy:',['biureta','zlewka','kolba stożkowa','lejek'],1);
// --- obliczenia
Q('oblicz',1,'10 g soli rozpuszczono w 90 g wody. Stężenie procentowe:',['10%','11%','9%','90%']);
Q('oblicz',1,'Masa 20 g, objętość 10 cm^{3}. Gęstość:',['2 g/cm^{3}','0,5 g/cm^{3}','200 g/cm^{3}','30 g/cm^{3}']);
Q('oblicz',2,'Ile moli to 36 g wody?',['2','1','3','0,5']);
Q('oblicz',2,'Objętość 1 mola gazu w warunkach normalnych:',['22,4 dm^{3}','1 dm^{3}','11,2 dm^{3}','2,24 dm^{3}']);
Q('oblicz',2,'0,5 mola NaOH w 250 cm^{3} roztworu. Stężenie molowe:',['2 mol/dm^{3}','0,5 mol/dm^{3}','0,125 mol/dm^{3}','1 mol/dm^{3}']);
Q('oblicz',3,'Ile gramów NaOH zawiera 200 cm^{3} roztworu 0,5 mol/dm^{3}?',['4 g','10 g','2 g','40 g']);
Q('oblicz',3,'Z 2 moli H2 i nadmiaru tlenu powstaje wody:',['36 g','18 g','72 g','2 g']);
Q('oblicz',3,'Teoretycznie 50 g produktu, otrzymano 40 g. Wydajność:',['80%','125%','40%','90%'],1);
// --- dodatkowe pytania
Q('uklad',1,'Symbol żelaza to:',['Fe','Ż','Ze','F']);
Q('uklad',1,'Symbol miedzi to:',['Cu','Mi','Md','C']);
Q('uklad',1,'Symbol wapnia to:',['Ca','W','Wa','C']);
Q('uklad',1,'Ile powłok elektronowych ma atom sodu?',['3','1','2','11']);
Q('uklad',1,'Liczba atomowa Z to liczba:',['protonów w jądrze','neutronów','nukleonów','powłok']);
Q('uklad',1,'Okres w układzie okresowym to:',['poziomy wiersz','pionowa kolumna','blok d','grupa gazów']);
Q('uklad',1,'Którego gazu jest najwięcej w powietrzu?',['azotu','tlenu','tlenku węgla(IV)','argonu']);
Q('uklad',2,'Ile nukleonów ma atom ^{35}Cl?',['35','17','18','52']);
Q('uklad',2,'W grupie, idąc w dół, charakter metaliczny:',['rośnie','maleje','nie zmienia się','zanika']);
Q('uklad',2,'W cząsteczce N2 występuje wiązanie:',['potrójne','pojedyncze','podwójne','jonowe']);
Q('uklad',2,'Kation to jon o ładunku:',['dodatnim','ujemnym','zerowym','zmiennym']);
Q('uklad',3,'Hybrydyzacja atomu węgla w metanie to:',['sp^{3}','sp','sp^{2}','brak hybrydyzacji']);
Q('uklad',3,'Kształt cząsteczki CO2 jest:',['liniowy','kątowy','tetraedryczny','piramidalny']);
Q('uklad',3,'Wiązania wodorowe tłumaczą wysoką temperaturę wrzenia:',['wody','metanu','helu','tlenku węgla(IV)']);
Q('uklad',3,'Magnetyczna spinowa liczba kwantowa m_{s} przyjmuje wartości:',['+½ i −½','0 i 1','1, 2, 3','od −l do +l']);
Q('wzory',1,'Wzór amoniaku to:',['NH3','NH4','NH2','N2H']);
Q('wzory',1,'Wzór tlenku żelaza(III):',['Fe2O3','FeO','Fe3O2','FeO3']);
Q('wzory',1,'Wzór chlorku magnezu:',['MgCl2','MgCl','Mg2Cl','MgCl3']);
Q('wzory',1,'Wzór kwasu azotowego(V):',['HNO3','HNO2','H2NO3','NH3']);
Q('wzory',2,'Wzór fosforanu(V) wapnia:',['Ca3(PO4)2','Ca2(PO4)3','CaPO4','Ca3PO4']);
Q('wzory',2,'Fe(OH)3 to:',['wodorotlenek żelaza(III)','wodorotlenek żelaza(II)','tlenek żelaza(III)','węglan żelaza']);
Q('wzory',2,'Który tlenek jest zasadowy?',['Na2O','SO2','CO2','P4O10']);
Q('wzory',2,'Wzór siarczku sodu:',['Na2S','NaS','Na2SO4','NaS2']);
Q('wzory',3,'CuSO4·5H2O to:',['pentahydrat siarczanu(VI) miedzi(II)','siarczan(IV) miedzi(I)','wodorosiarczan miedzi','tlenek miedzi z wodą']);
Q('wzory',3,'Stopień utlenienia chloru w HClO4:',['+VII','+I','+V','−I']);
Q('wzory',3,'Tlenek amfoteryczny to:',['ZnO','Na2O','CaO','SO3']);
Q('wzory',3,'K2Cr2O7 to:',['dichromian(VI) potasu','chromian(VI) potasu','chromian(III) potasu','manganian(VII) potasu']);
Q('reakcje',1,'Spalanie to reakcja substancji z:',['tlenem','azotem','wodorem','helem']);
Q('reakcje',1,'Produkty całkowitego spalania metanu:',['CO2 i H2O','CO i H2','C i H2O','CH3 i O2']);
Q('reakcje',1,'Wapno gaszone to:',['Ca(OH)2','CaO','CaCO3','CaSO4']);
Q('reakcje',1,'W fotosyntezie roślina wytwarza:',['glukozę i tlen','CO2 i wodę','metan','azot']);
Q('reakcje',2,'Mg + 2HCl → MgCl2 + H2 to reakcja:',['wymiany pojedynczej','syntezy','analizy','wymiany podwójnej']);
Q('reakcje',2,'Wzrost temperatury zwykle szybkość reakcji:',['zwiększa','zmniejsza','nie zmienia','zatrzymuje']);
Q('reakcje',2,'Który metal NIE wypiera wodoru z kwasu solnego?',['Cu','Zn','Mg','Fe']);
Q('reakcje',2,'Woda wapienna mętnieje w obecności:',['CO2','O2','N2','H2']);
Q('reakcje',3,'Dla 2NO2 ⇌ N2O4 wzrost ciśnienia przesuwa równowagę w stronę:',['N2O4','NO2','nie przesuwa jej','zależy od katalizatora']);
Q('reakcje',3,'Energia aktywacji to:',['minimalna energia potrzebna do zajścia reakcji','ciepło reakcji','energia produktów','energia jonizacji']);
Q('reakcje',3,'Żelazo koroduje szybciej w kontakcie z:',['miedzią','cynkiem','magnezem','glinem']);
Q('reakcje',3,'Podczas elektrolizy stopionego NaCl na katodzie powstaje:',['sód','chlor','wodór','tlen']);
Q('ph',1,'Wodorotlenki w wodzie odszczepiają jony:',['OH^{-}','H^{+}','Cl^{-}','O^{2-}']);
Q('ph',1,'Jaki kwas jest w soku żołądkowym?',['solny','octowy','cytrynowy','siarkowy(VI)']);
Q('ph',1,'Roztwór mydła ma odczyn:',['zasadowy','kwasowy','obojętny','nie ma odczynu']);
Q('ph',1,'Jaki kwas jest w occie?',['octowy','mlekowy','cytrynowy','solny']);
Q('ph',2,'H2SO4 w wodzie dysocjuje na jony:',['2H^{+} i SO4^{2-}','H^{+} i SO4^{-}','H2^{+} i SO4^{2-}','2H^{+} i SO3^{2-}']);
Q('ph',2,'Kwaśne deszcze powodują głównie:',['SO2 i tlenki azotu','argon i hel','metan','tlen']);
Q('ph',2,'Ile moli NaOH zobojętni 1 mol H2SO4?',['2','1','0,5','3']);
Q('ph',2,'Wywar z czerwonej kapusty w kwasie ma barwę:',['czerwoną','zieloną','żółtą','niebieską']);
Q('ph',3,'Większa stała dysocjacji K_{a} oznacza kwas:',['mocniejszy','słabszy','obojętny','amfoteryczny']);
Q('ph',3,'Iloczyn jonowy wody w 25°C wynosi:',['10^{-14}','10^{-7}','10^{14}','1']);
Q('ph',3,'Roztwór CH3COONa ma odczyn:',['zasadowy','kwasowy','obojętny','zależny od światła']);
Q('ph',3,'Wg Brønsteda NH3 w reakcji z wodą jest:',['zasadą','kwasem','solą','buforem']);
Q('org',1,'Wzór etanolu to:',['C2H5OH','CH3OH','C2H6','CH3COOH']);
Q('org',1,'Mydło otrzymuje się z tłuszczu i:',['NaOH','HCl','cukru','octu']);
Q('org',1,'Glicerol to alkohol:',['trzywodorotlenowy','jednowodorotlenowy','dwuwodorotlenowy','nienasycony']);
Q('org',1,'Białka zbudowane są z:',['aminokwasów','glukozy','kwasów tłuszczowych','gliceryny']);
Q('org',1,'Skrobia to:',['cukier złożony (polisacharyd)','białko','tłuszcz','kwas']);
Q('org',2,'Wzór kwasu metanowego (mrówkowego):',['HCOOH','CH3COOH','HCHO','CH3OH']);
Q('org',2,'Etyn to inaczej:',['acetylen','etylen','etan','eter']);
Q('org',2,'Reakcja eten + H2 → etan to:',['addycja','substytucja','eliminacja','kondensacja']);
Q('org',2,'Tłuszcze to estry glicerolu i:',['wyższych kwasów tłuszczowych','etanolu','glukozy','aminokwasów']);
Q('org',3,'Izomerem etanolu jest:',['eter dimetylowy','metanol','etanal','kwas etanowy']);
Q('org',3,'Asymetryczny (chiralny) atom węgla ma:',['4 różne podstawniki','wiązanie podwójne','2 atomy wodoru','grupę OH']);
Q('org',3,'Sacharoza zbudowana jest z:',['glukozy i fruktozy','2 cząsteczek glukozy','glukozy i galaktozy','skrobi']);
Q('org',3,'Reakcja biuretowa wykrywa:',['wiązania peptydowe','skrobię','tłuszcze','glukozę']);
Q('org',3,'Utlenienie aldehydu daje:',['kwas karboksylowy','alkohol','alkan','eter']);
Q('org',3,'Reakcja ksantoproteinowa barwi białka na kolor:',['żółty','fioletowy','niebieski','czerwony']);
Q('lab',1,'Palącą się ciecz w zlewce gasimy, gdy:',['przykryjemy zlewkę','dmuchamy','mieszamy bagietką','dolewamy alkoholu']);
Q('lab',1,'Oczy w pracowni chronią:',['okulary ochronne','rękawiczki','fartuch','czapka']);
Q('lab',1,'Probówkę ogrzewamy, trzymając ją:',['w drewnianym uchwycie','w dłoni','w zębach','w kieszeni fartucha']);
Q('lab',1,'Resztki odczynników:',['oddajemy do pojemnika wskazanego przez nauczyciela','wlewamy z powrotem do butelki','wylewamy wszystkie do zlewu','zabieramy do domu']);
Q('lab',2,'Piktogram z wykrzyknikiem oznacza:',['działanie drażniące, szkodliwe','substancję wybuchową','gaz pod ciśnieniem','zagrożenie dla środowiska']);
Q('lab',2,'Piktogram z ręką, na którą kapie ciecz, oznacza:',['substancję żrącą','łatwopalną','utleniającą','toksyczną']);
Q('lab',2,'Gdy zapali się ubranie, należy:',['zarzucić koc gaśniczy','biegać','dmuchać','polać alkoholem']);
Q('lab',3,'Kolba miarowa służy do:',['sporządzania roztworów o dokładnej objętości','ogrzewania cieczy','sączenia','ważenia'],1);
Q('lab',3,'Do szybkiego sączenia pod zmniejszonym ciśnieniem używa się lejka:',['Büchnera','rozdzielacza','zwykłego szklanego','plastikowego kuchennego'],1);
Q('lab',3,'Do rozdzielania dwóch niemieszających się cieczy służy:',['rozdzielacz','biureta','eksykator','moździerz'],1);
Q('oblicz',1,'Masa cząsteczkowa O2 wynosi:',['32 u','16 u','8 u','64 u']);
Q('oblicz',1,'W 200 g roztworu 5% jest substancji:',['10 g','5 g','20 g','40 g']);
Q('oblicz',1,'Stosunek masowy wodoru do tlenu w wodzie:',['1 : 8','2 : 1','1 : 16','1 : 2']);
Q('oblicz',2,'Ile drobin zawiera 1 mol?',['6,02·10^{23}','6,02·10^{22}','22,4','10^{23}']);
Q('oblicz',2,'Ile dm^{3} (warunki normalne) zajmują 2 mole O2?',['44,8','22,4','11,2','32']);
Q('oblicz',2,'Zawartość procentowa (masowa) tlenu w wodzie to ok.:',['89%','33%','50%','11%']);
Q('oblicz',3,'Ile moli NaOH zobojętni 0,2 mola H2SO4?',['0,4','0,2','0,1','0,8']);
Q('oblicz',3,'100 cm^{3} roztworu 2 mol/dm^{3} rozcieńczono do 500 cm^{3}. Nowe stężenie:',['0,4 mol/dm^{3}','1 mol/dm^{3}','0,2 mol/dm^{3}','10 mol/dm^{3}']);
Q('oblicz',3,'Ile gramów miedzi otrzymamy z 80 g CuO w reakcji z wodorem?',['64 g','80 g','16 g','32 g']);

// T(kategoria, poziom, zdanie, prawda?, wyjaśnienie)
TF=[];
function T(c,lv,s,v,why){TF.push({c,lv,s,v,why,key:'t'+TF.length})}
T('reakcje',1,'Pod ciśnieniem 1013 hPa woda wrze w 100°C.',true);
T('uklad',1,'Tlen jest metalem.',false,'Tlen jest niemetalem.');
T('wzory',1,'Powietrze to mieszanina gazów.',true);
T('uklad',1,'Rtęć w temperaturze pokojowej jest cieczą.',true);
T('uklad',1,'Diament i grafit to odmiany alotropowe węgla.',true);
T('uklad',1,'Hel jest cięższy od powietrza.',false,'Hel jest lżejszy, dlatego balony z helem unoszą się.');
T('ph',1,'Ocet ma odczyn zasadowy.',false,'Ocet ma odczyn kwasowy.');
T('wzory',1,'Cząsteczka wody ma 2 atomy wodoru i 1 atom tlenu.',true);
T('lab',1,'W pracowni chemicznej można jeść, jeśli uważamy.',false,'W pracowni nigdy nie jemy i nie pijemy.');
T('wzory',1,'Sól kuchenna to chlorek sodu.',true);
T('org',1,'Metan to główny składnik gazu ziemnego.',true);
T('ph',1,'Lakmus w zasadzie barwi się na czerwono.',false,'W zasadzie lakmus jest niebieski, w kwasie czerwony.');
T('uklad',2,'Izotopy mają tę samą liczbę protonów.',true);
T('reakcje',2,'Katalizator zużywa się w reakcji.',false,'Katalizator nie zużywa się w reakcji.');
T('org',2,'Alkeny mają wiązanie podwójne C=C.',true);
T('ph',2,'Roztwór o pH 9 ma odczyn kwasowy.',false,'pH 9 to odczyn zasadowy.');
T('reakcje',2,'W wiązaniu jonowym elektrony przechodzą od jednego atomu do drugiego.',true);
T('oblicz',2,'Masa molowa CO2 wynosi 44 g/mol.',true);
T('wzory',2,'Stały NaCl dobrze przewodzi prąd.',false,'Przewodzi dopiero stopiony lub rozpuszczony, gdy jony mogą się poruszać.');
T('org',2,'Etanol jest zasadą, bo ma grupę OH.',false,'Grupa OH w alkoholu nie odszczepia się jako jon OH^{-}.');
T('uklad',2,'Gazy szlachetne (poza helem) mają 8 elektronów walencyjnych.',true);
T('reakcje',3,'W reakcji redoks zmieniają się stopnie utlenienia.',true);
T('reakcje',3,'Katalizator zmienia wartość stałej równowagi.',false,'Katalizator tylko szybciej doprowadza do równowagi.');
T('org',3,'Glukoza daje pozytywną próbę Trommera.',true);
T('org',3,'Benzen łatwo ulega addycji, tak jak alkeny.',false,'Benzen ulega głównie substytucji.');
T('ph',3,'Kwas octowy jest mocnym elektrolitem.',false,'To słaby elektrolit, dysocjuje w niewielkim stopniu.');
T('reakcje',3,'W ogniwie galwanicznym na katodzie zachodzi redukcja.',true);
T('reakcje',3,'Dla reakcji egzotermicznej ΔH < 0.',true);
T('reakcje',3,'Entropia gazu jest zwykle mniejsza niż ciała stałego.',false,'Gazy mają zwykle znacznie większą entropię.');
T('lab',2,'Kwasu nie wlewa się do wody, tylko wodę do kwasu.',false,'Odwrotnie: zawsze kwas do wody.');
T('lab',3,'Zwroty P na etykiecie opisują środki ostrożności.',true,null);
TF[TF.length-1].t=true;
T('uklad',1,'Wodór jest najlżejszym pierwiastkiem.',true);
T('uklad',1,'Złoto jest metalem szlachetnym.',true);
T('wzory',1,'Woda morska jest substancją czystą.',false,'To mieszanina wody i wielu soli.');
T('wzory',1,'Lód ma mniejszą gęstość niż ciekła woda.',true);
T('ph',1,'Fenoloftaleina w kwasie barwi się na malinowo.',false,'W kwasie fenoloftaleina jest bezbarwna.');
T('reakcje',1,'Rdzewienie żelaza to zjawisko fizyczne.',false,'To reakcja chemiczna: powstaje nowa substancja.');
T('lab',1,'Tlenek węgla(II), czyli czad, jest bezwonny i trujący.',true);
T('uklad',1,'Siarka jest metalem.',false,'Siarka jest niemetalem.');
T('org',1,'Etanol jest palny.',true);
T('reakcje',1,'Podczas reakcji chemicznej powstają nowe substancje.',true);
T('wzory',2,'Wszystkie sole dobrze rozpuszczają się w wodzie.',false,'Np. CaCO3 i AgCl są praktycznie nierozpuszczalne.');
T('reakcje',2,'Metale alkaliczne reagują z wodą, tworząc wodorotlenek i wodór.',true);
T('oblicz',2,'1 mol to 6,02·10^{23} drobin.',true);
T('uklad',2,'Diament dobrze przewodzi prąd elektryczny.',false,'Prąd przewodzi grafit, a diament nie.');
T('ph',2,'Stężony kwas siarkowy(VI) jest higroskopijny.',true);
T('org',2,'Alkany łatwo ulegają reakcji addycji.',false,'Alkany ulegają głównie substytucji.');
T('wzory',2,'Rozpuszczalność gazów w wodzie rośnie ze wzrostem temperatury.',false,'Maleje, dlatego ciepła cola szybciej się wygazowuje.');
T('reakcje',2,'Glin pokrywa się warstewką tlenku, która chroni go przed korozją.',true);
T('uklad',3,'W grupie elektroujemność rośnie w dół.',false,'W grupie elektroujemność maleje w dół.');
T('uklad',3,'Wiązanie π powstaje przez boczne nakładanie się orbitali p.',true);
T('ph',3,'Bufor utrzymuje prawie stałe pH po dodaniu niewielkiej ilości kwasu lub zasady.',true);
T('org',3,'Skrobia z jodem daje granatowe zabarwienie.',true);
T('org',3,'Fruktoza jest aldozą.',false,'Fruktoza jest ketozą, a glukoza aldozą.');
T('reakcje',3,'Szybkość reakcji nie zależy od stężenia substratów.',false,'Zwykle rośnie ze wzrostem stężenia.');

// Złap! zestawy
CATCH=[
  {c:'uklad',lv:1,label:'metale',yes:['Fe','Cu','Na','Al','Zn','Mg','Ag','K','Ca'],no:['O','S','C','N','Cl','P','He','Ne']},
  {c:'uklad',lv:1,label:'gazy szlachetne',yes:['He','Ne','Ar','Kr','Xe'],no:['H','O','N','Cl','F','Na']},
  {c:'uklad',lv:1,label:'fluorowce (halogeny)',yes:['F','Cl','Br','I'],no:['O','N','Na','He','S','K']},
  {c:'ph',lv:1,label:'kwasy',yes:['HCl','H2SO4','HNO3','H3PO4','H2CO3','H2S'],no:['NaOH','KOH','Ca(OH)2','NaCl','H2O','CH4']},
  {c:'ph',lv:1,label:'wodorotlenki',yes:['NaOH','KOH','Ca(OH)2','Ba(OH)2','LiOH'],no:['HCl','HNO3','NaCl','CO2','H2SO4']},
  {c:'wzory',lv:1,label:'sole',yes:['NaCl','KNO3','CaCO3','CuSO4','Na2SO4','K2CO3'],no:['HCl','NaOH','H2O','CO2','KOH']},
  {c:'org',lv:2,label:'węglowodory',yes:['CH4','C2H6','C2H4','C2H2','C3H8','C6H6'],no:['CH3OH','C2H5OH','CH3COOH','HCOOH','NaCl']},
  {c:'org',lv:2,label:'alkeny',yes:['C2H4','C3H6','C4H8'],no:['CH4','C2H6','C2H2','C3H8','C4H10']},
  {c:'org',lv:2,label:'alkohole',yes:['CH3OH','C2H5OH','C3H7OH','C3H5(OH)3'],no:['CH3COOH','CH4','HCHO','CH3COCH3','C6H6']},
  {c:'wzory',lv:2,label:'tlenki kwasowe',yes:['CO2','SO2','SO3','P4O10','N2O5'],no:['Na2O','CaO','K2O','MgO','BaO']},
  {c:'ph',lv:3,label:'mocne elektrolity',yes:['HCl','NaOH','KNO3','H2SO4','NaCl'],no:['CH3COOH','NH3','C6H12O6','C2H5OH','H2CO3']},
  {c:'uklad',lv:3,label:'pierwiastki bloku d',yes:['Fe','Cu','Zn','Cr','Mn','Ni','Co','Ti'],no:['Na','Ca','Al','S','Cl','Ba']},
];
// Posortuj! zestawy
SORT=[
  {c:'ph',lv:1,a:'Kwas',b:'Wodorotlenek',A:['HCl','H2SO4','HNO3','H3PO4','H2CO3'],B:['NaOH','KOH','Ca(OH)2','Mg(OH)2','LiOH']},
  {c:'reakcje',lv:1,a:'Zjawisko fizyczne',b:'Reakcja chemiczna',A:['topnienie lodu','parowanie wody','rozpuszczanie cukru','kruszenie kredy','mielenie kawy','sublimacja jodu'],B:['rdzewienie żelaza','spalanie drewna','kwaśnienie mleka','pieczenie ciasta','gaszenie wapna','fotosynteza']},
  {c:'wzory',lv:1,a:'Mieszanina jednorodna',b:'Mieszanina niejednorodna',A:['woda z solą','powietrze','ocet','mosiądz','herbata z cukrem'],B:['piasek z wodą','woda z olejem','granit','woda z kredą','sałatka owocowa']},
  {c:'lab',lv:1,a:'Bezpiecznie',b:'Niebezpiecznie',A:['okulary ochronne','kwas wlewany do wody','wąchanie „wachlowaniem”','praca pod wyciągiem','związane włosy'],B:['woda wlewana do kwasu','jedzenie w pracowni','pipetowanie ustami','wąchanie prosto z probówki','wylot probówki w stronę kolegi']},
  {c:'ph',lv:1,a:'Odczyn kwasowy',b:'Odczyn zasadowy',A:['ocet','sok z cytryny','cola','sok żołądkowy','kwas solny'],B:['roztwór mydła','woda wapienna','roztwór sody oczyszczonej','woda amoniakalna','środek do udrażniania rur']},
  {c:'reakcje',lv:2,a:'Egzotermiczny',b:'Endotermiczny',A:['spalanie metanu','gaszenie wapna','zobojętnianie HCl + NaOH','oddychanie komórkowe','reakcja termitowa'],B:['rozkład CaCO3','fotosynteza','elektroliza wody','rozpuszczanie NH4NO3 w wodzie','topnienie lodu']},
  {c:'uklad',lv:2,a:'Wiązanie jonowe',b:'Wiązanie kowalencyjne',A:['NaCl','KBr','CaO','MgF2','LiF'],B:['H2O','CH4','Cl2','NH3','CO2','HCl']},
  {c:'org',lv:2,a:'Nasycony',b:'Nienasycony',A:['CH4','C2H6','C3H8','C4H10','C5H12'],B:['C2H4','C2H2','C3H6','C4H6']},
  {c:'reakcje',lv:3,a:'Utlenianie',b:'Redukcja',A:['Fe^{2+} → Fe^{3+}','Zn → Zn^{2+}','2Cl^{-} → Cl2','Na → Na^{+}'],B:['Cu^{2+} → Cu','Cl2 → 2Cl^{-}','Fe^{3+} → Fe^{2+}','MnO4^{-} → Mn^{2+}']},
  {c:'ph',lv:3,a:'Mocny kwas',b:'Słaby kwas',A:['HCl','HNO3','H2SO4','HBr','HClO4'],B:['CH3COOH','H2CO3','H2S','HF','HCOOH']},
];
// pH: P(poziom, opis, min, max, tekst, tylkoTech)
PH=[];
function P(lv,label,min,max,txt,t){PH.push({c:'ph',lv,label,min,max,txt,t:!!t,key:'p'+PH.length})}
P(1,'ocet',2,3.5,'ok. 2,5–3');P(1,'sok z cytryny',1.5,3,'ok. 2–2,5');P(1,'cola',2,3.2,'ok. 2,5');
P(1,'sok żołądkowy',1,3,'ok. 1,5–2');P(1,'woda destylowana',6.5,7.5,'7');P(1,'krew',7,8,'7,35–7,45');
P(1,'mleko',6,7,'ok. 6,5–6,8');P(1,'roztwór mydła',8.5,10.5,'ok. 9–10');P(1,'roztwór sody oczyszczonej',7.8,9,'ok. 8,3');
P(1,'woda amoniakalna',10.5,12.5,'ok. 11–12');P(1,'woda wapienna',11.5,13,'ok. 12,4');
P(2,'[H^{+}] = 10^{-3} mol/dm^{3}',2.65,3.35,'3');P(2,'[H^{+}] = 10^{-9} mol/dm^{3}',8.65,9.35,'9');P(2,'[OH^{-}] = 10^{-2} mol/dm^{3}',11.65,12.35,'12');
P(3,'HCl 0,01 mol/dm^{3}',1.65,2.35,'2');P(3,'NaOH 0,001 mol/dm^{3}',10.65,11.35,'11');P(3,'HNO3 0,1 mol/dm^{3}',0.65,1.35,'1');P(3,'KOH 0,1 mol/dm^{3}',12.65,13.35,'13');
// Równania
EQ=[];
function E(lv,s,sol,t){const [l,r]=s.split(' = ');EQ.push({c:'reakcje',lv,l:l.split(' + '),r:r.split(' + '),sol:sol.split(' ').map(Number),t:!!t,key:'e'+EQ.length})}
E(1,'H2 + O2 = H2O','2 1 2');E(1,'Mg + O2 = MgO','2 1 2');E(1,'Na + Cl2 = NaCl','2 1 2');E(1,'H2 + Cl2 = HCl','1 1 2');
E(1,'N2 + H2 = NH3','1 3 2');E(1,'H2O2 = H2O + O2','2 2 1');
E(2,'CH4 + O2 = CO2 + H2O','1 2 1 2');E(2,'Al + O2 = Al2O3','4 3 2');E(2,'Zn + HCl = ZnCl2 + H2','1 2 1 1');
E(2,'NaOH + H2SO4 = Na2SO4 + H2O','2 1 1 2');E(2,'KClO3 = KCl + O2','2 2 3');E(2,'C2H4 + O2 = CO2 + H2O','1 3 2 2');
E(2,'Fe + Cl2 = FeCl3','2 3 2');E(2,'CaCO3 + HCl = CaCl2 + H2O + CO2','1 2 1 1 1');
E(3,'C3H8 + O2 = CO2 + H2O','1 5 3 4');E(3,'Fe + O2 = Fe2O3','4 3 2');E(3,'C2H6 + O2 = CO2 + H2O','2 7 4 6');
E(3,'Al + H2SO4 = Al2(SO4)3 + H2','2 3 1 3');E(3,'Cu + HNO3 = Cu(NO3)2 + NO + H2O','3 8 3 2 4');
E(3,'Fe2O3 + CO = Fe + CO2','1 3 2 3');E(3,'Ca(OH)2 + H3PO4 = Ca3(PO4)2 + H2O','3 2 1 6');
// Układ okresowy, okresy 1-4: [symbol, nazwa, okres, grupa]
ELS=[['H','wodór',1,1],['He','hel',1,18],['Li','lit',2,1],['Be','beryl',2,2],['B','bor',2,13],['C','węgiel',2,14],['N','azot',2,15],['O','tlen',2,16],['F','fluor',2,17],['Ne','neon',2,18],
['Na','sód',3,1],['Mg','magnez',3,2],['Al','glin',3,13],['Si','krzem',3,14],['P','fosfor',3,15],['S','siarka',3,16],['Cl','chlor',3,17],['Ar','argon',3,18],
['K','potas',4,1],['Ca','wapń',4,2],['Sc','skand',4,3],['Ti','tytan',4,4],['V','wanad',4,5],['Cr','chrom',4,6],['Mn','mangan',4,7],['Fe','żelazo',4,8],['Co','kobalt',4,9],['Ni','nikiel',4,10],['Cu','miedź',4,11],['Zn','cynk',4,12],['Ga','gal',4,13],['Ge','german',4,14],['As','arsen',4,15],['Se','selen',4,16],['Br','brom',4,17],['Kr','krypton',4,18]];
TBL=[];
function TB(lv,p,s){TBL.push({c:'uklad',lv,p,s,key:'b'+TBL.length})}
['O','Na','Fe','Ca','Cl','C','N','Cu','K','He','S','Mg','Al','Zn','H'].forEach(s=>{const e=ELS.find(x=>x[0]===s);TB(1,e[1],s)});
TB(2,'Z = 17','Cl');TB(2,'Z = 20','Ca');TB(2,'Z = 26','Fe');TB(2,'gaz szlachetny z 3. okresu','Ar');TB(2,'fluorowiec z 2. okresu','F');
TB(2,'litowiec z 4. okresu','K');TB(2,'konfiguracja 1s^{2} 2s^{2} 2p^{4}','O');TB(2,'grupa 2, okres 3','Mg');TB(2,'grupa 14, okres 3','Si');
TB(3,'[Ar] 3d^{5} 4s^{1}','Cr');TB(3,'[Ar] 3d^{10} 4s^{1}','Cu');TB(3,'[Ar] 3d^{6} 4s^{2}','Fe');TB(3,'pierwiastek najbardziej elektroujemny','F');
TB(3,'jego jon X^{3+} ma konfigurację neonu','Al');TB(3,'jego jon X^{2-} jest izoelektronowy z argonem','S');TB(3,'Z = 25','Mn');TB(3,'masa atomowa ok. 35,5 u','Cl');
// --- dodatkowe zestawy do istniejących mikrogier
CATCH.push(
  {c:'uklad',lv:1,label:'niemetale',yes:['O','N','C','S','P','Cl','H'],no:['Fe','Cu','Na','Al','Zn','Mg','K']},
  {c:'wzory',lv:1,label:'tlenki',yes:['CO2','H2O','CaO','SO2','Fe2O3','MgO','Al2O3'],no:['HCl','NaOH','NaCl','H2SO4','CH4','NH3']},
  {c:'wzory',lv:1,label:'gazy (w temp. pokojowej)',yes:['O2','N2','H2','He','CO2','Cl2'],no:['Hg','Br2','H2O','NaCl','S','Fe']},
  {c:'uklad',lv:2,label:'litowce',yes:['Li','Na','K','Rb','Cs'],no:['Mg','Ca','Be','Al','Ba','Fe']},
  {c:'reakcje',lv:2,label:'metale wypierające wodór z HCl',yes:['Zn','Mg','Fe','Al','Ca'],no:['Cu','Ag','Au','Hg','Pt']},
  {c:'org',lv:2,label:'cukry',yes:['glukoza','fruktoza','sacharoza','skrobia','celuloza','laktoza'],no:['glicyna','alanina','glicerol','etanol','kazeina']},
  {c:'lab',lv:1,label:'sprzęt szklany',yes:['zlewka','probówka','kolba','lejek','cylinder'],no:['palnik','statyw','łapa','trójnóg','szczypce']},
  {c:'org',lv:3,label:'aminokwasy',yes:['glicyna','alanina','cysteina','seryna','lizyna'],no:['glukoza','glicerol','benzen','etanal','aceton']},
);
SORT.push(
  {c:'uklad',lv:1,a:'Metal',b:'Niemetal',A:['Fe','Cu','Zn','Na','Ag','Al'],B:['O','S','C','N','P','I']},
  {c:'reakcje',lv:1,a:'Synteza',b:'Analiza',A:['2H2 + O2 → 2H2O','C + O2 → CO2','Fe + S → FeS','2Mg + O2 → 2MgO'],B:['2H2O → 2H2 + O2','CaCO3 → CaO + CO2','2HgO → 2Hg + O2','2KClO3 → 2KCl + 3O2']},
  {c:'wzory',lv:1,a:'Pierwiastek',b:'Związek chemiczny',A:['O2','Fe','N2','He','O3','Cu'],B:['H2O','CO2','NaCl','CH4','NH3','HCl']},
  {c:'org',lv:2,a:'Alkohol',b:'Kwas karboksylowy',A:['CH3OH','C2H5OH','C3H7OH','C3H5(OH)3'],B:['HCOOH','CH3COOH','C2H5COOH','C17H35COOH']},
  {c:'wzory',lv:2,a:'Tlenek kwasowy',b:'Tlenek zasadowy',A:['CO2','SO2','SO3','P4O10','N2O5'],B:['Na2O','CaO','K2O','MgO','Li2O']},
  {c:'wzory',lv:2,a:'Dobrze rozpuszczalna',b:'Trudno rozpuszczalna',A:['NaCl','KNO3','CuSO4','Na2CO3','NH4Cl'],B:['CaCO3','AgCl','BaSO4','Fe(OH)3','Mg(OH)2']},
  {c:'org',lv:3,a:'Cukier redukujący',b:'Cukier nieredukujący',A:['glukoza','fruktoza','maltoza','laktoza'],B:['sacharoza','skrobia','celuloza']},
  {c:'lab',lv:2,a:'Szkło miarowe',b:'Szkło niemiarowe',A:['biureta','pipeta','kolba miarowa','cylinder miarowy'],B:['zlewka','probówka','lejek','krystalizator']},
);
P(1,'sok pomarańczowy',3,4.5,'ok. 3,5');P(1,'kawa',4.5,5.5,'ok. 5');P(1,'czysta deszczówka',5,6.2,'ok. 5,6');
P(1,'woda morska',7.6,8.6,'ok. 8');P(1,'wybielacz chlorowy',11.5,13.5,'ok. 12,5');
P(2,'[OH^{-}] = 10^{-4} mol/dm^{3}',9.65,10.35,'10');P(2,'[H^{+}] = 10^{-7} mol/dm^{3}',6.65,7.35,'7');P(2,'[H^{+}] = 10^{-1} mol/dm^{3}',0.65,1.35,'1');
P(3,'HCl 0,001 mol/dm^{3}',2.65,3.35,'3');P(3,'Ba(OH)2 0,05 mol/dm^{3}',12.65,13.35,'13');
E(1,'Ca + O2 = CaO','2 1 2');E(1,'HgO = Hg + O2','2 2 1');
E(2,'P + O2 = P4O10','4 5 1');E(2,'Na + H2O = NaOH + H2','2 2 2 1');E(2,'Mg + HCl = MgCl2 + H2','1 2 1 1');E(2,'Al + Fe2O3 = Al2O3 + Fe','2 1 1 2');
E(3,'C2H5OH + O2 = CO2 + H2O','1 3 2 3');E(3,'NH3 + O2 = NO + H2O','4 5 4 6');E(3,'KMnO4 = K2MnO4 + MnO2 + O2','2 1 1 1');E(3,'C6H12O6 + O2 = CO2 + H2O','1 6 6 6');
['Br','Ne','P','Li','Si','Ar'].forEach(s=>{const e=ELS.find(x=>x[0]===s);TB(1,e[1],s)});
TB(2,'Z = 11','Na');TB(2,'Z = 15','P');TB(2,'berylowiec z 4. okresu','Ca');TB(2,'gaz szlachetny z 2. okresu','Ne');
TB(2,'3 powłoki i 5 elektronów walencyjnych','P');TB(2,'grupa 16, okres 2','O');TB(2,'niemetal ciekły w temperaturze pokojowej','Br');
TB(3,'[Ne] 3s^{2} 3p^{3}','P');TB(3,'[Ar] 4s^{1}','K');TB(3,'jego jon X^{+} ma konfigurację argonu','K');TB(3,'[Ar] 3d^{10} 4s^{2} 4p^{5}','Br');

// ===== Nowe mikrogry
// Dopasuj
MATCH=[];function M(c,lv,title,pairs,t){MATCH.push({c,lv,title,pairs,t:!!t,key:'x'+MATCH.length})}
M('uklad',1,'symbol – nazwa',[['Fe','żelazo'],['Cu','miedź'],['Ag','srebro'],['Au','złoto'],['Pb','ołów'],['Hg','rtęć'],['Sn','cyna'],['I','jod'],['Zn','cynk'],['S','siarka'],['K','potas'],['N','azot']]);
M('uklad',1,'pierwiastek – zastosowanie',[['hel','balony'],['chlor','uzdatnianie wody'],['wolfram','włókna żarówek'],['miedź','przewody elektryczne'],['glin','puszki i folia'],['neon','reklamy świetlne'],['krzem','układy scalone'],['cyna','lutowanie']]);
M('wzory',1,'wzór – nazwa',[['H2O','woda'],['CO2','tlenek węgla(IV)'],['NaCl','chlorek sodu'],['NH3','amoniak'],['CH4','metan'],['O3','ozon'],['CaCO3','węglan wapnia'],['NaOH','wodorotlenek sodu'],['HCl','kwas chlorowodorowy']]);
M('wzory',1,'nazwa zwyczajowa – wzór',[['sól kuchenna','NaCl'],['wapno palone','CaO'],['wapno gaszone','Ca(OH)2'],['soda oczyszczona','NaHCO3'],['kreda','CaCO3'],['suchy lód','CO2'],['soda kaustyczna','NaOH']]);
M('wzory',2,'kwas – nazwa jego soli',[['HCl','chlorki'],['H2SO4','siarczany(VI)'],['HNO3','azotany(V)'],['H2CO3','węglany'],['H3PO4','fosforany(V)'],['H2S','siarczki'],['H2SO3','siarczany(IV)']]);
M('org',1,'nazwa – wzór',[['metan','CH4'],['etan','C2H6'],['propan','C3H8'],['butan','C4H10'],['eten','C2H4'],['etyn','C2H2'],['metanol','CH3OH'],['etanol','C2H5OH']]);
M('org',2,'grupa funkcyjna – klasa',[['−OH','alkohole'],['−COOH','kwasy karboksylowe'],['−CHO','aldehydy'],['−NH2','aminy'],['−COO−','estry'],['>C=O','ketony']]);
M('oblicz',1,'wielkość – jednostka',[['masa molowa','g/mol'],['stężenie molowe','mol/dm^{3}'],['gęstość','g/cm^{3}'],['masa atomowa','u'],['objętość molowa','dm^{3}/mol'],['liczność materii','mol']]);
M('lab',1,'sprzęt – zastosowanie',[['lejek z sączkiem','sączenie'],['palnik','ogrzewanie'],['cylinder miarowy','odmierzanie objętości'],['moździerz','rozcieranie'],['waga','ważenie'],['tryskawka','spłukiwanie wodą'],['bagietka','mieszanie']]);
M('lab',2,'piktogram – zagrożenie',[['płomień','łatwopalne'],['trupia czaszka','toksyczne'],['ręka i płytka pod kroplami','żrące'],['wybuchająca bomba','wybuchowe'],['płomień nad okręgiem','utleniające'],['butla gazowa','gaz pod ciśnieniem'],['martwa ryba i drzewo','szkodliwe dla środowiska']]);
M('ph',1,'wskaźnik – barwa w zasadzie',[['fenoloftaleina','malinowa'],['lakmus','niebieska'],['oranż metylowy','żółta'],['wskaźnik uniwersalny','granatowa']]);
M('reakcje',2,'typ reakcji – przykład',[['synteza','2H2 + O2 → 2H2O'],['analiza','CaCO3 → CaO + CO2'],['wymiana pojedyncza','Zn + 2HCl → ZnCl2 + H2'],['wymiana podwójna','AgNO3 + NaCl → AgCl + NaNO3']]);
M('reakcje',3,'proces przemysłowy – produkt',[['Habera–Boscha','amoniak'],['metoda kontaktowa','kwas siarkowy(VI)'],['metoda Solvaya','soda Na2CO3'],['metoda Ostwalda','kwas azotowy(V)'],['wielki piec','surówka (żelazo)'],['elektroliza solanki','chlor i NaOH']],1);
M('org',3,'odczynnik – co wykrywa',[['odczynnik Tollensa','grupa aldehydowa'],['jod (płyn Lugola)','skrobia'],['stęż. HNO3 (ksantoproteinowa)','pierścienie aromatyczne w białku'],['Cu(OH)2 w NaOH (biuretowa)','wiązania peptydowe'],['woda bromowa','wiązania wielokrotne']]);
// Ułóż
ORDER=[];function O(c,lv,title,items,t){ORDER.push({c,lv,title,items,t:!!t,key:'o'+ORDER.length})}
O('uklad',1,'od najmniejszej liczby atomowej',[['H','Z = 1'],['C','6'],['O','8'],['Na','11'],['Cl','17'],['Ca','20'],['Fe','26']]);
O('ph',1,'od najbardziej kwasowego',[['sok żołądkowy','pH ≈ 1,5'],['ocet','≈ 2,5'],['kawa','≈ 5'],['woda destylowana','7'],['soda oczyszczona','≈ 8,3'],['roztwór mydła','≈ 10'],['woda wapienna','≈ 12,4']]);
O('org',1,'od najmniejszej liczby atomów węgla',[['metan'],['etan'],['propan'],['butan'],['pentan'],['heksan']]);
O('lab',1,'kolejność: sporządzanie roztworu',[['oblicz masę substancji'],['odważ substancję'],['wsyp do zlewki'],['dolej wodę i wymieszaj']]);
O('lab',1,'kolejność: oddzielanie soli od piasku',[['wsyp mieszaninę do zlewki'],['dolej wody i wymieszaj'],['przesącz'],['odparuj przesącz']]);
O('uklad',2,'od najmniejszego promienia atomu',[['Cl'],['S'],['P'],['Si'],['Al'],['Mg'],['Na']]);
O('uklad',2,'od najmniejszej elektroujemności',[['Na','0,9'],['Mg','1,3'],['C','2,6'],['N','3,0'],['O','3,4'],['F','4,0']]);
O('uklad',2,'od najmniejszej masy atomowej',[['He','4 u'],['C','12 u'],['Na','23 u'],['Cl','35,5 u'],['Fe','56 u'],['Ag','108 u'],['Au','197 u']]);
O('org',2,'od najniższej temperatury wrzenia',[['metan','−162°C'],['etan','−89°C'],['propan','−42°C'],['butan','−1°C'],['pentan','36°C'],['heksan','69°C']]);
O('oblicz',2,'od najmniejszej masy molowej',[['H2','2'],['CH4','16'],['H2O','18'],['N2','28'],['O2','32'],['CO2','44'],['SO2','64']]);
O('reakcje',2,'od najaktywniejszego metalu',[['K'],['Na'],['Mg'],['Al'],['Zn'],['Fe'],['Cu'],['Ag'],['Au']]);
O('ph',3,'od najsłabszego kwasu',[['H2S','pK_{a} ≈ 7,0'],['H2CO3','6,4'],['CH3COOH','4,8'],['HF','3,2'],['HCl','mocny']]);
O('wzory',3,'od najniższego stopnia utlenienia azotu',[['NH3','−III'],['N2','0'],['N2O','+I'],['NO','+II'],['NO2','+IV'],['HNO3','+V']]);
O('lab',3,'kolejność: miareczkowanie',[['przepłucz biuretę titrantem'],['napełnij biuretę i odczytaj poziom'],['odmierz próbkę pipetą do kolby'],['dodaj wskaźnik'],['dodawaj titrant do zmiany barwy']],1);
// Uzupełnij równanie
FILL=[];function F(c,lv,eq,a,t){FILL.push({c,lv,eq,a,t:!!t,key:'f'+FILL.length})}
F('reakcje',1,'C + O2 → ?',['CO2','CO','C2O','CO3']);F('reakcje',1,'2Mg + O2 → 2?',['MgO','MgO2','Mg2O','Mg']);
F('reakcje',1,'2H2O → 2H2 + ?',['O2','H2O2','O','OH']);F('reakcje',1,'CaCO3 → CaO + ?',['CO2','CO','C','O2']);
F('ph',1,'NaOH + HCl → NaCl + ?',['H2O','H2','O2','NaH']);F('reakcje',1,'S + O2 → ?',['SO2','SO4','S2O','H2S']);
F('reakcje',2,'Zn + H2SO4 → ZnSO4 + ?',['H2','H2O','SO2','O2']);F('ph',2,'CO2 + H2O → ?',['H2CO3','H2CO2','CH4','HCO3']);
F('ph',2,'SO3 + H2O → ?',['H2SO4','H2SO3','H2S','SO2']);F('ph',2,'CaO + H2O → ?',['Ca(OH)2','CaOH','CaO2','CaH2']);
F('reakcje',2,'CH4 + 2O2 → CO2 + ?',['2H2O','H2O','4H2O','2H2']);F('reakcje',2,'CuO + H2 → Cu + ?',['H2O','H2O2','CuH','O2']);
F('ph',2,'Na2O + H2O → ?',['2NaOH','NaOH','Na2O2','NaH']);F('reakcje',2,'AgNO3 + NaCl → ? + NaNO3',['AgCl','AgNa','Cl2','NaCl']);
F('reakcje',2,'2Na + 2H2O → 2NaOH + ?',['H2','O2','Na2O','H2O2']);F('org',2,'C2H5OH + CH3COOH → ? + H2O',['CH3COOC2H5','C2H5COOCH3','CH3OC2H5','C4H10']);
F('org',2,'C2H4 + H2 → ?',['C2H6','C2H2','CH4','C2H5OH']);
F('reakcje',3,'2KMnO4 → K2MnO4 + MnO2 + ?',['O2','K2O','Mn','H2O']);F('org',3,'C6H12O6 → 2C2H5OH + ?',['2CO2','2H2O','O2','2CO']);
F('org',3,'C2H2 + 2Br2 → ?',['C2H2Br4','C2H4Br2','C2HBr','C2Br2']);F('reakcje',3,'Cu + 2H2SO4 (stęż.) → CuSO4 + ? + 2H2O',['SO2','H2','SO3','H2S']);
F('reakcje',3,'Fe2O3 + 3CO → 2Fe + ?',['3CO2','3CO','3O2','CO2'],1);F('reakcje',3,'N2 + 3H2 ⇌ ?',['2NH3','NH3','N2H6','2NH4'],1);
// Odważ (generowane)
SCALEQ=[];[[1,'cp'],[1,'water'],[1,'cp'],[1,'water'],[2,'molar'],[2,'moles'],[2,'cp'],[2,'moles'],[3,'stoich'],[3,'stoich'],[3,'molar'],[3,'stoich']].forEach(([lv,k],i)=>SCALEQ.push({c:'oblicz',lv,k,key:'s'+i}));
// Zbuduj atom
ATOMQ=[];ELS.slice(0,20).forEach((e,i)=>ATOMQ.push({c:'uklad',lv:1,label:`${e[1]} (${e[0]})`,z:i+1,e:i+1,key:'a'+i}));
[['Na',1],['Mg',2],['Al',3],['K',1],['Ca',2],['F',-1],['Cl',-1],['O',-2],['S',-2],['N',-3]].forEach(([s,q])=>{const z=ELS.findIndex(x=>x[0]===s)+1;ATOMQ.push({c:'uklad',lv:2,label:`jon ${s}^{${chg(q)}}`,z,e:z-q,key:'ai'+s})});
// Złóż wzór z jonów
CATI=[['Na',1,'sodu',1],['K',1,'potasu',1],['Mg',2,'magnezu',1],['Ca',2,'wapnia',1],['Al',3,'glinu',1],['Zn',2,'cynku',1],['Ba',2,'baru',2],['Fe',3,'żelaza(III)',2],['Fe',2,'żelaza(II)',2],['Cu',2,'miedzi(II)',2],['NH4',1,'amonu',2,1]];
ANI=[['Cl',1,'chlorek',1],['O',2,'tlenek',1],['S',2,'siarczek',1],['Br',1,'bromek',1],['OH',1,'wodorotlenek',2,1],['NO3',1,'azotan(V)',2,1],['SO4',2,'siarczan(VI)',2,1],['CO3',2,'węglan',2,1],['PO4',3,'fosforan(V)',2,1]];
IONQ=[];for(let i=0;i<6;i++){IONQ.push({c:'wzory',lv:1,key:'i1'+i});IONQ.push({c:'wzory',lv:2,key:'i2'+i})}
// STOP! termometr
STOPQ=[];function SQ(lv,label,v,txt){STOPQ.push({c:'wzory',lv,label,v,txt,key:'st'+STOPQ.length})}
SQ(1,'temperatura wrzenia wody',100,'100°C (pod ciśnieniem 1013 hPa)');SQ(1,'temperatura topnienia lodu',0,'0°C');SQ(1,'temperatura ciała człowieka',37,'ok. 36,6°C');
SQ(1,'temperatura pokojowa',21,'ok. 20–22°C');SQ(2,'temperatura wrzenia etanolu',78,'ok. 78°C');SQ(2,'373 K',100,'373 K = 100°C');SQ(2,'273 K',0,'273 K = 0°C');
SQ(2,'298 K',25,'298 K = 25°C');SQ(2,'temperatura krzepnięcia rtęci',-39,'ok. −39°C');SQ(3,'temperatura wrzenia acetonu',56,'ok. 56°C');
SQ(3,'temperatura wrzenia metanolu',65,'ok. 65°C');SQ(3,'temperatura wrzenia amoniaku',-33,'ok. −33°C');SQ(3,'temperatura krzepnięcia kwasu octowego',17,'ok. 17°C');
// Co to jest? (sprzęt)
GEARQ=[];function GQ(lv,name,use,svg){GEARQ.push({c:'lab',lv,name,use,svg,key:'g'+GEARQ.length})}
GQ(1,'probówka','Do prostych doświadczeń na małą skalę.','<path class="liq" d="M58 80 V122 a12 12 0 0 0 24 0 V80Z"/><path d="M56 12 V122 a14 14 0 0 0 28 0 V12"/>');
GQ(1,'zlewka','Do przygotowywania i przelewania roztworów.','<path class="liq" d="M32 90 H108 V140 H32Z"/><path d="M26 22 L32 28 V140 H108 V28 L114 22"/><path class="thin" d="M40 60 H56 M40 80 H50 M40 100 H56 M40 120 H50"/>');
GQ(1,'kolba stożkowa','Do mieszania i ogrzewania, często przy miareczkowaniu.','<path class="liq" d="M42 108 L26 142 H114 L98 108Z"/><path d="M58 14 V58 L24 144 H116 L82 58 V14 M52 14 H88"/>');
GQ(1,'cylinder miarowy','Do odmierzania objętości cieczy.','<path class="liq" d="M54 70 H86 V134 H54Z"/><path d="M54 10 V134 H86 V10 M48 10 L54 14 M40 134 H100 V144 H40Z"/><path class="thin" d="M54 30 H66 M54 45 H62 M54 60 H66 M54 75 H62 M54 90 H66 M54 105 H62 M54 120 H66"/>');
GQ(1,'lejek','Do przelewania cieczy i sączenia.','<path d="M22 24 H118 L78 84 V146 H62 V84 Z"/>');
GQ(1,'moździerz z tłuczkiem','Do rozcierania substancji stałych.','<path d="M20 70 H120 Q116 130 70 132 Q24 130 20 70Z"/><path d="M60 134 H80 L86 146 H54Z"/><path class="thick" d="M86 18 L100 62"/>');
GQ(2,'kolba okrągłodenna','Do ogrzewania cieczy i destylacji.','<path class="liq" d="M31 118 A40 40 0 0 0 109 118 Z"/><path d="M60 14 V70 A40 40 0 1 0 80 70 V14 M54 14 H86"/>');
GQ(2,'krystalizator','Do krystalizacji i odparowywania roztworów.','<path class="liq" d="M16 112 H124 V136 H16Z"/><path d="M14 80 V136 H126 V80"/>');
GQ(2,'pipeta','Do pobierania dokładnej objętości cieczy.','<path d="M66 4 V52 C52 56 52 92 66 96 V156 M74 4 V52 C88 56 88 92 74 96 V156"/><path class="thin" d="M60 26 H80"/>');
GQ(2,'biureta','Do dokładnego dozowania cieczy przy miareczkowaniu.','<path class="liq" d="M64 40 H76 V110 H64Z"/><path d="M64 6 V112 L69 128 V152 M76 6 V112 L71 128 V152"/><path class="thick" d="M52 116 H88"/><path class="thin" d="M76 20 H84 M76 40 H84 M76 60 H84 M76 80 H84 M76 100 H84"/>');
GQ(3,'kolba miarowa','Do sporządzania roztworów o dokładnej objętości.','<path class="liq" d="M33 118 H107 Q106 138 90 138 H50 Q34 138 33 118Z"/><path d="M64 8 V72 C36 80 26 104 30 128 Q32 142 50 142 H90 Q108 142 110 128 C114 104 104 80 76 72 V8"/><path class="thin" d="M58 36 H82"/>');

// Policz! i Zważ!
COUNTF={1:['H2O','CO2','NH3','CH4','H2SO4','NaOH','HNO3','C2H6','O3','H3PO4','Na2CO3','CaCO3','C3H8'],
  2:['Ca(OH)2','Ca(NO3)2','Al2(SO4)3','Mg3(PO4)2','C2H5OH','CH3COOH','(NH4)2SO4','Fe2(SO4)3','3H2O','2H2SO4','2HNO3','C6H6','Na3PO4'],
  3:['CuSO4·5H2O','C6H12O6','K4[Fe(CN)6]','C3H5(OH)3','(NH4)3PO4','3Ca(OH)2','3Fe2(SO4)3','C17H35COOH','Al(OH)3']};
MASSF={1:['H2O','CO2','O2','NaCl','CH4','NH3','MgO','HCl','N2','CaO','SO2'],
  2:['H2SO4','CaCO3','NaOH','HNO3','C2H5OH','Ca(OH)2','Na2CO3','Fe2O3','KOH','CuO','KNO3'],
  3:['Al2(SO4)3','CuSO4·5H2O','C6H12O6','K2Cr2O7','(NH4)2SO4','Mg3(PO4)2','Ca3(PO4)2','Na2SO4·10H2O']};
COUNT=[];MASSQ=[];
for(const lv of [1,2,3]){COUNTF[lv].forEach(f=>COUNT.push({c:'wzory',lv,f,key:'c'+f}));MASSF[lv].forEach(f=>MASSQ.push({c:'oblicz',lv,f,key:'m'+f}))}
}
