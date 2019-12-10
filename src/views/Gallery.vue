<template>
    <div class="gallery">
        <div class="createBar" v-if="isLoggedIn">
            <button class="btn-create" @click="toCreate">CREATE BOOK</button>
        </div>
        <br>
        <div class="gallery__body">
            <BookCard
                v-for="book in Books"
                :key="book._id"
                :book="book"
                @reload="fetchBooks"/>
        </div>
    </div>
</template>

<script>
import BookCard from '@/components/GalleryCard.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Gallery',
    components: {
        BookCard
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    data (){
        return {
            Books: []
        }
    },
    mounted() {
        this.fetchBooks()
    },
    methods: {
        toCreate() {
            this.$router.push({ name: 'CreateBook' })
        },
        fetchBooks() {
            this.$http.get('https://gerald-book-catalog.herokuapp.com/bookshelf/all')
            .then(response => {
                this.Books = response.data.data
            })
            .catch(error => {
                console.log(error.response)
                // return next(error)
            })
        }
    }
}
</script>
<style scoped>
.gallery {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
}
.gallery__body {
    margin: auto;
    text-align: center;
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(4, 1fr);
}
.btn-create {
    margin-top: 1.5rem;
    border: none;
    padding: 15px 56px;
    background-color: #132227;
    color: #F1E0D6;
    border-radius: 15px;
    transition-duration: 0.1s;
}
.btn-create:hover{
    background-color: #b3babb;
    color: #0f1011;
    font-weight: bold;
    cursor: pointer;
}
</style>