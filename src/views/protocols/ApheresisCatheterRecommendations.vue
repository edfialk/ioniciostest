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
        Apheresis Catheter Recommendations-Stem Cell Transplant/Cell Therapy
        Program
      </h2>

      <ul>
        <li>
          DCH BMT team/primary oncologist will determine/specify type of
          catheter requested in surgery consult order.&nbsp;
        </li>
        <li>
          For shared Randall/DCH patients, there will be discussion between
          Randall and DCH PHO oncology teams to determine catheter of choice for
          patient/situation, and then communicate in surgery consult order.
        </li>
      </ul>
      <p>
        <span style="text-decoration: underline"
          ><strong
            >Permanent, tunneled, double lumen hickman catheter</strong
          ></span
        >
        (used for apheresis AND chemotherapy, transplant, and other treatment):
      </p>
      <p><strong>Double Lumen Power Hickman</strong></p>
      <p>&le;12 kg, 6 French</p>
      <p>&gt;12 kg kg, 9.5 French</p>
      <p>Notes:&nbsp;</p>
      <ul>
        <li>
          All permanent double lumen hickman catheters placed are power hickmans
        </li>
        <li>
          Power Hickmans can be locked with antibiotics, NO ethanol lock.
          Standard (non-power Hickmans) can be locked with ethanol.
        </li>
      </ul>
      <p>
        <span style="text-decoration: underline"
          ><strong
            >Temporary, non-tunneled, double lumen apheresis catheter</strong
          ></span
        >
        (used ONLY for apheresis and will be needed for 1-3 days):
      </p>
      <p><strong>Double Lumen Catheter</strong></p>
      <p>
        &lt;10 kg, 7 French [Medcomp dual lumen HD Cath pediatrics 7F #125166]
      </p>
      <p>
        10-29 kg, 9 French [Medcomp dual lumen HD cath pediatrics 9F #123719]
      </p>
      <p>
        30+ kg, 11.5 French [Medcomp, in stock] OR 14Fr x 15 cm Schon XL
        (AngioDynamics Ref # 10801701, in stock)
      </p>
      <p>Notes:</p>
      <ul>
        <li>Will require removal by surgery team 1-3 days after placement</li>
        <li>Most likely requires inpatient hospital stay until removed</li>
        <li>Most often femoral placement over IJ</li>
        <li>
          Timing for placement can be difficult to predict/dependent on blood
          counts/stem cell count
        </li>
      </ul>
      <p>
        <span style="text-decoration: underline"
          ><strong>Activity restrictions</strong></span
        >
      </p>
      <p><strong>After placement:</strong></p>
      <p>Femoral hickman ok for bathroom privileges and walking around</p>
      <p>Femoral temporary pheresis catheter bathroom privileges only</p>
      <p>IJ hickman ok for bathroom privileges and walking around</p>
      <p>
        IJ temporary pheresis catheter ok for bathroom privileges and walking
        around
      </p>
      <p><strong>Pheresis catheter removal:</strong></p>
      <p>
        Pt needs platelet of at least 50,000 before line removal.&nbsp; Pressure
        needs to be held at line removal site for at least 3 min per F (ie, at
        least 21 min for 7F).&nbsp;&nbsp;
      </p>
      <p><strong>After pheresis catheter removal:</strong></p>
      <p>
        Pt should maintain bedrest for 30 min and be monitored for at least one
        hour total before discharge.
      </p>
      <p>
        <span style="text-decoration: underline"
          ><strong>Femoral vs internal jugular (IJ) vein:</strong></span
        >
      </p>
      <p>
        Head turning and neck movement more restricted with IJ pheresis catheter
      </p>
      <p>
        Femoral vein is smaller and may not be feasible for access in
        infant/smaller patients
      </p>
      <p>Femoral vein easier to hold pressure at site after removal</p>
      <p>Use of femoral vein protects the IJ vein for future access use</p>
      <p>
        Final decision of femoral vs. IJ vein to be made by surgeon and may not
        be made until day of procedure.
      </p>
      <p>
        <span style="text-decoration: underline"
          ><strong>Heparin locking of central lines:</strong></span
        >
      </p>
      <ol>
        <li>
          Non-dialysis central lines (PICC, temporary central line,
          Broviac/Hickmans)
        </li>
        <ol type="a">
          <li>Neonates:&nbsp; 10 units/mL heparin, 1 mL to each lumen</li>
          <li>
            Pediatric patients:&nbsp; 10 units/mL heparin, 3 mL to each lumen
          </li>
        </ol>
        <li>Implanted port (DCH and RCH)</li>
        <ol type="a">
          <li>
            Leaving accessed: Neo/Peds - 10 units/mL heparin, 3-5 mL (to each
            lumen if double lumen port)
          </li>
          <li>
            De-accessing: Neo/Peds - 100 units/mL heparin, 3-5 mL (to each lumen
            if double lumen port)
          </li>
        </ol>
        <li>Dialysis and Pheresis catheters (DCH)</li>
        <ol type="a">
          <li>
            Neo/Peds &le; 10 kg:&nbsp; 100 units/mL heparin, volume of catheter
            lumen (printed on each lumen) plus 0.2 mL to each lumen
          </li>
          <li>
            Neo/Peds &gt; 10 kg:&nbsp; 1000 units/mL heparin, Volume of catheter
            lumen (printed on each lumen) plus 0.2 mL to each lumen
          </li>
        </ol>
        <li>Dialysis and Pheresis catheters (RCH)</li>
        <ol type="a">
          <li>
            Neo/Peds:&nbsp; 1000 units/mL heparin, Volume of catheter lumen
            (printed on each lumen) plus 0.1 mL to each lumen
          </li>
        </ol>
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
