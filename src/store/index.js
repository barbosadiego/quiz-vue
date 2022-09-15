import Vue from 'vue';
import Vuex from 'vuex';
import questions from '@/data/questions';

Vue.use(Vuex);
const stages = ['Start', 'Category', 'Playing', 'End'];

export default new Vuex.Store({
  state: {
    gameStage: stages[0],
    currentQuestion: 0,
    answerSelect: null,
    userScore: 0,
    questions,
  },
  getters: {},
  mutations: {
    START_PLAYING() {
      this.state.gameStage = stages[2];
    },
    CHANGE_QUESTION() {
      this.state.currentQuestion++;
      const totalQuestions = questions.length;
      if (this.state.currentQuestion === totalQuestions) {
        this.state.gameStage = stages[3];
      }
    },
    RESTART(){
      this.state.gameStage = stages[0];
      this.state.currentQuestion = 0;
      this.state.userScore = 0;
      this.state.answerSelect = null;
    }
  },
  actions: {},
  modules: {},
});
