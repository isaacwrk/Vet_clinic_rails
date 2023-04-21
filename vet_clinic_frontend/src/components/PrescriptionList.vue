<template>
    <table class="table is-hoverable is-striped">
      <thead>
        <tr>
          <th><abbr title="Position">Prescription Id</abbr></th>
          <th>Treated</th>
          <th>Prescription</th>
          <th><abbr title="Won">Prescribed By</abbr></th>
          <th><abbr title="Drawn">Disease</abbr></th>
          <th><abbr title="Drawn">Livestock</abbr></th>
          <th><abbr title="Lost">Actions</abbr></th>
        </tr>
      </thead>
      <tbody v-if="prescriptions">
        <tr v-for="prescription in prescriptions" :key="prescription.id">
          <!-- can i use v-bind="prescription "-->
          <PrescriptionListItem 
            :vet_prescription="prescription.vet_prescription"
            :prescribed_by="prescription.prescribed_by"
            :disease="prescription.disease"
            :livestock="prescription.livestock"
            :completed="prescription.completed"
            :id="prescription.id"
           />
        </tr>
      </tbody>
      <tfoot>
        <CreateModal v-show="showCreateModal"></CreateModal>
        <button class="button  is-success" @click="setModal">Create Prescription</button>
      </tfoot>
    </table>
    <EditModal v-if="showEditModal" :id="editModalPrescriptionId"></EditModal>
    <Prescription v-if="showPrescriptionModal" :id="showPrescriptionId"></Prescription>
  </template>

  <script lang="ts">
  import CreateModal from "./CreateModal.vue";
  import EditModal from "./EditModal.vue";
  import Prescription from "./Prescription.vue";
  import PrescriptionListItem from './PrescriptionListItem.vue';
  import { defineComponent, computed } from "vue";
  import { useStore } from "@/store";
  import { MutationType } from "@/enums/MutationType";
  export default defineComponent({
    name: "Table",
    components: {
      CreateModal,
      PrescriptionListItem,
      Prescription,
      EditModal,
    },
    setup() {
      const store = useStore();
      const setModal = () => {
        store.commit(MutationType.SetCreateModal, true);
      };
      const showCreateModal = computed(() => store.state.showCreateModal);
      const showEditModal = computed(() => store.state.showEditModal);
      const editModalPrescriptionId = computed(() => store.state.editModalPrescriptionId);
      const showPrescriptionModal = computed(() => store.state.showPrescriptionModal);
      const showPrescriptionId = computed(() => store.state.showPrescriptionId);
      const prescriptions = computed(() => store.state.prescriptions);
      return { showCreateModal, setModal, prescriptions, showEditModal, showPrescriptionModal, editModalPrescriptionId, showPrescriptionId };
    },
  });
  </script>
  <style scoped>
  table {
    width: 100%;
  }
  .fa {
    font-size: 1.2rem;
    margin-left: 15px;
  }
  .fa:hover {
    font-size: 1.4rem;
  }
  </style>