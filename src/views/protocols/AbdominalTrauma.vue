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
      <h2 class="ion-text-wrap">Pediatric Abdominal Trauma Evaluation</h2>

      <step-form :questions="questions"></step-form>

      <p class="small">
        <span class="strong">IAI - Intra-abdominal injury requiring intervention</span><br/>
        <ol>
          <li>Holmes JF et al, "Identifying children at very low-risk of clinically important blunt abdominal injuries," Ann Emer Med 2013. 62(2):107-116</li>
          <li>Horn, J, "Risk of Intra-abdominal injuries in pediatric patients with stable blunt trauma and negative abdominal CT," Acada Emer Med 2010. 17(5):469-75</li>
        </ol>
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
    StepForm
  },
  data() {
    return {
      questions: [
        {
          id: 'index',
          title: 'Evidence of abdominal wall trauma, seat belt mark, GCS <14 with blunt abdominal trauma, or high risk mechanism',
          options: [
            {
              label: 'Yes (5.4% risk of IAI²)',
              jump: 'ct'
            },
            {
              label: 'No',
              jump: 'no 1',
            }
          ],
        },
        {
          id: 'ct',
          title: 'CT Abd/Pelvis',
          options: [
            {
              label: 'Negative (0.19% risk of IAI²)',
              jump: 'no 2'
            },
          ],
        },
        {
          id: 'no 1',
          title: 'Abdominal tenderness (not peritonitis), significant thoracic trauma, complaints of abdominal pain, decreased breath sounds, or emesis',
          options: [
            {
              label: 'Yes (0.7%-1.4% risk of IAI²)',
              jump: 'ua'
            },
            {
              label: 'No',
              jump: 'no 2',
            }
          ],
        },
        {
          id: 'no 2',
          title: 'PO challenge and discharge or admit for observation / serial exams',
          options: [
            {
              label: 'Abnormal',
              jump: 'ua'
            }
          ],
        },
        {
          id: 'ua',
          title: 'UA, LFTs, Amylase, Lipase, FAST',
          options: [
            {
              label: 'Abnormal',
              jump: 'ct'
            },
            {
              label: 'Normal',
              jump: 'no 2',
            }
          ],
        }
      ]
    }
  }
});
</script>