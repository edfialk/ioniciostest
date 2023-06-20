<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button ref="btnTop" @click="scrollTop()" class="ion-hide"
            >Top</ion-button
          >
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content
      ref="content"
      class="ion-padding"
      scrollEvents="true"
      @ionScroll="doScroll"
    >
      <h2 id="top" class="ion-text-wrap">
        Perioperative Appendicitis Management Protocol
      </h2>
      <ul class="toc">
        <li>
          <a href="#" @click.prevent="scrollToAnchor('preop')"
            >Preoperative Work-up</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('algo')"
            >Appendicitis Consult Algorithm</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('premanage')"
            >Preoperative Management</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('postopacute')"
            >Post-operative acute appendicitis management</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('postopgang')"
            >Post-operative gangrenous appendicitis management</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('postopperf')"
            >Post-operative perforated appendicitis management</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('nonopmanage')"
            >Non-operative management of perforated appendicitis</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('readmission')"
            >Management of re-admission for perforated appendicitis</a
          >
        </li>
        <li>
          <a href="#" @click.prevent="scrollToAnchor('intraabdominal')"
            >Management of intra abdominal fluid collection with percutaneous
            drain</a
          >
        </li>
      </ul>

      <div id="preop">
        <p class="heading">Preoperative Work-Up</p>
        <ul>
          <li><span class="i">See algorithm</span></li>
          <li><span class="i">History and Physical</span></li>
          <li><span class="i">Labs:</span> CBC with differential, CRP</li>
          <li>
            <span class="i">Imaging:</span> Ultrasound to start
            <ul>
              <li>
                IF ultrasound non-diagnostic:
                <ul>
                  <li>
                    No alternative diagnosis - consider cross-sectional imaging
                    (CT A/P with IV contrast, MRI appy)
                  </li>
                  <li>
                    Alternative diagnosis likely (large stool burden, adenitis,
                    etc) - consider discharge versus observation without
                    antibiotics
                  </li>
                </ul>
              </li>
              <li>
                Imaging positive or clinical suspicion sufficient —>
                preoperative management protocol
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="algo">
        <step-form
          ref="form"
          :questions="questions"
          @answer="onAnswer"
        ></step-form>
      </div>

      <!-- 
        <image-zoom src="/images/Appendicitis-A.png"></image-zoom>
      -->

      <div id="premanage">
        <p class="heading">Pre-operative management</p>
        <ul>
          <li><span class="i">Admit</span> to Pediatric Surgery</li>
          <li>
            <span class="i">Diet:</span> NPO
            <ul>
              <li>
                If patient going to the OR the following morning may consider
                CLD or regular diet at the discretion of the attending surgeon
                until midnight
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Fluid bolus:</span> 20 mL/kg bolus with Lactated
            Ringers (repeat as necessary to maintain UOP > 1cc/kg/hr)
          </li>
          <li>
            <span class="i">mIVF:</span> 1.5x mIVF (D5 NS with 20 mEq KCL as it
            is compatible with the antibiotics)
          </li>
          <li>
            <span class="i">Pain medications:</span> Morphine 0.05 - 0.1
            mg/kg/dose q3 hr PRN. If eating can get Tylenol PO (12.5 mg/kg q6
            hr) and ibuprofen (10 mg/kg q6 hr)
          </li>
          <li>
            <span class="i">Antiemetics:</span> Zofran 0.1 mg/kg q6 hours PRN
          </li>
          <li>
            <span class="i">Probiotics:</span> Lactobacillus - attempt to give
            one dose preop if possible
          </li>
          <li>
            <span class="i">Antibiotics:</span> Broad spectrum antibiotics
            <ul>
              <li>
                Current formulary: Ceftriaxone 50 mg/kg daily (max 2 g) and
                Metronidazole 30 mg/kg daily (max 1.5 g)
                <ul>
                  <li>
                    IF allergic (anaphylactic) to penicillin or cephalosporins
                    then use ciprofloxacin (25mg/kg/day divided q12 hr with max
                    dose of 500mg per dose) and Metronidazole 30 mg/kg daily
                    (max 1.5 g)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Consent:</span> Laparoscopic appendectomy (templates
            available)
          </li>
          <li>
            <span class="i">Book for OR:</span> See Appendix A for attending
            specifics (Only for booking case, not for consent)
          </li>
          <li>
            <span class="i">Education:</span> Do not tell family whether or not
            the appendix is perforated. Let patient and family know that if
            acute appendicitis then expect they will be able to go home the same
            day as OR
          </li>
        </ul>
      </div>

      <div id="postopacute">
        <p class="heading">
          Post-operative acute appendicitis management - same day discharge
        </p>
        <ul>
          <li>
            <span class="i">Preop education is key</span> - expectation is that
            they should go home the same day
          </li>
          <li><span class="i">Diet:</span> Regular diet</li>
          <li><span class="i">Fluids:</span> Saline lock after PACU</li>
          <li>
            <span class="i">Pain medications:</span> Alternating scheduled
            acetaminophen (12.5 mg/kg q6 hr) and ibuprofen (10 mg/kg q6 hr) such
            that one is being taken every 3 hours.
          </li>
          <li><span class="i">Antiemetics:</span> DC after PACU</li>
          <li><span class="i">Probiotics:</span> DC</li>
          <li><span class="i">Antibiotics:</span> None</li>
          <li>
            <span class="i">Discharge criteria:</span> Expectation is to go home
            the same day after 4 hours of observation and pain controlled. May
            stay if late in the day, long drive to home or attending has concern
          </li>
          <li>
            <span class="i">Discharge medication:</span> Alternating scheduled
            acetaminophen (12.5 mg/kg q6 hr) and ibuprofen (10 mg/kg q6 hr) such
            that one is being taken every 3 hours while awake. Continue this
            schedule for at least 24 hours then PRN
          </li>
        </ul>
      </div>

      <div id="postopgang">
        <p class="heading">Post-operative gangrenous appendicitis management</p>
        <ul>
          <li><span class="i">Diet:</span> Regular diet</li>
          <li>
            <span class="i">mIVF:</span> 1x mIVF (preferably D5 NS with 20 mEq
            KCL as it is compatible with the antibiotics)
          </li>
          <li>
            <span class="i">Pain medications:</span>
            <ul>
              <li>
                Alternating scheduled acetaminophen (12.5 mg/kg q6 hr) and
                ibuprofen (10 mg/kg q6 hr)
                <ul>
                  <li>
                    If not tolerating PO and/or pain uncontrolled consider
                    ketorolac +/- IV Tylenol
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Antiemetics:</span> Zofran 0.1 mg/kg q6 hours PRN
          </li>
          <li>
            <span class="i">Probiotics:</span> Lactobacillus while on
            antibiotics
          </li>
          <li>
            <span class="i">Antibiotics:</span> Continue same preoperative broad
            spectrum antibiotics for an additional 24 hours
          </li>
          <li>
            <span class="i">Discharge criteria:</span>
            <ul>
              <li>Completed 24 hours of IV antibiotics</li>
              <li>No post op fevers</li>
              <li>Improved pain post operatively</li>
              <li>
                May be moved to the perforated protocol if there is any concern
                by the attending surgeon
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Discharge medications:</span>
            <ul>
              <li>
                Alternating scheduled acetaminophen (12.5 mg/kg q6 hr) and
                ibuprofen (10 mg/kg q6 hr) such that one is being taken every 3
                hours while awake. Continue this schedule for at least 24 hours.
              </li>
              <li>
                No further antibiotics unless directed by the attending surgeon
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="postopperf">
        <p class="heading">Post-operative perforated appendicitis management</p>
        <ul>
          <li><span class="i">Diet:</span> Regular diet</li>
          <li>
            <span class="i">mIVF:</span> 1.5x mIVF (preferably D5 NS with 20 mEq
            KCL as it is compatible with the antibiotics) until UOP >1.0
            cc/kg/hr for 24 hours then decrease as PO intake increased.
          </li>
          <li>
            <span class="i">Pain medications:</span>
            <ul>
              <li>
                Alternating scheduled acetaminophen (12.5 mg/kg q6 hr) and
                ibuprofen (10 mg/kg q6 hr)
                <ul>
                  <li>
                    If not tolerating PO and/or pain uncontrolled consider
                    ketorolac +/- IV Tylenol
                  </li>
                  <li>
                    May consider gabapentin 5 mg/kg PO q4-6 hours PRN as adjunct
                  </li>
                </ul>
              </li>
              <li>Morphine 0.05 - 0.1 mg/kg/dose q3 hr PRN x 4 doses</li>
            </ul>
          </li>
          <li>
            <span class="i">Antiemetics:</span> Zofran 0.1 mg/kg q6 hours PRN
          </li>
          <li>
            <span class="i">Probiotics:</span> Lactobacillus while on
            antibiotics
          </li>
          <li>
            <span class="i">Antibiotics:</span> Continue same preoperative broad
            spectrum antibiotics until discharge criteria met
          </li>
          <li>
            <span class="i">Discharge criteria:</span>
            <ul>
              <li>No post op fevers x 48 hours</li>
              <li>No right lower quadrant pain or tenderness</li>
              <li>Tolerating diet similar to baseline</li>
              <li>
                No severe or worsening watery diarrhea that may cause
                dehydration
              </li>
            </ul>
          </li>
        </ul>
        <p>IF PROGRESSING</p>
        <ul>
          <li>
            <span class="i">Labs: </span>CBC with differential and CRP (for
            baseline)
            <ul>
              <li>
                WBC normal for age, % neutrophils normal and immature
                granulocyte # normal - discharge with oral antibiotics to
                complete a TOTAL of 5 days of antibiotics
              </li>
              <li>
                WBC elevated for age, increased % neutrophils OR increased
                immature granulocyte # - discharge with oral antibiotics to
                complete an ADDITIONAL 5 days of antibiotics
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Discharge medications:</span>
            <ul>
              <li>
                Alternating PRN acetaminophen (12.5 mg/kg q6 hr) and ibuprofen
                (10 mg/kg q6 hr) such that one can be taken every 3 hours
              </li>
              <li>
                Antibiotics
                <ul>
                  <li>Duration as described above</li>
                  <li>
                    Augmentin 40 mg/kg/day BID if &lt;40 kg or Augmentin 875 mg
                    BID if &gt;40 kg
                    <ul>
                      <li>
                        If allergic to penicillin or cephalosporins then use
                        ciprofloxacin (25mg/kg/day divided q 12hours with max
                        dose of 500 mg per dose) and metronidazole (30mg/kg/
                        once daily, max 1500 mg)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Probiotics for the duration of antibiotic treatment course
              </li>
            </ul>
          </li>
        </ul>
        <p>IF NOT PROGRESSING</p>
        <ul>
          <li>
            Consider PICC after 3-7 days if young, prolonged NPO, poor oral
            intake and/or unreliable peripheral vascular access
          </li>
          <li>
            Day 6-7 not meeting discharge criteria -> Imaging
            <ul>
              <li>
                Consider ultrasound (possibly day 6 to avoid delay) versus cross
                sectional (CT A/P with PO and IV contrast or MRI)
              </li>
              <li>
                Drainable fluid collection:
                <ul>
                  <li>IR consultation</li>
                  <li>
                    Continue IV antibiotics per perforated appendicitis protocol
                    until discharge criteria met
                  </li>
                  <li>
                    Follow up cultures and tailor antibiotics per sensitivities
                  </li>
                  <li>See drain management protocol</li>
                </ul>
              </li>
              <li>
                No drainable fluid collection:
                <ul>
                  <li>
                    Continue IV antibiotics per perforated appendicitis protocol
                    until discharge criteria met
                  </li>
                  <li>
                    Consider antibiotic change and/or infectious disease
                    consultation if not progressing
                  </li>
                  <li>
                    Consider repeat imaging studies in 5-7 days if not improving
                  </li>
                  <li>
                    Discharge home with an additional 5 days of oral antibiotics
                    once discharge criteria are met
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="nonopmanage">
        <p class="heading">
          Non-operative management of perforated appendicitis
        </p>
        <ul>
          <li><span class="i">Admit</span> to Pediatric Surgery</li>
          <li>
            <span class="i">Diet:</span> NPO for possible drain placement
            <ul>
              <li>
                If patient going to IR the following morning may consider CLD or
                regular diet at the discretion of the attending surgeon until
                midnight
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Fluid bolus:</span> 20 mL/kg bolus with Lactated
            Ringers (repeat as necessary)
          </li>
          <li>
            <span class="i">mIVF:</span> 1.5x mIVF (preferably D5 NS with 20 mEq
            KCL as it is compatible with the antibiotics) until UOP >1.0
            cc/kg/hr for 24 hours then decrease as PO intake increased.
          </li>
          <li>
            <span class="i">Pain medications:</span> Morphine 0.05 - 0.1
            mg/kg/dose q3 hr PRN. If eating - alternating scheduled
            acetaminophen (12.5 mg/kg q6 hr) and ibuprofen (10 mg/kg q6 hr). If
            not tolerating PO and/or pain uncontrolled consider ketorolac +/- IV
            Tylenol
          </li>
          <li>
            <span class="i">Antiemetics:</span> Zofran 0.1 mg/kg q6 hours PRN
          </li>
          <li><span class="i">Probiotics:</span> Lactobacillus</li>
          <li>
            <span class="i"> Antibiotics: Broad spectrum antibiotics</span>
            <ul>
              <li>
                Current formulary: Ceftriaxone 50 mg/kg daily (max 2 g) and
                <span class="i">Metronidazole </span>30 mg/kg daily (max 1.5 g)
                <ul>
                  <li>
                    IF allergic (anaphylactic) to penicillin or cephalosporins
                    then use ciprofloxacin (25mg/kg/day divided q12 hr with max
                    dose of 500mg per dose) and Metronidazole 30 mg/kg daily
                    (max 1.5 g)
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Interventions:</span> IR drain if possible, follow
            drain protocol
          </li>
        </ul>
        <p>&nbsp;</p>
        <ul>
          <li>
            <span class="i">Discharge criteria:</span>
            <ul>
              <li>
                No fevers x 48 hours post drain placement (or admission if no
                drain placed)
              </li>
              <li>No right lower quadrant pain or tenderness</li>
              <li>Tolerating diet similar to baseline</li>
              <li>
                No severe or worsening watery diarrhea that may cause
                dehydration
              </li>
              <li>Follow drain protocol</li>
            </ul>
          </li>
        </ul>
        <p>IF PROGRESSING</p>
        <ul>
          <li>
            <span class="i">Labs: </span>CBC with differential and CRP (for
            baseline)
            <ul>
              <li>
                WBC normal for age, % neutrophils normal and immature
                granulocyte # normal - discharge with oral antibiotics to
                complete a TOTAL of 5 days of antibiotics
              </li>
              <li>
                WBC elevated for age, increased % neutrophils OR increased
                immature granulocyte # - discharge with oral antibiotics to
                complete an ADDITIONAL 5 days of antibiotics
              </li>
              <li>
                IF no source control obtained (i.e. no drain placed) then the
                patient should receive an additional 5 days of oral antibiotics
                regardless
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Discharge medications:</span>
            <ul>
              <li>
                Alternating PRN acetaminophen (12.5 mg/kg q6 hr) and ibuprofen
                (10 mg/kg q6 hr) such that one can be taken every 3 hours
              </li>
              <li>
                Antibiotics
                <ul>
                  <li>
                    Duration as described above. Reminder *IF no source control,
                    provide an additional 5 days of antibiotics
                  </li>
                  <li>
                    Augmentin 40 mg/kg/day BID if &lt;40 kg or Augmentin 875 mg
                    BID if &gt;40 kg
                    <ul>
                      <li>
                        If allergic to penicillin or cephalosporins then use
                        ciprofloxacin (25mg/kg/day divided q 12hours with max
                        dose of 500mg per dose) and metronidazole (30mg/kg/ once
                        daily, max 1500 mg)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Probiotics for the duration of antibiotic treatment course
              </li>
            </ul>
          </li>
        </ul>
        <p>IF NOT PROGRESSING</p>
        <ul>
          <li>
            Consider PICC shortly after admission if young, prolonged NPO, poor
            oral intake and/or unreliable peripheral vascular access
          </li>
          <li>
            Day 5-7 not meeting discharge criteria -> Repeat imaging
            <ul>
              <li>
                Typically cross sectional (CT A/P with PO and IV contrast or
                MRI)
              </li>
              <li>
                Drainable fluid collection:
                <ul>
                  <li>IR consultation</li>
                  <li>
                    Continue IV antibiotics per non-op perforated appendicitis
                    protocol until discharge criteria met
                  </li>
                  <li>
                    Follow up cultures and tailor antibiotics per sensitivities
                  </li>
                  <li>See drain management protocol</li>
                </ul>
              </li>
              <li>
                No drainable fluid collection:
                <ul>
                  <li>
                    Continue IV antibiotics per non-op perforated appendicitis
                    protocol until discharge criteria met
                  </li>
                  <li>
                    Consider antibiotic change and/or infectious disease
                    consultation if not progressing
                  </li>
                  <li>
                    Consider repeat imaging studies in 5-7 days if not improving
                  </li>
                  <li>
                    Discharge home with an additional 5 days of oral antibiotics
                    once discharge criteria are met
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="readmission">
        <p class="heading">
          Management of re-admission for perforated appendicitis
        </p>
        <ul>
          <li>
            <span class="i">Work-Up:</span> H&amp;P, CBC and CRP, U/S +/- CT or
            MRI to evaluate for fluid collection
          </li>
          <li><span class="i">Admit</span> to Pediatric Surgery</li>
          <li>
            <span class="i">Diet:</span> NPO for possible drain placement
            <ul>
              <li>
                If patient going to IR the following morning may consider CLD or
                regular diet at the discretion of the attending surgeon until
                midnight
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Fluid bolus:</span> 20 mL/kg bolus with Lactated
            Ringers (repeat as necessary)
          </li>
          <li>
            <span class="i">mIVF:</span> 1.5x mIVF (preferably D5 NS with 20 mEq
            KCL as it is compatible with the antibiotics)
          </li>
          <li>
            <span class="i">Pain medications:</span> Morphine 0.05 - 0.1
            mg/kg/dose q3 hr PRN. If eating can get Tylenol PO.
          </li>
          <li>
            <span class="i">Antiemetics:</span> Zofran 0.1 mg/kg q6 hours PRN
          </li>
          <li><span class="i">Probiotics:</span> Lactobacillus</li>
          <li>
            <span class="i">Antibiotics:</span> Broad spectrum antibiotics
            <ul>
              <li>
                <span class="i"> Scenario </span>1: Re-admission while still
                taking oral antibiotics at home
                <span class="i">(treatment failure</span>)
                <ul>
                  <li>
                    Change IV antibiotics to cefepime and flagyl and consider ID
                    consultation
                  </li>
                </ul>
              </li>
              <li>
                Scenario 2: Re-admission after completing antibiotic course at
                home (recurrent infection)
                <ul>
                  <li>Restart previous IV antibiotic regimen</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Interventions:</span> IR drain if possible, follow
            drain protocol
          </li>
        </ul>

        <p>IF PROGRESSING</p>
        <ul>
          <li>
            <span class="i">Labs:</span> CBC with differential and CRP
            <ul>
              <li>
                WBC normal for age, % neutrophils normal and immature
                granulocyte # normal - discharge with oral antibiotics to
                complete a TOTAL of 5 days of antibiotics
              </li>
              <li>
                WBC elevated for age, increased % neutrophils OR increased
                immature granulocyte # - discharge with oral antibiotics to
                complete an ADDITIONAL 5 days of antibiotics
              </li>
              <li>
                IF had untrainable fluid collection and no drain then the
                patient should receive 5 days of oral antibiotics regardless
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Discharge medications:</span>
            <ul>
              <li>
                Alternating PRN acetaminophen (12.5 mg/kg q6 hr) and ibuprofen
                (10 mg/kg q6 hr) such that one can be taken every 3 hours
              </li>
              <li>
                Antibiotics
                <ul>
                  <li>
                    Duration as described above. Reminder *IF residual and
                    undrained fluid collection, provide an additional 5 days of
                    antibiotics
                  </li>
                  <li>
                    Augmentin 40 mg/kg/day BID if &lt;40 kg or Augmentin 875 mg
                    BID if &gt;40 kg
                    <ul>
                      <li>
                        If allergic to penicillin or cephalosporins then use
                        ciprofloxacin (25mg/kg/day divided q 12hours with max
                        dose of 500mg per dose) and metronidazole (30mg/kg/ once
                        daily, max 1500 mg)
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Probiotics for the duration of antibiotic treatment course
              </li>
            </ul>
          </li>
        </ul>

        <p>IF NOT PROGRESSING</p>
        <ul>
          <li>
            Consider PICC shortly after admission if young, prolonged NPO, poor
            oral intake and/or unreliable peripheral vascular access
          </li>
          <li>
            Day 5-7 not meeting discharge criteria -> Repeat Imaging
            <ul>
              <li>
                Typically cross sectional (CT A/P with PO and IV contrast or
                MRI)
              </li>
              <li>
                Drainable fluid collection:
                <ul>
                  <li>IR consultation</li>
                  <li>
                    Continue IV antibiotics per non-op perforated appendicitis
                    protocol until discharge criteria met
                  </li>
                  <li>
                    Follow up cultures and tailor antibiotics per sensitivities
                  </li>
                  <li>See drain management protocol</li>
                </ul>
              </li>

              <li>
                No drainable fluid collection:
                <ul>
                  <li>
                    Continue IV antibiotics per non-op perforated appendicitis
                    protocol until discharge criteria met
                  </li>
                  <li>
                    Consider antibiotic change and/or infectious disease
                    consultation if not progressing
                  </li>
                  <li>
                    Consider repeat imaging studies in 5-7 days if not improving
                  </li>
                  <li>
                    Discharge home with an additional 5 days of oral antibiotics
                    once discharge criteria are met
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="intraabdominal">
        <p class="heading">
          Management of intra abdominal fluid collection with percutaneous drain
        </p>
        <ul>
          <li>
            <span class="i">Imaging:</span> ultrasound and cross sectional (CT
            A/P with IV and PO contrast or MRI A/P)
          </li>
          <li><span class="i">Consultations:</span> IR for drainage</li>
          <li>
            <span class="i">Drain care:</span>
            <ul>
              <li>
                Bedside RN to flush drain with 10 mL of saline BID and PRN
              </li>
            </ul>
          </li>
          <li>
            <span class="i">Drain management:</span>
            <ul>
              <li>
                Continue drain until &lt;10 mL per day x 2 consecutive days
              </li>
              <li>
                To remove or not to remove:
                <ul>
                  <li>
                    Primarily assessed by clinical improvement (afebrile,
                    pain/tenderness improvement, improved PO intake)
                  </li>
                  <li>
                    Insufficient clinical improvement or minimal drainage
                    despite large collection on Imaging
                    <ul>
                      <li>
                        Ultrasound to assess for residual fluid collection
                      </li>
                      <li>Consider tPA x3 days and then reassess</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                If all criteria being met but drain output remains &gt;10 mL the
                may consider discharge to home with drain in place
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <p class="heading">Appendix A</p>
        <p class="ion-text-center">Booking appendicitis cases by Attending</p>
        <p>Azarow - 3 port</p>
        <p>Butler - Single port (GelPoint mini)</p>
        <p>Fialkowski - 3 port</p>
        <p>Gingalewski - 3 port</p>
        <p>Jafri - Single port (GelPoint mini)</p>
        <p>Krishnaswami - Single port (thoracoscope)</p>
        <p>Lofberg - Single port (GelPoint mini)</p>
        <p>Sun - 3 port</p>
        <p>Zigman - Single port (thoracoscope)</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
} from "@ionic/vue";
// import ImageZoom from "@/components/ImageZoom.vue";
import StepForm from "@/components/StepForm.vue";
import { ref, defineComponent } from "vue";

