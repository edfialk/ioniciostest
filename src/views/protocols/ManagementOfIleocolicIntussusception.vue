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
      <h2 class="ion-text-wrap">Management Of Ileocolic Intussusception</h2>
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/35259668/">Pubmed</a></p>

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
// import ImageZoom from "@/components/ImageZoom.vue";
import StepForm from "@/components/StepForm.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ManagementOfIleocolicIntussusception",

  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    // ImageZoom,
    StepForm,
  },

  data() {
    return {
      questions: [
        {
          id: "index",
          title: "Patient is in ED. Need for urgent surgery consult?",
          options: [
            {
              label: "Yes",
              jump: "surgery consult",
            },
            {
              label: "No",
              jump: "ultrasound",
            },
          ],
        },
        {
          id: "surgery consult",
          title: "Surgery consult, Abd 2v XR, IVF resuscitation",
          subtitle: `
            <p>Consider emergent intervention if patient has peritonitis and/or pneumoperitoneum</p>
          `,
          options: [
            {
              label: "Ultrasound",
              jump: "ultrasound"
            }
          ]
        },
        {
          id: "ultrasound",
          title: "Ultrasound",
          options: [
            {
              label: "Negative",
              jump: "ultrasound neg",
            },
            {
              label: "Positive",
              jump: "ultrasound pos",
            },
          ],
        },
        {
          id: "ultrasound neg",
          title: "Back to ED for observation / further work-up",
        },
        {
          id: "ultrasound pos",
          title: "Surgery consult, IVF resuscitation",
          options: [
            {
              label: "AIR / CONTRAST ENEMA REDUCTION",
              jump: "reduced",
            },
          ],
        },
        {
          id: "reduced",
          title: "Reduced completely?",
          options: [
            {
              label: "Yes",
              jump: "reduced yes",
            },
            {
              label: "No",
              jump: "reduced no",
            },
          ],
        },
        {
          id: "reduced yes",
          title: "Observation in Emergency Department (ED) versus admission to floor",
          subtitle: `
            <p>Admit to pediatric surgery service if any of the following present at any point:
            <ol><li>Fever</li><li>Bloody stool</li><li>Lethargy</li><li>Unreliable access to care</li></ol></p>
            <p>
              Otherwise, return to ED for trial of clear liquids.
            </p>
            <p>
              After 4 hours of observation, if patient has tolerated clear liquids PO without vomiting or recurrent abdominal pain (and none of the above contraindications are present), then discharge home with return precautions
            </p>
            <p class="strong">
              Any surgery, radiology, or ED staff member may request admission based on clinical judgment.
            </p>
          `,
        },
        {
          id: "reduced no",
          title:
            "Admit for IVF resuscitation / further enema attempts, possible surgical intervention.",
          subtitle: `
            <p>
              Meets criteria for delayed repeat enema attempt?
            </p>
            <p class='strong'>Exclusion criteria:</p>
            <ol>
              <li> <span class='ul'>Absolute:</span>
                <ul><li>Peritonitis</li><li>Clinical instability during first enema attempt</li></ul>
              </li>
              <li> <span class='ul'>Two of the following three:</span>
                <ul>
                  <li>Leukocytosis</li>
                  <li>Fever ≥ 38.0</li>
                  <li>Length of symptoms > 72 hours</li>
                </ul>
              </li>
            </ol>
            <p class="strong">Candidates for delayed repeat enema attempt(s):</p>
            <ol>
              <li>Clinically stable</li>
              <li>Intussusception moves during initial or prior attempt</li>
            </ol>
            <p class="strong">Delayed repeat enema attempt(s):</p>
            <span>Timing determined by attending pediatric radiologist</span>
            <ol>
              <li>If first attempt overnight, plan for first start radiology procedure in am
                <ol type='a'>
                  <li>Order repeat enema for 0800</li>
                  <li>Call radiology tech at 0730</li>
                </ol>
              </li>
              <li>If first attempt during day, discuss timing for repeat attempt with radiology/surgery attgs</li>
              <li>May try multiple times during each attempt</li>
            </ol>
          `,
          options: [
            {
              label: "Yes, meets criteria",
              jump: "criteria yes",
            },
            {
              label: "No, does not meet criteria",
              jump: "criteria no",
            },
          ],
        },
        {
          id: "criteria yes",
          title: "ULTRASOUND to evaluate for ongoing intussusception",
          options: [
            {
              label: "Positive",
              jump: "ultrasound ongoing pos",
            },
            {
              label: "Negative",
              jump: "ultrasound ongoing neg",
            },
          ],
        },
        {
          id: "ultrasound ongoing pos",
          title: "Delayed repeat enema attempt",
          options: [
            {
              label: "Okay",
              jump: "reduced",
            },
          ],
        },
        {
          id: "ultrasound ongoing neg",
          title: "Observation / po trial",
        },
        {
          id: "criteria no",
          title: "Consider urgent surgical intervention",
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
