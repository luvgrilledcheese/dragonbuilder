<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img
          v-bind:src="'/assets/images/' + part + '/' + id + '.png'"
          alt="Placeholder image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 has-text-centered name">{{ name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Part',
  props: ['name', 'id', 'part'],
  data() {
    return {
      partId: this.id,
      partName: this.part,
    };
  },
  mounted() {
  },
};
</script>
