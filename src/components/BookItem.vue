<template>
<div>
    <p>
        <router-link :to="readIt">
            {{this.book.name}}
        </router-link>
    </p>
</div>
</template>

<script>
export default {
    name: 'BookItem',
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    computed: {
        readIt() {
            return `/Books/${this.book.id}`
        }
    },
}
</script>
