<template>
  <div class="app">
    <div class="heading">
      <NavBar />
    </div>
    <div class="app__body">
      <router-view />
    </div>
  </div>
</template>
<script>

import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
body {
  margin: 0;
  margin-top: -19px;
  box-sizing: border-box;
  background-color: #F1E0D6;
}

#app_logo{
  width: 200px;
  height: 140px;
  background-color: #132227;
  font-family: 'Merienda', cursive;
  color: #F1E0D6;
  text-align: left;
}
.logo_note{
  padding-left: 20px;
}
.logo_note h1{
  font-size: 36px;
  margin-top: 0;
} 
.logo_note h4 {
  padding-top: 25px;
  margin-bottom: 0;
  font-size: 14px;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #132227;
  display: flex;
}

#nav {
  justify-content: right;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #132227;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #525B56;
}
</style>
