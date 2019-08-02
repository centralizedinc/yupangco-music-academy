import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lesson: null,
    course: null,
    level: null
  },
  mutations: {
    SET_LESSON(state, data) {
      state.lesson = data
    },
    SET_COURSE_LEVEL(state, data) {
      state.course = data.course;
      state.level = data.level;
    }
  },
  actions: {
    WEBVIEW_CALLBACK(context, data) {
      return new Promise((resolve, reject) => {
        context.commit('SET_COURSE_LEVEL', data.details)
        axios.post('https://yupangco-music-academy.herokuapp.com/facebook/webhook',
          {
            entry: [{
              messaging: [{
                sender: {
                  id: data.sender
                },
                postback: {
                  payload: data.postback
                }
              }]
            }]
          })
          .then((result) => {
            MessengerExtensions.requestCloseBrowser(
              function success() {
                resolve()
                // webview closed
              },
              function error(err) {
                reject(err)
                // an error occurred
              }
            );
          }).catch((err) => {
            reject(err)
          });
      })
    }
  }
})
