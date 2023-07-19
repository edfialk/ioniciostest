System.register(["./index-legacy-b080bfdf.js","./StepForm-legacy-197add16.js"],(function(e,t){"use strict";var o,i,a,n,s,l,r,p,d,m,u,c,y,g,b,f,h,v;return{setters:[e=>{o=e._,i=e.d,a=e.r,n=e.o,s=e.c,l=e.w,r=e.I,p=e.a,d=e.b,m=e.e,u=e.f,c=e.g,y=e.h,g=e.p,b=e.i,f=e.j,h=e.k},e=>{v=e._}],execute:function(){var t=document.createElement("style");t.textContent="ion-title[data-v-1b048cdb]{position:static;padding:2px 32px}\n",document.head.appendChild(t);const w=i({components:{IonContent:r,IonHeader:p,IonPage:d,IonToolbar:m,IonButtons:u,IonBackButton:c,StepForm:v},data:()=>({questions:[{id:"index",title:"Battery ingestion known or suspected",subtitle:"\n            <p>Give honey 10 mL every 10 min if child ≥ 12 months, lithium coin cell possibly ingested, and ingestion within prior 12 hours. Do not delay going to ER to give honey.  Otherwise, NPO until esophageal position ruled out. (NPO except for honey or sucralfate suspension.)</p>\n            <p>Take up to 5 minutes to determine imprint code (or diameter) of companion or replacement battery.</p>\n            <p>Consult National Battery Ingestion Hotline at 800-498-8666 for assistance with battery identification and treatment.</p>\n          ",options:[{label:"Patient ≤ 12 years old",jump:"lt 12"},{label:"Patient > 12 years old",jump:"gt 12"}]},{id:"lt 12",title:"Patient ≤ 12 years old",subtitle:"\n            <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on x-rays, check ears and nose.</p>\n            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>\n            <p>Battery in esophagus?</p>\n          ",options:[{label:"Yes",jump:"esoph yes"},{label:"No (battery in stomach or beyond)",jump:"esoph no"}]},{id:"esoph yes",title:"Yes, battery in esophagus",subtitle:"\n            <p><strong>Immediately</strong> remove batteries lodged in the esophagus.</p>\n            <ul>\n              <li>Consider sucralfate suspension or honey if ≤ 12 hours post-ingestion.</li>\n              <li>Do not delay removal if patient has eaten.</li>\n              <li>Prefer endoscopic removal (instead of retreival by balloon catheter or magnet affixed to tube) for direct visualization of tissue injury.  Inspect mucosa for extent, depth and location of damage.  Note position of battery and direction negative pole faces.</li>\n              <li>If no endocscopic evidence of perforation, irrigate areas of esophagus with 50-150 mL 0.25% sterile acetic acid to neutralize residual alkali.</li>\n            </ul>\n            <p>After removal, if mucosal injury was present, observe for and anticipate delayed complications:  tracheoesophageal fistula, esophageal perforation, mediastinitis, vocal cord paralysis, tracheal stenosis or tracheomalacia, aspiration pneumonia, empyema, lung abscess, pneumothorax, spondylodiscitis, or exsanguination from perforation into a large vessel.</p>\n            <p>Anticipate specific complications based on injury location, battery position and orientation (negative pole).  Determine length of observation, duration of esophageal rest, need for serial imaging or endoscopy/bronchoscopy based on severity and location of injury.  Monitor patients at risk of perforation into vessels as inpatients with serial imaging and stool guaiacs.  Intervene early to prevent fatality.  Monitor for respiratory symptoms, especially those associated with swallowing, to diagnose TE fistulas early.  Expect perforations and fistulas to be delayed (98% diagnosed by 48 days after battery removal) and esophageal strictures delayed weeks to months.</p>\n          "},{id:"esoph no",title:"No (battery in stomach or beyond)",subtitle:"Was a magnet co-ingested?",options:[{label:"Yes",jump:"magnet yes"},{label:"No",jump:"magnet no"}]},{id:"magnet yes",title:"Yes, a magnet was co-ingested",subtitle:"Do not wait for symptoms.  Remove endoscopically if possible; surgically if not."},{id:"magnet no",title:"No, a magnet was not co-ingested",subtitle:"Are related signs or symptoms present?",options:[{label:"Yes",jump:"related yes"},{label:"No",jump:"related no"}]},{id:"related yes",title:"Yes, related signs or symptoms are present",subtitle:"If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery)."},{id:"related no",title:"No, related signs or symptoms are not present",subtitle:"≥ 15 mm cell ingested by child < 6 years?  If battery diameter is unknown, estimate it from the x-ray, factoring out magnification (which overestimates diameter).",options:[{label:"Yes",jump:"gt 15mm"},{label:"No",jump:"lt 15mm"}]},{id:"gt 15mm",title:"Yes, ≥ 15 mm cell ingested by child < 6 years",subtitle:"X-ray 4 days post ingestion (or sooner if symptoms develop).  If still in stomach, remove endoscopically (even if asymptomatic)."},{id:"lt 15mm",title:"No, cell > 15 mm and/or child ≥ 6 years old",subtitle:"\n            <p>Manage patient at home.  Regular diet.  Encourage activity.  Confirm battery passage by inspecting stools.  Consider x-ray to confirm passage if passage not observed in 10-14 days.</p>\n            <p>If symptoms develop later, promptly re-evaluate.</p>\n            <p>If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery).</p>\n          "},{id:"gt 12",title:"Patient > 12 years old",options:[{label:"Battery > 12 mm",jump:"battery gt 12"},{label:"Battery ≤ 12 mm",jump:"battery lt 12"}]},{id:"battery gt 12",title:"Patient > 12 years old and battery > 12 mm",subtitle:"\n\t          <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on -xrays, check ears and nose.</p>\n            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>\n            <p>Battery in esophagus?</p>\n          ",options:[{label:"Yes",jump:"esoph yes"},{label:"No",jump:"esoph no"}]},{id:"battery lt 12",title:"Patient > 12 years old and battery ≤ 12 mm",subtitle:"\n            <p>Are all of these conditions met?</p>\n            <ul>\n              <li>Patient is entirely asymptomatic and has been so since ingestion.</li>\n              <li>Only one battery ingested.</li>\n              <li>Magent not also ingested.</li>\n              <li>≤ 12 mm diameter determination is certain</li>\n              <li>No pre-existing esophageal disease.</li>\n              <li>Patient or caregiver is reliable, mentally competent, and agrees to promptly seek evaluation if symptoms develop.</li>\n            </ul>\n          ",options:[{label:"Yes",jump:"conditions yes"},{label:"No",jump:"conditions no"}]},{id:"conditions yes",title:"Yes, all conditions are met",subtitle:"\n            <p>Manage patient at home.  Regular diet.  Encourage activity.  Confirm battery passage by inspecting stools.  Consider x-ray to confirm passage if passage not observed in 10-14 days.</p>\n            <p>If symptoms develop later, promptly re-evaluate.</p>\n            <p>If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery).</p>\n          "},{id:"conditions no",title:"No, all conditions are not met",subtitle:"\n            <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on -xrays, check ears and nose.</p>\n            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>\n            <p>Battery in esophagus?</p>\n          ",options:[{label:"Yes",jump:"esoph yes"},{label:"No (battery in stomach or beyond)",jump:"esoph no"}]}]})}),I=e=>(g("data-v-1b048cdb"),e=e(),b(),e),j=I((()=>f("h2",{class:"ion-text-wrap"},"OHSU Button Battery Protocol",-1))),x=I((()=>f("div",null,[f("p",null,"Suspect button battery ingestion in these situations:"),f("ul",null,[f("li",null,[h(" Symptomatic patient with no known ingestion history "),f("ul",null,[f("li",null,"Airway obstruction or wheezing"),f("li",null,"Drooling"),f("li",null,"Vomiting"),f("li",null,"Chest discomfort"),f("li",null,"Difficulty swallowing, decreased appetite, refusal to eat"),f("li",null,"Coughing, choking or gagging with eating or drinking")])])]),f("ul",null,[f("li",null,[h(' "Coin" ingested '),f("ul",null,[f("li",null," Carefully check AP chest x-ray for battery's double-rim or halo-effect and lateral view for step off. Use magnification. ")])])]),f("p",null,"Tips, Pitfalls and Caveats"),f("ul",null,[f("li",null,' 3 "N\'s": Negative - Narrow - Necrotic. The negative battery pole, identified as the narrowest side on lateral x-ray, causes the most severe, necrotic injury. The negative battery pole is the side opposite the "+" and without the imprint. '),f("li",null," 20 mm lithium coin cell is most frequently involved in esophageal injuries; smaller cells lodge less frequently but also cause serios injury or death. "),f("li",null," Definitive determination of the battery diameter prior to passage is unlikely in at least 40% of ingestions. "),f("li",null,"Assume hearing aid batteries are < 12 mm."),f("li",null," Manage ingestion of a hearing aid containing a battery as an ingestion of a small (≤ 12 mm) battery. "),f("li",null," Do not induce vomiting or give cathartics. Both are ineffective. "),f("li",null," Assays of blood or urine for mercury or other battery ingredients are unnecessary. ")])],-1)));e("default",o(w,[["render",function(e,t,o,i,r,p){const d=a("ion-back-button"),m=a("ion-buttons"),u=a("ion-toolbar"),c=a("ion-header"),g=a("step-form"),b=a("ion-content"),f=a("ion-page");return n(),s(f,null,{default:l((()=>[y(c,{translucent:!0},{default:l((()=>[y(u,null,{default:l((()=>[y(m,{slot:"start"},{default:l((()=>[y(d,{"default-href":"/"})])),_:1})])),_:1})])),_:1}),y(b,{fullscreen:!0,class:"ion-padding",scrollX:"true",scrollY:"true"},{default:l((()=>[j,y(g,{questions:e.questions},null,8,["questions"]),x])),_:1})])),_:1})}],["__scopeId","data-v-1b048cdb"]]))}}}));