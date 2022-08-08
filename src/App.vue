<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './partials/Footer-component.vue'
import HeaderComponent from './partials/Header-component.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto';
}
a {
  text-decoration: none;
}
</style>