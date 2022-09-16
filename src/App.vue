<template>
  <div id="app">
    <Welcome />
    <main :class="[
      $store.state.gameStage === 'Start' ? 'start' : '', 
      $store.state.gameStage === 'End' ? 'end' : ''
    ]">
      <Question v-if="$store.state.gameStage === 'Playing'"/>
      <GameOver v-if="$store.state.gameStage === 'End'"/>
    </main>
    <!-- <p>estado do jogo: {{$store.state.gameStage}}</p> -->
  </div>
</template>

<script>
import Welcome from '@/components/QuizWelcome.vue';
import Question from '@/components/QuizQuestion.vue';
import GameOver from '@/components/GameOver.vue';

export default {
  name: 'App',
  components: {
    Welcome,
    Question,
    GameOver,
  },
  
}
</script>

<style lang="sass">

  $primary: #8435de

  :root 
    --primary: #8435de
    --white: #ffffff
    --grey: #1c1c1c
    --correct: #0bfc03
    --borderRadius: 5px
  
  *
    box-sizing: border-box
    margin: 0px
    padding: 0px

  img
    max-width: 100%
    display: block

  body
    background-color: var(--grey)
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    color: var(--white)
    margin: 0px

    #app
      display: flex
      flex-direction: column
      width: 100%
      min-height: 100vh
      gap: 1rem

      button 
        font-weight: bold
        font-size: 1.2rem
        text-transform: capitalize
        cursor: pointer
        padding: 0.8rem 1.5rem
        background: linear-gradient(90deg, rgba(132, 53, 222, 1) 0%, rgba(184, 84, 232, 1) 100%)
        border-radius: 3rem
        border: none
        color: var(--white)
        &:hover
          background: linear-gradient(90deg, rgba(184, 84, 232, 1) 0%, rgba(132, 53, 222, 1) 100%)
    
    main
      flex: 1
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      background-repeat: no-repeat
      background-position: center center
      background-size: contain
      &.start
        background-image: url(./assets/quiz.svg)
      &.end
        background-image: url(./assets/welldone.svg)
        background-color: var(--grey)
        background-blend-mode: multiply

</style>
