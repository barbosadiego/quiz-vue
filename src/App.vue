<template>
  <div id="app">
    <Welcome />
    <main>
      <Question v-if="$store.state.gameStage === 'Playing'"/>
      <p>estado do jogo: {{$store.state.gameStage}}</p>
    </main>
  </div>
</template>

<script>
import Welcome from '@/components/QuizWelcome.vue';
import Question from '@/components/QuizQuestion.vue';

export default {
  name: 'App',
  components: {
    Welcome,
    Question,
  },
  
}
</script>

<style lang="sass">

  $primary: #8435de
  $white: #ffffff
  $grey: #1c1c1c

  body
    background-color: $grey
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    color: $white
    margin: 0px

    #app
      display: flex
      flex-direction: column
      width: 100%
      min-height: 100vh
      gap: 1rem

      button 
        font-weight: bold
        cursor: pointer
        font-size: 1.2rem
        padding: 0.8rem 1.5rem
        background: linear-gradient(90deg, rgba(132, 53, 222, 1) 0%, rgba(184, 84, 232, 1) 100%)
        border-radius: 3rem
        border: none
        color: $white
        &:hover
          background: linear-gradient(90deg, rgba(184, 84, 232, 1) 0%, rgba(132, 53, 222, 1) 100%)
    
    main
      flex: 1
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center

</style>
