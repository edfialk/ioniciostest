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
      <h2 class="ion-text-wrap">Necrotizing Enterocolitis</h2>

      <p>
        <span class="ul"
          >OHSU Pediatric Surgery Treatment Algorithm for Necrotizing
          Enterocolitis</span
        >
      </p>
      <p>
        * For any suspected NEC (Bell&rsquo;s stage 1): Immediate NPO. Possible
        nasogastric or orogastric tube to low intermittent suction if there is
        continued food intolerance, abdominal distension or bilious emesis.
      </p>
      <p>
        * Surgical Consult required (if not done already) for any patient with
        pneumatosis or portal air (Bell&rsquo;s stage 2).
      </p>
      <p>
        * Frequency of labs and x-rays: If pneumatosis or portal venous gas,
        check 2 view abdominal films (AP and left lateral decubitus) and
        CBC/blood gas/lactate upon diagnosis Q6HOURS until clinical improvement
        evident. Daily 2 view abdominal films and labs should then be checked
        until resolution of pneumatosis and portal venous gas. At this point, no
        daily films or labs are needed unless change in clinical status or exam.
      </p>
      <p>* Antibiotic choice:</p>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <td class="strong i" colspan="2">
                Medical NEC (without pnematosis)
              </td>
              <td class="strong i" colspan="2">
                Medical NEC with pneumatosis or Surgical NEC
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                No concern for MRSA or ampicillin-resistant enterococcal infection
              </td>
              <td>
                Concerns for MRSA or ampicillin-resistant enterococcal infection
              </td>
              <td>
                No concern for MRSA or ampicillin-resistant enterococcal infection
              </td>
              <td>
                Concerns for MRSA or ampicillin-resistant enterococcal infection
              </td>
            </tr>
            <tr>
              <td>Ampicillin + Gentamicin</td>
              <td>Vancomycin + Gentamicin</td>
              <td>
                Piperacillin-tazobactam or ampicillin + gentamicin + metronidazole
              </td>
              <td>
                Vancomycin + Piperacillin-tazobactam or vancomycin + gentamicin +
                metronidazole
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        * Antibiotic duration / Duration of NPO: Continue antibiotics for 7 days
        after resolution of pneumatosis and portal venous gas and return of
        hemodynamic / laboratory stability. If initially utilized, NG/OG tube
        may be removed if patient stable and not having high output or bilious
        output.
      </p>
      <p>
        * Re-initiation of feeds: After completion of antibiotics, start at
        20ml/kg/day, advance by 20ml/kg/day as tolerated or per NICU premature
        infant feeding protocol, whichever is a slower rate.
      </p>
      <p>
        * Contrast studies: Consider if does not tolerate advancement of feeds
        after medically managed NEC or if recurrent NEC. Should be performed
        after resolution of most recent NEC episode and close to time of
        potential operation. As possible, begin with contrast enema followed by
        upper GI series with small bowel follow through.
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
