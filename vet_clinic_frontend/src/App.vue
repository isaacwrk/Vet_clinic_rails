<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import PrescriptionList from "./components/PrescriptionList.vue";
import { useStore } from "./store";
import { ActionTypes } from "./store/actions";
export default defineComponent({
  components: { PrescriptionList },
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetPrescriptions));
    const completedCount = computed(() => store.getters.completedPrescriptionCount);
    const totalCount = computed(() => store.getters.totalPrescriptionCount);
    return { loading, completedCount, totalCount };
  },
});
</script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://images.vexels.com/media/users/3/144928/isolated/lists/ebbccaf76f41f7d83e45a42974cfcd87-dog-illustration.png" />
        <h1 class="is-success has-text-weight-bold is-size-3	">Vet clinic</h1>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> Home </a>
      </div>
    </div>
  </nav>
  <div class="container mx-auto mt-4">
    <h1 class="is-size-3 has-text-centered p-2 has-text-weight-bold is-success">Vet clinic</h1>
    <h3 class="has-text-centered p-2">Manage records of treated livestock in your farm</h3>
    <div v-if="loading">
      <h3 class="has-text-centered mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="has-text-centered mt-2">{{ completedCount }} of {{ totalCount  }} treated.</p>
      <PrescriptionList />
    </div>
  </div>
</template>
<style>
@import "~bulma/css/bulma.css";
</style>