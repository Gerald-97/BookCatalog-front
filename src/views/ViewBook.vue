<template>
    <div class="bookView">
        <div class="gallery__bar">
            
        </div>
        <div class="bookView__body">
            <div class="bookView__item ">
                <img :src="book.image" :alt="book.title" class="img_wrapper">
            </div>
            <hr>
            <div class="bookView__item">
                <div class="view__item">
                    <h2>{{ book.title }}</h2>
                    <h4><i>Written by: </i>{{ book.author }} in the year <i>{{ book.published }}</i></h4>
                    <h5>Description:</h5>
                    <p>{{ book.description }}</p>
                </div>
                <button class="btn-get" @click="getBook"> GET THIS BOOK</button>
            </div>
        </div>
        <div class="editArea" v-if="isLoggedIn">
            <button class="btn-edit" @click="editBook">Edit Book</button>
            <button class="btn-delete" @click="delBook">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ViewBook',
    data() {
        return {
            book: {
                title: '',
                author: '',
                image: '',
                description: ''
            }
        }
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    mounted() {
        this.$http.get(`https://gerald-book-catalog.herokuapp.com/bookshelf/${this.$route.params.id}`)
        .then(response => {
            console.log(response)
            this.book = response.data.data
        })
        .catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        editBook() {
            this.$router.push({ name: 'EditBook', params: { id: this.book._id}})
        },
        getBook() {
            window.open(`https://www.amazon.com/s?k=${this.book.title}`, 'blank');
        },
        delBook() {
            this.$http.delete(`https://gerald-book-catalog.herokuapp.com/bookshelf/${this.book._id}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
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
.bookView {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}
.gallery__bar hr {
    width: 60vw;
}
.bookView__body {
    margin: auto;
    margin-bottom: 1rem;
    width: 60%;
    min-width: 800px;
    display: flex;
    min-height: 70vh;
}
.img_wrapper {
    width: auto;
    max-height: 30rem;
    margin-right: 30px;
}
.editArea {
    margin-top: 20px;
    width: 300px;
}
.img_wrapper{
    margin-left: 1rem;
}
.view__item {
    margin-left: 30px;
    text-align: left;
}
.editArea {
    margin-top: 2rem;
    margin: auto;
    display: flex;
    width: 60%;
    min-width: 500px;
    justify-content: space-around;
}
.btn-get {
    margin-top: 1.5rem;
    border: none;
    padding: 10px 40px; 
    background-color: #132227;
    color: #F1E0D6;
    border-radius: 15px;
}
.btn-delete,
.btn-edit {
    border: none;
    background-color: #132227;
    color: #F1E0D6;
    border-radius: 4px;
    padding: 10px 35px;
}
.btn-delete:hover,
.btn-get:hover,
.btn-edit:hover{
    background-color: #b3babb;
    color: #0f1011;
    font-weight: bold;
    cursor: pointer;
}
</style>