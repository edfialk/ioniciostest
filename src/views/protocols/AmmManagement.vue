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
      <h2 class="ion-text-wrap">Anterior Mediastinal Mass (AMM) Management</h2>

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
          title: "Patient presents with anterior mediastinal mass",
          subtitle: `
          <p>Consult hematology/oncology, with initial labs per heme/onc, and Pediatric Surgery</p>
          <p class="ul"><strong>DAILY DISCUSSION</strong> amongst teams regarding plans for imaging and diagnosis</p>
        `,
          options: [
            {
              label: "Next",
              jump: "evaluate",
            },
          ],
        },
        {
          id: "evaluate",
          subtitle: `
            <p><strong>Evaluate for signs/symptoms:</strong></p>
            <ul>
              <li>Chest pain/fullness</li>
              <li>Superior vena cava syndrome</li>
              <li>Shortness of breath</li>
              <li>Hoarseness</li>
              <li>Orthopnea</li>
              <li>Syncope</li>
              <li>Cough</li>
              <li>Dysphagia</li>
            </ul>
            <p><strong>Initial Labs:</strong> CBC/diff, CMP, LDH, uric acid, Phosphorus</p>
            <p><strong>Initial Imaging:</strong> 2-view CXR and non-sedated Transthoracic echocardiogram (sitting and supine)</p>
            <p><strong>PE:</strong> Examine for lymphadenopathy, effusion</p>
            <p class="strong">Consider early management:</p>
            <p>Steroids (<span class="ul">especially with airway/vascular compression</span>)</p>
            <p>Tumor Lysis Management</p>
          `,
          options: [
            {
              label: "Next",
              jump: "picu"
            }
          ]
        },
        {
          id: "picu",
          subtitle: `
            <p>PICU admission if concern for airway or vascular compression</p>
            <p>Consults: CT diagnostics (pediatric radiology) and Anesthesia</p>
            <p class="ul"><strong>DISCUSSION</strong> amongst all teams regarding plan</p>
            <p>Additional imaging if needed: CT chest with IV contrast: assess airway and SVC compression</p>
          `,
          options: [
            {
              label: "Next",
              jump: "diagnosis"
            }
          ]
        },
        {
          id: "diagnosis",
          subtitle: `
            <p><strong>Diagnosis</strong> by CBC, pleural/pericardial fluid aspiration, or bone marrow biopsy</p>
          `,
          options: [
            {
              label: "Not possible",
              jump: "not possible"
            },
            {
              label: "Possible",
              jump: "sedation"
            }
          ]
        },
        {
          id: "sedation",
          subtitle: `
            <p>If patient requires sedation, done in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>
            <p>Or, in PICU with local anesthesia only, with anesthesia staff or PICU attending</p>
          `
        },
        {
          id: "not possible",
          subtitle: `
            <p><strong>Diagnosis</strong> by lymph node biopsy or palpable extension of mediastinal mass</p>
          `,
          options: [
            {
              label: "Not possible",
              jump: "not possible 2"
            },
            {
              label: "Possible",
              jump: "possible 2"
            }
          ]
        },
        {
          id: "possible 2",
          subtitle: `
            <p>May be performed within 48-72 hrs of starting steroids</p>
            <p><strong>When safe**</strong>, in OR with anesthesia staff, HOB elevated &gt; 45 degrees</p>
            <p class="strong">** Please see <span class="ul">anesthesia safety guideliness for AMM</span></p>
          `
        },
        {
          id: "not possible 2",
          subtitle: `
            <p><strong>Multidsciplinary discussion</strong> about diagnosis for biopsy of mediastinal mass</p>
            <ul>
              <li>CT or US-guided biopsy in diagnostics with anesthesia staff present</li>
              <li>Or, in OR with anesthesia staff</li>
              <li>May be done within 48-72 hrs of starting steroids, with daily re-assessment.</li>
              <li><span class="ul">Avoid general anesthesia and ECMO</span>. Consider treatment based on probably diagnosis if necessary to avoid general anesthesia.</li>
            </ul>
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
