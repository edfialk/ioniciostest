<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button ref="btnTop" @click="scrollTop()" class="ion-hide">Top</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content ref="content" class="ion-padding" scrollEvents="true" @ionScroll="doScroll">
      <h2 class="ion-text-wrap">Gastroschisis Management Protocol</h2>

      <p><a href="https://pubmed.ncbi.nlm.nih.gov/32920278/">Pubmed</a></p>

      <ul class="toc">
        <li><a href="#" @click.prevent="scrollToAnchor('management')">Overall Management</a></li>
        <li><a href="#" @click.prevent="scrollToAnchor('predelivery')">Pre-Delivery</a></li>
        <li><a href="#" @click.prevent="scrollToAnchor('delivery')">Delivery</a></li>
        <li><a href="#" @click.prevent="scrollToAnchor('supplies')">Surgical Supplies</a></li>
        <li><a href="#" @click.prevent="scrollToAnchor('primary')">Post-op:  primary closure</a></li>
        <li><a href="#" @click.prevent="scrollToAnchor('staged')">Post-op:  staged closure</a></li>
      </ul>

      <p><strong>GASTROSCHISIS:</strong></p>
      <div id="management">
        <ol>
          <li><span class="ul">Overall Management:</span></li>
          <ol type="a">
            <li>Bowel decompression with NGT</li>
            <li>Baseline labs per NICU team.</li>
            <li>
              Cover bowel and lower half of baby with bowel bag. Avoid kinking of
              the bowel by placing baby right side down with towels supporting
              bowel.
            </li>
            <li>
              Gastroschisis reduction via primary sutureless closure or Bentec
              silo placement, depending on attending preference, patient status,
              and ability to reduce gastroschisis contents. A Bentec silo is a
              spring-loaded silo that can be placed under the fascia.
            </li>
            <li>
              Gastroschisis reduction often performed at bedside, but may require
              operating room if there is concern for complicated gastroschisis
              and/or per attending preference.
            </li>
            <li>
              Hydration: These babies have very high fluid losses and often
              require fluid boluses. Intravenous hydration with isotonic fluids is
              essential. Infants should be administered at least 1.5-2.0x's
              maintenance. Urine output is not a reliable sign to follow as
              infants may not normally void for the first 12 to 18 hours.
            </li>
            <li>
              If the fascial opening in the gastroschisis is too tight, it may
              cause infarction of the bowel-this fascial opening may need to be
              emergently opened.
            </li>
          </ol>
        </ol>
      </div>
      <p class="ion-text-center">
        <strong
          >Management of Gastroschisis in the Delivery Room and
          Post-operatively</strong
        >
      </p>
      <div id="predelivery">
        <p class="ion-text-center">
          <strong>Gastroschisis Delivery (level 5 delivery) Pre-Delivery</strong>
        </p>
        <p>Nursing Preparation:</p>
        <ul>
          <li>Bowel Bag</li>
          <li>Extra Towels</li>
          <li>IV supplies</li>
          <li>Replogle tube</li>
          <li>Sedation Medications</li>
          <li>Fluids</li>
        </ul>
        <p>Provider Preparation:</p>
        <ul>
          <li>Have L&amp;D Pend baby in EPIC</li>
          <li>
            Notify surgeons of upcoming delivery and again when baby is born
          </li>
          <li>Order D5LR to run at 130 ml/kg (approximate wt)</li>
          <li>Order NS bolus 20 ml/kg (approximate wt), repeat if necessary</li>
          <li>Order medication in preparation for intubation:</li>
          <ul>
            <li>Morphine (0.1 mg/kg) or Fentanyl (2 mcg/kg)</li>
            <li>Versed (0.1 mg/kg)</li>
            <li>Rocuronium (0.6 mg/kg)</li>
          </ul>
        </ul>
      </div>
      <div id="delivery">
        <p class="ion-text-center"><strong>Delivery</strong></p>
        <ul>
          <li>
            Two providers catch baby, place in bowel bag up to chest, and minimize
            bowel handling
          </li>
          <li>
            In the resuscitation suite, baby is placed on the right side and the
            bowel is supported with towels to level of defect
          </li>
          <li>NRP, once stable respiratory effort/HR proceed to next step</li>
          <li>
            Notify the surgeon of delivery, baby will be ready in 30 minutes
          </li>
          <li>Replogle tube to low continuous suction</li>
          <li>
            Place PIV (prioritize upper extremity &amp; scalp), bolus, and hang
            maintenance fluids.
          </li>
          <li>
            Consider PICC line placement, but only after discussion with the
            surgical team. This should only be attempted if it will not interfere
            with the timing of operative therapy.
          </li>
          <li>
            Try to contain lower extremities in bag. Do not place leads/monitors
            on lower extremities and minimize LE IVs. Priority is given to IV
            access. If necessary, a hole can be cut in the bag to bring a LE out
            for IV access.
          </li>
          <li>
            Sedate, provide morphine/fentanyl, then versed, then rocuronium, and
            then intubate.
          </li>
          <li>
            Fellow or AP member to stay to manage ventilator/sedation during
            procedure.
          </li>
          <li>
            Please always attempt to leave the umbilical cord length at least 6 cm
            until the cord is shortened by the pediatric surgery team.
          </li>
        </ul>
      </div>
      <p class="ion-text-center"><strong>Surgery</strong></p>
      <div id="supplies">
        <p>Surgical Supplies (DNCC to provide):</p>
        <ul>
          <li>Pull NICU gastroschisis surgical supplies &ldquo;kit&rdquo;</li>
          <ul>
            <li>4 sterile blue OR towels</li>
            <li>
              2 sterile blue half sheets (1 for operative field, 1 to lay sterile
              supplies on)
            </li>
            <li>1 small ioban cut into 4 strips</li>
            <li>warm saline for irrigation</li>
            <li>1 sterile basin</li>
            <li>2 packs 4x4 gauze (1 pack for operation, 1 pack for prep)</li>
            <li>2 bottles betadine (1 for prep, 1in case silo is needed)</li>
            <li>4 silos (size 3, 4, 5, 7.5)</li>
            <li>
              3 packs sterile gloves (1 for fellow, 1 for attending, 1 for
              assistant holding bowel for prep)
            </li>
            <li>2 sterile gowns</li>
            <li>1 pack umbilical tape</li>
            <li>1 pack 2-0 silk suture</li>
            <li>1 pack 3-0 nylon</li>
            <li>1 pack 2-0 Vicryl suture</li>
            <li>Xeroform strip</li>
            <li>Silver sulfadiazine cream</li>
            <li>Telfa dressing</li>
            <li>2 packs 2x2 gauze</li>
            <li>1 kerlix roll</li>
            <li>betadine ointment</li>
            <li>4 medium tegaderms</li>
            <li>2 small tegaderms</li>
            <li>3 vials mastisol</li>
          </ul>
        </ul>
        <ul>
          <li>
            Instrument tray (peds minor or miscellaneous tray) provided by DNCC
          </li>
        </ul>
        <ul>
          <li>
            Bovie cautery, machine and pad may need to be obtained from OR per
            attending preference.
          </li>
        </ul>
      </div>
      <p class="ion-text-center">
        <strong>Gastroschisis Post-Op Management</strong>
      </p>
      <div id="primary">
        <p class="ion-text-center"><strong>Primary Closure</strong></p>
        <p>
          <span class="ul">Respiratory</span>: Wean towards extubation from the
          ventilator within 24 hours of procedure.
        </p>
        <p><span class="ul">Fluids/Nutrition</span>:</p>
        <ul>
          <li>
            Continue D5LR for at least the first 24 hours post-op and then start
            TPN.
          </li>
          <li>Provide total fluids of 180-200 ml/kg/day.</li>
          <li>
            Monitor UOP and discuss insertion of a Foley catheter at the time of
            operation or shortly thereafter
          </li>
          <li>
            Provide NS/LR boluses (20 ml/kg) as needed, including for UOP&lt;
            1ml/kg/hr.
          </li>
          <li>
            Consent family for PICC and insert PICC within 12 hours of procedure.
          </li>
        </ul>
        <p><span class="ul">GI</span>:</p>
        <ul>
          <li>Continue Replogle tube to LIWS.</li>
          <li>
            After discussion with the surgeon, consider placing Replogle to
            gravity when output is minimal and nonbilious.
          </li>
          <li>
            After discussion the with surgeon, consider discontinuation of the
            Replogle tube if output remains &lt;10 ml/kg/day &amp; there is no
            emesis.
          </li>
          <li>
            After discussion with the surgeon, consider starting trophic feeds 24
            hours later if infant continues to have no emesis.
          </li>
          <li>
            Encourage mother to pump and provide EMM when feeds are started.
          </li>
          <li>
            Consent mother for donor milk if she is unable to pump or cannot
            provide enough EMM.
          </li>
          <li>
            Advance feeds as per Pediatric Surgery at no more than 20 ml/kg/day
            until baby reaches at least half of goal volume.
          </li>
        </ul>
        <p><span class="ul">ID</span>:</p>
        <ul>
          <li>
            After the initial 48 hours of rule-out antibiotics per NICU protocol,
            stop antibiotics unless indicated to continue for sepsis, positive
            cultures, or other concern for active infection.
          </li>
        </ul>
        <p><span class="ul">Pain</span>:</p>
        <ul>
          <li>Provide Tylenol PR or IV every 6 hours for 48 hours.</li>
          <li>
            Provide morphine drip at 0.02 mg/kg/hr or morphine PRN for 12 hours
            for post-op pain, then wean as able.
          </li>
        </ul>
        <p><span class="ul">Notify:</span></p>
        <ul>
          <li>
            <span class="ul"
              >Please notify Pediatric Surgery if patient is not responding
              appropriately to the above therapy or if there is an escalation in
              therapy. For example:</span
            >
          </li>
          <ul>
            <li><span class="ul">Poor response to fluid boluses</span></li>
            <li><span class="ul">Escalation of ventilator support</span></li>
            <li>
              <span class="ul">Persistent acidosis/worsening base deficit</span>
            </li>
            <li>
              <span class="ul"
                >Increasing vent pressures/declining tidal volume</span
              >
            </li>
            <li><span class="ul">Poor UOP (&lt;1ml/kg/hr)</span></li>
            <li><span class="ul">Disruption of dressing</span></li>
            <li><span class="ul">Wound concerns</span></li>
          </ul>
        </ul>
      </div>
      <div id="staged">
        <p class="ion-text-center"><strong>Staged Closure</strong></p>
        <p>
          <span class="ul">Respiratory</span>: Wean toward extubation from the
          ventilator as soon as the first stage of closure has been performed
          (Silo placement), within 24 hours of procedure. The patient does not
          need to remain intubated until final closure unless otherwise requested
          by the surgeon.
        </p>
        <p><span class="ul">Fluids/Nutrition</span>:</p>
        <ul>
          <li>
            Continue D5LR for the first 24 hours post-op and then start TPN.
          </li>
          <li>Provide total fluids of 180-200 ml/kg/day.</li>
          <li>
            Weigh and record saturated dressings when changed and consider
            replacing this fluid loss.
          </li>
          <li>
            Monitor UOP and discuss insertion of a Foley catheter at the time of
            operation or shortly thereafter.
          </li>
          <li>
            Provide NS/LR boluses (20 ml/kg) as needed, including
            UOP&lt;1ml/kg/hr.
          </li>
          <li>
            Consent family for PICC and insert PICC within 12 hours of procedure.
          </li>
        </ul>
        <p><span class="ul">GI</span>:</p>
        <ul>
          <li>
            Please keep umbilical tape, scissors, Kerlix, and cling at the
            patient&rsquo;s bedside until the defect is closed.
          </li>
          <li>
            The dressing at base of the silo is intended to support the base of
            the silo and absorb fluid lost from the abdominal wound for
            measurement. It should always be applied in a fashion that allows
            constant visualization of the silo contents for color change, edema,
            or other signs of ischemia. Base of dressing should be kept as clean
            as possible (impossible to keep sterile) as this is the only barrier
            to the peritoneal cavity; whereas remainder of silo treated
            non-sterile.
          </li>
          <li>
            Patients should remain supine until after the final closure procedure
            AND the pediatric surgeon has cleared them to be positioned otherwise.
          </li>
          <li>Continue Replogle tube to LIWS.</li>
          <li>
            After discussion with the surgeon, consider placing Replogle to
            gravity when output is minimal and nonbilious.
          </li>
          <li>
            After discussion with the surgeon, consider discontinuing tube if
            output remains &lt;10 ml/kg/day and there is no emesis
          </li>
          <li>
            After discussion with the surgeon, consider starting trophic feeds 24
            hours later if infant continues to have no emesis
          </li>
          <li>
            Encourage mother to pump and provide EMM when feeds are started.
          </li>
          <li>
            Consent mother for donor milk if she is unable to pump or cannot
            provide enough EMM.
          </li>
          <li>
            Advance feeds as per Pediatric Surgery at no more than 20 ml/kg/day
            until baby reaches at least half of goal volume.
          </li>
        </ul>
        <p><span class="ul">ID</span>:</p>
        <ul>
          <li>
            After the initial 48 hours of rule-out antibiotics per NICU protocol,
            stop antibiotics unless indicated to continue for sepsis, positive
            cultures, or other concern for active infection.
          </li>
        </ul>
        <p><span class="ul">Pain</span>:</p>
        <ul>
          <li>Provide Tylenol PR or IV every 6 hours for the first 48 hours</li>
          <li>
            Provide morphine drip at 0.02 mg/kg/hr or morphine PRN for 12 hours
            for post-op pain, then wean as able.
          </li>
          <li>
            No additional medication needed for daily reductions, but may consider
            IV/PR Tylenol after 48 hours.
          </li>
        </ul>
        <p><span class="ul">Notify:</span></p>
        <ul>
          <li>
            <span class="ul"
              >Please notify Pediatric Surgery if patient is not responding
              appropriately to the above therapy or if there is an escalation in
              therapy. For example:</span
            >
          </li>
          <ul>
            <li><span class="ul">Poor response to fluid boluses</span></li>
            <li><span class="ul">Escalation of ventilator support</span></li>
            <li>
              <span class="ul">Persistent acidosis/worsening base deficit</span>
            </li>
            <li>
              <span class="ul"
                >Increasing vent pressures/declining tidal volume</span
              >
            </li>
            <li><span class="ul">Poor UOP (&lt;1ml/kg/hr)</span></li>
            <li>
              <span class="ul"
                >Change in appearance of the bowel in the silo</span
              >
            </li>
            <li>
              <span class="ul">Wound concerns/Dislodgement of the silo</span>
            </li>
          </ul>
        </ul>
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
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GastroschisisManagement",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton
  },
  methods: {
    scrollToAnchor(name) {
      const el = document.getElementById(name);
      el.scrollIntoView({ behavior: 'auto'});
    },
    scrollTop() {
      this.$refs.content.$el.scrollToTop(0);
    },
    doScroll(ev) {
      if (ev.detail.scrollTop > 500) {
        this.$refs.btnTop.$el.classList.remove('ion-hide');
      } else {
        this.$refs.btnTop.$el.classList.add('ion-hide');
      }
    }
  }
});
</script>

<style scoped lang="scss">
ion-title {
  position: static;
  padding: 2px 32px;
}
div {
  scroll-margin-top: 10px;
}
</style>
