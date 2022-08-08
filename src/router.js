import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './modules/about/About-page.vue'
import Basket from './modules/basket/Basket-page.vue'
import Contacts from './modules/contacts/Contacts-page.vue'
import Policy from './modules/policy/Policy-page.vue'
import Main from './modules/main/Main-page.vue'
import Products from './modules/products/Products-page.vue'
import ProductsCard from './modules/main/components/Products-card.vue'
import CreatPost from './modules/posts/Creat-post.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/about',
            name: 'about',
            component: About 
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket 
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts 
        },
        {
            path: '/policy',
            name: 'policy',
            component: Policy 
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        }, 
        {
            path: '/products-card',
            name: 'products-card',
            component: ProductsCard
        },
        {
            path: '/products-card/:id',
            name: 'products-card',
            component: ProductsCard
        },
        {
            path: '/creat-post',
            name: 'creat-post',
            component: CreatPost
        }
        
    ]
})