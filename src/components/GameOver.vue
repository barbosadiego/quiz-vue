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