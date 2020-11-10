<template>
  <div class="home">
    <div class="container">

      <div class="section">
        <h1 class="title">
          Heads:
        </h1>
        <div>
          <Heads/>
        </div>
      </div>

      <div class="section">
        <h1 class="title">
          Body:
        </h1>
        <div>
          <Bodies/>
        </div>
      </div>

      <div class="section">
        <h1 class="title">
          Legs:
        </h1>
        <div>
          <Legs/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Heads from '../components/Heads.vue';
import Bodies from '../components/Bodies.vue';
import Legs from '../components/Legs.vue';

export default {
  name: 'Parts',
  components: {
    Heads,
    Bodies,
    Legs,
  },
};
</script>

<style scoped>
.name {
  color:red !important;
}
.parts {
  display: flex;
}
</style>
