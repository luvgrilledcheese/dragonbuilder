<template>
  <div class="columns is-multiline is-3" id="head">
    <div
      class="column is-4"
      v-for="head in allHeads" :key="head.id">
        <Part :name="head.name"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Part from './Part.vue';

export default {
  name: 'Heads',
  methods: {
    ...mapActions(['fetchHeads', 'deleteHead', 'updateHead']),
  },
  computed: mapGetters(['allHeads']),
  created() {
    this.fetchHeads();
  },
  mounted() {
    console.log('App this router:', this.$router);
    console.log('App currentRoute:', this.$router.currentRoute.name);
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
#head .name {
  color:green !important;
}
</style>
