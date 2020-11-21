import Vue from 'vue';
import Vuex from 'vuex';
import heads from '@/store/modules/heads';
import bodies from '@/store/modules/bodies';
import legs from '@/store/modules/legs';
import dragons from '@/store/modules/dragons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    heads,
    bodies,
    legs,
    dragons,
  },
});
