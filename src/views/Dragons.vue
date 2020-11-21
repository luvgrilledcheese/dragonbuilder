<template>
  <div class='dragons'>
    <div class='container'>
      <div class="section">
        <header class="header">
           <div class="header-titles">
              <h1 class="title">
                Your dragons
              </h1>
              <p class="subtitle is-4">
                This is your list of dragons you've created.
              </p>
            </div>
        </header>
      </div>
      <div class="section">
        <div class="columns is-multiline is-3" id="body">
          <div class="column is-3" v-for="dragon in allDragons" :key="dragon.id">
              <div class="router-click is-clickable" @click="routeToEdit(dragon.id)">
                <Dragon :dragon="dragon" :scale="300" :isNameVisible="true"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Dragon from '../components/Dragon.vue';

export default {
  name: 'Dragons',
  components: {
    Dragon,
  },

  methods: {
    ...mapActions(['fetchDragons', 'getDragon', 'addDragon', 'removeDragon']),
    routeToEdit(id) {
      this.$router.push({
        name: 'Edit',
        params: { dragonId: id },
      });
    },
  },

  computed: mapGetters(['allDragons']),

  created() {
    this.fetchDragons();
  },

  mounted() {
  },
};
</script>
