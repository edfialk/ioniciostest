import{_ as b,d as h,r as n,o as g,c as _,w as l,I as f,a as y,b as v,e as I,f as S,g as H,h as o,p as C,i as V,j as t,k as e}from"./index-42f33d8c.js";import{_ as A}from"./StepForm-84b2e313.js";const N=h({components:{IonContent:f,IonHeader:y,IonPage:v,IonToolbar:I,IonButtons:S,IonBackButton:H,StepForm:A},data(){return{questions:[{id:"index",title:"Patient hemodynamics",options:[{label:"Normal",jump:"hemo normal"},{label:"Abnormal",jump:"hemo abnormal"}]},{id:"hemo normal",title:"Hemodynamically Normal",subtitle:`
            <p>Admit to ward</p>
            <p>VS q2 hrs then q4 hrs</p>
            <p>Admission Hct**</p>
            <p class="small">**Golden J et al. Admission hematocrit predicts the need for transfusion secondary to hemorrhage in pediatric blunt trauma patients. J Trauma Acute Care Surg. 2015 Oct;79(4):555-62.</p>
          `,options:[{label:"Admit Hct < 35",jump:"hct lt 35"},{label:"Admit Hct ≥ 35",jump:"hct gt 35"}]},{id:"hct lt 35",title:"Admission hematocrit < 35",subtitle:`
            <p>Bathroom privileges and NPO</p>
            <p>
              If VS becoming abnormal/unstable, check stat Hct and consider transfer to PICU
            </p>
            <p>If VS normal/stable after 12 hrs of observation, recheck Hct</p>
          `,options:[{label:"Hct stable at 12 hours (< 3 point change)",jump:"hct stable"},{label:"Hct unstable at 12 hours (≥ 3 point change)",jump:"hct unstable"}]},{id:"hct stable",title:"Hematocrit stable at 12 hours (< 3 point change)",subtitle:`
            <p>Regular diet</p>
            <p>Ambulate</p>
            <p>Evaluate for discharge after 6 hours</p>
            <p>&nbsp;</p>
            <p class='ul'>Discharge criteria</p>
            <p>Tolerating diet</p>
            <p>Minimal abdominal pain</p>
            <p>Normal vital signs</p>
            <p>Activity restriction: highest grade plus 2 weeks</p>
          `},{id:"hct unstable",title:"Hematocrit unstable at 12 hours (≥ 3 point change)",subtitle:`
            <p>Recheck Hct q6 hrs until stable</p>
            <p>Consider transfusion if Hct &lt; 21</p>
            <p>Consider transfer to PICU if VS abnormal/unstable</p>
          `,options:[{label:"Hct stabilizes, pt remains on floor",jump:"hct stable"},{label:"Transfer to PICU",jump:"hemo abnormal"}]},{id:"hct gt 35",title:"Admission hematocrit ≥ 35",subtitle:`
            <p>No activity restriction</p>
            <p>Regular diet</p>
            <p>If stable after 12 hours of observation, evaluate for discharge</p>
            <p>&nbsp;&/p>
            <p class='ul'>Discharge criteria</p>
            <p>Tolerating diet</p>
            <p>Minimal abdominal pain</p>
            <p>Normal vital signs</p>
            <p>Activity restriction:  highest grade plus 2 weeks</p>
          `},{id:"hemo abnormal",title:"Hemodynamically abnormal",subtitle:`
            <p>Defined as tachycardia/hypotension for age after initial volume resuscitation (see table)</p>
            <p class="strong i">Contact Pediatric Surgery as soon as possible</p>
            <p>&nbsp;</p>
            <p>Admit to PICU</p>
            <p class="strong">Consider transfusion if ongoing abnormal VS after initial 20 mL/kg isotonic IVF bolus, and/or Hct &lt; 21</p>
            <p>NPO until VS normal and Hct stable x 12 hours</p>
            <p>Bedrest until VS normal, then bathroom privileges</p>
            <p>VS per ICU routine (at least q1 hr x 4 hrs, then q4 hrs if stable)</p>
            <p>Hct q6 hrs until stable x 2</p>
          `,options:[{label:"VS normalize and HCT stable x 12 hours",jump:"hemo normal"},{label:"Continued instability",jump:"continued"}]},{id:"continued",title:"Continued instability",subtitle:`
            <p class="ul">Consider:</p>
            <p>Angioembolization by interventional radiology for signs of ongoing bleeding [Not indicated for contrast blush on CT with normal/stable VS]</p>
            <p>Operative exploration for ongoing abnormal VS despite pRBC transfusion</p>
            <p>MTP activation</p>
          `}]}}}),s=a=>(C("data-v-12d2ca82"),a=a(),V(),a),P=s(()=>t("h2",{class:"ion-text-wrap"},"Solid Organ Injury Management Protocol*",-1)),j=s(()=>t("p",null,[t("a",{href:"https://pubmed.ncbi.nlm.nih.gov/28941929/"},"Pubmed")],-1)),k=s(()=>t("div",{class:"table-scroll"},[t("p",{class:"strong"},"Normal Vital Signs and Blood Volume by Age"),t("table",null,[t("thead",null,[t("tr",null,[t("td",null,"Age"),t("td",null,"Heart rate (beats/min)"),t("td",null,"Systolic BP (mm Hg)"),t("td",null,"Respiratory rate (breaths/min)"),t("td",null,"Blood volume (ml/kg body weight)")])]),t("tbody",null,[t("tr",null,[t("td",null,"Neonate"),t("td",null,"100-160"),t("td",null,"60-90"),t("td",null,"30-60"),t("td",null,"90")]),t("tr",null,[t("td",null,"Infant"),t("td",null,"90-120"),t("td",null,"80-100"),t("td",null,"30-40"),t("td",null,"80")]),t("tr",null,[t("td",null,"2-5 years"),t("td",null,"95-140"),t("td",null,"80-120"),t("td",null,"20-30"),t("td",null,"80")]),t("tr",null,[t("td",null,"5-12 years"),t("td",null,"80-120"),t("td",null,"90-110"),t("td",null,"15-20"),t("td",null,"80")]),t("tr",null,[t("td",null,"> 12 years"),t("td",null,"60-100"),t("td",null,"100-120"),t("td",null,"12-15"),t("td",null,"70")])])])],-1)),B=s(()=>t("div",null,[t("p",null,[t("span",{class:"ul"},"Definitions"),e(":"),t("br"),t("span",{class:"strong"},"Normal vital signs (VS):"),e(" normal for age after initial volume resuscitation"),t("br"),t("span",{class:"strong"},"Hct:"),e(" hematocrit"),t("br"),t("span",{class:"strong"},"NPO:"),e(" nothing by mouth"),t("br"),t("span",{class:"strong"},"pRBC:"),e(" packed red blood cell"),t("br"),t("span",{class:"strong"},"MTP:"),e(" massive transfusion protocol ")])],-1));function x(a,T,q,w,O,R){const i=n("ion-back-button"),r=n("ion-buttons"),p=n("ion-toolbar"),u=n("ion-header"),c=n("step-form"),d=n("ion-content"),m=n("ion-page");return g(),_(m,null,{default:l(()=>[o(u,{translucent:!0},{default:l(()=>[o(p,null,{default:l(()=>[o(r,{slot:"start"},{default:l(()=>[o(i,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),o(d,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:l(()=>[P,j,o(c,{questions:a.questions},null,8,["questions"]),k,B]),_:1})]),_:1})}const $=b(N,[["render",x],["__scopeId","data-v-12d2ca82"]]);export{$ as default};
