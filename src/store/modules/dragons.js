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

  async getDragon(id) {
    return state.dragons.filter((dragon) => dragon.id === id);
  },
};

const mutations = {
  setDragons: (state, dragons) => { (state.dragons = dragons); },
  newDragon: (state, dragon) => state.dragons.unshift(dragon),
  removeDragon: (state, id) => {
    (state.dragons = state.dragons.filter((dragon) => dragon.id !== id));
  },
  //   updateDish: (state, updDish) => {
  //     const index = state.dishes.findIndex((dish) => dish.id === updDish.id);
  //     if (index !== -1) {
  //       state.dishes.splice(index, 1, updDish);
  //     }
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
