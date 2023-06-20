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
        Peritoneal Dialysis Catheter Placement Protocol
      </h2>

      <ol>
        <li>Omentectomy</li>
        <li>Use swan neck catheter in patients &gt;3kg</li>
        <li>Outer cuff at least 2 cm from exit site</li>
        <li>Dialysis exit site to aim downward or lateral</li>
        <li>No sutures on exit site</li>
        <li>Catheter immobilized in straight line near exit site</li>
        <li>
          Use Betadine cap on transfer set tubing (which can be curled after
          connecting to catheter)
        </li>
        <li>
          Sterile dressing changes until healed: Do not change dressing for 1
          week unless soiled
        </li>
        <li>&lt;2 weeks old: gauze and tegaderm</li>
        <li>
          Do not use catheter for at least 2 weeks unless emergent dialysis
          necessary
        </li>
        <li>Discharge on stool softener</li>
      </ol>
      <p>
        USE .PDCATHETER DOT PHRASE IN BRIEF OP NOTE
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
