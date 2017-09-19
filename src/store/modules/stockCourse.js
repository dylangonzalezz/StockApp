const state = {
    stockBMW: '110',
    stockApple: '1200',
    stockABC: '100',
    stockTwitter: '80'
}

const getters = {
  getStockBMW(state) {
    return state.stockBMW;
  },
  getStockApple(state) {
    return  state.stockApple;
  },
  getStockABC(state) {
    return  state.stockABC;
  },
  getStockTwitter(state) {
    return  state.stockTwitter;
  }
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
