<template>
  <section class="game-over">
    <p>Você acertou {{$store.state.userScore}} perguntas!</p>
    <button @click="$store.commit('RESTART')">restart</button>
  </section>
</template>

<script>
export default {
  name: "GameOver",
}
</script>

<style lang="sass" scoped>

  .game-over
    display: flex
    flex-direction: column
    gap: 2rem
    margin-top: 1rem
  
    p
      font-size: 2rem
      text-align: center
      margin-bottom: 2rem

    button
      align-self: center

</style>