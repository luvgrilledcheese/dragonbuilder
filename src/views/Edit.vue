<template>
  <div class='dragons'>
    <div class='container'>
      <div class="section">
        <header class="header">
           <div class="header-titles">
              <h1 class="title">
                Edit your dragon
              </h1>
              <p class="subtitle is-4">
                Use it to create your own dragon.
              </p>
            </div>
        </header>
      </div>
      <div class="section">
        <div class="columns is-4 is-multiline level" id="body">

            <div class="column is-4">
                <!-- Head -->
                <div class="field fullwidth">
                  <div class="control has-icons-left">
                    <div class="select is-large is-rounded">
                      <select v-model="dragon.headId">
                        <option v-for="head in allHeads" v-bind:key="head.id"
                          class="dropdown-item dragon-part" :value="head.id">
                        {{head.name}}
                        </option>
                      </select>
                    </div>
                    <div class="icon is-small is-left has-text-success">
                      <i class="fas fa-frog"></i>
                    </div>
                  </div>
                </div>

                <!-- Body -->
                <div class="field fullwidth">
                  <div class="control has-icons-left">
                    <div class="select is-large is-rounded">
                      <select v-model="dragon.bodyId">
                        <option v-for="body in allBodies" v-bind:key="body.id"
                          class="dropdown-item dragon-part" :value="body.id">
                        {{body.name}}
                        </option>
                      </select>
                    </div>
                    <div class="icon is-small is-left has-text-warning">
                      <i class="fas fa-chess-pawn"></i>
                    </div>
                  </div>
                </div>

                <!-- Legs -->
                <div class="field fullwidth">
                  <div class="control has-icons-left">
                    <div class="select is-large is-rounded">
                      <select v-model="dragon.legId">
                        <option v-for="leg in allLegs" v-bind:key="leg.id" :value="leg.id"
                          class="dropdown-item dragon-part">
                        {{leg.name}}
                        </option>
                      </select>
                    </div>
                    <div class="icon is-small is-left has-text-info">
                      <i class="fas fa-socks"></i>
                    </div>
                  </div>
                </div>
                <hr>
                  <button class="button is-large is-fullwidth" disabled
                  id="submit" @click="fxEditDragon()">Finish Edit!</button>
                <br>
                <button class="button is-large is-fullwidth is-danger"
                 @click="fxRemoveDragon()">Delete Dragon</button>
            </div>
            <div class="column is-8 has-text-centered">
                <div class="field">
                  <div class="control">
                    <input v-model="dragon.name" class="input is-large title has-text-centered"
                    type="text" placeholder="Name your dragon...">
                  </div>
                </div>
                <Dragon :dragon="dragon" :scale="600"/>
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
  name: 'Edit',
  props: {
    dragonId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    self: null,
    // id: this.dragonId,
    dragon: {
      name: '',
      headId: 1,
      bodyId: 1,
      legId: 1,
    },
  }),

  components: {
    Dragon,
  },

  methods: {
    ...mapActions(['fetchHeads', 'fetchBodies', 'fetchLegs', 'fetchDragons', 'deleteDragon', 'findDragon', 'updateDragon']),

    fxEditDragon() {
      this.updateDragon(this.dragon).then(() => {
        this.$router.push('/Dragons');
      });
    },

    fxRemoveDragon() {
      this.deleteDragon(this.dragonId).then(() => {
        this.$router.push('/Dragons');
      });
    },
  },

  computed: mapGetters(['allHeads', 'allBodies', 'allLegs', 'allDragons']),

  created() {
    this.self = this;
    this.fetchHeads();
    this.fetchBodies();
    this.fetchLegs();
  },

  mounted() {
    this.fetchDragons().then(() => {
      this.findDragon(this.self.dragonId).then((x) => {
        this.dragon = x;
      });
    });
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    'dragon.name': (newVal, oldVal) => {
      const button = document.getElementById('submit');
      if (newVal === '') {
        button.classList.remove('is-success');
        button.setAttribute('disabled', true);
      } else {
        button.classList.add('is-success');
        button.removeAttribute('disabled');
      }
    },
  },
};
</script>
