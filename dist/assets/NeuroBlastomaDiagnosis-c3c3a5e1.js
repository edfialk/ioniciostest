import{_ as c,d as u,r as t,o as d,c as g,w as a,I as b,a as _,b as f,e as y,f as h,g as I,h as o,p as S,i as N,j as w}from"./index-42f33d8c.js";import{_ as A}from"./StepForm-84b2e313.js";const B=u({components:{IonContent:b,IonHeader:_,IonPage:f,IonToolbar:y,IonButtons:h,IonBackButton:I,StepForm:A},data(){return{questions:[{id:"index",title:"Clinical Concern for Neuroblastoma",subtitle:`
            <p class="small">Clinical concerns include MIBG avid lesion, child with adrenal mass, child with paraspinal mass, child with orbital mass “raccoon eyes.”</p>
          `,options:[{label:"Initial Screen: CBC, CMP, urine VMA/HVA, MRI or CT C/A/P",jump:"initial"}]},{id:"initial",title:"Findings c/w NBL: Elevated VMA/HVA, adrenal or paraspinous mass on imaging",subtitle:`
            <p class="small">Immediate Findings of Metastatic Disease: Imaging findings of cortical bone abnormality; additional tumor masses not contiguous with primary tumor; diffuse bone marrow signal abnormality; significant CBC abnormalities without other clinical explanation</p>
          `,options:[{label:"No Findings of Metastatic Disease",jump:"no metastatic"},{label:"Findings c/w Metastatic Disease",jump:"metastatic"}]},{id:"no metastatic",title:"No Findings of Metastatic Disease",options:[{label:"L1 tumor, age <6-12 mo; size <3-5cm",jump:"l1tumor"},{label:"L2 any age or L1 > 12 mo;",jump:"l2"}]},{id:"l1tumor",title:"L1 tumor, age &lt;6-12 mo; size &lt;3-5cm",subtitle:`
            <p><span class="strong">No up front biopsy -</span> Await staging</p>
            <p>Complete indicated staging work-up</p>
          `,options:[{label:"Mets",jump:"mets"},{label:"No mets",jump:"no mets"}]},{id:"no mets",title:"No mets",subtitle:"<p>Observe, no biopsy, no resection indicated</p>"},{id:"mets",title:"For pathology:",subtitle:`
            <p><em>PLEASE handle gently. No touch preps</em></p>
            <p><strong>FFPE (need at least 2 blocks):</strong><br>
            Histology (need MKI)<br>
            N-myc FISH (4 unstains)<br>
            Microarray (16 unstains)<br>
            Ploidy (send out to ARUP)</p>
          `,options:[{label:"Surgery",jump:"age lt 18mo"}]},{id:"l2",title:"L2 any age or L1 > 12 mo",subtitle:`
            <p>Surgical bx of tumor required, 1cm³ tissue.</p>
            <p>PLEASE indicate r/o NB in pathology order</p>
            <p>Strongly consider max safe resection, may be definitive tx once</p>
          `,options:[{label:"Furger Staging work-up based on pathology and biology",jump:"mets"}]},{id:"metastatic",title:"Findings c/w Metastatic Disease",options:[{label:"Age < 18 mo",jump:"age lt 18mo"},{label:"Age ≥ 18 mo",jump:"age gt 18mo"}]},{id:"age lt 18mo",title:"Surgical bx of tumor required, 1cm³ tissue",subtitle:`
            <p>PLEASE indicate r/o NB in pathology order</p>
            <p>Consider BM at same time</p>
          `,options:[{label:"Timeframe for remainder of Staging work-up based on clinical stability and need for treatment initiation",jump:"mets"}]},{id:"age gt 18mo",title:"Surgical bx strongly recommended, 1cm³ tissue.",subtitle:`
            <p>Alt 1: Core Biopsy of tumor, obtain multiple cores</p>
            <p>Alt 2: BM only</p>
          `,options:[{label:"Timeframe for remainder of Staging work-up based on clinical stability and need for treatment initiation",jump:"age gt 18mo b"}]},{id:"age gt 18mo b",title:"For pathology:",subtitle:`
            <p class="em">PLEASE handle gently. No touch preps.</p>
            <p>FFPE (need at least 2 blocks):<br/>
            Histology (need MKI)<br/>
            N-myc FISH (4 unstains)<br/>
            ALK mutational analysis (NGS) (4 unstains)</p>
          `}]}}}),C=e=>(S("data-v-3a7240f6"),e=e(),N(),e),F=C(()=>w("h2",{class:"ion-text-wrap"},"Neuroblastoma Diagnosis Algorithm",-1));function M(e,j,x,L,k,E){const i=t("ion-back-button"),n=t("ion-buttons"),s=t("ion-toolbar"),l=t("ion-header"),r=t("step-form"),p=t("ion-content"),m=t("ion-page");return d(),g(m,null,{default:a(()=>[o(l,{translucent:!0},{default:a(()=>[o(s,null,{default:a(()=>[o(n,{slot:"start"},{default:a(()=>[o(i,{"default-href":"/"})]),_:1})]),_:1})]),_:1}),o(p,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:a(()=>[F,o(r,{questions:e.questions},null,8,["questions"])]),_:1})]),_:1})}const D=c(B,[["render",M],["__scopeId","data-v-3a7240f6"]]);export{D as default};
