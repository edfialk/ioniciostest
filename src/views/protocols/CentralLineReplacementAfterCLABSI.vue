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
      <h2 class="ion-text-wrap">
        Protocol for replacement of central lines after CLABSI
      </h2>

      <p>After removal of a central line for CLABSI:</p>
      <ol>
        <li>
          For patients who have had two or more central lines in the past
          (including PICCs), imaging may be needed to evaluate veins prior to
          line replacement.
        </li>
        <ol type="a">
          <li>
            US may be sufficient for patients under 6 months of age.&nbsp; MRV
            is needed for patients 6 months of age and older.
          </li>
          <li>
            If patient has had an MRV within the past 6 months, they may not
            need another MRV &ndash; will need to discuss with surgical
            attending and decide on case by case basis.&nbsp;&nbsp;
          </li>
          <li>
            If line is being re-wired rather than replaced (ie, for line
            breakage but not infection) &ndash; vein imaging may not be needed
            &ndash; discuss with attending who is replacing line.
          </li>
        </ol>
        <li>
          Ultrasound imaging for clot per ID recommendations (typically
          indicated for persistent unexplained bacteremia).
        </li>
        <li>
          For NON-YEAST infections, patient needs two blood cultures after line
          removal - negative for at least
          <span style="text-decoration: underline">48 hours each</span> prior to
          line replacement.
        </li>
        <li>
          For YEAST infections &ndash; patient needs two blood cultures after
          line removal - negative for at least
          <span style="text-decoration: underline">72 hours each</span> prior to
          line replacement.
        </li>
        <li>
          Line replacement is elective, and should not be scheduled during the
          weekend unless there is an emergent indication.
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
