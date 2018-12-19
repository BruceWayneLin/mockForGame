import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navOpen: false,
    userInfoHide: false,
  },
  mutations: {
    OpenNav (state) {
      state.navOpen = !state.navOpen
    },
    slideUp (state, payload) {
      state.userInfoHide = payload
    }
  },
  actions: {

  }
})
