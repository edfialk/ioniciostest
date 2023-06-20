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
        <ion-searchbar v-model="search" class="my-1 py-0"></ion-searchbar>
      </div>

      <ion-list lines="none">
        <template v-for="(category, index) in filtered" :key="index">
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
import { ref, computed } from "vue";

const search = ref("");
const protocols = getProtocols();

const filtered = computed(() => {
  if (search.value.length == 0) return protocols;

  let r = [];
  protocols.forEach((c) => {
    if (c.category.toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
      r.push(c);
      return;
    }

    let ps = c.protocols.filter(
      (p) => p.title.toLowerCase().indexOf(search.value.toLowerCase()) > -1
    );
    if (ps.length > 0)
      r.push({
        category: c.category,
        protocols: ps,
      });
  });

  return r;
});
</script>

<style scoped>
.list-item h2 {
  font-weight: 400;
  white-space: initial;
}
ion-title {
  text-overflow: unset;
  white-space: unset;
  padding: 0 5px;
}
.toolbar-title {
  text-overflow: unset;
  white-space: initial;
}
ion-list-header ion-label {
  font-size: 24px;
  font-weight: 600;
}
</style>
