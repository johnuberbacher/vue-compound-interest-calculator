<template>
  <div id="app" class="flex items-center justify-center h-screen bg-gray-50 p-5">  
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  title: "Compund Interest Calculator",
  components: {
    Calculator
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
