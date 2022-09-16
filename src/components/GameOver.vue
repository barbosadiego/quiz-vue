<template>
  <section class="game-over">
    <h2>Pontos: {{score}}</h2>
    <p v-if="score">Você acertou {{score}} perguntas!</p>
    <p v-if="!score">Que pena! Você não conseguiu acertar nenhuma pergunta. Tente novamente!</p>
    <button @click="$store.commit('RESTART')">restart</button>
  </section>
</template>

<script>
export default {
  name: "GameOver",
  computed:{
    score(){
      return this.$store.state.userScore
    }
  }
}
</script>

<style lang="sass" scoped>

  .game-over
    display: flex
    flex-direction: column
    gap: 2rem
    margin-top: 1rem
    text-align: center
    max-width: 600px
    padding: 10px
  
    p
      font-size: 1.5rem
      margin-bottom: 2rem

    button
      align-self: center

</style>