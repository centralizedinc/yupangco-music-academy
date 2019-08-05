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
    },
    sender: null
  },
  mutations: {
    SET_LESSON(state, data) {
      console.log('data :', data);
      state.lesson = data
    },
    SET_COURSE(state, data) {
      console.log('data :', data);
      state.course = data
    },
    SET_LEVEL(state, data) {
      console.log('data :', data);
      state.level = data
    },
    SET_SENDER(state, data) {
      console.log('data :', data);
      state.sender = data
    },
    SET_ORDER(state, data) {
      state.course = data.course;
      state.level = data.level;
      state.lesson = data.lesson;
      state.sender = data.sender;
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
    },
    SUBMIT_ENROLLMENT(context, data) {
      console.log('SUBMIT_ENROLLMENT data :', data);
      return new api().submitEnrollment(data)
    }
  }
})
