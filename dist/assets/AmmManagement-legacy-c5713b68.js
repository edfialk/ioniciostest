System.register(["./index-legacy-b1571f95.js","./StepForm-legacy-dad91f87.js"],(function(s,n){"use strict";var e,i,t,a,o,l,r,p,d,u,g,c,f,m,b,h,y;return{setters:[s=>{e=s._,i=s.d,t=s.r,a=s.o,o=s.c,l=s.w,r=s.I,p=s.a,d=s.b,u=s.e,g=s.f,c=s.g,f=s.h,m=s.p,b=s.i,h=s.j},s=>{y=s._}],execute:function(){var n=document.createElement("style");n.textContent="ion-title[data-v-0eff3f20]{position:static;padding:2px 32px}\n",document.head.appendChild(n);const C=i({components:{IonContent:r,IonHeader:p,IonPage:d,IonToolbar:u,IonButtons:g,IonBackButton:c,StepForm:y},data:()=>({questions:[{id:"index",title:"Patient presents with anterior mediastinal mass",subtitle:'\n          <p>Consult hematology/oncology, with initial labs per heme/onc, and Pediatric Surgery</p>\n          <p class="ul"><strong>DAILY DISCUSSION</strong> amongst teams regarding plans for imaging and diagnosis</p>\n        ',options:[{label:"Next",jump:"evaluate"}]},{id:"evaluate",subtitle:'\n            <p><strong>Evaluate for signs/symptoms:</strong></p>\n            <ul>\n              <li>Chest pain/fullness</li>\n              <li>Superior vena cava syndrome</li>\n              <li>Shortness of breath</li>\n              <li>Hoarseness</li>\n              <li>Orthopnea</li>\n              <li>Syncope</li>\n              <li>Cough</li>\n              <li>Dysphagia</li>\n            </ul>\n            <p><strong>Initial Labs:</strong> CBC/diff, CMP, LDH, uric acid, Phosphorus</p>\n            <p><strong>Initial Imaging:</strong> 2-view CXR and non-sedated Transthoracic echocardiogram (sitting and supine)</p>\n            <p><strong>PE:</strong> Examine for lymphadenopathy, effusion</p>\n            <p class="strong">Consider early management:</p>\n            <p>Steroids (<span class="ul">especially with airway/vascular compression</span>)</p>\n            <p>Tumor Lysis Management</p>\n          ',options:[{label:"Next",jump:"picu"}]},{id:"picu",subtitle:'\n            <p>PICU admission if concern for airway or vascular compression</p>\n            <p>Consults: CT diagnostics (pediatric radiology) and Anesthesia</p>\n            <p class="ul"><strong>DISCUSSION</strong> amongst all teams regarding plan</p>\n            <p>Additional imaging if needed: CT chest with IV contrast: assess airway and SVC compression</p>\n          ',options:[{label:"Next",jump:"diagnosis"}]},{id:"diagnosis",subtitle:"\n            <p><strong>Diagnosis</strong> by CBC, pleural/pericardial fluid aspiration, or bone marrow biopsy</p>\n          ",options:[{label:"Not possible",jump:"not possible"},{label:"Possible",jump:"sedation"}]},{id:"sedation",subtitle:"\n            <p>If patient requires sedation, done in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>\n            <p>Or, in PICU with local anesthesia only, with anesthesia staff or PICU attending</p>\n          "},{id:"not possible",subtitle:"\n            <p><strong>Diagnosis</strong> by lymph node biopsy or palpable extension of mediastinal mass</p>\n          ",options:[{label:"Not possible",jump:"not possible 2"},{label:"Possible",jump:"possible 2"}]},{id:"possible 2",subtitle:'\n            <p>May be performed within 48-72 hrs of starting steroids</p>\n            <p><strong>When safe**</strong>, in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>\n            <p class="strong">** Please see <span class="ul">anesthesia safety guideliness for AMM</span></p>\n          '},{id:"not possible 2",subtitle:'\n            <p><strong>Multidsciplinary discussion</strong> about diagnosis for biopsy of mediastinal mass</p>\n            <ul>\n              <li>CT or US-guided biopsy in diagnostics with anesthesia staff present</li>\n              <li>Or, in OR with anesthesia staff</li>\n              <li>May be done within 48-72 hrs of starting steroids, with daily re-assessment.</li>\n              <li><span class="ul">Avoid general anesthesia and ECMO</span>. Consider treatment based on probably diagnosis if necessary to avoid general anesthesia.</li>\n            </ul>\n          '}]})}),w=(s=>(m("data-v-0eff3f20"),s=s(),b(),s))((()=>h("h2",{class:"ion-text-wrap"},"Anterior Mediastinal Mass (AMM) Management",-1)));s("default",e(C,[["render",function(s,n,e,i,r,p){const d=t("ion-back-button"),u=t("ion-buttons"),g=t("ion-toolbar"),c=t("ion-header"),m=t("step-form"),b=t("ion-content"),h=t("ion-page");return a(),o(h,null,{default:l((()=>[f(c,{translucent:!0},{default:l((()=>[f(g,null,{default:l((()=>[f(u,{slot:"start"},{default:l((()=>[f(d,{"default-href":"/"})])),_:1})])),_:1})])),_:1}),f(b,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:l((()=>[w,f(m,{questions:s.questions},null,8,["questions"])])),_:1})])),_:1})}],["__scopeId","data-v-0eff3f20"]]))}}}));
