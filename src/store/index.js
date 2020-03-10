import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import mutations from "./mutations";
import actions from './actions'
import getters from "./getters";
const state = {
  cartList: []
}
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
