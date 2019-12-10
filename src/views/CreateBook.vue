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
            <div class="form__item form__item--align_top">
                <label for="description">Description: </label>
                <textarea type="text" name="description" id="" v-model="addBook.description"></textarea>
            </div>
            <button type="submit" class="btn-submit">SUBMIT</button>
        </form>
    </div>
</template>

<script>

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
            })
            .catch(error => {
                alert(error.response.message);
            })
            .finally(() => {
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
    margin-bottom: 2rem;
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
    width: 320px;
    display: flex;
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.form__item--align_top {
    align-items: initial;
}
.form__item input{
    padding: 12px 12px;
    width: 220px;
    height: 25px;
    background: #FFFFFF;
    border: 0.5px solid #132227;
    box-sizing: border-box;
    border-radius: 5px;
}
.form__item textarea {
    padding: 5px 12px;
    width: 220px;
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
    transition-duration: 0.1s;
}
.btn-submit:hover{
    background-color: #b3babb;
    color: #0f1011;
    cursor: pointer;
    font-weight: bold;
}
</style>