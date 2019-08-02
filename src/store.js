import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lesson: null
  },
  mutations: {
    SET_LESSON(state, data){
      state.lesson = data
    }
  },
  actions: {

  }
})
