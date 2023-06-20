import{_ as c,d,r as e,o as m,c as b,w as o,I as g,a as h,b as f,e as _,f as x,g as C,h as t,p as y,i as k,j}from"./index-27e23b95.js";import{_ as L}from"./StepForm-8fde7436.js";const v=d({components:{IonContent:g,IonHeader:h,IonPage:f,IonToolbar:_,IonButtons:x,IonBackButton:C,StepForm:L},data(){return{questions:[{id:"index",title:"",options:[{label:"Initial spontaneous pneumothorax",jump:"initial"},{label:"Recurrent spontaneous pneumothorax: After resolution of initial pneumothorax treated with observation or chest tube. Patients with recurrent pneumothorax after VATS should be managed according to attending discretion",jump:"recurrent"}]},{id:"initial",title:"Initial spontaneous pneumothorax",options:[{label:"Small(< 20%)",jump:"small"},{label:"Large (≥ 20%)",jump:"large"}]},{id:"small",title:"Small (<20%)",subtitle:`
            <p>Observe in Emergency Department (ED)</p>
            <p>Repeat CXR 4-6 hours to ensure stability</p>
          `,options:[{label:"Pneumothorax stable to improved",jump:"improved"},{label:"Pneumothorax increased to > 20%",jump:"large"}]},{id:"improved",title:"Pneumothorax stable to improved",subtitle:`
            <p>Discharge from ED if family comfortable and patient asymptomatic, with plan for follow-up (PCP and/or Surgery team)</p>
            <p>OR</p>
            <p>Continue observation in ED or admit for observation if family not comfortable, attending preference, and/or concern for symptoms</p>
          `},{id:"large",title:"Large (> 20%)",subtitle:`
            <p>Chest tube (CT) placed to suction (typically 8.5F pigtail catheter),* then CXR</p>
            <p class="small">* Consider needle aspiration as initial intervention depending on available resources/staff</p>
          `,options:[{label:"Lung expanded",jump:"lung expanded"},{label:"Lung not expanded",jump:"lung not expanded"}]},{id:"lung not expanded",title:"Lung not expanded",subtitle:`
            <p>Consider CT replacement or 2nd CT.**</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,options:[{label:"Lung expanded",jump:"lung expanded"},{label:"If still not adequately expanded, proceed to high risk algorithm",jump:"high risk"}]},{id:"lung expanded",title:"Lung expanded",subtitle:"Suction for 20-24 hours, then CXR",options:[{label:"Lung expanded w/ <10% collapse, no air leak",jump:"le lt 10 collapse"},{label:"Lung collapses >10%, +/- air leak",jump:"lung collapse"}]},{id:"le lt 10 collapse",title:"Lung expanded w/ < 10% collapse, no air leak",subtitle:"Water seal (WS), CXR in 4-6 hours",options:[{label:"Lung remains expanded, no air leak",jump:"remains expanded"},{label:"Lung collapses >10%, +/- air leak",jump:"collapse gt 10"}]},{id:"remains expanded",title:"Lung remains expanded, no air leak",subtitle:"Continue WS for 20-24 hours and then repeat CXR prior to CT removal"},{id:"collapse gt 10",title:"Lung collapses >10%, +/- air leak",subtitle:`
            <p>Consider new CT**, continue suction, CXR(s) < 12 hrs and 24-48 hrs</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,options:[{label:"Increasing lung collapse on subsequent CXR",jump:"inc lung coll"},{label:"Ongoing air leak after 3 days, possibly consider Chest CT",jump:"ong air leak"},{label:"Lung stable at 24-48 hrs, no air leak",jump:"lung stable"}]},{id:"inc lung coll",title:"Increasing lung collapse on subsequent CXR",subtitle:`
            <p>Lung not expanded – consider CT replacement or 2nd CT.**</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,options:[{label:"Lung expanded",jump:"lung expanded"},{label:"If still not adequately expanded, proceed to high risk algorithm",jump:"high risk"}]},{id:"ong air leak",title:"Ongoing air leak after 3 days, possibly consider Chest CT",subtitle:"OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis"},{id:"lung stable",title:"Lung stable at 24-48 hrs, no air leak",subtitle:"Water seal (WS), CXR in 4-6 hours",options:[{label:"Lung remains expanded, no air leak",jump:"remains expanded"},{label:"Lung collapses >10%, +/- air leak",jump:"collapse gt 10"}]},{id:"high risk",title:"High Risk Algorithm",subtitle:`
            <p>Large (> 20%)</p>
            <p>Lung not expanding despite adequate chest tube(s) placement**, and/or continuous air leak</p>
            <p>Possibly consider Chest CT</p>
            <p>OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `},{id:"recurrent",title:"Recurrent spontaneous pneumothorax*",subtitle:`
            <p class="small">* After resolution of initial pneumothorax treated with observation or chest tube.  Patients with recurrent pneumothorax after VATS should be managed according to attending discretion</p>
          `,options:[{label:"Small (< 20%)",jump:"small recurrent"},{label:"Large (> 20%)",jump:"large recurrent"}]},{id:"small recurrent",title:"Small recurrent pneumothorax (< 20%)",subtitle:`
            <p>Observe in Emergency Department (ED) or as inpatient</p>
            <p>Repeat CXR 4-6 hours to ensure stability</p>
          `,options:[{label:"Pneumothorax stable to improved",jump:"improved"},{label:"Pneumothorax increased to > 20%",jump:"large recurrent"}]},{id:"large recurrent",title:"Large recurrent pneumothorax ( > 20%)",subtitle:`
            <p>Chest tube placed to suction (8.5 F), possible replacement or second tube if lung not completely expanded**</p>
            <p>Possibly consider chest CT</p>
            <p>Management per discussion with attending and family, consider chest tube management or OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `}]}}}),R=n=>(y("data-v-cc9bb2d0"),n=n(),k(),n),S=R(()=>j("h2",{class:"ion-text-wrap"},"Spontaneous Pneumothorax Protocol",-1));function w(n,I,P,T,X,q){const a=e("ion-back-button"),s=e("ion-buttons"),i=e("ion-toolbar"),l=e("ion-header"),r=e("step-form"),p=e("ion-content"),u=e("ion-page");return m(),b(u,null,{default:o(()=>[t(l,{translucent:!0},{default:o(()=>[t(i,null,{default:o(()=>[t(s,{slot:"start"},{default:o(()=>[t(a,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),t(p,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:o(()=>[S,t(r,{questions:n.questions},null,8,["questions"])]),_:1})]),_:1})}const B=c(v,[["render",w],["__scopeId","data-v-cc9bb2d0"]]);export{B as default};
