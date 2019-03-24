<template>
<div>
    <h1>Read Faster</h1>
    <h4>Try to get faster...</h4>
    <h3 v-for="book in books">
        <BookItem :book=book></BookItem>
    </h3>
</div>
</template>

<script>
import BookItem from './BookItem.vue'
export default {
    data() {
        return {
            books: []
        }
    },
    created() {
        fetch('http://localhost:3000/Books')
            .then(res => {
                return res.json()
            })
            .then(books => {
                this.books = books
            })
    },
    components: {
        BookItem
    }
}
</script>

<style>
h1,
a {
    text-decoration: none;
    cursor: pointer;
}

textarea {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 30%;
    height: 10%;
    font-size: 1em;
    margin-top: 0%;
}
</style>
