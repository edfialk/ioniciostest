import{_ as c,d as u,r as s,o as g,c as m,w as t,I as f,a as b,b as h,e as _,f as y,g as C,h as e,p as I,i as w,j as v}from"./index-27e23b95.js";import{_ as S}from"./StepForm-8fde7436.js";const M=u({components:{IonContent:f,IonHeader:b,IonPage:h,IonToolbar:_,IonButtons:y,IonBackButton:C,StepForm:S},data(){return{questions:[{id:"index",title:"Patient presents with anterior mediastinal mass",subtitle:`
          <p>Consult hematology/oncology, with initial labs per heme/onc, and Pediatric Surgery</p>
          <p class="ul"><strong>DAILY DISCUSSION</strong> amongst teams regarding plans for imaging and diagnosis</p>
        `,options:[{label:"Next",jump:"evaluate"}]},{id:"evaluate",subtitle:`
            <p><strong>Evaluate for signs/symptoms:</strong></p>
            <ul>
              <li>Chest pain/fullness</li>
              <li>Superior vena cava syndrome</li>
              <li>Shortness of breath</li>
              <li>Hoarseness</li>
              <li>Orthopnea</li>
              <li>Syncope</li>
              <li>Cough</li>
              <li>Dysphagia</li>
            </ul>
            <p><strong>Initial Labs:</strong> CBC/diff, CMP, LDH, uric acid, Phosphorus</p>
            <p><strong>Initial Imaging:</strong> 2-view CXR and non-sedated Transthoracic echocardiogram (sitting and supine)</p>
            <p><strong>PE:</strong> Examine for lymphadenopathy, effusion</p>
            <p class="strong">Consider early management:</p>
            <p>Steroids (<span class="ul">especially with airway/vascular compression</span>)</p>
            <p>Tumor Lysis Management</p>
          `,options:[{label:"Next",jump:"picu"}]},{id:"picu",subtitle:`
            <p>PICU admission if concern for airway or vascular compression</p>
            <p>Consults: CT diagnostics (pediatric radiology) and Anesthesia</p>
            <p class="ul"><strong>DISCUSSION</strong> amongst all teams regarding plan</p>
            <p>Additional imaging if needed: CT chest with IV contrast: assess airway and SVC compression</p>
          `,options:[{label:"Next",jump:"diagnosis"}]},{id:"diagnosis",subtitle:`
            <p><strong>Diagnosis</strong> by CBC, pleural/pericardial fluid aspiration, or bone marrow biopsy</p>
          `,options:[{label:"Not possible",jump:"not possible"},{label:"Possible",jump:"sedation"}]},{id:"sedation",subtitle:`
            <p>If patient requires sedation, done in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>
            <p>Or, in PICU with local anesthesia only, with anesthesia staff or PICU attending</p>
          `},{id:"not possible",subtitle:`
            <p><strong>Diagnosis</strong> by lymph node biopsy or palpable extension of mediastinal mass</p>
          `,options:[{label:"Not possible",jump:"not possible 2"},{label:"Possible",jump:"possible 2"}]},{id:"possible 2",subtitle:`
            <p>May be performed within 48-72 hrs of starting steroids</p>
            <p><strong>When safe**</strong>, in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>
            <p class="strong">** Please see <span class="ul">anesthesia safety guideliness for AMM</span></p>
          `},{id:"not possible 2",subtitle:`
            <p><strong>Multidsciplinary discussion</strong> about diagnosis for biopsy of mediastinal mass</p>
            <ul>
              <li>CT or US-guided biopsy in diagnostics with anesthesia staff present</li>
              <li>Or, in OR with anesthesia staff</li>
              <li>May be done within 48-72 hrs of starting steroids, with daily re-assessment.</li>
              <li><span class="ul">Avoid general anesthesia and ECMO</span>. Consider treatment based on probably diagnosis if necessary to avoid general anesthesia.</li>
            </ul>
          `}]}}}),P=n=>(I("data-v-0eff3f20"),n=n(),w(),n),x=P(()=>v("h2",{class:"ion-text-wrap"},"Anterior Mediastinal Mass (AMM) Management",-1));function O(n,B,A,N,j,D){const o=s("ion-back-button"),a=s("ion-buttons"),i=s("ion-toolbar"),l=s("ion-header"),r=s("step-form"),p=s("ion-content"),d=s("ion-page");return g(),m(d,null,{default:t(()=>[e(l,{translucent:!0},{default:t(()=>[e(i,null,{default:t(()=>[e(a,{slot:"start"},{default:t(()=>[e(o,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),e(p,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:t(()=>[x,e(r,{questions:n.questions},null,8,["questions"])]),_:1})]),_:1})}const k=c(M,[["render",O],["__scopeId","data-v-0eff3f20"]]);export{k as default};
