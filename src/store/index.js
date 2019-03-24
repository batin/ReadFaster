import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    word: '',
} 
const getters = {
    get(state){
        return `${state.word}`
    }
} 
const mutations = {
    set(state,word){
        state.word = word
    }
} 
const actions = {
    update({ commit }, word){
        commit('set',word)
    }  
} 

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store