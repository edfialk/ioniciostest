<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <h2 class="ion-text-wrap">Pyloric Stenosis Perioperative Protocol</h2>
      <br />
      <ol>
        <li>
          <p class="strong">Diagnosis.</p>
          <ol type="a">
            <li>
              <span class="strong ul pe-1">History.</span> Suspect the diagnosis
              in any infant 2 weeks to 3 months with projectile, nonbilious
              vomiting. There is an increased incidence in first born males and
              in patients whose mom had it. ALWAYS CONFIRM EMESIS IS NONBILIOUS!
            </li>
            <li>
              <span class="strong ul pe-1">Imaging.</span> Ultrasound is the
              diagnostic study of choice. Normal channel length is 1.4 cm;
              normal muscle thickness is less than 4 mm. Perhaps more important
              than the measurements of the pylorus are the mechanics of the
              muscle itself. If the pylorus does not open and allow the stomach
              contents to empty while it is being watched on real time
              ultrasound, than one can be relatively certain of the diagnosis of
              pyloric stenosis. Transferring institution ultrasound should
              always be reviewed locally and repeat if not conclusive.
            </li>
          </ol>
        </li>
        <li>
          <span class="strong pe-1">Initial management.</span> Patient is kept
          NPO, and placement of an NG tube is not needed.
          <ol type="a">
            <li>
              <span class="ul strong">Labs.</span> BMP is needed at diagnosis to
              assess electrolytes. Significant dehydration is a common finding.
              Gastric losses cause hypochloremic, hypokalemic alkalosis.
              Chloride less than 100 mmol/L and/or total CO2 greater than 30
              mmol/L are indicative of significant dehydration and warrant
              repeat BMP after 8-12 hours to ensure improvement before operative
              intervention. Usually, this repeat BMP is done the morning after
              admission. If initial BMP is normal, repeat is not needed.
            </li>
            <li>
              <span class="ul strong">IVF resuscitation.</span> Start IVF with
              D5 ½ NS at 1.5x maintenance. Fluid boluses of NS 10-20cc/kg should
              be given until urine output is established. Then add 10-20 mEq
              KCL/liter to IVF once patient is urinating well. Rapid rehydration
              and correction of electrolytes is not warranted. Surgical
              intervention for pyloric stenosis is not an emergency. Operation
              is carried out once dehydration and electrolyte abnormalities are
              corrected. Generally, the bicarbonate should be less than 30 and
              the chloride greater than 100 prior to operative intervention.
            </li>
          </ol>
        </li>
        <li>
          <p class="strong pe-1">Operative management.</p>
          <p>
            Pyloromyotomy is done both open and laparoscopically; determine
            attending surgeon plan prior to consent discussion. The two specific
            complications that apply with this operation are incomplete myotomy
            or mucosal perforation. These are both very rare but should be
            included in the discussion. Either may require conversion to an open
            operation and/or a longer hospital stay with alternate feeding plan,
            possible NG tube placement, and possible contrast study prior to
            feeds.
          </p>
        </li>
        <li>
          <span class="strong">Post-operative management.</span>
          <ol type="a">
            <li>
              <span class="ul strong pe-1">Diet.</span> Begin ad lib feeds once
              fully awake from anesthesia. Continue IVF until tolerating
              adequate PO. Okay for discharge when patient tolerates two
              successive full volume feeds with no emesis. Postoperative emesis
              is common, and does not require adjustment of feeds. Some patients
              take a few days (or more) until they are tolerating full feeds,
              and some are ready for discharge by POD 1.
            </li>
            <li>
              <span class="ul strong pe-1">Medications.</span> No antibiotics
              are needed post-op. Scheduled Tylenol should be ordered post-op
              and is given rectally or orally (10-15mg/kg). NSAIDS are typically
              not given to infants under 6 months of age.
            </li>
            <li>
              <span class="ul strong pe-1">Monitoring.</span> Tenderness, fever,
              or need for opioids post-op are always abnormal and may be a sign
              of a perforation. This should always result in notification of the
              Fellow/Attending.
            </li>
          </ol>
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
  name: "PostGastrostomyPlacementFeedingProtocol",
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
