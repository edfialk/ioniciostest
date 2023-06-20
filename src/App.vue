<template>
  <ion-app>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar>
          <img src="/images/ohsu-icon.svg" slot="start" width="56" />
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h4>Minimizing Variance in Pediatric Surgery</h4>
        <img src="/images/doern.jpg" />
        <img src="/images/randall.jpg" />
        <p>
          Our pediatric surgery team at Oregon Health and Science University
          have been creating multidisciplinary evidence-based protocols for our
          patients since 2014, as part of our IRB-approved “Minimizing Variance
          in Pediatric Surgery” program.
        </p>
        <p>
          This effort combines quality improvement with fellow education and
          research, as our fellows design the protocols after review and
          discussion of the literature. Once approved and finalized with our
          faculty, protocols are implemented and then studied.
        </p>
        <p>
          This app provides easy access to our protocols for use at OHSU and
          beyond. For those protocols which have been studied and published,
          there is a Pubmed link included with the protocol.
        </p>
        <p>Please let us know if you have any questions or comments.</p>
        <p class="strong">Contact information:</p>
        <p>
          Elizabeth Fialkowski, MD
          <br />Associate Professor of Pediatric Surgery
          <br />
          <a href="mailto:fialkows@ohsu.edu">fialkows@ohsu.edu</a>
        </p>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonMenu,
  IonContent,
} from "@ionic/vue";
</script>
