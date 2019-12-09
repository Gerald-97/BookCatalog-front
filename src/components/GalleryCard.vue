<template>
    <div class="book-card">
        <div class="book-card__item book__img" @click="viewBook">
            <img :src="book.image" :alt="book.title" class="book__img"/>
        </div>
        <div class="book__card__bottom">
            <div class="book-card__item book__titles" @click="viewBook">
                <h4>{{ book.title }}</h4>
                <p><i>{{ book.author }}</i></p>
                <p>{{ book.published }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        book: Object
    },
    methods: {
        viewBook() {
            this.$router.push({name: 'ViewBook', params: { id: this.book._id}})
        }
    }
}
</script>

<style scoped>
.book-card {
    width: 250px;
    min-height: max-content;
    border: 1px solid #777;
    display: block;
    border-radius: 5px;
    margin: 15px;
    -webkit-box-shadow: 0px 0px 15px 6px #132227; 
    box-shadow: 0px 0px 10px 2px #132227;
}
.book-card:hover {
    -webkit-box-shadow: 0px 0px 13px 5px #132227; 
    box-shadow: 0px 0px 13px 5px #132227;
}
.book__img {
    width: 100%;
    height: 13rem;
}
.book__titles {
    padding-left: 15px;
    text-align: left;
}
.book__titles h4 {
    font-size: 18px;
    font-weight: 280;
    margin: 0;
    margin-top: 5px;
}
.book__titles p {
    font-size: 14px;
    margin: 0;
    margin-top: 5px;
}
.book__card__bottom {
    display: block;
}
</style>