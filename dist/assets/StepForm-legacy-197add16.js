System.register(["./index-legacy-b080bfdf.js"],(function(e,t){"use strict";var i,n,s,o,l,a,d,c,p,r,h,u,f,v,g,x;return{setters:[e=>{i=e.F,n=e.l,s=e.A,o=e.o,l=e.E,a=e.j,d=e.G,c=e.H,p=e.J,r=e.K,h=e.L,u=e.M,f=e.h,v=e.N,g=e.O,x=e.P}],execute:function(){var t=document.createElement("style");t.textContent=".sf{min-height:270px;margin:20px 0;padding:64px 5% 0;position:relative;text-align:left;width:100%;font-size:15px}.sf-footer{font-weight:300;line-height:1.2;right:0;width:100%;padding:20px;display:flex;justify-content:center}.sf-footer ion-icon{margin:0 10%;font-size:32px}.sf-title{font-size:2em;font-weight:900}.sf-subtitle{font-size:1.2em;margin-top:10px}.sf-options-wrap{width:100%}.sf-options{list-style-type:none;margin:0;min-width:160px;padding:0}.sf-options li{font-weight:900;border:1px solid;cursor:default;font-weight:300;line-height:1.24;margin:.5em 0 .6em;overflow:hidden;padding:.62em .68em;position:relative;-webkit-user-select:none;user-select:none}.sf-option{font-weight:900}.icon-disabled{color:#ddd}@media (prefers-color-scheme: dark){.icon-disabled{color:#333}}\n",document.head.appendChild(t);const m={class:"sf-container"},w=["innerHTML"],I=["innerHTML"],k={key:2,class:"sf-options-wrap"},y={class:"sf-options"},b=["onClick"],M={key:3,class:"my-1"},j={class:"sf-footer"};e("_",{__name:"StepForm",props:["questions"],emits:["answer"],setup(e,{expose:t,emit:q}){const C=e,H=i({activeId:C.questions[0].id,path:[C.questions[0].id],pathIndex:0}),L=n(null),z=s((()=>H.pathIndex>0)),T=s((()=>H.pathIndex<H.path.length-1));t({reset:()=>{H.activeId=C.questions[0].id,H.path=[C.questions[0].id],H.pathIndex=0}});const _=()=>{H.pathIndex<=0||(H.pathIndex--,H.activeId=H.path[H.pathIndex],L.value.scrollIntoView({behavior:"auto"}))},V=()=>{H.pathIndex>=H.path.length-1||(H.pathIndex++,H.activeId=H.path[H.pathIndex],L.value.scrollIntoView({behavior:"auto"}))};return(e,t)=>(o(),l("div",{class:"sf",ref_key:"content",ref:L},[a("div",m,[(o(!0),l(d,null,c(C.questions,(e=>p((o(),l("div",{key:e.id,class:"question"},[e.title?(o(),l("div",{key:0,class:"sf-title",innerHTML:e.title},null,8,w)):h("",!0),e.subtitle?(o(),l("div",{key:1,class:"sf-subtitle",innerHTML:e.subtitle},null,8,I)):h("",!0),e.options?(o(),l("div",k,[a("ul",y,[(o(!0),l(d,null,c(e.options,((t,i)=>(o(),l("li",{key:i,onClick:i=>((e,t)=>{q("answer",{question:e,option:t}),t.jump&&(t.jump!=H.path[H.pathIndex+1]&&H.path.splice(H.pathIndex+1),H.activeId=t.jump,H.path.push(H.activeId),H.pathIndex++,L.value.scrollIntoView({behavior:"auto"}))})(e,t)},u(t.label),9,b)))),128))])])):(o(),l("div",M," "))],512)),[[r,H.activeId==e.id]]))),128)),a("div",j,[f(v(x),{icon:v("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>"),onClick:_,class:g(["icon-large",{"icon-disabled":!z.value}])},null,8,["icon","class"]),f(v(x),{icon:v("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100' class='ionicon-fill-none'/></svg>"),onClick:V,class:g(["icon-large",{"icon-disabled":!T.value}])},null,8,["icon","class"])])])],512))}})}}}));