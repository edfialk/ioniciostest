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
      <h2 class="ion-text-wrap">Central Line Placement in Oncology Patients</h2>

      <h4>Patient needing Central Line identified.</h4>
      <p class="strong">Line Insertion Criteria:</p>
      <ol>
        <li>
          Acute leukemia patient with new diagnosis - URGENT LINE within 24
          hours as inpatient - can be requsted as long as meets APC (neutrophils
          + monophils) criteria (criteria may not be met for patients with
          aplastic anemia)
        </li>
        <li>
          Patient with recovering counts or needing line replacement - APC must
          be rising or stable on two blood draws at least 48 hours apart.
          <strong>Preoperative APC must be ≥ 500,</strong> after most recent
          chemotherapy.
        </li>
        <li>
          Platelet count ≥ 50,000 preoperatively (may require transfusion for
          pts unable to meet this goal), and maintain for at least 24 hours
          postoperatively. Plts available for OR (ordered by onc) if needing
          transfusion pre-operatively.
        </li>
        <li>
          If preoperative hemoglobin is less than 8, discuss with anesthesia and
          surgical team - may need transfusion to 8.
        </li>
        <li>
          If patient has history of 2 or more central lines including PICC
          lines, or history of venous thrombosis, needs imaging to demonstrate
          patency of IJ and SC veins (US &lt; 6 months, MRV ≥ 6 months of age).
        </li>
        <li>Family understands need for central line and agrees to proceed.</li>
      </ol>
      <p>
        <strong>Heme/onc team contacts pediatric surgery for consult.</strong>
        PLEASE NOTE TYPE OF LINE REQUESTED IN CONSULT. For any questions:
        Oncology team contact is primary oncologist from impatient or outpatient
        referral. Please use <span class="ul">epic message</span> for contact
        questions to <span class="ul">outpatient surgical team</span>, direct to
        "ps triage and refill pool" [101098] and "ps schedulers pool" [101100].
      </p>
      <p class="strong">Inpatient</p>
      <ol>
        <li>
          Consult pediatric surgery team.
          <span class="strong">(APP pager 17318)</span>
        </li>
        <li>
          If Kaiser patient for elective line placement, we will contact Dr.
          Zigman.
        </li>
        <li>
          Schedule according to inpatient attending discretion, urgency and OR
          availability.
        </li>
      </ol>
      <p class="strong">Outpatient</p>
      <ol>
        <li>
          Referral to pediatric surgery - mark as elective or urgent. (PHO
          dotphrase)
        </li>
        <li>If Kaiser patient, refer to Dr. Zigman.</li>
        <li>
          Pt seen in clinic by APP or attending prior to line placement. COR
          dotphrase <span class="strong">.PSLINECOR</span>
        </li>
      </ol>
      <p class="strong">Preoperatively</p>
      <ol>
        <li>
          Surgery schedulers to notify heme / onc team when case is scheduled
          (for elective case).
        </li>
        <li>
          By 72 hours before case, heme / onc team to create
          <span class="ul">epic preop note</span>, with following information:
          primary oncologist, whether pt to be admitted postop, whether or not
          to access port, whether or not to pull PICC, additional procedures to
          be performed, consent information for additional procedures, planned
          provider for additional procedures.
        </li>
        <li>
          For elective line placement (recovering counts or line replacement) --
          If patient has received ongoing chemotherapy since last CBC, patient
          needs preoperative CBC meeting count criteria as outlined above.
          (Details arranged by pre-op surgical team provider.)
        </li>
        <li>
          If patient has not received therapy within one month and has adequate
          counts prior to this, he/she does not need another preoperative CBC.
        </li>
        <li>
          Informed consent for the line procedure is done by resident, APP or
          attending during preoperative clinic /inpatient visit or the day of
          the procedure.
        </li>
        <li>
          Any questions that arise from the pediatric surgery team will be
          directed to the primary oncologist listed in hte preoperative epic
          note.
        </li>
      </ol>
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
