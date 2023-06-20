<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content
      :fullscreen="true"
      class="ion-padding"
      scrollX="true"
      scrollY="true"
    >
      <h2 class="ion-text-wrap">Central Line Removal in Oncology Patients</h2>

      <h4>Patient needing Central Line removal identified.</h4>
      <p class="strong">Line Removal Criteria</p>
      <ol>
        <li>
          APC (neutrophils + monophils) criteria: APC ≥ 500 cells/µL and not
          expected to fall within the first week postoperatively
        </li>
        <li>
          Platelet count ≥ 50,000 preoperatively. Plts available for OR (ordered
          by onc) if needing transfusion pre-operatively.
        </li>
        <li>
          For elective line removal, patient is deemed ready for removal by
          oncology team without evidence of recurrence - prior to contacting
          surgery.
        </li>
        <li>
          For urgent line removal (ie, infection) - pt has failed antibiotic
          therapy or other medical management.
        </li>
        <li>
          Family understands need for central line removal and agrees to
          proceed.
        </li>
      </ol>

      <h4>Consult referral to pediatric surgery team.</h4>
      <p>
        For <span class="strong">urgent</span> line removals (ie, infection)
        contact inpatient surgical team. For any questions: Oncology team
        contact is primary oncologist from inpatient or outpatient referral.
        Please use <span class="ul">epic message</span> for contact questions to
        <span class="ul">outpatient surgical team</span>, direct to "ps triage
        and refill pool" [101098] and "ps schedulers pool" [101100].
      </p>

      <h4 class="strong">Inpatient</h4>
      <ol>
        <li>
          Consult pediatric surgery team.
          <span class="strong">(APP pager 17318)</span>
        </li>
        <li>
          If Kaiser patient for elective line removal, we will contact Dr.
          Zigman.
        </li>
        <li>
          Schedule according to inpatient attending discretion, urgency and OR
          availability.
        </li>
      </ol>

      <h4 class="strong">Outpatient</h4>
      <ol>
        <li>
          Referral to pediatric surgery - mark as elective or urgent. (PHO
          dotphrase)
        </li>
        <li>If Kaiser patient, refer to Dr. Zigman.</li>
        <li>Pt seen in clinic by APP or attending prior to removal.</li>
      </ol>

      <h4 class="strong">Preoperatively</h4>
      <ol>
      <li>For elective line removal, patient needs a CBC after <span class="ul">completion of all therapy</span> that demonstrates APC ≥ 500.</li>
      <li>For elective line removal, if the patient has had APC &lt; 500 within the past month, needs CBC with APC ≥ 500 within 2 days of the line removal (not necessarily the day of the procedure.)</li>
      <li>Informed consent for the line removal is done by the resident, APP or attending during preoperative clinic/inpatient visit or the day of the procedure.</li>
      <li>Questions that arise from the pediatric surgery team will be directed to the heme/onc provider who placed the consult, according to the dot phrase or inpatient consult.</li></ol>

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
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
  },
});
</script>

<style scoped lang="scss">
ion-title {
  position: static;
  padding: 2px 32px;
}
</style>
