/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import axios from 'axios';

const state = {
  legs: [],
};

const getters = {
  allLegs: (state) => state.legs,
};

const actions = {
  async fetchLegs({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/legs',
    );

    commit('setLegs', response.data);
  },
  async addLeg({ commit }, leg) {
    const response = await axios.post('http://localhost:3000/legs', leg);

    commit('newLeg', response.data);
    console.log('newLeg', response.data);
  },
  async deleteLeg({ commit }, id) {
    await axios.delete(`http://localhost:3000/legs/${id}`);

    commit('removeLeg', id);
  },
  //   async filterBodies({ commit }, e) {
  //     // Get selected number
  //     const limit = parseInt(
  //       e.target.options[e.target.options.selectedIndex].innerText, 10,
  //     );

  //     const response = await axios.get(
  //       `http://localhost:3000/legs?_limit=${limit}`,
  //     );

  //     commit('setLegs', response.data);
  //   },
  //   async updateLeg({ commit }, updLeg) {
  //     const response = await axios.put(
  //       `http://localhost:3000/legs/${updLeg.id}`,
  //       updLeg,
  //     );

  //     console.log(response.data);

  //     commit('updateLeg', response.data);
  //   },
};

const mutations = {
  setLegs: (state, legs) => { (state.legs = legs); },
  newLeg: (state, leg) => state.legs.unshift(leg),
  removeLeg: (state, id) => {
    (state.legs = state.legs.filter((leg) => leg.id !== id));
  },
  //   updateBody: (state, updBody) => {
  //     const index = state.legs.findIndex((legs) => legs.id === updBody.id);
  //     if (index !== -1) {
  //       state.legs.splice(index, 1, updBody);
  //     }
  //   },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
