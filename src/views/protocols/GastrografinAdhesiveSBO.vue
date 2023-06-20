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
      <h2 class="ion-text-wrap">Adhesive Small Bowel Obstruction Protocol</h2>

      <p class="strong">Inclusion criteria (must have all of the following):</p>
      <ol>
        <li>Prior abdominal operation</li>
        <li>Clinical evidence of adhesive small bowel obstruction</li>
        <li>Radiographic evidence of adhesive small bowel obstruction</li>
        <li>Documented urine output</li>
      </ol>

      <p class="strong">
        Exclusion criteria (cannot have any of the following):
      </p>
      <ol>
        <li>Non-reducible hernia</li>
        <li>Allergy or hypersensitivity to contrast agents</li>
        <li>Inflammatory bowel disease</li>
        <li>Documented history of aspiration</li>
        <li>Documented intra-abdominal malignancy</li>
        <li>Less than 4 weeks s/p abdominal operation</li>
        <li>Patient less than one year of age</li>
        <li>
          Any signs of intestinal ischemia (fever ≥ 38.0, tachycardia,
          peritonitis, leukocytosis, lactic acidosis)
        </li>
        <li>
          Any signs of significant dehydration (BUN/Cr ratio &gt; 30, Cl &lt;
          100, CO2 &gt; 30)
        </li>
      </ol>

      <p class="strong ul">Protocol:</p>
      <ol>
        <li>
          Review inclusion and exclusion criteria for eligibility (see above).
          Proceed only if patient meets all inclusion criteria and dose not have
          any exclusion criteria.
        </li>
        <li>
          Place NG tube for decompression (Salem sump or Anderson tube) and
          place to suction. This can be through gastrostomy tract if present,
          after removing gastrostomy tube/button.
        </li>
        <li>Initiate D5 LR or D5 NS at 1.5 x maintenance rate.</li>
        <li>Administer 20 mL/kg bolus of NS or LR.</li>
        <li>
          Notify radiology of planned Gastrografin study to evaluate adhesive
          small bowel obstruction.
        </li>
        <li>
          Place order for xray SBFT and include “SBO Gastrografin Challenge” in
          the comments.
        </li>
        <li>
          Order 1 mL/kg (maximum 100 mL) of Gastrografin to bedside. (For
          children 1-2 years of age, dilute the Gastrografin in water: 2 parts
          Gastrografin to 1 part water.)
        </li>
        <li>
          Place nursing communication order: “Please coordinate with radiology
          for gastrografin challenge protocol. When radiology and patient ready,
          administer Gastrografin via NG and clamp tube.”
        </li>
        <li>
          After 4 hours of gastric decompression, administer 1 mL/kg (maximum
          100 mL) of Gastrografin via NG tube, ideally for 4 hours. If patient
          vomits or complains of worsening abdominal pain, place NG back to
          suction. Consider getting urgent abdominal xray early if possible,
          prior to placing tube back to suction.
        </li>
        <li>
          Otherwise, obtain abdominal xray 4 hours after administration of
          Gastrografin (prior to placing NG tube back to suction).
        </li>
        <li>
          If contrast not visualized in colon on 4-hour xray, repeat abdominal
          xray at 24 hours.
        </li>
        <li>
          If contrast not visualized in colon at 24 hours, obstruction is
          unlikely to resolve. Further management at surgeon’s discretion.
        </li>
      </ol>
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
