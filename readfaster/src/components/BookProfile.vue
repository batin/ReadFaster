<template>
<div>
    <a @click="homeLink">Back to Home</a>

    <ul>
        <li>
            {{bookData.author}}
            {{bookData.text}}
        </li>
    </ul>
    <router-link :to="readLink">
        <h1> READ </h1>
    </router-link>
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
        fetch(`http://localhost:8080/books/${this.$route.params.id}`)
                .then(res => res.json() )
                .then(data => { this.bookData = data })
                
    },
}
</script>

<style>

</style>
