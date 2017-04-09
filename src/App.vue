<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    {{ cookies }}
  </div>
</template>

<script>
  import Vue from 'vue'
  import Hello from './components/Hello'
  import Servue from './mixins/servue'

  Vue.use(Servue);
  
  export default {
    name: 'app',
    data: () => {
      return {
        cookies: {
          token: 'kkk'
        }
      }
    },
    components: {
      Hello
    },
    api: {
      profile: (req, res) => {
        return req;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
