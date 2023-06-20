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
      <h2 class="ion-text-wrap">Infant Perianal Abscess Protocol</h2>
      <p class="strong">Inclusion Criteria:</p>
      <ul>
        <li>Infant (onset at &lt;1 yr of age)</li>
        <li>Abscess ≤ 2 cm from anal verge</li>
        <li>Abscess ≤ 3 cm in size</li>
      </ul>

      <p class="strong">Exclusion Criteria:</p>
      <ul>
        <li>Immunocompromised</li>
        <li>Hirschsprung’s, IBD</li>
        <li>Anorectal malformation</li>
      </ul>

      <p class="ul">
        Recommended management for initial and recurrent abscesses:
      </p>
      <p>
        Sitz baths (warm water and soap) and warm compresses TID for 14 days.
      </p>
      <p>Warm water and soap with diaper changes for 14 days. No baby wipes.</p>
      <p>
        Needle aspiration for symptomatic relief prn, avoiding general
        anesthesia/operating room if possible.
      </p>
      <p class="strong">Antibiotics per surgeon discretion:</p>
      <ul>
        <li>
          First choice recommendation: Augmentin (30 mg/kg/day of amoxillicin
          divided every 12 hrs) for 7 days
        </li>
        <li>
          Concern for MRSA: Bactrim (15 mg/kg/day of TMP divided BID) for 7 days
          or Clindamycin (30 mg/kg/day divided TID) in sulfa allergy or under
          two months of age.
        </li>
      </ul>
      <p class="strong">
        Failure to improve with persistent signs/symptoms at 48 hours (fevers
        greater &gt; 38 C, recurrent fluctuance with pain and/or feeding
        difficulty)
      </p>
      <ul>
        <li>Exam under anesthesia with aspiration or incision and drainage</li>
      </ul>
      <p class="strong">
        Recurrences beyond one year of age AND after 6 months of non-operative
        management
      </p>
      <ul>
        <li>
          Management at surgeon discretion (continued non-operative management,
          exam under anesthesia, aspiration vs incision and drainage,
          fistulotomy)
        </li>
      </ul>
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
