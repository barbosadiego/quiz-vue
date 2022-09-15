<template>
  <section class="game-over">
    <p>game over</p>
    <button @click="$store.commit('RESTART')">restart</button>
  </section>
</template>

<script>
export default {
  name: "GameOver",
}
</script>