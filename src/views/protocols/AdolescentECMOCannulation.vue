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
      <h2 class="ion-text-wrap">Adolescent ECMO Cannulation at DCH</h2>

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
          title:
            "<p>Consult from PICU to pediatric surgery for non-cardiac, adolescent ECMO</p><p>Is patient ECMO candidate?</p>",
          options: [
            {
              label: "Yes",
              jump: "ecmo yes",
            },
            {
              label: "No",
              jump: "ecmo no",
            },
          ],
        },
        {
          id: "ecmo no",
          title: "No ECMO",
        },
        {
          id: "ecmo yes",
          title: "Does patient require VV or VA Ecmo?",
          options: [
            {
              label: "VV",
              jump: "vv",
            },
            {
              label: 'VA',
              jump: 'va'
            }
          ],
        },
        {
          id: 'vv',
          title: 'Pediatric surgery to cannulate for VV ECMO. Can do percutaneous neck or groin access (surgeon preference). If need cannulation advice, call ECMO/ECLS Adult attending.'
        },
        {
          id: 'va',
          title: 'Does patient require groin cannulation?',
          options: [
            {
              label: 'Yes',
              jump: 'va yes'
            },
            {
              label: 'No',
              jump: 'va no'
            }
          ]
        },
        {
          id: 'va no',
          title: 'Pediatric surgery to cannulate neck for VA ECMO'
        },
        {
          id: 'va yes',
          title: 'Pediatric Surgery attending/fellow to contact vascular surgeon on call',
          subtitle: `
            <p>Discussion points</p>
            <ol>
              <li>Percutaneous vs open<ul><li>Perc will be done in OR</li></ul></li>
              <li>Should always do distal perfusion catheter</li>
              <li>Use of closure device</li>
              <li>Decannulation plan</li>
            </ol>
          `
        }
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
