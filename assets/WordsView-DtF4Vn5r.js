import{n as X}from"./nouns-B4AvKIaA.js";import{d as $,r as a,o as L,h as Y,i as b,c as p,a as n,t as l,f,M as h,F as w,e as m,_ as V}from"./index-iZ40v1rT.js";const C={class:"results-container"},D={class:"card",id:"card",draggable:"true"},I={class:"card-word"},O={key:0,class:"card-spoiler"},W={key:1,class:"card-answer"},N={class:"card-buttons"},S=$({__name:"WordsView",setup(j){const k=a(!1),o=a(),c=a(),g=a(0),_=a(0),i=a(!1);let e,d,y;L(()=>{T(),u()}),Y(()=>{e=document.getElementById("card"),e.addEventListener("touchstart",x),e.addEventListener("touchmove",E),e.addEventListener("touchend",B)}),b(()=>{e.removeEventListener("touchstart",x),e.removeEventListener("touchmove",E),e.removeEventListener("touchend",B)});const x=t=>{d=t.changedTouches[0].clientX,y=t.changedTouches[0].clientY},E=t=>{const s=t.changedTouches[0].clientX-d,v=t.changedTouches[0].clientY-y;e.style.transform=`rotate(${.2*s}deg) translateX(${1.5*s}px) translateY(${v}px)`},B=t=>{const s=t.changedTouches[0].clientX-d;e.style.transition="0.4s ease",s>100?(e.style.transform=`rotate(90deg) translateX(200px) translateY(${-500*Math.sign(s)}px)`,r(!1)):s<-100?(e.style.transform=`rotate(90deg) translateX(-200px) translateY(${-500*Math.sign(s)}px)`,r(!0)):e.style.transform="rotate(0deg) translateX(0px)",setTimeout(()=>e.style="",300)},M=()=>{i.value=!0},r=t=>{t?g.value++:_.value++,i.value=!1,u()},T=()=>{o.value=k.value?Object.entries(X):Object.entries(X).filter(t=>!t[1].exception),o.value=o.value.sort(()=>Math.random()-.5)},u=()=>{o.value.length?c.value=o.value.shift():(T(),u())};return(t,s)=>(m(),p(w,null,[n("div",C,[n("span",null,"Σωστό: "+l(g.value),1),n("span",null,"Λάθος: "+l(_.value),1)]),n("div",D,[n("p",I,l(c.value[0]),1),i.value?(m(),p("div",W,[n("p",null,l(c.value[1].translation),1)])):(m(),p("div",O,[f(h,{onClick:M,title:"🤔"})]))]),n("div",N,[f(h,{onClick:s[0]||(s[0]=v=>r(!0)),title:"Помню"}),f(h,{onClick:s[1]||(s[1]=v=>r(!1)),title:"Не помню"})])],64))}}),q=V(S,[["__scopeId","data-v-1712490d"]]);export{q as default};
