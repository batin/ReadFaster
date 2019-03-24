<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {

        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    font-size: 2.5em;

}

body {
    background-color: #35d2e2;
}

h1,
h2,
h4 {
    font-weight: bolder;
    color: aliceblue;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

button {
    border: 4px solid sandybrown;
    border-radius: 10px;
    padding: 15px 15px;
    font-size: 1.5em;
    color: aliceblue;
    margin-top: -25px;
    background-color: #35d2e2
}
</style>
