<template>
  <div class="columns is-multiline" id="leg">
    <div
      v-for="leg in allLegs" :key="leg.id" class="column is-4">
      <Part :name="leg.name" part="legs" :id="leg.id"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Part from './Part.vue';

export default {
  name: 'Legs',
  methods: {
    ...mapActions(['fetchLegs', 'deleteLeg', 'updateLeg']),
  },
  computed: mapGetters(['allLegs']),
  created() {
    this.fetchLegs();
  },
  mounted() {
  },
  components: {
    Part,
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
.btn {
  border: none;
  background-color: inherit;
}
</style>

<style>
#leg .name {
  color:rebeccapurple !important;
}
</style>
