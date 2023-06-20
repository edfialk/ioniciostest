<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h2 class="ion-text-wrap">
        Post Gastrostomy Placement Feeding Protocol *
      </h2>
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/26995593/">Pubmed</a></p>

      <div>
        <p class="ion-text-center">Laparascopic or open approach</p>
        <p class="ul strong">Immediately postop:</p>
        <ul>
          <li>Keep NPO with gastrostomy tube to gravity for 4 hours.</li>
          <li>
            Medications okay via G-tube. (Clamp briefly after medication
            administration.)
          </li>
          <li>
            Consult dietitian for feeding plan if there isn’t a note in chart.
          </li>
        </ul>
        <p class="ul strong">At 4 hours post-op:</p>
        <ul>
          <li>
            Begin feeds at 1/3 of goal continuous or bolus rate – breast milk or
            formula of choice. (See RD note.)
          </li>
          <li>
            Increase by 1/3 every 3 hours as tolerated to goal continuous or
            bolus rate. **
          </li>
          <li>
            Any patients able to take PO nutrition may resume their
            pre-admission diet.
          </li>
        </ul>
        <p>
          ** Patients who do not tolerate advancement of feeds should be
          assessed and an alternative feeding plan determined in discussion with
          the surgeon.
        </p>
        <p class="ul strong">Postop day #1:</p>
        <ul>
          <li>
            Ideally, patients will be at goal feeds by the morning of POD#1.
          </li>
          <li>Anticipate discharge.</li>
          <li>
            Order equipment and/or speak with case manager for discharge needs.
            <ul>
              <li>
                14Fr __cm gastrostomy buttons (Mickey or Mini-One) with
                connector tubing
              </li>
              <li>Feeding pump as needed</li>
            </ul>
          </li>
        </ul>
        <p>
          * For patients who undergo gastrostomy tube placement as part of a
          larger abdominal operation, this protocol may not apply and feeding
          plan will be determined by the surgeon.
        </p>
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
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostGastrostomyPlacementFeedingProtocol",
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