<template>
  <section class="quiz-question">
    <div class="area">
      <p class="total">Perguna {{currentQuestion + 1}} de {{questions.length}}</p>
      <h2>{{ questions[currentQuestion].question }}</h2>
      <ul>
        <li 
          v-for="item in questions[currentQuestion].options" 
          :key="item"
          :class="[ 'question', $store.state.answerSelected && item === questions[currentQuestion].answer ? 'correct' : '']"
          @click="handleClick(item)"
        >
          {{ item }}
        </li>
      </ul>
      <button 
        v-if="$store.state.answerSelected" 
        @click="$store.commit('CHANGE_QUESTION')"
      >
        continuar
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'QuizQuestion',
  methods:{
    handleClick(payload){
      this.$store.commit('CHECK_ANSWER', payload);
    },
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    currentQuestion() {
      return this.$store.state.currentQuestion;
    },
  },
};
</script>

<style lang="sass" scoped>

  .quiz-question
    text-align: center
    width: 90%

    h2
      font-size: 1.2rem

    .area
      background-color: var(--primary)
      padding: 2rem
      border-radius: var(--borderRadius)
      display: flex
      flex-direction: column
      gap: 1rem
      margin: 0 auto
      @media screen and (min-width:768px) 
        width: 600px

      ul
        list-style: none

        .question
          margin: 1rem 0px
          background-color: transparentize(#000, .6)
          padding: 1rem .5rem 
          border-radius: var(--borderRadius)
          &.correct
            background-color: var(--correct)
            color: black
          @media screen and (min-width:1025px)
            cursor: pointer
            &:hover
              background-color: transparentize(#000, .3)

      button
        box-shadow: 0px 0px 0px 3px var(--white)
        align-self: center

    .total
      font-weight: 600

</style>
