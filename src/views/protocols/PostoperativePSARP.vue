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
      <h2 class="ion-text-wrap">Postoperative PSARP Protocol</h2>
      <hr />

      <section>
        <p class="strong">ANORECTAL MALFORMATIONS</p>
        <p>
          Anorectal malformation (ARM) exists when a normal anal opening does
          not exist and the colon is either blind ending, or empties onto the
          perineum, vulva, vestibule, or vagina (F) or urinary system (M)
        </p>
        <p>
          ARMs occur in 1/4000 - 1/5000 births, with a male predominance. May be
          associated with autosomal dominant diseases (Currarino triad,
          Townes-Brocks syndrome, Pallister-Hall syndrome) and trisomy 21.
        </p>
        <p>
          ARMs are classified by the fistula location and location relative to
          the levators. The important questions are where the distal rectum is,
          and what is the relationship of the fistula to the rectum and urinary
          tract.
        </p>
      </section>
      <p>Male ARM Classification by Location</p>
      <table>
        <thead>
          <tr>
            <th>Type of Fistula</th>
            <th>Incidence</th>
            <th>Accessible via a Posterior Sagittal Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="strong">Lower</td>
          </tr>
          <tr>
            <td>anal stenosis/rectal atresia</td>
            <td>1%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>H-type fistula</td>
            <td>4%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>ARMs with no fistula</td>
            <td>5%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>perineal (cutaneous) fistula</td>
            <td>10%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>recto-bulbar urethra fistula</td>
            <td>35%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td colspan="3" class="strong">Higher</td>
          </tr>
          <tr>
            <td>recto-prostatic urethra fistula</td>
            <td>35%</td>
            <td>yes*</td>
          </tr>
          <tr>
            <td>recto-vesical fistula</td>
            <td>10%</td>
            <td>no</td>
          </tr>
          <tr>
            <td colspan="3">
              ARM - anorectal malformation /* recto-prostatic fistulas can be
              reached posterior or laparoscopic
            </td>
          </tr>
        </tbody>
      </table>

      <p class="strong">Female ARM Classification by Location</p>
      <table>
        <thead>
          <tr>
            <td>Type of Fistula</td>
            <td>Incidence</td>
            <td>Accessible via a Posterior Sagittal Approach</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="strong">Lower</td>
          </tr>
          <tr>
            <td>
              low recto-vaginal fistula<br />
              high recto-vaginal fistula
            </td>
            <td>&lt; 1%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>anal stenosis/rectal atresia</td>
            <td>1%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>ARMs with no fistula</td>
            <td>5%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>perineal (cutaneous) fistula</td>
            <td>18%</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>recto-vestibular fistula</td>
            <td>70%</td>
            <td>yes</td>
          </tr>

          <tr>
            <td colspan="3" class="strong">Complex</td>
          </tr>
          <tr>
            <td>cloaca</td>
            <td>5%</td>
            <td />
          </tr>
          <tr>
            <td>&lt; 3cm common channel</td>
            <td>(70%)</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>&gt; 3cm common channel</td>
            <td>(30%)</td>
            <td>yes**</td>
          </tr>
          <tr>
            <td colspan="3">
              ** high cloacas typically require a laparotomy in addition to
              their posterior sagittal approach
            </td>
          </tr>
        </tbody>
      </table>

      <section>
        <p>
          Most patients are identified during the newborn period, with up to 60%
          having an associated anomaly, typically within the VACTERL family.
        </p>
        <p>
          Normal anus is of adequate size, lined by mucosa, has a dentate line
          and is within the sphincter complex. Examination should include a
          cardiac examination and abdominal palpation for a mass, suggestive of
          hydrocolpos, and a thorough genitourinary examination. Well-formed
          buttocks and perineum suggest a low ARM. Lack of gluteal fold, no anal
          dimple suggests a high ARM. If no anal opening is present in a female,
          grasp the labia, pull them up to determine if separate urethral and
          vaginal openings are present and attempt to identify a vestibular
          fistula. A single orifice confirms a cloaca.
        </p>
        <p>
          Assessment includes chest and abdominal X-rays to evaluate for
          vertebral anomalies and esophageal atresia.
        </p>
        <p>
          A lateral X-ray (&#39;invertogram&#39;) in prone position after the
          buttocks have been up for &gt;15 minutes allows one to determine the
          level of the distal rectum. This study is not often done anymore and
          should be discussed with the attending prior to ordering.
        </p>
        <p>
          Anteroposterior and lateral pelvis X-rays allow one to calculate the
          sacral ratio, which is BC/AB. The average normal SR is 0.74 (AP) and
          0.77 (lateral). Low values correlate with unfavorable functional
          prognosis.
        </p>
      </section>
      <ImageZoom src="/images/PSARP-2.png" />
      <ImageZoom src="/images/PSARP-3.png" />
      <section>
        <p>
          Ultrasound includes echocardiogram to evaluate congenital heart
          disease, abdominal and pelvis ultrasound to evaluate genitourinary
          system and hydrocolpos in cloaca, and spinal ultrasound to evaluate
          for tethered cord and pre-sacral mass.
        </p>
        <p>
          Males and females with perineal fistulas can be repaired at birth. The
          timing of repair of vestibular fistulas varies between surgeons. Some
          can go home with dilations if they can remain decompressed. Patients
          who cannot tolerate a prolonged operation or have a higher fistula
          should undergo diversion to allow them to grow for delayed repair with
          distal colostogram. Patients with cloaca should be diverted as their
          initial operation.
        </p>
      </section>
      <section>
        <p class="strong ul">
          Anorectal Malformations Clinical Management Protocol
        </p>
        <p class="ul i">
          Post-operative management is dependent upon location of fistula/type
          of repair
        </p>
        <div class="table-scroll">
          <table class="mb-1">
            <thead>
              <tr class="ion-text-center">
                <td></td>
                <td colspan="2">Male</td>
                <td colspan="2">Female</td>
                <td colspan="3">Either</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td class="blue">Rectourethral fistula</td>

                <td class="blue">Rectobladder neck fistula</td>

                <td class="yellow">Vestibular fistula</td>

                <td class="yellow">Cloaca with colostomy</td>

                <td class="green">Perineal fistula*</td>

                <td class="green">Imperforate anus without fistula</td>

                <td class="green">Rectal atresia</td>
              </tr>
              <tr>
                <td>Begin feeds</td>
                <td colspan="7">
                  48 hrs post-op unless colostomy present, then after return of
                  bowel function. Some attendings may wait beyond 48 hrs until
                  return of bowel function, check with attending.
                </td>
              </tr>
              <tr>
                <td>Advance rate</td>
                <td colspan="7" class="ion-text-center">Ad lib</td>
              </tr>

              <tr>
                <td>Antibiotic duration</td>
                <td colspan="7" class="ion-text-center">48 hours post-op</td>
              </tr>

              <tr>
                <td>Wound care</td>
                <td colspan="7">
                  <span class="strong">Bulb squirt, pat dry.</span> The anal
                  wound is cleansed by bulb squirting and patting the wound dry.
                  No wiping! Patient should not sit on the buttocks until the
                  wound is completely healed. They may lay on the side, abdomen
                  or back. Some attendings use Bacitracin postoperatively, many
                  do not - check with attending.
                </td>
              </tr>

              <tr>
                <td>Foley</td>
                <td>Check with attending</td>
                <td>Check with attending</td>
                <td>48 hrs**</td>
                <td>Per GU team</td>
                <td>48 hrs**</td>
                <td>48 hrs</td>
                <td>48 hrs</td>
              </tr>

              <tr>
                <td>Discharge</td>
                <td colspan="7">
                  Tolerating full feeds, having BM, wound intact
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="small i my-0">
          * If cutback/perineal anoplasty performed rather than PSARP or anal
          transposition, post-operative care is per attending preference.
        </p>
        <p class="small i my-0">
          ** Some attendings do not typically place foley catheters for perineal
          or vestibular fistula repairs, check with attending for preference.
        </p>
      </section>
      <section>
        <p class="strong ul">VACTERL evaluation (at birth and in follow-up):</p>
        <p>
          V (Vertebral) – Abdominal/pelvic Xray at birth to assess for bony
          abnormalities, spinal US before 4-6 months of age or MRI after 4-6
          months of age to evaluate for tethered spinal cord.
        </p>
        <p>
          A (Anorectal) – Anorectal malformation. Some attendings perform
          invertogram after birth, check with attending for preference. In
          patients with high ARM and colostomy, a high-pressure distal
          colostogram is performed to evaluate for genitourinary fistula prior
          to PSARP, for surgical planning.
        </p>
        <p>
          C (Cardiac) – Echocardiogram after birth to evaluate for cardiac
          defects.
        </p>
        <p>
          TE (Tracheo-esophageal) – exam and possible xray if indicated to
          evaluate for esophageal atresia with or without associated
          tracheo-esophageal fistula. C-type TEF presents at birth, H-type may
          present later in life with recurrent aspiration and/or feeding
          difficulties.
        </p>
        <p>
          R (Renal) – Ultrasound after birth to evaluate bladder and kidneys for
          any anomalies. VCUG is often performed (usually in males) to evaluate
          for vesicoureteral reflux.
        </p>
        <p>
          L (Limb) – Exam to evaluate for limb abnormalities, with Xray(s) if
          indicated for further evaluation.
        </p>
      </section>
      <section>
        <p>
          <span class="strong ul"
            >Outpatient Postoperative Management (for providers)</span
          ><br />
          Outpatient anal dilations, when performed, begin 2-4 weeks
          post-operatively (discuss with attending). This is a rough schedule
          and may vary based on provider.
        </p>
        <p>
          <span class="ul">Anal Dilation Instructions</span><br />
          Place child on back with knees pulled up towards the chest (as if
          changing a diaper). Lubricate the dilator. Put the dilator in the anus
          and keep in place for 30 seconds. Remove dilator and put it in again
          for 30 seconds.
        </p>
        <p>
          <span class="ul">Imaging</span>
          A baseline abdominal X-ray may be obtained at the initial follow-up
          appointment in order to compare to future appointments if concern for
          constipation (common after repair). This is attending specific and
          should be discussed prior to ordering.
        </p>
      </section>

      <p class="mb-0">
        To find the final size of the Hegar dilator the child will use, see
        chart below.
      </p>
      <table class="mt-0">
        <thead>
          <tr>
            <td>Child age</td>
            <td>Desired Dilator Size</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-4 months</td>
            <td>#12</td>
          </tr>
          <tr>
            <td>4-8 months</td>
            <td>#13</td>
          </tr>
          <tr>
            <td>8-12 months</td>
            <td>#14</td>
          </tr>
          <tr>
            <td>1-3 years</td>
            <td>#15</td>
          </tr>
          <tr>
            <td>3-12 years</td>
            <td>#16</td>
          </tr>
          <tr>
            <td>More than 12 years</td>
            <td>#17</td>
          </tr>
        </tbody>
      </table>

      <p class="i">
        <span class="strong ul">If</span> the attending chooses to have the
        patient’s family perform dilations at home, please provide the following
        information. You may adjust the desired dilator size per the attending’s
        instructions:
      </p>

      <hr />

      <p class="strong ul">Patient/Family Instructions</p>
      <p>
        Dilations should be performed 1-2 times per day (discuss with attending)
      </p>
      <p>
        <span class="ul">Anal Dilation Family Instructions</span><br />
        You will start by dilating your child’s new anus two times each day –
        one time in the morning and one time in the evening.
      </p>
      <ol>
        <li>
          Put your child on their back with the knees pulled up towards the
          chest (as if changing a diaper)
        </li>
        <li>
          Lubricate the dilator. Put the dilator in the anus and keep in place
          for 30 seconds.
        </li>
        <li>Remove it and put it in again for 30 seconds.</li>
        <li>
          It is best to not dilate your child right after they eat a meal.
        </li>
      </ol>

      <p class="ul">Anal Dilator Size Instructions</p>
      <p class="mb-0">
        To find the final size of the Hegar dilator the child will use, see
        chart below.
      </p>
      <table class="my-0">
        <thead>
          <tr>
            <td>Child age</td>
            <td>Desired Dilator Size</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-4 months</td>
            <td>#12</td>
          </tr>
          <tr>
            <td>4-8 months</td>
            <td>#13</td>
          </tr>
          <tr>
            <td>8-12 months</td>
            <td>#14</td>
          </tr>
          <tr>
            <td>1-3 years</td>
            <td>#15</td>
          </tr>
          <tr>
            <td>3-12 years</td>
            <td>#16</td>
          </tr>
          <tr>
            <td>More than 12 years</td>
            <td>#17</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-0">
        Every week, you will increase the size of the dilator, using the next
        larger size. Start with #10 Hegar dilator unless stated otherwise by
        your provider. Continue to dilate your child’s anus two times a day
        until you get to the goal size.
      </p>

      <section>
        <p class="ul">Anal Dilator Tapering Schedule Instructions</p>
        <p>
          Once you find that the dilator goes in easy two times a day and does
          not cause discomfort or bleeding, you may start to taper (reduce) how
          often you dilate your child’s anus. Your provider will help you decide
          when it is time to taper the dilations. While you taper, you will
          still use the goal size dilator.
        </p>
        <p>
          <span class="strong">Step 1:</span> One time a day for two weeks.<br />
          <span class="strong">Step 2:</span> One time every other day for two
          weeks.<br />
          <span class="strong">Step 3:</span> One time every third day for two
          weeks.<br />
          <span class="strong">Step 4:</span> Two times a week for a month.<br />
          <span class="strong">Step 5:</span> One time a week for a month.
        </p>
        <p>
          If the dilatation gets more difficult, causes discomfort, or is bloody
          at any time during the above schedule, go back to dilating two times a
          day. When you can easily put in the dilator without discomfort, start
          the taper schedule again from the beginning (one time a day for a
          month).
        </p>
      </section>
      <section>
        <p class="ul">DISCHARGE INSTRUCITONS DOT PHRASE</p>
        <p>SURGICAL INCISION CARE:</p>
        <p>
          - Avoid baby wipes. To clean after poops, use tap water in
          peri-bottle. Squirt gently and pat dry - - don't wipe.
        </p>
        <p>
          - Leave bottom open to air when feasible. Ideally, change diapers at
          least every 4 hours at night to keep area dry.
        </p>
        <p>
          - Barrier creams (i.e. Desitin, Calmoseptine) are okay to use on
          diaper rash, but try to avoid putting them directly on incision. Do
          not wipe off barrier creams each diaper change.
        </p>
        <p>
          - Your child may shower or sponge bathe. No soaking in tub bath or
          swimming for now.
        </p>
        <p>- Some mucus or mild bloody drainage from incision is normal.</p>
        <p>DIET:</p>
        <p>No restrictions. Continue usual diet.</p>
        <p>ACTIVITY:</p>
        <p>
          Avoid straddle toys while incision heals. No other activity
          restrictions.
        </p>
        <p>PAIN:</p>
        <p>
          It is expected that your child will have pain after surgery, and it is
          important to manage this pain so that she can increase activity,
          sleep, and heal well from surgery. Alternating Tylenol and Ibuprofen
          (in patients over 6 months of age) is usually adequate for surgery
          related pain.
        </p>
        <p>WHEN TO CONTACT US:</p>
        <p>
          Please contact the Pediatric Surgery Office for:<br />
          - Fever &gt; 101 degrees or chills<br />
          - Incision that looks like it&#39;s coming apart<br />
          - A large amount of bleeding or drainage<br />
          - Persistent vomiting or diarrhea<br />
          - Any other concerns regarding your child&#39;s surgical care
        </p>
      </section>
      <section>
        <p class="strong ul">Contact numbers:</p>
        <p>
          Pediatric Surgery office<br />
          DCH: 503-494-7764.<br />
          RCH: 503-413-4300
        </p>
        <p>
          You may also send MyChart message with photo. (Please be aware that
          MyChart messages are monitored only M-F during regular business
          hours.)
        </p>
        <p>
          After hours/weekends:<br />
          DCH: call the OHSU Operator at 503-494-8311 and ask for the Pediatric
          Surgery Resident on call.<br />
          RCH: call One Call at 800-500-9111 and ask for the Pediatric Surgery
          Resident on call.
        </p>
      </section>
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
  name: "PostoperativePSARP",
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

<style scoped lang="scss">
ion-title {
  position: static;
  padding: 2px 32px;
}
</style>
