/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

// fetchDragons
// newDragon
// deleteDragon
//
const state = {
  dragons: [],
};

const getters = {
  allDragons: (state) => state.dragons,
};

const actions = {
  async fetchDragons({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/dragons',
    );

    commit('setDragons', response.data);
  },

  async addDragon({ commit }, dragon) {
    const response = await axios.post('http://localhost:3000/dragons', dragon);

    commit('newDragon', response.data);
    console.log('newDragon', response.data);
  },

  async deleteDragon({ commit }, id) {
    await axios.delete(`http://localhost:3000/dragons/${id}`);
    commit('removeDragon', id);
  },

  // eslint-disable-next-line no-unused-vars
  async findDragon({ commit }, id) {
    return state.dragons.filter((dragon) => dragon.id === id)[0];
  },

  async updateDragon({ commit }, updDragon) {
    const response = await axios.put(`http://localhost:3000/dragons/${updDragon.id}`, updDragon);
    commit('updDragon', response.data);
  },
};

const mutations = {
  setDragons: (state, dragons) => { (state.dragons = dragons); },
  newDragon: (state, dragon) => state.dragons.unshift(dragon),
  removeDragon: (state, id) => {
    (state.dragons = state.dragons.filter((dragon) => dragon.id !== id));
  },
  updDragon: (state, updDragon) => {
    const index = state.dragons.findIndex((dragon) => dragon.id === updDragon.id);
    if (index !== -1) {
      state.dragons.splice(index, 1, updDragon);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
