import{d as k,r as n,f as y,c as u,e,g as p,w as b,u as I,t as o,F as f,h as V,o as x,i as w,R as B,M as N,p as C,b as M,_ as S}from"./index-CmP_tmZg.js";const m={άνθρωπος:{translation:"человек",gender:"m"},καιρός:{translation:"погода",gender:"m"},ήλιος:{translation:"солнце",gender:"m"},κόσμος:{translation:"мир",gender:"m"},μπαμπάς:{translation:"отец",gender:"m"},άντρας:{translation:"мужчина",gender:"m"},κανόνας:{translation:"правило",gender:"m"},ελέφαντας:{translation:"слон",gender:"m"},λογιστής:{translation:"бухгалтер",gender:"m"},υπολογιστής:{translation:"компьютер",gender:"m"},πελάτης:{translation:"клиент",gender:"m"},μαθητής:{translation:"ученик",gender:"m"},μπακάλης:{translation:"бакалейщик",gender:"m"},κουρέας:{translation:"парикмахер",gender:"m"},γραμματέας:{translation:"секретарь",gender:"m"},καφές:{translation:"кофе",gender:"m",exception:!0},λεκές:{translation:"пятно",gender:"m",exception:!0},παππούς:{translation:"дед",gender:"m",exception:!0},νους:{translation:"разум",gender:"m",exception:!0},μητέρα:{translation:"мать",gender:"f"},καρέκλα:{translation:"стул",gender:"f"},θάλασσα:{translation:"море",gender:"f"},ώρα:{translation:"час",gender:"f"},αγελάδα:{translation:"корова",gender:"f"},λέξη:{translation:"слово",gender:"f"},αγάπη:{translation:"любовь",gender:"f"},ψυχή:{translation:"душа",gender:"f"},ζάχαρη:{translation:"сахар",gender:"f"},οθόνη:{translation:"монитор",gender:"f"},μέθοδος:{translation:"метод",gender:"f",exception:!0},άνοδος:{translation:"восхождение",gender:"f",exception:!0},κάθοδος:{translation:"спуск",gender:"f",exception:!0},οδός:{translation:"улица",gender:"f",exception:!0},λεωφόρος:{translation:"проспект",gender:"f",exception:!0},μαϊμού:{translation:"обезьяна",gender:"f",exception:!0},αλεπού:{translation:"лиса",gender:"f",exception:!0},ηχώ:{translation:"эхо",gender:"f",exception:!0},νερό:{translation:"вода",gender:"n"},βιβλίο:{translation:"книга",gender:"n"},γραφείο:{translation:"офис",gender:"n"},ξενοδοχείο:{translation:"отель",gender:"n"},λεωφορείο:{translation:"автобус",gender:"n"},σπίτι:{translation:"дом",gender:"n"},κουτί:{translation:"коробка",gender:"n"},πουλί:{translation:"птица",gender:"n"},πρόβλημα:{translation:"проблема",gender:"n"},μάθημα:{translation:"урок",gender:"n"},θέμα:{translation:"тема",gender:"n"},λάθος:{translation:"ошибка",gender:"n",exception:!0},γεγονός:{translation:"событие",gender:"n",exception:!0},φταίξιμο:{translation:"вина",gender:"n",exception:!0},πλύσιμο:{translation:"стирка",gender:"n",exception:!0},φως:{translation:"свет",gender:"n",exception:!0},βράδυ:{translation:"ночь",gender:"n",exception:!0},στάχυ:{translation:"ухо",gender:"n",exception:!0},δόρυ:{translation:"копье",gender:"n",exception:!0},οξύ:{translation:"кислота",gender:"n",exception:!0},δίχτυ:{translation:"сеть",gender:"n",exception:!0},δάκρυ:{translation:"слеза",gender:"n",exception:!0}},E=t=>(C("data-v-b928a179"),t=t(),M(),t),j=E(()=>e("label",{for:"key"},"  Exceptions",-1)),F={class:"results-container"},L={class:"pronoun"},O={class:"options-container"},R=k({__name:"NounsView",setup(t){const s=n(!1),i=n(),a=n(),d=n(0),c=n(0);y(()=>{_(),l()});const _=()=>{i.value=s.value?Object.entries(m):Object.entries(m).filter(r=>!r[1].exception)},l=()=>{a.value=i.value[i.value.length*Math.random()<<0]},v=r=>{r===a.value[1].gender?d.value++:c.value++,l()},h=()=>{s.value=!s.value,l()};return(r,T)=>(x(),u(f,null,[e("div",null,[p(I(B),{to:"/"},{default:b(()=>[w("👈 Go back")]),_:1})]),e("input",{onInput:h,type:"checkbox",id:"key",name:"key",value:"key"},null,32),j,e("div",F,[e("span",null,"Σωστό: "+o(d.value),1),e("span",null,"Λάθος: "+o(c.value),1)]),e("p",L,o(a.value[0]),1),e("div",O,[(x(),u(f,null,V([["m","ο"],["f","η"],["n","το"]],g=>p(N,{onClick:W=>v(g[0]),title:g[1]},null,8,["onClick","title"])),64))]),e("p",null,o(a.value[1].translation),1)],64))}}),G=S(R,[["__scopeId","data-v-b928a179"]]);export{G as default};