let sections = [
  "preop",
  "premanage",
  "postopacute",
  "postopgang",
  "postopperf",
  "nonopmanage",
  "readmission",
  "intraabdominal",
];
const anchors = {};
sections.forEach((name) => {
  anchors[name] = ref(name);
});

export default defineComponent({
  name: "PostGastrostomyPlacementFeedingProtocol",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    // ImageZoom,
    IonButton,
    StepForm,
  },
  data() {
    return {
      questions: [
        {
          id: "index",
          title: "Appy Consult",
          subtitle: "H+P, CBC w/diff, CRP, Ultrasound",
          options: [
            {
              label: "U/S +",
              jump: "usplus",
            },
            {
              label: "U/S non-vis",
              jump: "usnonvis",
            },
          ],
        },
        {
          id: "usplus",
          title: "Preop Appendicitis Protocol",
          subtitle: `
            <p>May consider cross sectional imaging if duration of symptoms >5-7 days or 3+ cm fluid collection on ultrasound</p>
            <p>May consider non-operative pathway if has drainable fluid collection, symptoms >5-7 days or if clinical circumstance dictatesOR</p>
            <h3>Operating Room</h3>
          `,
          options: [
            {
              label: "Acute",
              jump: "acute",
            },
            {
              label: "Gangrenous",
              jump: "gangrenous",
            },
            {
              label: "Perforated",
              jump: "perforated",
            },
          ],
        },
        {
          id: "acute",
          title: "Post Op Acute Pathway <br/> Same Day Discharge",
        },
        {
          id: "gangrenous",
          title: `Post Op Gangrenous Pathway <br/> 24 Hour IV Antibiotics`,
        },
        {
          id: "perforated",
          title: "Post Op Perforated Pathway",
        },
        {
          id: "usnonvis",
          title: "Pediatric Appendicitis Score",
          options: [
            {
              label: "7+ or high suspicion",
              jump: "appendicitis plus",
            },
            {
              label: "<7 or alternative dx",
              jump: "appendicitis less",
            },
          ],
        },
        {
          id: "appendicitis plus",
          title: "MRI Appy protocol or CT A/P",
          options: [
            {
              label: "Negative",
              jump: "appendicitis less",
            },
            {
              label: "Positive",
              jump: "usplus",
            },
          ],
        },
        {
          id: "appendicitis less",
          title: "Observe or Home w/ return precautions",
        },
      ],
    };
  },
  methods: {
    scrollToAnchor(name) {
      const el = document.getElementById(name);
      el.scrollIntoView({ behavior: "auto" });
    },
    scrollTop() {
      this.$refs.content.$el.scrollToTop(0);
    },
    doScroll(ev) {
      if (ev.detail.scrollTop > 500) {
        this.$refs.btnTop.$el.classList.remove("ion-hide");
      } else {
        this.$refs.btnTop.$el.classList.add("ion-hide");
      }
    },
    onAnswer({ question, option }) {
      if (question.id == "usplus" && option.jump == "acute") {
        setTimeout(() => {
          this.scrollToAnchor("postopacute");
          this.$refs.form.reset();
        }, 10);
      }
      if (question.id == "usplus" && option.jump == "gangrenous") {
        setTimeout(() => {
          this.scrollToAnchor("postopgang");
          this.$refs.form.reset();
        }, 10);
      }
      if (question.id == "usplus" && option.jump == "perforated") {
        setTimeout(() => {
          this.scrollToAnchor("postopperf");
          this.$refs.form.reset();
        }, 10);
      }
    },
  },
});
</script>

<style scoped lang="scss">
ion-title {
  position: static;
  padding: 2px 32px;
}
div,
h2 {
  scroll-margin-top: 10px;
}
</style>
