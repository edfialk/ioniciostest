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
      <h2 class="ion-text-wrap">Solid Organ Injury Management Protocol*</h2>

      <p><a href="https://pubmed.ncbi.nlm.nih.gov/28941929/">Pubmed</a></p>

      <step-form :questions="questions"></step-form>

      <div class="table-scroll">
        <p class="strong">Normal Vital Signs and Blood Volume by Age</p>
        <table>
          <thead>
            <tr>
              <td>Age</td>
              <td>Heart rate (beats/min)</td>
              <td>Systolic BP (mm Hg)</td>
              <td>Respiratory rate (breaths/min)</td>
              <td>Blood volume (ml/kg body weight)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neonate</td>
              <td>100-160</td>
              <td>60-90</td>
              <td>30-60</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Infant</td>
              <td>90-120</td>
              <td>80-100</td>
              <td>30-40</td>
              <td>80</td>
            </tr>
            <tr>
              <td>2-5 years</td>
              <td>95-140</td>
              <td>80-120</td>
              <td>20-30</td>
              <td>80</td>
            </tr>
            <tr>
              <td>5-12 years</td>
              <td>80-120</td>
              <td>90-110</td>
              <td>15-20</td>
              <td>80</td>
            </tr>
            <tr>
              <td>> 12 years</td>
              <td>60-100</td>
              <td>100-120</td>
              <td>12-15</td>
              <td>70</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p>
          <span class="ul">Definitions</span>:<br>
          <span class="strong">Normal vital signs (VS):</span> normal for age after initial volume resuscitation<br>
          <span class="strong">Hct:</span> hematocrit<br>
          <span class="strong">NPO:</span> nothing by mouth<br>
          <span class="strong">pRBC:</span> packed red blood cell<br>
          <span class="strong">MTP:</span> massive transfusion protocol
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
          title: "Patient hemodynamics",
          options: [
            {
              label: "Normal",
              jump: "hemo normal",
            },
            {
              label: "Abnormal",
              jump: "hemo abnormal",
            },
          ],
        },
        {
          id: "hemo normal",
          title: "Hemodynamically Normal",
          subtitle: `
            <p>Admit to ward</p>
            <p>VS q2 hrs then q4 hrs</p>
            <p>Admission Hct**</p>
            <p class="small">**Golden J et al. Admission hematocrit predicts the need for transfusion secondary to hemorrhage in pediatric blunt trauma patients. J Trauma Acute Care Surg. 2015 Oct;79(4):555-62.</p>
          `,
          options: [
            {
              label: "Admit Hct < 35",
              jump: "hct lt 35",
            },
            {
              label: "Admit Hct ≥ 35",
              jump: "hct gt 35",
            },
          ],
        },
        {
          id: "hct lt 35",
          title: "Admission hematocrit < 35",
          subtitle: `
            <p>Bathroom privileges and NPO</p>
            <p>
              If VS becoming abnormal/unstable, check stat Hct and consider transfer to PICU
            </p>
            <p>If VS normal/stable after 12 hrs of observation, recheck Hct</p>
          `,
          options: [
            {
              label: 'Hct stable at 12 hours (< 3 point change)',
              jump: 'hct stable'
            },
            {
              label: 'Hct unstable at 12 hours (≥ 3 point change)',
              jump: 'hct unstable'
            }
          ]
        },
        {
          id: 'hct stable',
          title: 'Hematocrit stable at 12 hours (< 3 point change)',
          subtitle: `
            <p>Regular diet</p>
            <p>Ambulate</p>
            <p>Evaluate for discharge after 6 hours</p>
            <p>&nbsp;</p>
            <p class='ul'>Discharge criteria</p>
            <p>Tolerating diet</p>
            <p>Minimal abdominal pain</p>
            <p>Normal vital signs</p>
            <p>Activity restriction: highest grade plus 2 weeks</p>
          `,
        },
        {
          id: 'hct unstable',
          title: 'Hematocrit unstable at 12 hours (≥ 3 point change)',
          subtitle: `
            <p>Recheck Hct q6 hrs until stable</p>
            <p>Consider transfusion if Hct &lt; 21</p>
            <p>Consider transfer to PICU if VS abnormal/unstable</p>
          `,
          options: [
            {
              label: "Hct stabilizes, pt remains on floor",
              jump: "hct stable"
            },
            {
              label: "Transfer to PICU",
              jump: "hemo abnormal"
            }
          ]
        },
        {
          id: 'hct gt 35',
          title: 'Admission hematocrit ≥ 35',
          subtitle: `
            <p>No activity restriction</p>
            <p>Regular diet</p>
            <p>If stable after 12 hours of observation, evaluate for discharge</p>
            <p>&nbsp;&/p>
            <p class='ul'>Discharge criteria</p>
            <p>Tolerating diet</p>
            <p>Minimal abdominal pain</p>
            <p>Normal vital signs</p>
            <p>Activity restriction:  highest grade plus 2 weeks</p>
          `,
        },
        {
          id: 'hemo abnormal',
          title: 'Hemodynamically abnormal',
          subtitle: `
            <p>Defined as tachycardia/hypotension for age after initial volume resuscitation (see table)</p>
            <p class="strong i">Contact Pediatric Surgery as soon as possible</p>
            <p>&nbsp;</p>
            <p>Admit to PICU</p>
            <p class="strong">Consider transfusion if ongoing abnormal VS after initial 20 mL/kg isotonic IVF bolus, and/or Hct &lt; 21</p>
            <p>NPO until VS normal and Hct stable x 12 hours</p>
            <p>Bedrest until VS normal, then bathroom privileges</p>
            <p>VS per ICU routine (at least q1 hr x 4 hrs, then q4 hrs if stable)</p>
            <p>Hct q6 hrs until stable x 2</p>
          `,
          options: [
            {
              label: "VS normalize and HCT stable x 12 hours",
              jump: 'hemo normal'
            },
            {
              label: "Continued instability",
              jump: "continued"
            }
          ]
        },
        {
          id: 'continued',
          title: 'Continued instability',
          subtitle: `
            <p class="ul">Consider:</p>
            <p>Angioembolization by interventional radiology for signs of ongoing bleeding [Not indicated for contrast blush on CT with normal/stable VS]</p>
            <p>Operative exploration for ongoing abnormal VS despite pRBC transfusion</p>
            <p>MTP activation</p>
          `,
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

2022 SOI protocol 6.21.22.jpg
