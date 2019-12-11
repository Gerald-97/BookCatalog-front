<template>
    <div class="container">
        <div class="navbar">
            <div id="app_logo" @click="goHome">
                <div class="logo_note">
                    <h4>Gerry's</h4>
                    <h1>Catalog</h1>
                </div>
            </div>
            <h1> Library </h1>
            <div class="body">
                <div id="nav">
                    <div class="nav__links">
                        <div class="nav__link__item">
                            <router-link to="/bookshelf">Bookshelf</router-link>
                        </div>
                        <ul class="nav__links" v-if="!isLoggedIn">
                            <li class="nav__link__item">
                                <router-link to="/sign-in">Register</router-link>
                            </li>
                            <li class="nav__link__item">
                                <router-link to="/login">Login</router-link>
                            </li>
                        </ul>
                        <button class="btn-logout nav__link__item" @click="logout" v-else>LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'NavBar',
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        goHome() {
            this.$router.push({ name: 'home'});
        },
        ...mapActions(['logoutAdmin']),
        logout() {
            this.logoutAdmin()
            this.$router.push({ name: "home" });
        }
    }
}
</script>
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #132227;
}
.navbar > h1 {
    margin: 30px;
}
.nav__links {
    display: flex;
    list-style: none;
    padding: 0;
    align-items: center;
}
.nav__link__item {
    justify-content: space-evenly;
    margin-left: 10px;
    font-size: 14px;
    color: #132227;
}
.container hr{
    margin: 0;
    width: 100%;
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
.btn-logout {
    border: none;
    padding: 7px 20px;
    background-color: #132227;
    color: #F1E0D6;
    border-radius: 15px;
    transition-duration: 0.1s;
}
.btn-logout:hover{
    cursor: pointer;
    background-color: #b3babb;
    color: #0f1011;
    font-weight: bold;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #132227;
  display: flex;
}
/* @media screen and (min-width: 768px) {
  #app_logo{
        width: 150px;
        height: 100px;
        background-color: #132227;
        font-family: 'Merienda', cursive;
        color: #F1E0D6;
        text-align: left;
    }
} */
</style>