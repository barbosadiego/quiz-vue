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
    START_PLAYING(state) {
      state.gameStage = stages[2];
    },
    CHANGE_QUESTION(state) {
      state.currentQuestion++;
      const totalQuestions = questions.length;
      if (state.currentQuestion === totalQuestions) {
        state.gameStage = stages[3];
      }
    },
    RESTART(state){
      state.gameStage = stages[0];
      state.currentQuestion = 0;
      state.userScore = 0;
      state.answerSelect = null;
    },
    UPDATE_SCORE(state, payload){
      if(payload === state.questions[state.currentQuestion].answer){
        state.userScore++
        // console.log('acertou!', state.userScore)
      }
    }
  },
  actions: {},
  modules: {},
});
