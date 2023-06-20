import{_ as p,d,r as e,o as _,c as f,w as t,I as m,a as C,b as v,e as b,f as g,g as I,h as o,p as h,i as y,j as E}from"./index-27e23b95.js";import{_ as V}from"./StepForm-8fde7436.js";const O=d({components:{IonContent:m,IonHeader:C,IonPage:v,IonToolbar:b,IonButtons:g,IonBackButton:I,StepForm:V},data(){return{questions:[{id:"index",title:"<p>Consult from PICU to pediatric surgery for non-cardiac, adolescent ECMO</p><p>Is patient ECMO candidate?</p>",options:[{label:"Yes",jump:"ecmo yes"},{label:"No",jump:"ecmo no"}]},{id:"ecmo no",title:"No ECMO"},{id:"ecmo yes",title:"Does patient require VV or VA Ecmo?",options:[{label:"VV",jump:"vv"},{label:"VA",jump:"va"}]},{id:"vv",title:"Pediatric surgery to cannulate for VV ECMO. Can do percutaneous neck or groin access (surgeon preference). If need cannulation advice, call ECMO/ECLS Adult attending."},{id:"va",title:"Does patient require groin cannulation?",options:[{label:"Yes",jump:"va yes"},{label:"No",jump:"va no"}]},{id:"va no",title:"Pediatric surgery to cannulate neck for VA ECMO"},{id:"va yes",title:"Pediatric Surgery attending/fellow to contact vascular surgeon on call",subtitle:`
            <p>Discussion points</p>
            <ol>
              <li>Percutaneous vs open<ul><li>Perc will be done in OR</li></ul></li>
              <li>Should always do distal perfusion catheter</li>
              <li>Use of closure device</li>
              <li>Decannulation plan</li>
            </ol>
          `}]}}}),M=n=>(h("data-v-af9754c2"),n=n(),y(),n),j=M(()=>E("h2",{class:"ion-text-wrap"},"Adolescent ECMO Cannulation at DCH",-1));function k(n,w,A,P,S,q){const a=e("ion-back-button"),s=e("ion-buttons"),i=e("ion-toolbar"),l=e("ion-header"),c=e("step-form"),r=e("ion-content"),u=e("ion-page");return _(),f(u,null,{default:t(()=>[o(l,{translucent:!0},{default:t(()=>[o(i,null,{default:t(()=>[o(s,{slot:"start"},{default:t(()=>[o(a,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),o(r,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:t(()=>[j,o(c,{questions:n.questions},null,8,["questions"])]),_:1})]),_:1})}const D=p(O,[["render",k],["__scopeId","data-v-af9754c2"]]);export{D as default};