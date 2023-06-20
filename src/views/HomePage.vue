<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title class="ion-text-wrap">Pediatric Surgery Protocols</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="searchbar">
        <ion-searchbar
          class="my-1 py-0"
        ></ion-searchbar>
      </div>

      <ion-list lines="none">
        <template v-for="(category, index) in protocols" :key="index">
          <div>
            <ion-list-header>
              <ion-label>{{ category.category }}</ion-label>
            </ion-list-header>
            <template
              v-for="(protocol, pindex) in category.protocols"
              :key="pindex"
            >
              <ion-item class="list-item" detail :router-link="protocol.url">
                <ion-label>
                  <h2>{{ protocol.title }}</h2>
                </ion-label>
              </ion-item>
            </template>
          </div>
        </template>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonButtons,
} from "@ionic/vue";
import { getProtocols } from "@/data/protocols.js";
import { ref } from 'vue';

const protocols = ref(getProtocols());

</script>
