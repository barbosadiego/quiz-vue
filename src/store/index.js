import Vue from 'vue';
import Vuex from 'vuex';
import questions from '@/data/questions';

Vue.use(Vuex);
const stages = ['Start', 'Category', 'Playing', 'End'];

export default new Vuex.Store({
  state: {
    gameStage: stages[0],
    currentQuestion: 0,
    answerSelected: false,
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
      state.answerSelected = false;

      const totalQuestions = questions.length;

      if (state.currentQuestion === totalQuestions) {
        state.gameStage = stages[3];
      }
    },
    RESTART(state){
      state.gameStage = stages[0];
      state.currentQuestion = 0;
      state.userScore = 0;
      state.answerSelected = null;
    },
    CHECK_ANSWER(state, payload){
      if(state.answerSelected === payload) return state;

      const answer = state.questions[state.currentQuestion].answer;
      const option = payload;
      state.answerSelected = payload;

      if(answer === option){
        state.userScore++
      }
    },
    REORDER_QUESTIONS(state){
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() -  0.5
      })
      return state.questions = reorderedQuestions;
    }
  },
  actions: {},
  modules: {},
});
