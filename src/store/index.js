import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

/** 状态定义 */
const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

export default store
