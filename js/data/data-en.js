/* ============================================================
   ENGLISH DATA (shared formulas/equations come from loadPL)
   ============================================================ */
function loadEN(){
loadPL();
CATS=[
  {id:'uklad',name:'Periodic table & atoms'},
  {id:'wzory',name:'Substances, formulas & names'},
  {id:'reakcje',name:'Reactions & equations'},
  {id:'ph',name:'Acids, bases & pH'},
  {id:'org',name:'Organic chemistry'},
  {id:'lab',name:'Lab safety'},
  {id:'oblicz',name:'Calculations'},
];
const ELN=['hydrogen','helium','lithium','beryllium','boron','carbon','nitrogen','oxygen','fluorine','neon','sodium','magnesium','aluminium','silicon','phosphorus','sulfur','chlorine','argon',
  'potassium','calcium','scandium','titanium','vanadium','chromium','manganese','iron','cobalt','nickel','copper','zinc','gallium','germanium','arsenic','selenium','bromine','krypton'];
ELS=ELS.map((e,i)=>[e[0],ELN[i],e[2],e[3]]);

QUIZ=[];function Q(c,lv,q,a,t){QUIZ.push({c,lv,q,a,t:!!t,key:'eq'+QUIZ.length})}
// periodic table & atoms
Q('uklad',1,'The symbol for sodium is:',['Na','So','S','N']);
Q('uklad',1,'The symbol for potassium is:',['K','P','Po','Pt']);
Q('uklad',1,'The symbol for silver is:',['Ag','Si','Sr','Au']);
Q('uklad',1,'The symbol for gold is:',['Au','Go','Ag','Gl']);
Q('uklad',1,'Pb is the symbol for:',['lead','platinum','phosphorus','palladium']);
Q('uklad',1,'Hg is the symbol for:',['mercury','hydrogen','helium','hafnium']);
Q('uklad',1,'How many protons does a carbon atom have (Z = 6)?',['6','12','4','14']);
Q('uklad',1,'The noble gases are in group:',['18','1','2','17']);
Q('uklad',1,'The lightest element is:',['hydrogen','helium','lithium','oxygen']);
Q('uklad',1,'The symbol for iron is:',['Fe','Ir','I','F']);
Q('uklad',1,'The symbol for copper is:',['Cu','Co','Cp','C']);
Q('uklad',1,'The symbol for calcium is:',['Ca','C','Cl','Ka']);
Q('uklad',1,'How many electron shells does a sodium atom have?',['3','1','2','11']);
Q('uklad',1,'The atomic number Z is the number of:',['protons in the nucleus','neutrons','nucleons','shells']);
Q('uklad',1,'A period in the periodic table is a:',['horizontal row','vertical column','block of metals','group of gases']);
Q('uklad',1,'Which gas makes up most of the air?',['nitrogen','oxygen','carbon dioxide','argon']);
Q('uklad',2,'How many neutrons are in ^{23}Na (Z = 11)?',['12','11','23','34']);
Q('uklad',2,'How many valence electrons does a chlorine atom have?',['7','17','1','5']);
Q('uklad',2,'Isotopes of one element differ in the number of:',['neutrons','protons','electrons','shells']);
Q('uklad',2,'Electron configuration of magnesium (Z = 12):',['1s^{2} 2s^{2} 2p^{6} 3s^{2}','1s^{2} 2s^{2} 2p^{6} 3s^{1}','1s^{2} 2s^{2} 2p^{8}','1s^{2} 2s^{2} 2p^{6} 3p^{2}']);
Q('uklad',2,'The most electronegative element is:',['fluorine','oxygen','chlorine','caesium']);
Q('uklad',2,'An aluminium atom forms the ion:',['Al^{3+}','Al^{3-}','Al^{2+}','Al^{+}']);
Q('uklad',2,'How many nucleons are in ^{35}Cl?',['35','17','18','52']);
Q('uklad',2,'Going down a group, metallic character:',['increases','decreases','stays the same','disappears']);
Q('uklad',2,'An N2 molecule contains a:',['triple bond','single bond','double bond','ionic bond']);
Q('uklad',2,'A cation is an ion with a:',['positive charge','negative charge','zero charge','changing charge']);
Q('uklad',3,'An isotope has a half-life of 8 days. How much of 80 g is left after 24 days?',['10 g','20 g','40 g','0 g']);
Q('uklad',3,'Azimuthal quantum number l = 1 means an orbital of type:',['p','s','d','f']);
Q('uklad',3,'The maximum number of electrons in a d subshell is:',['10','6','14','18']);
Q('uklad',3,'Alpha decay lowers the mass number of a nucleus by:',['4','2','1','0']);
Q('uklad',3,'Which pair of particles is isoelectronic?',['Na^{+} and F^{-}','Na^{+} and Cl^{-}','K^{+} and F^{-}','Mg^{2+} and S^{2-}']);
Q('uklad',3,'Hybridisation of carbon in methane:',['sp^{3}','sp','sp^{2}','no hybridisation']);
Q('uklad',3,'The shape of a CO2 molecule is:',['linear','bent','tetrahedral','pyramidal']);
Q('uklad',3,'Hydrogen bonding explains the high boiling point of:',['water','methane','helium','carbon dioxide']);
Q('uklad',3,'The spin quantum number m_{s} can be:',['+½ or −½','0 or 1','1, 2 or 3','anything from −l to +l']);
// substances, formulas & names
Q('wzory',1,'The formula of water is:',['H2O','HO2','H2O2','OH']);
Q('wzory',1,'The formula of carbon dioxide is:',['CO2','CO','C2O','CO4']);
Q('wzory',1,'NaCl is:',['sodium chloride','sodium sulfide','sodium chlorate','sodium hydroxide']);
Q('wzory',1,'The formula of sulfuric acid is:',['H2SO4','H2SO3','H2S','HSO4']);
Q('wzory',1,'The formula of calcium hydroxide is:',['Ca(OH)2','CaOH','CaO','Ca(OH)3']);
Q('wzory',1,'CaCO3 is:',['calcium carbonate','calcium oxide','calcium carbide','potassium carbonate']);
Q('wzory',1,'The formula of ammonia is:',['NH3','NH4','NH2','N2H']);
Q('wzory',1,'The formula of iron(III) oxide is:',['Fe2O3','FeO','Fe3O2','FeO3']);
Q('wzory',1,'The formula of magnesium chloride is:',['MgCl2','MgCl','Mg2Cl','MgCl3']);
Q('wzory',1,'The formula of nitric acid is:',['HNO3','HNO2','H2NO3','NH3']);
Q('wzory',2,'The oxidation state of iron in Fe2O3 is:',['+3','+2','+6','+1']);
Q('wzory',2,'KNO3 is:',['potassium nitrate','potassium nitrite','potassium nitride','potassium carbonate']);
Q('wzory',2,'The formula of aluminium sulfate is:',['Al2(SO4)3','Al3(SO4)2','AlSO4','Al2SO3']);
Q('wzory',2,'Na2SO3 is:',['sodium sulfite','sodium sulfate','sodium sulfide','sodium thiosulfate']);
Q('wzory',2,'The formula of calcium phosphate is:',['Ca3(PO4)2','Ca2(PO4)3','CaPO4','Ca3PO4']);
Q('wzory',2,'Fe(OH)3 is:',['iron(III) hydroxide','iron(II) hydroxide','iron(III) oxide','iron carbonate']);
Q('wzory',2,'Which oxide is basic?',['Na2O','SO2','CO2','P4O10']);
Q('wzory',2,'The formula of sodium sulfide is:',['Na2S','NaS','Na2SO4','NaS2']);
Q('wzory',3,'The oxidation state of manganese in KMnO4 is:',['+7','+2','+4','+6']);
Q('wzory',3,'The oxidation state of chromium in K2Cr2O7 is:',['+6','+3','+7','+2']);
Q('wzory',3,'The oxidation state of sulfur in H2S is:',['−2','+2','+4','+6']);
Q('wzory',3,'NaHCO3 is:',['sodium hydrogen carbonate','sodium carbonate','sodium hydroxide','sodium carbide']);
Q('wzory',3,'CuSO4·5H2O is:',['copper(II) sulfate pentahydrate','copper(I) sulfite','copper hydrogen sulfate','copper oxide in water']);
Q('wzory',3,'The oxidation state of chlorine in HClO4 is:',['+7','+1','+5','−1']);
Q('wzory',3,'An amphoteric oxide is:',['ZnO','Na2O','CaO','SO3']);
Q('wzory',3,'K2Cr2O7 is:',['potassium dichromate','potassium chromate','potassium chromite','potassium permanganate']);
// reactions & equations
Q('reakcje',1,'Burning hydrogen produces:',['water','oxygen','methane','carbon dioxide']);
Q('reakcje',1,'For iron to rust it needs:',['oxygen and water','nitrogen and hydrogen','nitrogen only','helium and water']);
Q('reakcje',1,'A + B → AB is a reaction of:',['synthesis','decomposition','displacement','neutralisation']);
Q('reakcje',1,'The reaction 2H2O → 2H2 + O2 is:',['decomposition','synthesis','single displacement','neutralisation']);
Q('reakcje',1,'Combustion is a reaction of a substance with:',['oxygen','nitrogen','hydrogen','helium']);
Q('reakcje',1,'The products of complete combustion of methane are:',['CO2 and H2O','CO and H2','C and H2O','CH3 and O2']);
Q('reakcje',1,'Slaked lime is:',['Ca(OH)2','CaO','CaCO3','CaSO4']);
Q('reakcje',1,'In photosynthesis a plant makes:',['glucose and oxygen','CO2 and water','methane','nitrogen']);
Q('reakcje',2,'Acid + base → salt + water. This reaction is called:',['neutralisation','hydrolysis','esterification','polymerisation']);
Q('reakcje',2,'A catalyst:',['speeds up a reaction and is not used up','is used up in the reaction','changes the products','always slows the reaction down']);
Q('reakcje',2,'The products of Zn + HCl are:',['ZnCl2 and H2','ZnCl and H2O','ZnH2 and Cl2','ZnO and HCl']);
Q('reakcje',2,'Mixing AgNO3 and NaCl gives a precipitate of:',['AgCl','NaNO3','NaCl','AgNO3']);
Q('reakcje',2,'Mg + 2HCl → MgCl2 + H2 is a reaction of:',['single displacement','synthesis','decomposition','double displacement']);
Q('reakcje',2,'Raising the temperature usually makes a reaction:',['faster','slower','no different','stop']);
Q('reakcje',2,'Which metal does NOT release hydrogen from hydrochloric acid?',['Cu','Zn','Mg','Fe']);
Q('reakcje',2,'Limewater turns cloudy with:',['CO2','O2','N2','H2']);
Q('reakcje',3,'In a Daniell cell, the anode is:',['zinc','copper','the salt bridge','platinum']);
Q('reakcje',3,'Heating an exothermic equilibrium shifts it towards the:',['reactants','products','neither side','side the catalyst favours']);
Q('reakcje',3,'In Zn + Cu^{2+} → Zn^{2+} + Cu, the oxidising agent is:',['Cu^{2+}','Zn','Zn^{2+}','Cu']);
Q('reakcje',3,'The rate equation v = k[A]^{2} describes a reaction of order:',['two','one','zero','three']);
Q('reakcje',3,'For 2NO2 ⇌ N2O4, raising the pressure shifts equilibrium towards:',['N2O4','NO2','neither side','the catalyst']);
Q('reakcje',3,'Activation energy is:',['the minimum energy needed for a reaction to happen','the heat of reaction','the energy of the products','the ionisation energy']);
Q('reakcje',3,'Iron corrodes faster in contact with:',['copper','zinc','magnesium','aluminium']);
Q('reakcje',3,'Electrolysis of molten NaCl gives this at the cathode:',['sodium','chlorine','hydrogen','oxygen']);
Q('reakcje',3,'The Haber–Bosch process produces:',['ammonia','sulfuric acid','methanol','chlorine'],1);
Q('reakcje',3,'The Contact process produces:',['sulfuric acid','nitric acid','ammonia','soda ash'],1);
Q('reakcje',3,'Electrolysis of concentrated aqueous NaCl gives this at the anode:',['chlorine','sodium','hydrogen','nitrogen'],1);
// acids, bases & pH
Q('ph',1,'A neutral solution has a pH of:',['7','0','14','1']);
Q('ph',1,'In a base, phenolphthalein turns:',['pink','blue','yellow','green']);
Q('ph',1,'In an acid, litmus turns:',['red','blue','green','orange']);
Q('ph',1,'In water, acids release ions:',['H^{+}','OH^{-}','Na^{+}','Cl^{-}']);
Q('ph',1,'In water, hydroxides release ions:',['OH^{-}','H^{+}','Cl^{-}','O^{2-}']);
Q('ph',1,'Which acid is in stomach juice?',['hydrochloric','acetic','citric','sulfuric']);
Q('ph',1,'Soapy water is:',['basic','acidic','neutral','neither acidic nor basic']);
Q('ph',1,'Which acid is in vinegar?',['acetic','lactic','citric','hydrochloric']);
Q('ph',2,'The pH of a solution with [H^{+}] = 10^{-5} mol/dm^{3} is:',['5','9','−5','10']);
Q('ph',2,'How many times more H^{+} ions does a pH 3 solution have than a pH 5 one?',['100','2','10','1000']);
Q('ph',2,'An aqueous solution of Na2CO3 is:',['basic','acidic','neutral','coloured']);
Q('ph',2,'An aqueous solution of NH4Cl is:',['acidic','basic','neutral','coloured']);
Q('ph',2,'In water, H2SO4 dissociates into:',['2H^{+} and SO4^{2-}','H^{+} and SO4^{-}','H2^{+} and SO4^{2-}','2H^{+} and SO3^{2-}']);
Q('ph',2,'Acid rain is mainly caused by:',['SO2 and nitrogen oxides','argon and helium','methane','oxygen']);
Q('ph',2,'How many moles of NaOH neutralise 1 mol of H2SO4?',['2','1','0.5','3']);
Q('ph',2,'Red cabbage indicator in an acid turns:',['red','green','yellow','blue']);
Q('ph',3,'The pH of 0.01 mol/dm^{3} NaOH is:',['12','2','10','13']);
Q('ph',3,'The conjugate base of H2SO4 (Brønsted) is:',['HSO4^{-}','SO4^{2-}','H3SO4^{+}','OH^{-}']);
Q('ph',3,'An acetate buffer is a mixture of:',['CH3COOH and CH3COONa','HCl and NaCl','NaOH and NaCl','CH3COOH and HCl']);
Q('ph',3,'The pOH of a solution with pH 4 is:',['10','4','14','7']);
Q('ph',3,'A larger K_{a} means the acid is:',['stronger','weaker','neutral','amphoteric']);
Q('ph',3,'The ionic product of water at 25°C is:',['10^{-14}','10^{-7}','10^{14}','1']);
Q('ph',3,'A solution of CH3COONa is:',['basic','acidic','neutral','light-sensitive']);
Q('ph',3,'In its reaction with water, NH3 acts (Brønsted) as:',['a base','an acid','a salt','a buffer']);
Q('ph',3,'In titrating HCl with NaOH, the end point is shown by:',['an indicator, e.g. phenolphthalein','a thermometer','an analytical balance','a burner'],1);
// organic chemistry
Q('org',1,'The main component of natural gas is:',['methane','ethane','propane','butane']);
Q('org',1,'The formula of methane is:',['CH4','CH3','C2H6','CH2']);
Q('org',1,'Ethanol is also called:',['ethyl alcohol','vinegar','acetone','glycerol']);
Q('org',1,'Acetic acid is also called:',['ethanoic acid','methanoic acid','propanoic acid','butanoic acid']);
Q('org',1,'The formula of ethanol is:',['C2H5OH','CH3OH','C2H6','CH3COOH']);
Q('org',1,'Soap is made from fat and:',['NaOH','HCl','sugar','vinegar']);
Q('org',1,'Glycerol is an alcohol with:',['three OH groups','one OH group','two OH groups','no OH groups']);
Q('org',1,'Proteins are built from:',['amino acids','glucose','fatty acids','glycerol']);
Q('org',1,'Starch is a:',['polysaccharide','protein','fat','acid']);
Q('org',2,'The general formula of alkanes is:',['C_{n}H_{2n+2}','C_{n}H_{2n}','C_{n}H_{2n−2}','C_{n}H_{n}']);
Q('org',2,'Ethene decolourises bromine water because it:',['has a double bond','is an alkane','contains oxygen','is a gas']);
Q('org',2,'The functional group of alcohols is:',['−OH','−COOH','−CHO','−NH2']);
Q('org',2,'The carboxyl group is:',['−COOH','−OH','−CHO','−NH2']);
Q('org',2,'A carboxylic acid + an alcohol gives:',['an ester','an ether','an aldehyde','a ketone']);
Q('org',2,'Fractional distillation separates crude oil by:',['boiling point','colour','density','smell']);
Q('org',2,'The formula of methanoic (formic) acid is:',['HCOOH','CH3COOH','HCHO','CH3OH']);
Q('org',2,'Ethyne is also called:',['acetylene','ethylene','ethane','ether']);
Q('org',2,'Ethene + H2 → ethane is:',['addition','substitution','elimination','condensation']);
Q('org',2,'Fats are esters of glycerol and:',['long-chain fatty acids','ethanol','glucose','amino acids']);
Q('org',3,'But-1-ene and but-2-ene are:',['positional isomers','optical isomers','functional group isomers','chain isomers']);
Q('org',3,'Tollens’ test detects the group:',['aldehyde','ketone','hydroxyl','amino']);
Q('org',3,'Bromination of benzene (FeBr3 catalyst) is:',['substitution','addition','elimination','polymerisation']);
Q('org',3,'Amino acids in proteins are linked by:',['peptide bonds','glycosidic bonds','ester bonds','hydrogen bonds']);
Q('org',3,'The name of CH3–CH(CH3)–CH3 is:',['2-methylpropane','butane','1-methylpropane','propane']);
Q('org',3,'Poly(ethene) is made by:',['addition polymerisation','condensation polymerisation','esterification','hydrolysis']);
Q('org',3,'An isomer of ethanol is:',['dimethyl ether','methanol','ethanal','ethanoic acid']);
Q('org',3,'A chiral carbon atom has:',['4 different substituents','a double bond','2 hydrogen atoms','an OH group']);
Q('org',3,'Sucrose is made of:',['glucose and fructose','2 glucose units','glucose and galactose','starch']);
Q('org',3,'The biuret test detects:',['peptide bonds','starch','fats','glucose']);
Q('org',3,'Oxidising an aldehyde gives:',['a carboxylic acid','an alcohol','an alkane','an ether']);
Q('org',3,'The xanthoproteic test turns proteins:',['yellow','purple','blue','red']);
Q('org',3,'Cracking is used to:',['break long hydrocarbons into shorter ones','turn gases into liquids','remove water from oil','colour petrol'],1);
// lab safety
Q('lab',1,'How do you dilute a concentrated acid?',['add acid to water','add water to acid','pour both in at once','acids are never diluted']);
Q('lab',1,'If acid gets on your skin, first:',['rinse with plenty of water','cover it with salt','rub on butter','neutralise it with strong alkali']);
Q('lab',1,'How do you safely smell a substance?',['waft the vapour towards you','sniff straight from the bottle','taste it','put your nose in the test tube']);
Q('lab',1,'A flame pictogram means the substance is:',['flammable','corrosive','explosive','harmful to the environment']);
Q('lab',1,'Liquid is drawn into a pipette with:',['a pipette filler','your mouth','a straw','nothing, you pour it in']);
Q('lab',1,'Burning liquid in a beaker is put out by:',['covering the beaker','blowing on it','stirring it','adding alcohol']);
Q('lab',1,'In the lab, your eyes are protected by:',['safety goggles','gloves','a lab coat','a cap']);
Q('lab',1,'When heating a test tube, you hold it:',['in a test-tube holder','in your hand','in your teeth','in your coat pocket']);
Q('lab',1,'Leftover chemicals go:',['into the container your teacher shows you','back into the bottle','down the sink','home with you']);
Q('lab',2,'The skull-and-crossbones pictogram means:',['acute toxicity','corrosive','gas under pressure','oxidising']);
Q('lab',2,'Volatile, toxic substances are handled:',['in a fume cupboard','by an open window','in the corridor','in a cupboard']);
Q('lab',2,'When heating liquid in a test tube, point its mouth:',['away from you and others','towards yourself','at your neighbour','straight into the flame']);
Q('lab',2,'A broken mercury thermometer should be:',['reported to the teacher','vacuumed up','swept with a broom','left on the bench']);
Q('lab',2,'The exclamation-mark pictogram means:',['irritant or harmful','explosive','gas under pressure','environmental hazard']);
Q('lab',2,'The pictogram of liquid dripping onto a hand means:',['corrosive','flammable','oxidising','toxic']);
Q('lab',2,'If someone’s clothes catch fire:',['smother them with a fire blanket','let them run','blow on the flames','pour alcohol on them']);
Q('lab',3,'A safety data sheet (SDS) includes:',['hazards and first aid','the wholesale price','the date of discovery','a cooking recipe'],1);
Q('lab',3,'A fire in live electrical equipment is put out with:',['a CO2 or powder extinguisher','a water extinguisher','a foam extinguisher','a bucket of water'],1);
Q('lab',3,'H statements on a label describe:',['hazards','precautions','composition','the manufacturer'],1);
Q('lab',3,'In a titration, the titrant is dispensed from a:',['burette','beaker','conical flask','funnel'],1);
Q('lab',3,'A volumetric flask is used to:',['make solutions of an exact volume','heat liquids','filter','weigh'],1);
Q('lab',3,'Fast filtration under reduced pressure uses a:',['Büchner funnel','separating funnel','plain glass funnel','kitchen sieve'],1);
Q('lab',3,'Two immiscible liquids are separated with a:',['separating funnel','burette','desiccator','mortar'],1);
// calculations
Q('oblicz',1,'10 g of salt is dissolved in 90 g of water. The percentage concentration is:',['10%','11%','9%','90%']);
Q('oblicz',1,'Mass 20 g, volume 10 cm^{3}. The density is:',['2 g/cm^{3}','0.5 g/cm^{3}','200 g/cm^{3}','30 g/cm^{3}']);
Q('oblicz',1,'The molecular mass of O2 is:',['32 u','16 u','8 u','64 u']);
Q('oblicz',1,'200 g of a 5% solution contains this much solute:',['10 g','5 g','20 g','40 g']);
Q('oblicz',1,'The mass ratio of hydrogen to oxygen in water is:',['1 : 8','2 : 1','1 : 16','1 : 2']);
Q('oblicz',2,'How many moles are in 36 g of water?',['2','1','3','0.5']);
Q('oblicz',2,'The volume of 1 mole of gas at STP is:',['22.4 dm^{3}','1 dm^{3}','11.2 dm^{3}','2.24 dm^{3}']);
Q('oblicz',2,'0.5 mol of NaOH in 250 cm^{3} of solution. The concentration is:',['2 mol/dm^{3}','0.5 mol/dm^{3}','0.125 mol/dm^{3}','1 mol/dm^{3}']);
Q('oblicz',2,'How many particles are in 1 mole?',['6.02·10^{23}','6.02·10^{22}','22.4','10^{23}']);
Q('oblicz',2,'How many dm^{3} (STP) do 2 moles of O2 take up?',['44.8','22.4','11.2','32']);
Q('oblicz',2,'The percentage by mass of oxygen in water is about:',['89%','33%','50%','11%']);
Q('oblicz',3,'How many grams of NaOH are in 200 cm^{3} of a 0.5 mol/dm^{3} solution?',['4 g','10 g','2 g','40 g']);
Q('oblicz',3,'2 moles of H2 with excess oxygen give this much water:',['36 g','18 g','72 g','2 g']);
Q('oblicz',3,'How many moles of NaOH neutralise 0.2 mol of H2SO4?',['0.4','0.2','0.1','0.8']);
Q('oblicz',3,'100 cm^{3} of a 2 mol/dm^{3} solution is diluted to 500 cm^{3}. The new concentration is:',['0.4 mol/dm^{3}','1 mol/dm^{3}','0.2 mol/dm^{3}','10 mol/dm^{3}']);
Q('oblicz',3,'How many grams of copper do you get from 80 g of CuO reduced with hydrogen?',['64 g','80 g','16 g','32 g']);
Q('oblicz',3,'Theoretical yield 50 g, actual yield 40 g. The percentage yield is:',['80%','125%','40%','90%'],1);

TF=[];function T(c,lv,s,v,why,t){TF.push({c,lv,s,v,why,t:!!t,key:'et'+TF.length})}
T('reakcje',1,'At 1013 hPa, water boils at 100°C.',true);
T('uklad',1,'Oxygen is a metal.',false,'Oxygen is a non-metal.');
T('wzory',1,'Air is a mixture of gases.',true);
T('uklad',1,'Mercury is a liquid at room temperature.',true);
T('uklad',1,'Diamond and graphite are allotropes of carbon.',true);
T('uklad',1,'Helium is heavier than air.',false,'Helium is lighter, which is why helium balloons float.');
T('ph',1,'Vinegar is basic.',false,'Vinegar is acidic.');
T('wzory',1,'A water molecule has 2 hydrogen atoms and 1 oxygen atom.',true);
T('lab',1,'You can eat in the chemistry lab if you are careful.',false,'Never eat or drink in the lab.');
T('wzory',1,'Table salt is sodium chloride.',true);
T('org',1,'Methane is the main component of natural gas.',true);
T('ph',1,'Litmus turns red in a base.',false,'Litmus is blue in a base and red in an acid.');
T('uklad',1,'Hydrogen is the lightest element.',true);
T('uklad',1,'Gold is a noble metal.',true);
T('wzory',1,'Sea water is a pure substance.',false,'It is a mixture of water and many salts.');
T('wzory',1,'Ice is less dense than liquid water.',true);
T('ph',1,'Phenolphthalein turns pink in an acid.',false,'Phenolphthalein is colourless in an acid.');
T('reakcje',1,'Rusting is a physical change.',false,'It is a chemical reaction: a new substance forms.');
T('lab',1,'Carbon monoxide is odourless and poisonous.',true);
T('uklad',1,'Sulfur is a metal.',false,'Sulfur is a non-metal.');
T('org',1,'Ethanol is flammable.',true);
T('reakcje',1,'New substances form in a chemical reaction.',true);
T('uklad',2,'Isotopes have the same number of protons.',true);
T('reakcje',2,'A catalyst is used up in the reaction.',false,'A catalyst is not used up.');
T('org',2,'Alkenes have a C=C double bond.',true);
T('ph',2,'A solution with pH 9 is acidic.',false,'pH 9 is basic.');
T('reakcje',2,'In an ionic bond, electrons move from one atom to another.',true);
T('oblicz',2,'The molar mass of CO2 is 44 g/mol.',true);
T('wzory',2,'Solid NaCl conducts electricity well.',false,'It conducts only when molten or dissolved, when its ions can move.');
T('org',2,'Ethanol is a base because it has an OH group.',false,'The OH in an alcohol does not split off as an OH^{-} ion.');
T('uklad',2,'Noble gases (except helium) have 8 valence electrons.',true);
T('lab',2,'You pour water into acid, not acid into water.',false,'The other way round: always acid into water.');
T('wzory',2,'All salts dissolve well in water.',false,'CaCO3 and AgCl, for example, are practically insoluble.');
T('reakcje',2,'Alkali metals react with water to form a hydroxide and hydrogen.',true);
T('oblicz',2,'1 mole is 6.02·10^{23} particles.',true);
T('uklad',2,'Diamond conducts electricity well.',false,'Graphite conducts electricity; diamond does not.');
T('ph',2,'Concentrated sulfuric acid is hygroscopic.',true);
T('org',2,'Alkanes easily undergo addition reactions.',false,'Alkanes mainly undergo substitution.');
T('wzory',2,'Gases dissolve better in water as the temperature rises.',false,'They dissolve less, which is why warm cola goes flat faster.');
T('reakcje',2,'Aluminium is protected from corrosion by a thin oxide layer.',true);
T('reakcje',3,'In a redox reaction, oxidation states change.',true);
T('reakcje',3,'A catalyst changes the equilibrium constant.',false,'A catalyst only helps the system reach equilibrium faster.');
T('org',3,'Glucose gives a positive Fehling’s test.',true);
T('org',3,'Benzene undergoes addition as easily as alkenes do.',false,'Benzene mainly undergoes substitution.');
T('ph',3,'Acetic acid is a strong electrolyte.',false,'It is a weak electrolyte and only slightly dissociates.');
T('reakcje',3,'In a galvanic cell, reduction happens at the cathode.',true);
T('reakcje',3,'For an exothermic reaction, ΔH < 0.',true);
T('reakcje',3,'A gas usually has lower entropy than a solid.',false,'Gases usually have much higher entropy.');
T('lab',3,'P statements on a label describe precautions.',true,null,1);
T('uklad',3,'Electronegativity increases down a group.',false,'Electronegativity decreases down a group.');
T('uklad',3,'A π bond forms by sideways overlap of p orbitals.',true);
T('ph',3,'A buffer keeps the pH almost constant when a little acid or base is added.',true);
T('org',3,'Starch turns blue-black with iodine.',true);
T('org',3,'Fructose is an aldose.',false,'Fructose is a ketose; glucose is an aldose.');
T('reakcje',3,'Reaction rate does not depend on the concentration of reactants.',false,'It usually increases as concentration rises.');

const CL=['metals','noble gases','halogens','acids','hydroxides','salts','hydrocarbons','alkenes','alcohols','acidic oxides','strong electrolytes','d-block elements',
  'non-metals','oxides','gases (at room temperature)','alkali metals','metals that release H2 from HCl'];
CATCH.forEach((c,i)=>{if(CL[i])c.label=CL[i]});
CATCH[17]={c:'org',lv:2,label:'sugars',yes:['glucose','fructose','sucrose','starch','cellulose','lactose'],no:['glycine','alanine','glycerol','ethanol','casein']};
CATCH[18]={c:'lab',lv:1,label:'glassware',yes:['beaker','test tube','flask','funnel','cylinder'],no:['burner','stand','clamp','tripod','tongs']};
CATCH[19]={c:'org',lv:3,label:'amino acids',yes:['glycine','alanine','cysteine','serine','lysine'],no:['glucose','glycerol','benzene','ethanal','acetone']};

SORT=[
  {c:'ph',lv:1,a:'Acid',b:'Hydroxide',A:['HCl','H2SO4','HNO3','H3PO4','H2CO3'],B:['NaOH','KOH','Ca(OH)2','Mg(OH)2','LiOH']},
  {c:'reakcje',lv:1,a:'Physical change',b:'Chemical reaction',A:['ice melting','water evaporating','sugar dissolving','crushing chalk','grinding coffee','iodine subliming'],B:['iron rusting','wood burning','milk going sour','baking a cake','slaking lime','photosynthesis']},
  {c:'wzory',lv:1,a:'Homogeneous mixture',b:'Heterogeneous mixture',A:['salt water','air','vinegar','brass','sweet tea'],B:['sand and water','oil and water','granite','chalk in water','fruit salad']},
  {c:'lab',lv:1,a:'Safe',b:'Unsafe',A:['safety goggles','acid poured into water','wafting to smell','working in a fume cupboard','hair tied back'],B:['water poured into acid','eating in the lab','pipetting by mouth','sniffing straight from a tube','test tube pointed at a friend']},
  {c:'ph',lv:1,a:'Acidic',b:'Basic',A:['vinegar','lemon juice','cola','stomach acid','hydrochloric acid'],B:['soapy water','limewater','baking soda solution','ammonia solution','drain cleaner']},
  {c:'reakcje',lv:2,a:'Exothermic',b:'Endothermic',A:['burning methane','slaking lime','HCl + NaOH neutralisation','cellular respiration','thermite reaction'],B:['decomposing CaCO3','photosynthesis','electrolysis of water','dissolving NH4NO3 in water','melting ice']},
  {c:'uklad',lv:2,a:'Ionic bond',b:'Covalent bond',A:['NaCl','KBr','CaO','MgF2','LiF'],B:['H2O','CH4','Cl2','NH3','CO2','HCl']},
  {c:'org',lv:2,a:'Saturated',b:'Unsaturated',A:['CH4','C2H6','C3H8','C4H10','C5H12'],B:['C2H4','C2H2','C3H6','C4H6']},
  {c:'reakcje',lv:3,a:'Oxidation',b:'Reduction',A:['Fe^{2+} → Fe^{3+}','Zn → Zn^{2+}','2Cl^{-} → Cl2','Na → Na^{+}'],B:['Cu^{2+} → Cu','Cl2 → 2Cl^{-}','Fe^{3+} → Fe^{2+}','MnO4^{-} → Mn^{2+}']},
  {c:'ph',lv:3,a:'Strong acid',b:'Weak acid',A:['HCl','HNO3','H2SO4','HBr','HClO4'],B:['CH3COOH','H2CO3','H2S','HF','HCOOH']},
  {c:'uklad',lv:1,a:'Metal',b:'Non-metal',A:['Fe','Cu','Zn','Na','Ag','Al'],B:['O','S','C','N','P','I']},
  {c:'reakcje',lv:1,a:'Synthesis',b:'Decomposition',A:['2H2 + O2 → 2H2O','C + O2 → CO2','Fe + S → FeS','2Mg + O2 → 2MgO'],B:['2H2O → 2H2 + O2','CaCO3 → CaO + CO2','2HgO → 2Hg + O2','2KClO3 → 2KCl + 3O2']},
  {c:'wzory',lv:1,a:'Element',b:'Compound',A:['O2','Fe','N2','He','O3','Cu'],B:['H2O','CO2','NaCl','CH4','NH3','HCl']},
  {c:'org',lv:2,a:'Alcohol',b:'Carboxylic acid',A:['CH3OH','C2H5OH','C3H7OH','C3H5(OH)3'],B:['HCOOH','CH3COOH','C2H5COOH','C17H35COOH']},
  {c:'wzory',lv:2,a:'Acidic oxide',b:'Basic oxide',A:['CO2','SO2','SO3','P4O10','N2O5'],B:['Na2O','CaO','K2O','MgO','Li2O']},
  {c:'wzory',lv:2,a:'Soluble',b:'Insoluble',A:['NaCl','KNO3','CuSO4','Na2CO3','NH4Cl'],B:['CaCO3','AgCl','BaSO4','Fe(OH)3','Mg(OH)2']},
  {c:'org',lv:3,a:'Reducing sugar',b:'Non-reducing sugar',A:['glucose','fructose','maltose','lactose'],B:['sucrose','starch','cellulose']},
  {c:'lab',lv:2,a:'Volumetric glassware',b:'Other glassware',A:['burette','pipette','volumetric flask','measuring cylinder'],B:['beaker','test tube','funnel','crystallising dish']},
];

PH=[];function P(lv,label,min,max,txt,t){PH.push({c:'ph',lv,label,min,max,txt,t:!!t,key:'ep'+PH.length})}
P(1,'vinegar',2,3.5,'about 2.5–3');P(1,'lemon juice',1.5,3,'about 2–2.5');P(1,'cola',2,3.2,'about 2.5');
P(1,'stomach acid',1,3,'about 1.5–2');P(1,'distilled water',6.5,7.5,'7');P(1,'blood',7,8,'7.35–7.45');
P(1,'milk',6,7,'about 6.5–6.8');P(1,'soapy water',8.5,10.5,'about 9–10');P(1,'baking soda solution',7.8,9,'about 8.3');
P(1,'ammonia solution',10.5,12.5,'about 11–12');P(1,'limewater',11.5,13,'about 12.4');
P(1,'orange juice',3,4.5,'about 3.5');P(1,'coffee',4.5,5.5,'about 5');P(1,'clean rainwater',5,6.2,'about 5.6');
P(1,'sea water',7.6,8.6,'about 8');P(1,'chlorine bleach',11.5,13.5,'about 12.5');
P(2,'[H^{+}] = 10^{-3} mol/dm^{3}',2.65,3.35,'3');P(2,'[H^{+}] = 10^{-9} mol/dm^{3}',8.65,9.35,'9');P(2,'[OH^{-}] = 10^{-2} mol/dm^{3}',11.65,12.35,'12');
P(2,'[OH^{-}] = 10^{-4} mol/dm^{3}',9.65,10.35,'10');P(2,'[H^{+}] = 10^{-7} mol/dm^{3}',6.65,7.35,'7');P(2,'[H^{+}] = 10^{-1} mol/dm^{3}',0.65,1.35,'1');
P(3,'HCl 0.01 mol/dm^{3}',1.65,2.35,'2');P(3,'NaOH 0.001 mol/dm^{3}',10.65,11.35,'11');P(3,'HNO3 0.1 mol/dm^{3}',0.65,1.35,'1');P(3,'KOH 0.1 mol/dm^{3}',12.65,13.35,'13');
P(3,'HCl 0.001 mol/dm^{3}',2.65,3.35,'3');P(3,'Ba(OH)2 0.05 mol/dm^{3}',12.65,13.35,'13');

TBL=[];function TB(lv,p,s){TBL.push({c:'uklad',lv,p,s,key:'eb'+TBL.length})}
['O','Na','Fe','Ca','Cl','C','N','Cu','K','He','S','Mg','Al','Zn','H','Br','Ne','P','Li','Si','Ar'].forEach(s=>{const e=ELS.find(x=>x[0]===s);TB(1,e[1],s)});
TB(2,'Z = 17','Cl');TB(2,'Z = 20','Ca');TB(2,'Z = 26','Fe');TB(2,'the noble gas in period 3','Ar');TB(2,'the halogen in period 2','F');
TB(2,'the alkali metal in period 4','K');TB(2,'configuration 1s^{2} 2s^{2} 2p^{4}','O');TB(2,'group 2, period 3','Mg');TB(2,'group 14, period 3','Si');
TB(2,'Z = 11','Na');TB(2,'Z = 15','P');TB(2,'the alkaline earth metal in period 4','Ca');TB(2,'the noble gas in period 2','Ne');
TB(2,'3 shells and 5 valence electrons','P');TB(2,'group 16, period 2','O');TB(2,'the non-metal that is liquid at room temperature','Br');
TB(3,'[Ar] 3d^{5} 4s^{1}','Cr');TB(3,'[Ar] 3d^{10} 4s^{1}','Cu');TB(3,'[Ar] 3d^{6} 4s^{2}','Fe');TB(3,'the most electronegative element','F');
TB(3,'its X^{3+} ion has the electron configuration of neon','Al');TB(3,'its X^{2-} ion is isoelectronic with argon','S');TB(3,'Z = 25','Mn');TB(3,'atomic mass about 35.5 u','Cl');
TB(3,'[Ne] 3s^{2} 3p^{3}','P');TB(3,'[Ar] 4s^{1}','K');TB(3,'its X^{+} ion has the electron configuration of argon','K');TB(3,'[Ar] 3d^{10} 4s^{2} 4p^{5}','Br');

MATCH=[];function M(c,lv,title,pairs,t){MATCH.push({c,lv,title,pairs,t:!!t,key:'ex'+MATCH.length})}
M('uklad',1,'symbol – name',[['Fe','iron'],['Cu','copper'],['Ag','silver'],['Au','gold'],['Pb','lead'],['Hg','mercury'],['Sn','tin'],['I','iodine'],['Zn','zinc'],['S','sulfur'],['K','potassium'],['N','nitrogen']]);
M('uklad',1,'element – use',[['helium','balloons'],['chlorine','water treatment'],['tungsten','light-bulb filaments'],['copper','electrical wires'],['aluminium','cans and foil'],['neon','glowing signs'],['silicon','microchips'],['tin','soldering']]);
M('wzory',1,'formula – name',[['H2O','water'],['CO2','carbon dioxide'],['NaCl','sodium chloride'],['NH3','ammonia'],['CH4','methane'],['O3','ozone'],['CaCO3','calcium carbonate'],['NaOH','sodium hydroxide'],['HCl','hydrogen chloride']]);
M('wzory',1,'common name – formula',[['table salt','NaCl'],['quicklime','CaO'],['slaked lime','Ca(OH)2'],['baking soda','NaHCO3'],['chalk','CaCO3'],['dry ice','CO2'],['caustic soda','NaOH']]);
M('wzory',2,'acid – its salts',[['HCl','chlorides'],['H2SO4','sulfates'],['HNO3','nitrates'],['H2CO3','carbonates'],['H3PO4','phosphates'],['H2S','sulfides'],['H2SO3','sulfites']]);
M('org',1,'name – formula',[['methane','CH4'],['ethane','C2H6'],['propane','C3H8'],['butane','C4H10'],['ethene','C2H4'],['ethyne','C2H2'],['methanol','CH3OH'],['ethanol','C2H5OH']]);
M('org',2,'functional group – class',[['−OH','alcohols'],['−COOH','carboxylic acids'],['−CHO','aldehydes'],['−NH2','amines'],['−COO−','esters'],['>C=O','ketones']]);
M('oblicz',1,'quantity – unit',[['molar mass','g/mol'],['molar concentration','mol/dm^{3}'],['density','g/cm^{3}'],['atomic mass','u'],['molar volume','dm^{3}/mol'],['amount of substance','mol']]);
M('lab',1,'equipment – use',[['funnel with filter paper','filtering'],['burner','heating'],['measuring cylinder','measuring volume'],['mortar','grinding'],['balance','weighing'],['wash bottle','rinsing with water'],['glass rod','stirring']]);
M('lab',2,'pictogram – hazard',[['flame','flammable'],['skull and crossbones','toxic'],['drops on a hand and surface','corrosive'],['exploding bomb','explosive'],['flame over a circle','oxidising'],['gas cylinder','gas under pressure'],['dead fish and tree','harmful to the environment']]);
M('ph',1,'indicator – colour in a base',[['phenolphthalein','pink'],['litmus','blue'],['methyl orange','yellow'],['universal indicator','purple']]);
M('reakcje',2,'reaction type – example',[['synthesis','2H2 + O2 → 2H2O'],['decomposition','CaCO3 → CaO + CO2'],['single displacement','Zn + 2HCl → ZnCl2 + H2'],['double displacement','AgNO3 + NaCl → AgCl + NaNO3']]);
M('reakcje',3,'industrial process – product',[['Haber–Bosch','ammonia'],['Contact process','sulfuric acid'],['Solvay process','soda ash Na2CO3'],['Ostwald process','nitric acid'],['blast furnace','pig iron'],['brine electrolysis','chlorine and NaOH']],1);
M('org',3,'reagent – what it detects',[['Tollens’ reagent','aldehyde group'],['iodine (Lugol’s solution)','starch'],['conc. HNO3 (xanthoproteic)','aromatic rings in proteins'],['Cu(OH)2 in NaOH (biuret)','peptide bonds'],['bromine water','multiple bonds']]);

ORDER=[];function O(c,lv,title,items,t){ORDER.push({c,lv,title,items,t:!!t,key:'eo'+ORDER.length})}
O('uklad',1,'by atomic number, lowest first',[['H','Z = 1'],['C','6'],['O','8'],['Na','11'],['Cl','17'],['Ca','20'],['Fe','26']]);
O('ph',1,'from most acidic to most basic',[['stomach acid','pH ≈ 1.5'],['vinegar','≈ 2.5'],['coffee','≈ 5'],['distilled water','7'],['baking soda solution','≈ 8.3'],['soapy water','≈ 10'],['limewater','≈ 12.4']]);
O('org',1,'by number of carbon atoms, fewest first',[['methane'],['ethane'],['propane'],['butane'],['pentane'],['hexane']]);
O('lab',1,'the steps for making a solution',[['calculate the mass of solute'],['weigh out the solute'],['tip it into a beaker'],['add water and stir']]);
O('lab',1,'the steps for separating salt from sand',[['put the mixture in a beaker'],['add water and stir'],['filter'],['evaporate the filtrate']]);
O('uklad',2,'by atomic radius, smallest first',[['Cl'],['S'],['P'],['Si'],['Al'],['Mg'],['Na']]);
O('uklad',2,'by electronegativity, lowest first',[['Na','0.9'],['Mg','1.3'],['C','2.6'],['N','3.0'],['O','3.4'],['F','4.0']]);
O('uklad',2,'by atomic mass, lowest first',[['He','4 u'],['C','12 u'],['Na','23 u'],['Cl','35.5 u'],['Fe','56 u'],['Ag','108 u'],['Au','197 u']]);
O('org',2,'by boiling point, lowest first',[['methane','−162°C'],['ethane','−89°C'],['propane','−42°C'],['butane','−1°C'],['pentane','36°C'],['hexane','69°C']]);
O('oblicz',2,'by molar mass, lowest first',[['H2','2'],['CH4','16'],['H2O','18'],['N2','28'],['O2','32'],['CO2','44'],['SO2','64']]);
O('reakcje',2,'by reactivity, most reactive first',[['K'],['Na'],['Mg'],['Al'],['Zn'],['Fe'],['Cu'],['Ag'],['Au']]);
O('ph',3,'by acid strength, weakest first',[['H2S','pK_{a} ≈ 7.0'],['H2CO3','6.4'],['CH3COOH','4.8'],['HF','3.2'],['HCl','strong']]);
O('wzory',3,'by oxidation state of nitrogen, lowest first',[['NH3','−3'],['N2','0'],['N2O','+1'],['NO','+2'],['NO2','+4'],['HNO3','+5']]);
O('lab',3,'the steps of a titration',[['rinse the burette with titrant'],['fill the burette and read the level'],['pipette the sample into a flask'],['add the indicator'],['add titrant until the colour changes']],1);

FILL.forEach(f=>{f.eq=f.eq.replace('(stęż.)','(conc.)')});

ATOMQ=[];ELS.slice(0,20).forEach((e,i)=>ATOMQ.push({c:'uklad',lv:1,label:`${e[1]} (${e[0]})`,z:i+1,e:i+1,key:'ea'+i}));
[['Na',1],['Mg',2],['Al',3],['K',1],['Ca',2],['F',-1],['Cl',-1],['O',-2],['S',-2],['N',-3]].forEach(([s,q])=>{const z=ELS.findIndex(x=>x[0]===s)+1;ATOMQ.push({c:'uklad',lv:2,label:`the ion ${s}^{${chg(q)}}`,z,e:z-q,key:'eai'+s})});

const CN=['sodium','potassium','magnesium','calcium','aluminium','zinc','barium','iron(III)','iron(II)','copper(II)','ammonium'];
const AN=['chloride','oxide','sulfide','bromide','hydroxide','nitrate','sulfate','carbonate','phosphate'];
CATI=CATI.map((c,i)=>{const n=c.slice();n[2]=CN[i];return n});
ANI=ANI.map((a,i)=>{const n=a.slice();n[2]=AN[i];return n});

STOPQ=[];function SQ(lv,label,v,txt){STOPQ.push({c:'wzory',lv,label,v,txt,key:'est'+STOPQ.length})}
SQ(1,'the boiling point of water',100,'100°C (at 1013 hPa)');SQ(1,'the melting point of ice',0,'0°C');SQ(1,'human body temperature',37,'about 37°C');
SQ(1,'room temperature',21,'about 20–22°C');SQ(2,'the boiling point of ethanol',78,'about 78°C');SQ(2,'373 K',100,'373 K = 100°C');SQ(2,'273 K',0,'273 K = 0°C');
SQ(2,'298 K',25,'298 K = 25°C');SQ(2,'the freezing point of mercury',-39,'about −39°C');SQ(3,'the boiling point of acetone',56,'about 56°C');
SQ(3,'the boiling point of methanol',65,'about 65°C');SQ(3,'the boiling point of ammonia',-33,'about −33°C');SQ(3,'the freezing point of acetic acid',17,'about 17°C');

const GN=[['test tube','For simple, small-scale experiments.'],['beaker','For preparing and pouring solutions.'],['conical flask','For mixing and heating, often in titrations.'],
  ['measuring cylinder','For measuring the volume of liquids.'],['funnel','For pouring liquids and filtering.'],['mortar and pestle','For grinding solids.'],
  ['round-bottom flask','For heating liquids and distillation.'],['crystallising dish','For crystallising and evaporating solutions.'],['pipette','For taking an exact volume of liquid.'],
  ['burette','For dispensing liquid precisely in titrations.'],['volumetric flask','For making solutions of an exact volume.']];
GEARQ=GEARQ.map((g,i)=>({...g,name:GN[i][0],use:GN[i][1],key:'e'+g.key}));
}
