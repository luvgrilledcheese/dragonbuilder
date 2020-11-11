<template>
  <div class="columns is-multiline is-3" id="body">
    <div
      class="column is-4" v-for="body in allBodies" :key="body.id">
        <Part :name="body.name" part="bodies" :id="body.id"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Part from './Part.vue';

export default {
  name: 'Bodies',
  methods: {
    ...mapActions(['fetchBodies', 'deleteBody', 'updateBody']),
  },
  computed: mapGetters(['allBodies']),
  created() {
    this.fetchBodies();
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
#body .name {
  color:crimson !important;
}
</style>
