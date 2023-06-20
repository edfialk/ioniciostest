<template>
  <div class="sf" ref="content">
    <div class="sf-container">
      <template v-for="question in props.questions" v-bind:key="question.id">
        <div class="question" v-show="state.activeId == question.id">
          <div
            v-if="question.title"
            class="sf-title"
            v-html="question.title"
          ></div>
          <div
            v-if="question.subtitle"
            class="sf-subtitle"
            v-html="question.subtitle"
          ></div>
          <div v-if="question.options" class="sf-options-wrap">
            <ul class="sf-options">
              <li
                v-for="(option, i) in question.options"
                v-bind:key="i"
                @click="onClickOption(question, option)"
              >
                {{ option.label }}
              </li>
            </ul>
          </div>
          <div v-else class="my-1">&nbsp;</div>
        </div>
      </template>
      <div class="sf-footer">
        <ion-icon
          :icon="arrowBack"
          @click="goBack"
          class="icon-large"
          :class="{ 'icon-disabled': !showBack }"
        ></ion-icon>
        <ion-icon
          :icon="arrowForward"
          @click="goForward"
          class="icon-large"
          :class="{ 'icon-disabled': !showForward }"
        ></ion-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
} from "vue";
import { IonIcon } from "@ionic/vue";
import { arrowBack, arrowForward } from "ionicons/icons";

const props = defineProps(["questions"]);
const emit = defineEmits(["answer"]);

const state = reactive({
  activeId: props.questions[0].id,
  path: [props.questions[0].id],
  pathIndex: 0,
});

const content = ref(null);

const showBack = computed(() => state.pathIndex > 0);
const showForward = computed(() => state.pathIndex < state.path.length - 1);

const reset = () => {
  state.activeId = props.questions[0].id;
  state.path = [props.questions[0].id];
  state.pathIndex = 0;
};

defineExpose({
  reset,
});

const onClickOption = (question, option) => {
  emit("answer", { question, option });
  if (option.jump) {
    if (option.jump != state.path[state.pathIndex + 1]) {
      state.path.splice(state.pathIndex + 1);
    }
    state.activeId = option.jump;
    state.path.push(state.activeId);
    state.pathIndex++;
    content.value.scrollIntoView({ behavior: "auto" });
  }
};

const goBack = () => {
  if (state.pathIndex <= 0) return;
  state.pathIndex--;
  state.activeId = state.path[state.pathIndex];
  content.value.scrollIntoView({ behavior: "auto" });
};

const goForward = () => {
  if (state.pathIndex >= state.path.length - 1) return;
  state.pathIndex++;
  state.activeId = state.path[state.pathIndex];
  content.value.scrollIntoView({ behavior: "auto" });
};
</script>

<style>
.sf {
  min-height: 270px;
  margin: 20px 0 20px;
  padding: 64px 5% 0;
  position: relative;
  text-align: left;
  width: 100%;
  font-size: 15px;
}

.sf-container {
  /* padding: 0 8%; */
  /* width: 100%; */
}

.sf-footer {
  /* bottom: 0; */
  /* position: fixed; */
  font-weight: 300;
  line-height: 1.2;
  right: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.sf-footer ion-icon {
  margin: 0 10%;
  font-size: 32px;
}

.sf-title {
  /* margin-right: 0.6em; */
  font-size: 2em;
  font-weight: 900;
}

.sf-subtitle {
  font-size: 1.2em;
  margin-top: 10px;
}

.sf-options-wrap {
  width: 100%;
}

.sf-options {
  list-style-type: none;
  margin: 0;
  /* max-width: 590px; */
  min-width: 160px;
  padding: 0;
}

.sf-options li {
  font-weight: 900;
  border: 1px solid;
  cursor: default;
  font-weight: 300;
  line-height: 1.24;
  margin: 0.5em 0 0.6em;
  overflow: hidden;
  padding: 0.62em 0.68em;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
}

.sf-option {
  font-weight: 900;
}
</style>
