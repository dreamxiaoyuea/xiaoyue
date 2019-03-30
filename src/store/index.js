import Vue from 'vue'
import Vuex from 'vuex'
import kindStore from './kind'
import detailStore from './detail'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    kindStore,
    detailStore
  }
})

export default store
