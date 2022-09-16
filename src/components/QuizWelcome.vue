<template>
  <header class="welcome">
    <h1>font-end quiz</h1>
    <button v-if="$store.state.gameStage === 'Start'" @click="start">iniciar</button>
  </header>
</template>

<script>
export default {
  name: "WelcomeComponent",
  methods: {
    start(){
      this.$store.commit('START_PLAYING')
      this.$store.commit('REORDER_QUESTIONS')
    }
  }
}
</script>

<style lang="sass" scoped>

  .welcome
    display: flex
    flex-direction: column
    align-items: center
    gap: 2rem

    h1
      text-transform: capitalize
      font-weight: bold
      font-size: 2rem
      margin-top: 2rem

    
</style>