const state = {
  funds: 10000,
}

const getters = {
  getFunds: state => {
    return state.funds;
  }
}

const mutations = {
  incrementFunds: (state, payload) => {
    state.counter += payload;
  },
  decrementFunds: (state, payload) => {
    state.counter -= payload;
  },
}

const actions = {
  incrementFunds: ({ commit }, payload) => {
    commit('incrementFunds', payload);
  },
  decrementFunds: ({ commit }, payload) => {
    commit('decrementFunds', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
