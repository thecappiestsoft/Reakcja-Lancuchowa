/* Mikrogra: quiz */
ENGINES.quiz={get verb(){return L('WYBIERZ!','PICK ONE!')},base:7500,pool:()=>QUIZ,make(it){const opts=shuffle(it.a);return{ins:L('Kliknij poprawną odpowiedź.','Click the correct answer.'),
    note:`${fmt(it.q)} <b>${fmt(it.a[0])}</b>`,review:`${plain(it.q)} → ${plain(it.a[0])}`,render:quizRender(fmt(it.q),catName(it.c),opts,it.a[0])}}};
