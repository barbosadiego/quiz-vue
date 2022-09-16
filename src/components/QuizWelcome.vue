<template>
  <header class="welcome">
    <h1>font-end quiz</h1>
    <div v-if="$store.state.gameStage === 'Start'">
      <p>Teste seus conhencimentos de front-end!</p>
      <button @click="start">iniciar</button>
    </div>
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

    div
      display: flex
      flex-direction: column
      gap: 2rem

      p
        text-align: center
      button
        align-self: center
    
</style>