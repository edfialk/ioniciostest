import{_ as f,d as m,r as o,o as b,c as _,w as s,I as h,a as g,b as w,e as I,f as v,g as C,h as t,p as y,i as P,j as e}from"./index-42f33d8c.js";import{_ as k}from"./StepForm-84b2e313.js";const S=m({components:{IonContent:h,IonHeader:g,IonPage:w,IonToolbar:I,IonButtons:v,IonBackButton:C,StepForm:k},data(){return{questions:[{id:"index",title:"Identification of a Problematic Port or Hickman",options:[{label:"Broken externally",jump:"broken"},{label:"Exposed cuff or port",jump:"exposed"},{label:"Other (sluggish, won't aspirate, etc)",jump:"other"},{label:"Infected, needing removal",jump:"infected"}]},{id:"broken",title:"Consult Vascular Access Team for repair",options:[{label:"Unable to repair",jump:"unable to repair"}]},{id:"unable to repair",title:"Consult Pediatric Surgery or IR for replacement (team that placed line)"},{id:"exposed",title:"Consult Pediatric Surgery or IR for replacement (team that placed line)"},{id:"other",title:"Obtain chest x-ray",subtitle:"Is there an obvious kink, malposition or change from post-placement imaging?",options:[{label:"Yes",jump:"obvious issue"},{label:"No",jump:"no issue"}]},{id:"obvious issue",title:"Consult Pediatric Surgery or IR for review and possible replacement"},{id:"no issue",title:"No issue with central line on xray, consider tPA dwell",subtitle:`
            <p>See "De-Clotting Procedure for Vascular Access Devices"</p>	
            <ul>
              <li>tPA 2 mg/2 mL, administer 110% of catheter priming volume</li>
              <li>Allow to dwell for 30 min to 2 hours</li>
              <li>Withdraw and discard appropriate blood volume</li>
            </ul>
          `,options:[{label:"Unsuccessful",jump:"dwell unsuccessful"}]},{id:"dwell unsuccessful",title:"Consider tPA infusion",subtitle:`
            <p>See "tPA infusion for De-clotting of Dialysis and Non-dialysis Central Venous Catheters"</p>
            <ul>
              <li>Continuous infusion</li>
              <li>Check for blood return at 2 hours and 4 hours</li>
            </ul>
          `,options:[{label:"Unsuccessful or infusion not safe for patient",jump:"infusion unsuccessful"}]},{id:"infusion unsuccessful",title:"Consider IR for port/line study, possible fibrin sheath stripping, possible line replacement",subtitle:"If unsuccessful, consult Pediatric Surgery or IR for review and possible replacement"},{id:"infected",title:"Consult Pediatric Surgery or IR for line removal",subtitle:"Line to be replaced after at least two negative blood cultures (after line removal) x at least 48 hours each (see CLABSI protocol.)"}]}}}),i=n=>(y("data-v-3be7702d"),n=n(),P(),n),x=i(()=>e("h2",{class:"ion-text-wrap"},"Central Line Troubleshooting Algorithm",-1)),A=i(()=>e("p",null,"Notes:",-1)),j=i(()=>e("ul",null,[e("li",null," The team (Pediatric Surgery or IR) who placed the line should be first consulted for removal or replacement, but we are willing to co-manage on a case-by-case basis. "),e("li",null," Peds Surgery is fine with IR replacing lines, as needed, if patient is already sedated with them and line can’t be salvaged. "),e("li",null," tPA (Alteplase) dwell and infusion can be coordinated with infusion clinic. VAT (Vascular access team) may be able to assist. "),e("li",null,"Power Hickmans are not compatible with ethanol locks"),e("li",null," Power Hickman cuffs are 2 or 5 cm above the retention hub (most are 5 cm) "),e("li",null,"Lines do not need to be re-sutured if 4 weeks or older")],-1));function B(n,R,L,T,V,N){const l=o("ion-back-button"),a=o("ion-buttons"),r=o("ion-toolbar"),u=o("ion-header"),c=o("step-form"),d=o("ion-content"),p=o("ion-page");return b(),_(p,null,{default:s(()=>[t(u,{translucent:!0},{default:s(()=>[t(r,null,{default:s(()=>[t(a,{slot:"start"},{default:s(()=>[t(l,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),t(d,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:s(()=>[x,A,j,t(c,{questions:n.questions},null,8,["questions"])]),_:1})]),_:1})}const D=f(S,[["render",B],["__scopeId","data-v-3be7702d"]]);export{D as default};
