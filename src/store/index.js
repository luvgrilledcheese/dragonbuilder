import Vue from 'vue';
import Vuex from 'vuex';
import dishes from '@/store/modules/dishes';
import heads from '@/store/modules/heads';
import bodies from '@/store/modules/bodies';
import legs from '@/store/modules/legs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    dishes,
    heads,
    bodies,
    legs,
  },
});
