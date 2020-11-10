/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

const state = {
  heads: [],
};

const getters = {
  allHeads: (state) => state.heads,
};

const actions = {
  async fetchHeads({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/heads',
    );

    commit('setHeads', response.data);
  },
  async addHead({ commit }, head) {
    const response = await axios.post('http://localhost:3000/heads', head);

    commit('newHead', response.data);
    console.log('newHead', response.data);
  },
  async deleteHead({ commit }, id) {
    await axios.delete(`http://localhost:3000/heads/${id}`);

    commit('removeHead', id);
  },
  //   async filterDishes({ commit }, e) {
  //     // Get selected number
  //     const limit = parseInt(
  //       e.target.options[e.target.options.selectedIndex].innerText, 10,
  //     );

  //     const response = await axios.get(
  //       `http://localhost:3000/heads?_limit=${limit}`,
  //     );

  //     commit('setHeads', response.data);
  //   },
  //   async updateDish({ commit }, updDish) {
  //     const response = await axios.put(
  //       `http://localhost:3000/heads/${updDish.id}`,
  //       updDish,
  //     );

  //     console.log(response.data);

  //     commit('updateDish', response.data);
  //   },
};

const mutations = {
  setHeads: (state, heads) => { (state.heads = heads); },
  newHead: (state, head) => state.heads.unshift(head),
  removeHead: (state, id) => {
    (state.heads = state.heads.filter((head) => head.id !== id));
  },
  //   updateDish: (state, updDish) => {
  //     const index = state.heads.findIndex((head) => head.id === updDish.id);
  //     if (index !== -1) {
  //       state.heads.splice(index, 1, updDish);
  //     }
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
