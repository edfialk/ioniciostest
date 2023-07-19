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
      <h2 class="ion-text-wrap">OHSU Button Battery Protocol</h2>

      <step-form :questions="questions"></step-form>

      <div>
        <p>Suspect button battery ingestion in these situations:</p>
        <ul>
          <li>
            Symptomatic patient with no known ingestion history
            <ul>
              <li>Airway obstruction or wheezing</li>
              <li>Drooling</li>
              <li>Vomiting</li>
              <li>Chest discomfort</li>
              <li>Difficulty swallowing, decreased appetite, refusal to eat</li>
              <li>Coughing, choking or gagging with eating or drinking</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            "Coin" ingested
            <ul>
              <li>
                Carefully check AP chest x-ray for battery's double-rim or
                halo-effect and lateral view for step off. Use magnification.
              </li>
            </ul>
          </li>
        </ul>

        <p>Tips, Pitfalls and Caveats</p>
        <ul>
          <li>
            3 "N's": Negative - Narrow - Necrotic. The negative battery pole,
            identified as the narrowest side on lateral x-ray, causes the most
            severe, necrotic injury. The negative battery pole is the side
            opposite the "+" and without the imprint.
          </li>
          <li>
            20 mm lithium coin cell is most frequently involved in esophageal
            injuries; smaller cells lodge less frequently but also cause serios
            injury or death.
          </li>
          <li>
            Definitive determination of the battery diameter prior to passage is
            unlikely in at least 40% of ingestions.
          </li>
          <li>Assume hearing aid batteries are &lt; 12 mm.</li>
          <li>
            Manage ingestion of a hearing aid containing a battery as an
            ingestion of a small (≤ 12 mm) battery.
          </li>
          <li>
            Do not induce vomiting or give cathartics. Both are ineffective.
          </li>
          <li>
            Assays of blood or urine for mercury or other battery ingredients
            are unnecessary.
          </li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import StepForm from "@/components/StepForm.vue";

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
          title: "Battery ingestion known or suspected",
          subtitle: `
            <p>Give honey 10 mL every 10 min if child ≥ 12 months, lithium coin cell possibly ingested, and ingestion within prior 12 hours. Do not delay going to ER to give honey.  Otherwise, NPO until esophageal position ruled out. (NPO except for honey or sucralfate suspension.)</p>
            <p>Take up to 5 minutes to determine imprint code (or diameter) of companion or replacement battery.</p>
            <p>Consult National Battery Ingestion Hotline at 800-498-8666 for assistance with battery identification and treatment.</p>
          `,
          options: [
            {
              label: "Patient ≤ 12 years old",
              jump: "lt 12",
            },
            {
              label: "Patient > 12 years old",
              jump: "gt 12",
            },
          ],
        },
        {
          id: "lt 12",
          title: "Patient ≤ 12 years old",
          subtitle: `
            <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on x-rays, check ears and nose.</p>
            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>
            <p>Battery in esophagus?</p>
          `,
          options: [
            {
              label: "Yes",
              jump: "esoph yes",
            },
            {
              label: "No (battery in stomach or beyond)",
              jump: "esoph no",
            },
          ],
        },
        {
          id: "esoph yes",
          title: "Yes, battery in esophagus",
          subtitle: `
            <p><strong>Immediately</strong> remove batteries lodged in the esophagus.</p>
            <ul>
              <li>Consider sucralfate suspension or honey if ≤ 12 hours post-ingestion.</li>
              <li>Do not delay removal if patient has eaten.</li>
              <li>Prefer endoscopic removal (instead of retreival by balloon catheter or magnet affixed to tube) for direct visualization of tissue injury.  Inspect mucosa for extent, depth and location of damage.  Note position of battery and direction negative pole faces.</li>
              <li>If no endocscopic evidence of perforation, irrigate areas of esophagus with 50-150 mL 0.25% sterile acetic acid to neutralize residual alkali.</li>
            </ul>
            <p>After removal, if mucosal injury was present, observe for and anticipate delayed complications:  tracheoesophageal fistula, esophageal perforation, mediastinitis, vocal cord paralysis, tracheal stenosis or tracheomalacia, aspiration pneumonia, empyema, lung abscess, pneumothorax, spondylodiscitis, or exsanguination from perforation into a large vessel.</p>
            <p>Anticipate specific complications based on injury location, battery position and orientation (negative pole).  Determine length of observation, duration of esophageal rest, need for serial imaging or endoscopy/bronchoscopy based on severity and location of injury.  Monitor patients at risk of perforation into vessels as inpatients with serial imaging and stool guaiacs.  Intervene early to prevent fatality.  Monitor for respiratory symptoms, especially those associated with swallowing, to diagnose TE fistulas early.  Expect perforations and fistulas to be delayed (98% diagnosed by 48 days after battery removal) and esophageal strictures delayed weeks to months.</p>
          `,
        },
        {
          id: "esoph no",
          title: "No (battery in stomach or beyond)",
          subtitle: "Was a magnet co-ingested?",
          options: [
            {
              label: "Yes",
              jump: "magnet yes",
            },
            {
              label: "No",
              jump: "magnet no",
            },
          ],
        },
        {
          id: "magnet yes",
          title: "Yes, a magnet was co-ingested",
          subtitle:
            "Do not wait for symptoms.  Remove endoscopically if possible; surgically if not.",
        },
        {
          id: "magnet no",
          title: "No, a magnet was not co-ingested",
          subtitle: "Are related signs or symptoms present?",
          options: [
            {
              label: "Yes",
              jump: "related yes",
            },
            {
              label: "No",
              jump: "related no",
            },
          ],
        },
        {
          id: "related yes",
          title: "Yes, related signs or symptoms are present",
          subtitle:
            "If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery).",
        },
        {
          id: "related no",
          title: "No, related signs or symptoms are not present",
          subtitle:
            "≥ 15 mm cell ingested by child < 6 years?  If battery diameter is unknown, estimate it from the x-ray, factoring out magnification (which overestimates diameter).",
          options: [
            {
              label: "Yes",
              jump: "gt 15mm",
            },
            {
              label: "No",
              jump: "lt 15mm",
            },
          ],
        },
        {
          id: "gt 15mm",
          title: "Yes, ≥ 15 mm cell ingested by child < 6 years",
          subtitle:
            "X-ray 4 days post ingestion (or sooner if symptoms develop).  If still in stomach, remove endoscopically (even if asymptomatic).",
        },
        {
          id: 'lt 15mm',
          title: 'No, cell > 15 mm and/or child ≥ 6 years old',
          subtitle: `
            <p>Manage patient at home.  Regular diet.  Encourage activity.  Confirm battery passage by inspecting stools.  Consider x-ray to confirm passage if passage not observed in 10-14 days.</p>
            <p>If symptoms develop later, promptly re-evaluate.</p>
            <p>If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery).</p>
          `
        },
        {
          id: "gt 12",
          title: "Patient > 12 years old",
          options: [
            {
              label: "Battery > 12 mm",
              jump: "battery gt 12",
            },
            {
              label: "Battery ≤ 12 mm",
              jump: "battery lt 12",
            },
          ],
        },
        {
          id: "battery gt 12",
          title: "Patient > 12 years old and battery > 12 mm",
          subtitle: `
	          <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on -xrays, check ears and nose.</p>
            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>
            <p>Battery in esophagus?</p>
          `,
          options: [
            {
              label: "Yes",
              jump: "esoph yes",
            },
            {
              label: "No",
              jump: "esoph no",
            },
          ],
        },
        {
          id: "battery lt 12",
          title: "Patient > 12 years old and battery ≤ 12 mm",
          subtitle: `
            <p>Are all of these conditions met?</p>
            <ul>
              <li>Patient is entirely asymptomatic and has been so since ingestion.</li>
              <li>Only one battery ingested.</li>
              <li>Magent not also ingested.</li>
              <li>≤ 12 mm diameter determination is certain</li>
              <li>No pre-existing esophageal disease.</li>
              <li>Patient or caregiver is reliable, mentally competent, and agrees to promptly seek evaluation if symptoms develop.</li>
            </ul>
          `,
          options: [
            {
              label: "Yes",
              jump: "conditions yes",
            },
            {
              label: "No",
              jump: "conditions no",
            },
          ],
        },
        {
          id: "conditions yes",
          title: "Yes, all conditions are met",
          subtitle: `
            <p>Manage patient at home.  Regular diet.  Encourage activity.  Confirm battery passage by inspecting stools.  Consider x-ray to confirm passage if passage not observed in 10-14 days.</p>
            <p>If symptoms develop later, promptly re-evaluate.</p>
            <p>If battery in stomach, remove endoscopically from symptomatic patient, even if symptoms appear minor.  If battery beyond reach of endoscope, surgical removal reserved for unusual patients with occult or visible bleeding, persistent or severe abdominal pain, vomiting, signs of acute abdomen and/or fever, or profoundly decreased appetite (unless symptoms unrelated to battery).</p>
          `,
        },
        {
          id: "conditions no",
          title: "No, all conditions are not met",
          subtitle: `
            <p>X-ray (abdomen, esophagus and neck) immediately to locate battery.  Batteries above the range of the x-ray have been missed.  If battery in esophagus, obtain AP and lateral to determine orientation of negative pole.  If ingestion inspected and no battery visualized on -xrays, check ears and nose.</p>
            <p>Batteries lodged in esophagus must be removed within 2 hours to avoid serious, delayed complications, including death.  Batteries in the esophagus may be asymptomatic intially.  Do not wait for symptoms.</p>
            <p>Battery in esophagus?</p>
          `,
          options: [
            {
              label: "Yes",
              jump: "esoph yes",
            },
            {
              label: "No (battery in stomach or beyond)",
              jump: "esoph no",
            },
          ],
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
