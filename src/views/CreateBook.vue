<template>
    <div class="signup">
        <h2>NEW BOOK</h2>
        <form action="" class="book__form" @submit.prevent="createBook">
            <div class="form__item">
                <label for="name">Title: </label>
                <input type="name" name="name" id="" v-model="addBook.title">
            </div>
            <div class="form__item">
                <label for="name">Author: </label>
                <input type="name" name="name" id="" v-model="addBook.author">
            </div>
            <div class="form__item">
                <label for="imageUrl">Image: </label>
                <input type="text" name="imageUrl" id="" v-model="addBook.image">
            </div>
            <div class="form__item">
                <label for="published">Published: </label>
                <input type="Number" name="published" id="" v-model="addBook.published">
            </div>
            <div class="form__item">
                <label for="description">Description: </label>
                <textarea type="text" name="description" id="" v-model="addBook.description"></textarea>
            </div>
            <button type="submit" class="btn-submit">SUBMIT</button>
        </form>
    </div>
</template>

<script>
// import { response } from 'express'
export default {
    name: 'CreateBook',
    data() {
        return {
            addBook: {
                title: '',
                author: '',
                image: '',
                published: '',
                description: ''
            }
        }
    },
    methods: {
        createBook() {
            console.log(this.addBook);
            this.$http.post('https://gerald-book-catalog.herokuapp.com/bookshelf/add', this.addBook)
            .then(response => {
                console.log(response)
                this.addBook = {
                    title: '',
                    author: '',
                    image: '',
                    published: '',
                    description: ''
                }
                console.log('Added');
            })
            .catch(error => {
                alert(error.response.message);
            })
            .finally(() => {
                console.log('Fetching');
                this.$router.push({name: 'Gallery'})
            }) 
        }
    }
}
</script>
<style scoped>
.signup{
  margin-top: 5px;
  text-align: center;
  color: #132227;
}
.book__form h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
}
.book__form{
    margin: auto;
    text-align: center;
    width: 500px;
}
.form__item {
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.form__item input{
  width: 20vw;
  height: 25px;
  background: #FFFFFF;
  border: 0.5px solid #132227;
  box-sizing: border-box;
  border-radius: 5px;
}
.form__item textarea {
    width: 20vw;
    height: 200px;
    background: #FFFFFF;
    border: 0.5px solid #132227;
    box-sizing: border-box;
    border-radius: 5px;
}
.btn-submit {
  margin-top: 2rem;
  border: none;
  padding: 17px 56px;
  background-color: #132227;
  color: #F1E0D6;
  border-radius: 15px;
}
.btn-submit:hover{
  cursor: pointer;
}
</style>