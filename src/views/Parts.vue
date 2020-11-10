<template>
  <div class="home">
    <div class="container">
      <h1 class="title" style="margin-top:4%">
        Heads:
      </h1>
      <div style="">
        <Heads/>
      </div>
      <h1 class="title" style="margin-top:4%">
        Bodies:
      </h1>
      <div style="">
        <Bodies/>
      </div>
      <h1 class="title" style="margin-top:4%">
        Legs:
      </h1>
      <div style="">
        <Legs/>
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
.parts {
  display: flex;
}
</style>
