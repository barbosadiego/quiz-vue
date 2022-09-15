import Vue from 'vue'
import Vuex from 'vuex'
import questions from '@/data/questions'

Vue.use(Vuex)
const stages = ["Start", "Category", "Playing", "End"]

export default new Vuex.Store({
  state: {
    gameStage: stages[0],
    currentQuestion: 0,
    answerSelect: null,
    userScore: 0,
    questions,
  },
  getters: {
  },
  mutations: {
    START_PLAYING(){
      this.state.gameStage = stages[2]
    }
  },
  actions: {
  },
  modules: {
  }
})
