/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

const state = {
  bodies: [],
};

const getters = {
  allBodies: (state) => state.bodies,
};

const actions = {
  async fetchBodies({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/bodies',
    );

    commit('setBodies', response.data);
  },
  async addBody({ commit }, body) {
    const response = await axios.post('http://localhost:3000/bodies', body);

    commit('newBody', response.data);
    console.log('newBody', response.data);
  },
  async deleteBody({ commit }, id) {
    await axios.delete(`http://localhost:3000/bodies/${id}`);

    commit('removeBody', id);
  },
  //   async filterBodies({ commit }, e) {
  //     // Get selected number
  //     const limit = parseInt(
  //       e.target.options[e.target.options.selectedIndex].innerText, 10,
  //     );

  //     const response = await axios.get(
  //       `http://localhost:3000/bodies?_limit=${limit}`,
  //     );

  //     commit('setBodies', response.data);
  //   },
  //   async updateBody({ commit }, updBody) {
  //     const response = await axios.put(
  //       `http://localhost:3000/bodies/${updBody.id}`,
  //       updBody,
  //     );

  //     console.log(response.data);

  //     commit('updateBody', response.data);
  //   },
};

const mutations = {
  setBodies: (state, bodies) => { (state.bodies = bodies); },
  newBody: (state, body) => state.bodies.unshift(body),
  removeBody: (state, id) => {
    (state.bodies = state.bodies.filter((body) => body.id !== id));
  },
  //   updateBody: (state, updBody) => {
  //     const index = state.bodies.findIndex((body) => body.id === updBody.id);
  //     if (index !== -1) {
  //       state.bodies.splice(index, 1, updBody);
  //     }
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
