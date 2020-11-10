<template>
  <div class='home'>
    <div class='container'>
      <h1 class='title'>Admin Dashboard</h1>
      <div class='columns'>
        <div class='column'>
            <h1 class="title is-5"> Heads:</h1>
            <Heads />
        </div>
        <div class='column'>
            <h1 class="title is-5">
                Add head:
                <AddHead />
            </h1>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
            <h1 class="title is-5"> Bodies:</h1>
            <Bodies />
        </div>
        <div class='column'>
            <h1 class="title is-5">
                Add body:
                <AddBody />
            </h1>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='columns'>
        <div class='column'>
            <h1 class="title is-5"> Legs:</h1>
            <Legs />
        </div>
        <div class='column'>
            <h1 class="title is-5">
                Add Legs:
                <AddLeg />
            </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heads from '../components/Heads.vue';
import AddHead from '../components/AddHead.vue';
import Bodies from '../components/Bodies.vue';
import AddBody from '../components/AddBody.vue';
import Legs from '../components/Legs.vue';
import AddLeg from '../components/AddLeg.vue';

export default {
  name: 'Admin',
  components: {
    Heads,
    AddHead,
    Bodies,
    AddBody,
    Legs,
    AddLeg,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 4%;
}
.dishes {
  display: block;
}
</style>
