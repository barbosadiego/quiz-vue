<template>
  <section class="quiz-question">
    <p>perguna {{currentQuestion + 1}} de {{questions.length}}</p>
    <div>
      <h2>{{ questions[currentQuestion].question }}</h2>
      <ul>
        <li v-for="item in questions[currentQuestion].options" :key="item">
          {{ item }}
        </li>
      </ul>
      <button @click="$store.commit('CHANGE_QUESTION')">continuar</button>
      {{questions === undefined}}
    </div>
  </section>
</template>

<script>

export default {
  name: 'QuizQuestion',
  components: {
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
  ul
    list-style: none

</style>
