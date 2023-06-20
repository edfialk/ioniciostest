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
      <h2 class="ion-text-wrap">Central Line Troubleshooting Algorithm</h2>

      <p>Notes:</p>
      <ul>
        <li>
          The team (Pediatric Surgery or IR) who placed the line should be first
          consulted for removal or replacement, but we are willing to co-manage
          on a case-by-case basis.
        </li>
        <li>
          Peds Surgery is fine with IR replacing lines, as needed, if patient is
          already sedated with them and line can’t be salvaged.
        </li>
        <li>
          tPA (Alteplase) dwell and infusion can be coordinated with infusion
          clinic. VAT (Vascular access team) may be able to assist.
        </li>
        <li>Power Hickmans are not compatible with ethanol locks</li>
        <li>
          Power Hickman cuffs are 2 or 5 cm above the retention hub (most are 5
          cm)
        </li>
        <li>Lines do not need to be re-sutured if 4 weeks or older</li>
      </ul>

      <step-form :questions="questions"></step-form>
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
import StepForm from "@/components/StepForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    StepForm,
  },

  data() {
    return {
      questions: [
        {
          id: "index",
          title: "Identification of a Problematic Port or Hickman",
          options: [
            {
              label: "Broken externally",
              jump: "broken",
            },
            {
              label: "Exposed cuff or port",
              jump: "exposed",
            },
            {
              label: "Other (sluggish, won't aspirate, etc)",
              jump: "other",
            },
            {
              label: "Infected, needing removal",
              jump: "infected",
            },
          ],
        },
        {
          id: "broken",
          title: "Consult Vascular Access Team for repair",
          options: [
            {
              label: "Unable to repair",
              jump: "unable to repair",
            },
          ],
        },
        {
          id: "unable to repair",
          title:
            "Consult Pediatric Surgery or IR for replacement (team that placed line)",
        },
        {
          id: "exposed",
          title:
            "Consult Pediatric Surgery or IR for replacement (team that placed line)",
        },
        {
          id: "other",
          title: "Obtain chest x-ray",
          subtitle:
            "Is there an obvious kink, malposition or change from post-placement imaging?",
          options: [
            {
              label: "Yes",
              jump: "obvious issue",
            },
            {
              label: "No",
              jump: "no issue",
            },
          ],
        },
        {
          id: "obvious issue",
          title:
            "Consult Pediatric Surgery or IR for review and possible replacement",
        },
        {
          id: "no issue",
          title: "No issue with central line on xray, consider tPA dwell",
          subtitle: `
            <p>See "De-Clotting Procedure for Vascular Access Devices"</p>	
            <ul>
              <li>tPA 2 mg/2 mL, administer 110% of catheter priming volume</li>
              <li>Allow to dwell for 30 min to 2 hours</li>
              <li>Withdraw and discard appropriate blood volume</li>
            </ul>
          `,
          options: [
            {
              label: "Unsuccessful",
              jump: "dwell unsuccessful",
            },
          ],
        },
        {
          id: "dwell unsuccessful",
          title: "Consider tPA infusion",
          subtitle: `
            <p>See "tPA infusion for De-clotting of Dialysis and Non-dialysis Central Venous Catheters"</p>
            <ul>
              <li>Continuous infusion</li>
              <li>Check for blood return at 2 hours and 4 hours</li>
            </ul>
          `,
          options: [
            {
              label: "Unsuccessful or infusion not safe for patient",
              jump: "infusion unsuccessful",
            },
          ],
        },
        {
          id: "infusion unsuccessful",
          title:
            "Consider IR for port/line study, possible fibrin sheath stripping, possible line replacement",
          subtitle:
            "If unsuccessful, consult Pediatric Surgery or IR for review and possible replacement",
        },
        {
          id: "infected",
          title: "Consult Pediatric Surgery or IR for line removal",
          subtitle:
            "Line to be replaced after at least two negative blood cultures (after line removal) x at least 48 hours each (see CLABSI protocol.)",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
ion-title {
  position: static;
  padding: 2px 32px;
}
</style>
