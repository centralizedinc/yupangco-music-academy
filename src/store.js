import Vue from 'vue'
import Vuex from 'vuex'
import api from './webview_api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lesson: null,
    course: null,
    level: null,
    details: {
      student: {},
      payor: {},
      address_details: {},
      additional_info: "",
      order: {}
    }
  },
  mutations: {
    SET_LESSON(state, data) {
      state.lesson = data
    },
    SET_COURSE_LEVEL(state, data) {
      state.course = data.course;
      state.level = data.level;
    },
    SET_DETAILS(state, data) {
      state.details = data
    },
    RESET_DETAILS(state, data) {
      state.lesson = null
      state.course = null
      state.level = null
      state.details = {
        student: {},
        payor: {},
        address_details: {},
        additional_info: "",
        order: {}
      }
    }
  },
  actions: {
    ENROLLMENT(context, data) {
      context.commit('SET_COURSE_LEVEL', data.details)
      return new api().callbackWebview(data.sender, data.postback)
    },
    RESERVATION(context, data) {
      console.log('data :', data);
      context.commit('SET_DETAILS', data.details)
      return new api().callbackWebview(data.sender, data.postback)
    },
    RESET(context, data) {
      console.log('data :', data);
      context.commit('RESET_DETAILS')
      return new api().callbackWebview(data.sender, data.postback)
    },
    CLOSE(context, data) {
      return new api().callbackWebview(data.sender, data.postback)
    },
    ASSESSMENT(context, data) {
      return new api().callbackWebview(data.sender, data.postback)
    }
  }
})
