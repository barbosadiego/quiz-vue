<template>
  <div id="app">
    <Welcome />
  </div>
</template>

<script>
import Welcome from '@/components/QuizWelcome.vue';

export default {
  name: 'App',
  components: {
    Welcome,
  }
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

  #app
    display: flex
    flex-direction: column

</style>
