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
      <h2 class="ion-text-wrap">Anesthesia Safety Guidelines for Patients with Anterior Mediastinal
          Masses</h2>

      <p>
        These guidelines have been established to help decide timing of sedation
        for a diagnostic procedure, with the goal of avoiding general
        anesthesia.
      </p>
      <p>
        <span class="ul"
          >As soon as it is decided that a patient will need sedation for a
          diagnostic procedure, the anesthesia team should be consulted.</span
        >This consultation may help guide the decision of whether or not
        steroids are necessary prior to a sedated procedure.The team that
        is to perform the procedure (surgery, heme-onc, radiology) will contact
        the anesthesia consult pager to find the name of the sedating provider
        with whom the discussion will be held.
      </p>
      <p>
        <strong
          >Patients who are considered low risk and should not require steroids
          include:</strong
        >
      </p>
      <p>1 &ndash; No signs or symptoms of airway or vascular compromise</p>
      <p>
        2 &ndash; No CT or TTE findings suggestive of airway or vascular
        compression
      </p>
      <p>
        <strong
          >Patients who are considered moderate risk who may require steroids
          after discussion with the anesthesia provider include:</strong
        >
      </p>
      <p>1 &ndash; Mild respiratory symptoms</p>
      <p>
        2 &ndash; Less than 50% tracheal compression and NO bronchial
        compression on CT
      </p>
      <p>3 &ndash; No cardiac or vascular compression on imaging</p>
      <p>
        <strong
          >Patients who are considered high risk and should empirically receive
          steroids include:</strong
        >
      </p>
      <p>1 &ndash; Signs or symptoms or SVC syndrome</p>
      <p>
        2 &ndash; Moderate to severe respiratory symptoms including orthopnea,
        stridor, dyspnea, feeling of chest fullness, cough or increased work of
        breathing
      </p>
      <p>3 &ndash; Greater than 50% tracheal compression on CT</p>
      <p>4 &ndash; ANY bronchial or great vessel compression on CT</p>
      <p>5 &ndash; Presence of tamponade physiology on TTE</p>
      <p>
        It is important to be aware that anesthetic complications have occurred
        in children with anterior mediastinal masses who presented with symptoms
        only (no worrisome imaging) and with worrisome imaging only (no
        symptoms); therefore we must take both into account when making this
        decision.
      </p>
      <p>
        Once steroids are started,
        <span class="ul">daily assessments</span> between the anesthesia,
        oncology and surgical teams should be held in order to determine timing
        of sedated procedure.Maximum effect of steroids is likely at 48
        hours so sedation should not be delayed significantly beyond this
        time.Other than clinical assessment, no further imaging is
        necessary to determine timing of procedure.
      </p>
      <p>
        Goal is to proceed to the operating room within 72 hours of starting
        steroids (avoiding weekend procedures).The anesthesiologist will
        administer the least amount of anesthesia possible to perform the
        procedure with the primary goal to maintain hemodynamic stability as
        well as spontaneous ventilation (in most cases).
      </p>
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
