<template>
  <div class="parts">
    <div
      v-for="head in allHeads"
      :key="head.id"
      class="box"
      style="margin-right:2%;"
    >
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong style="color: #ffffff;">{{ head.name }}</strong>
            </p>
          </div>
        </div>
        <div class="media-right">
          <button v-on:click="deleteHead(head.id)"
          class="delete" ref="btnDelete"></button>
          <!-- <i  class="fas fa-trash-alt"></i> -->
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
