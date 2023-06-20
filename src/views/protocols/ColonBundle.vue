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
        Bundle for Pediatric Operations Involving Colon and/or Rectum
      </h2>

      <p><a href="https://pubmed.ncbi.nlm.nih.gov/32063373/">Pubmed</a></p>

      <hr />

      <h4>Preoperative</h4>

      <p><span class="ul">Bowel Preparation:</span> (optional)</p>
      <ul>
        <li>Polyethylene glycol at 50 ml/kg/hr x 4 hours</li>
        <li>Saline enema for stoma closure</li>
      </ul>

      <p>
        <span class="ul">Chlorhexidine Bath</span> (optional in pre-term
        neonates)
      </p>

      <p><span class="ul">Umbilical Cleaning</span></p>
      <ul>
        <li>70% ethanol used prior to standard skin preparation</li>
      </ul>

      <p>
        <span class="ul">Cefoxitin within 1h of incision</span> (unless
        documented allergy)
      </p>
      <ul>
        <li>Piperacillin-tazobactam used in the setting of infection</li>
      </ul>

      <hr />

      <h4>Intraoperative</h4>

      <p>
        <span class="ul">Leak test</span> (if enteric anastomosis performed)
      </p>

      <p><span class="ul">Glove change</span> (before skin closure)</p>

      <p><span class="ul">Dedicated closure tray</span></p>
      <ul>
        <li>Minor instrument tray opened after fascial closure</li>
      </ul>

      <p class="ul">
        Placement of subcutaneous drain in grossly contaminated cases
      </p>

      <p>Drains can be:</p>
      <ul>
        <li>Vessel loop</li>
        <li>Penrose</li>
        <li>Umbilical tape</li>
        <li>Other wicking object</li>
      </ul>

      <p class="ul">Maintenance of Normothermia</p>
      <ul>
        <li>&lt; 36° C for &lt; 45 minutes</li>
      </ul>

      <p class="ul">Maintenance of Euglycemia</p>

      <hr />

      <h4>Postoperative</h4>

      <p>
        <span class="ul">Occlusive dressing removed at 48h</span>
        (clean-contaminated cases)
      </p>

      <p class="ul">Perioperative antibiotics discontinued at 24h</p>

      <hr />
      
      <p class="small">
        <em>Standardized Perioperative Colon Bundle.</em> An institutional colon
        bundle developed from contemporary literature adn best practive
        recommendations, and modified to reflect unique concerns present in the
        care of children. Implemnted in all children undergoing colorectal
        procedures.
      </p>

      <image-zoom src="/images/ColonBundle-transformed-min.jpeg"></image-zoom>
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
import ImageZoom from "@/components/ImageZoom.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonBackButton,
    ImageZoom,
  },
});
</script>
