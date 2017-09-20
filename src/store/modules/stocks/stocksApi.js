import Vue from 'vue';
import { getStockData } from '../../../helpers/api-helper';

const state = {
    realStockBMW: '0',
    realStockApple: '0',
    realStockABC: '0',
    realStockTwitter: '0',
    loadingOverlay: false,
    // dis: "dis"
}

const getters = {
  getRealStockBMW(state) {
      return state.realStockBMW;
  },
  getRealStockApple(state) {
    return state.realStockApple;
  },
  getRealStockABC(state) {
    return state.realStockABC;
  },
  getRealStockTwitter(state) {
    return state.realStockTwitter;
  },
  getLoadingOverlay(state) {
    return state.loadingOverlay;
  },
  // getDis(state) {
  //   return state.dis;
  // }
}

const mutations = {
  // setDis(state, x) {
  //   state.dis = x;
  // },
  updateBMW(state, payload) {
    state.loadingOverlay = true;
      payload.then(response =>{
        state.realStockBMW = getStockData(response);
        state.loadingOverlay = false;
      }, error =>{
        state.loadingOverlay = false;
      })
  },
  updateABC(state) {
    state.loadingOverlay = true;
    Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOGL&apikey=WG5UMA24QCTX3I9D')
      .then(response =>{
        state.realStockABC = getStockData(response);
        state.loadingOverlay = false;
      }, error =>{
        state.loadingOverlay = false;
        console.log(error);
      })
  },
  updateApple(state) {
    state.loadingOverlay = true;
    Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=WG5UMA24QCTX3I9D')
      .then(response =>{
        state.realStockApple= getStockData(response);
        state.loadingOverlay = false;
      }, error =>{
        state.loadingOverlay = false;
        console.log(error);
      })
  },
  updateTwitter(state) {
    state.loadingOverlay = true;
    Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TWTR&apikey=WG5UMA24QCTX3I9D')
      .then(response =>{
        state.realStockTwitter = getStockData(response);
        state.loadingOverlay = false;
      }, error =>{
        state.loadingOverlay = false;
        console.log(error);
      })
  },
}

const actions = {
  updateBMW ({ commit }) {
    state.loadingOverlay = true;
    var getRequestBMW = new Promise(function(resolve, reject) {
      var request = Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BMW&apikey=WG5UMA24QCTX3I9D');
      commit('updateBMW', request);
    });
    var getRequestABC = new Promise(function(resolve, reject) {
      var request = Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BMW&apikey=WG5UMA24QCTX3I9D');
      commit('updateABC', request);
    });
    var getRequestApple = new Promise(function(resolve, reject) {
      var request = Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BMW&apikey=WG5UMA24QCTX3I9D');
      commit('updateApple', request);
    });
    var getRequestTwitter = new Promise(function(resolve, reject) {
      var request = Vue.http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=BMW&apikey=WG5UMA24QCTX3I9D');
      commit('updateTwitter', request);
    });
  },
  // setDis ({ commit }, x) {
  //   commit('setDis', x);
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
