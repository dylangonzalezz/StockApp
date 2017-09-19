import Vue from 'vue';
import Vuex from 'vuex';
import funds from './modules/funds';
import stockCourse from './modules/stockCourse';
import myStocks from './modules/myStocks';
import stocksApi from './modules/stocks/stocksApi';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    funds: funds,
    stockCourse: stockCourse,
    myStocks: myStocks,
    stocksAPi: stocksApi
  }
});
