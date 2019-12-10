<template>
  <div class="home">
    <h2>Welcome to Reader's Land</h2>
    <div class="img__wrapper">
      <img src="@/assets/Books.jpeg" alt="Books">
    </div>
    <button class="btn-enter" @click="enterShelf">Bookshelf</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
   
  },
  methods: {
    enterShelf(){
      this.$router.push({name: 'Gallery'})
    }
  }
}
</script>
<style scoped>
.home {
  text-align: center;
  color: #132227;
}
.btn-enter {
  margin-top: 1rem;
  border: none;
  padding: 12px 40px;
  background-color: #132227;
  color: #F1E0D6;
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Merienda', 'Roboto', sans-serif;
  transition-duration: 0.1s;
}
.btn-enter:hover{
  cursor: pointer;
  background-color: #b3babb;
  color: #0f1011;
  font-weight: bold;
}
</style>
