<template>
<div>
    <button @click="before"> << </button>
    <button @click="start"> Start </button>
    <button > Stop </button>
    <button @click="next"> >> </button>
    <h1>
        {{get}}
    </h1>

</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions,
} from 'vuex'
export default {
    name: 'FastWriter',
    data() {
        return {
            bookData: {},
            list: [],
            index: 0,
            word: "",

        }
    },
    created() {
        fetch(`https://my-json-server.typicode.com/batineryilmaz/ReadFaster/books/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.bookData = data
                this.list = data.text.split(' ')
            })
    },
    methods: {
        ...mapActions([
            'update'
        ]),

        start() {
            setTimeout(
                () => {
                    this.list.forEach(element => {
                        this.next()
                    })
                }, 1000)
        },
        next() {
            if (this.index < this.list.length)
                this.update(this.list[this.index++])
        },
        before() {
            if (this.index > 0)
                this.update(this.list[--this.index])

        }

    },
    computed: {
        ...mapState([
            this.word
        ]),
        ...mapGetters([
            'get'
        ]),

    }
}
</script>

<style scoped>
h1 {
    /*  margin-top: 3em;*/
}
</style>
