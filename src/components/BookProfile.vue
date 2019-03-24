<template>
<div>
    <a @click="homeLink">Back to Home</a>
    <router-link :to="readLink">
        <h1> READ </h1>
    </router-link>
    <ul>
        <li>
            <h1> {{bookData.author}} </h1>
            {{bookData.text}}
        </li>
    </ul>
    
</div>
</template>

<script>
export default {
    name: 'BookProfile',
    data() {
        return {
            bookData: {}
        }
    },

    computed: {
        readLink() {
            return `/fast-writer/${this.$route.params.id}`
        }
    },
    methods: {
        homeLink() {
            this.$router.push({
                name: 'Home'
            })
        }
    },
    created() {
        fetch(`https://my-json-server.typicode.com/batineryilmaz/ReadFaster/books/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.bookData = data
            })
    },
}
</script>

<style>

</style>
