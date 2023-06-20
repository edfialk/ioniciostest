<template>
  <div>
    <ion-img :src="src" @click="open"></ion-img>
    <ion-modal
      ref="modal"
      :is-open="isOpen"
      :enter-animation="enterAnimation"
      :leave-animation="leaveAnimation"
    >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="close">Close</ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="close">X</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content @click="close">
        <swiper :modules="modules" :zoom="{ maxRatio: 6 }">
          <swiper-slide>
            <div class="swiper-zoom-container">
              <img ref="image" :src="src" />
            </div>
          </swiper-slide>
        </swiper>
      </ion-content>
    </ion-modal>
  </div>
</template>

<script>

import {
  IonImg,
  IonModal,
  IonToolbar,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  createAnimation
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/zoom";
import "@ionic/vue/css/ionic-swiper.css";

import { Zoom } from "swiper";
import { defineComponent } from "vue";
// import { useBackButton } from "@ionic/vue";

export default defineComponent({
  name: "ImageZoom",
  components: {
    IonImg,
    IonModal,
    IonToolbar,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    Swiper,
    SwiperSlide,
  },
  props: {
    src: String
  },
  data() {
    return {
      isOpen: false,
      modules: [Zoom],
      unregisterBackButton: null,
    };
  },

  methods: {
    back() {
      this.isOpen = false;
      this.unregisterBackButton();
    },

    open() {
      this.isOpen = true;

      document.addEventListener("ionBackButton", this.close);

      this.unregisterBackButton = this.$router.beforeEach((to, from, next) => {
        this.back();
        next(false);
      });
    },

    close(event) {
      const t = event.target;
      if (t !== this.$refs.image) {
        this.isOpen = false;
      }
      this.unregisterBackButton();
      window.removeEventListener("ionBackButton", this.close);
    },
    
    enterAnimation(baseEl) {
      const root = baseEl.shadowRoot;

      if (!root) {
        return;
      }

      let el = root.querySelector("ion-backdrop");
      if (!el) {
        return;
      }

      const backdropAnimation = createAnimation()
        .addElement(el)
        .duration(200)
        .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

      el = root.querySelector(".modal-wrapper");
      if (!el) {
        return;
      }

      const wrapperAnimation = createAnimation()
        .addElement(el)
        .duration(200)
        .keyframes([
          { offset: 0, opacity: "0", transform: "scale(.8)" },
          { offset: 1, opacity: "0.99", transform: "scale(1)" }
        ]);

      return createAnimation()
        .addElement(baseEl)
        .easing("ease-out")
        .duration(50)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    },
    leaveAnimation(baseEl) {
      const anim = this.enterAnimation(baseEl);

      if (anim === undefined) return;

      return anim.direction("reverse");
    }
  }
});
</script>

<style scoped>
.swiper-slide {
  height: 100vh;
}
</style>