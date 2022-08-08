import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: "",
        basket: []
    },
    mutations: {
        SET_PRODUCTS(state, value) {
            state.products = value 
        },
        SET_BASKET(state, value) {
            state.basket = value
        }
    },
    actions: {
        fetchProducts({commit}, limit) {
            fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res=>res.json())
            .then(json=> {
                commit('SET_PRODUCTS', json)
            })
        },
        addToBasket({commit}, value) {
            commit('SET_BASKET', value)
        }
    },
    getters: {
        getProducts: state => state.products,
        getBasket: state => state.basket
    }
})