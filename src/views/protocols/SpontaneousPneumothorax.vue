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
      <h2 class="ion-text-wrap">Spontaneous Pneumothorax Protocol</h2>

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
          title: "",
          options: [
            {
              label: "Initial spontaneous pneumothorax",
              jump: "initial",
            },
            {
              label:
                "Recurrent spontaneous pneumothorax: After resolution of initial pneumothorax treated with observation or chest tube. Patients with recurrent pneumothorax after VATS should be managed according to attending discretion",
              jump: "recurrent",
            },
          ],
        },
        {
          id: "initial",
          title: "Initial spontaneous pneumothorax",
          options: [
            {
              label: "Small(< 20%)",
              jump: "small",
            },
            {
              label: "Large (≥ 20%)",
              jump: "large",
            },
          ],
        },
        {
          id: "small",
          title: "Small (<20%)",
          subtitle: `
            <p>Observe in Emergency Department (ED)</p>
            <p>Repeat CXR 4-6 hours to ensure stability</p>
          `,
          options: [
            {
              label: "Pneumothorax stable to improved",
              jump: "improved",
            },
            {
              label: "Pneumothorax increased to > 20%",
              jump: "large",
            },
          ],
        },
        {
          id: "improved",
          title: "Pneumothorax stable to improved",
          subtitle: `
            <p>Discharge from ED if family comfortable and patient asymptomatic, with plan for follow-up (PCP and/or Surgery team)</p>
            <p>OR</p>
            <p>Continue observation in ED or admit for observation if family not comfortable, attending preference, and/or concern for symptoms</p>
          `,
        },
        {
          id: "large",
          title: "Large (> 20%)",
          subtitle: `
            <p>Chest tube (CT) placed to suction (typically 8.5F pigtail catheter),* then CXR</p>
            <p class="small">* Consider needle aspiration as initial intervention depending on available resources/staff</p>
          `,
          options: [
            {
              label: "Lung expanded",
              jump: "lung expanded",
            },
            {
              label: "Lung not expanded",
              jump: "lung not expanded",
            },
          ],
        },
        {
          id: "lung not expanded",
          title: "Lung not expanded",
          subtitle: `
            <p>Consider CT replacement or 2nd CT.**</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,
          options: [
            {
              label: "Lung expanded",
              jump: "lung expanded",
            },
            {
              label:
                "If still not adequately expanded, proceed to high risk algorithm",
              jump: "high risk",
            },
          ],
        },
        {
          id: "lung expanded",
          title: "Lung expanded",
          subtitle: "Suction for 20-24 hours, then CXR",
          options: [
            {
              label: "Lung expanded w/ <10% collapse, no air leak",
              jump: "le lt 10 collapse",
            },
            {
              label: "Lung collapses >10%, +/- air leak",
              jump: "lung collapse",
            },
          ],
        },
        {
          id: "le lt 10 collapse",
          title: "Lung expanded w/ < 10% collapse, no air leak",
          subtitle: "Water seal (WS), CXR in 4-6 hours",
          options: [
            {
              label: "Lung remains expanded, no air leak",
              jump: "remains expanded",
            },
            {
              label: "Lung collapses >10%, +/- air leak",
              jump: "collapse gt 10",
            },
          ],
        },
        {
          id: "remains expanded",
          title: "Lung remains expanded, no air leak",
          subtitle:
            "Continue WS for 20-24 hours and then repeat CXR prior to CT removal",
        },
        {
          id: "collapse gt 10",
          title: "Lung collapses >10%, +/- air leak",
          subtitle: `
            <p>Consider new CT**, continue suction, CXR(s) < 12 hrs and 24-48 hrs</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,
          options: [
            {
              label: "Increasing lung collapse on subsequent CXR",
              jump: "inc lung coll",
            },
            {
              label:
                "Ongoing air leak after 3 days, possibly consider Chest CT",
              jump: "ong air leak",
            },
            {
              label: "Lung stable at 24-48 hrs, no air leak",
              jump: "lung stable",
            },
          ],
        },
        {
          id: "inc lung coll",
          title: "Increasing lung collapse on subsequent CXR",
          subtitle: `
            <p>Lung not expanded – consider CT replacement or 2nd CT.**</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,
          options: [
            {
              label: "Lung expanded",
              jump: "lung expanded",
            },
            {
              label:
                "If still not adequately expanded, proceed to high risk algorithm",
              jump: "high risk",
            },
          ],
        },
        {
          id: "ong air leak",
          title: "Ongoing air leak after 3 days, possibly consider Chest CT",
          subtitle:
            "OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis",
        },
        {
          id: "lung stable",
          title: "Lung stable at 24-48 hrs, no air leak",
          subtitle: "Water seal (WS), CXR in 4-6 hours",
          options: [
            {
              label: "Lung remains expanded, no air leak",
              jump: "remains expanded",
            },
            {
              label: "Lung collapses >10%, +/- air leak",
              jump: "collapse gt 10",
            },
          ],
        },
        {
          id: "high risk",
          title: "High Risk Algorithm",
          subtitle: `
            <p>Large (> 20%)</p>
            <p>Lung not expanding despite adequate chest tube(s) placement**, and/or continuous air leak</p>
            <p>Possibly consider Chest CT</p>
            <p>OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,
        },
        {
          id: "recurrent",
          title: "Recurrent spontaneous pneumothorax*",
          subtitle: `
            <p class="small">* After resolution of initial pneumothorax treated with observation or chest tube.  Patients with recurrent pneumothorax after VATS should be managed according to attending discretion</p>
          `,
          options: [
            {
              label: "Small (< 20%)",
              jump: "small recurrent",
            },
            {
              label: "Large (> 20%)",
              jump: "large recurrent",
            },
          ],
        },
        {
          id: "small recurrent",
          title: "Small recurrent pneumothorax (< 20%)",
          subtitle: `
            <p>Observe in Emergency Department (ED) or as inpatient</p>
            <p>Repeat CXR 4-6 hours to ensure stability</p>
          `,
          options: [
            {
              label: "Pneumothorax stable to improved",
              jump: "improved",
            },
            {
              label: "Pneumothorax increased to > 20%",
              jump: "large recurrent",
            },
          ],
        },
        {
          id: "large recurrent",
          title: "Large recurrent pneumothorax ( > 20%)",
          subtitle: `
            <p>Chest tube placed to suction (8.5 F), possible replacement or second tube if lung not completely expanded**</p>
            <p>Possibly consider chest CT</p>
            <p>Management per discussion with attending and family, consider chest tube management or OR for thoracoscopic blebectomy/apical resection with apical pleurectomy +/- pleurodesis</p>
            <p class="small">** Check circuit for any issues, consider increasing suction</p>
          `,
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
