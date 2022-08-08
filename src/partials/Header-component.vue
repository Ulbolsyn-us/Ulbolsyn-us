<template>
    <header>
        <router-link to="/" class="logo">
            <img src="../assets/img/logo.png" width="120" alt="">
        </router-link>
        <nav class="menu" :class="{'active': state}">
            <ul>
                <li><router-link :to="{name: 'about'}">About</router-link></li>
                <li><router-link :to="{name: 'products'}">Products</router-link></li>
                <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
                <li><router-link :to="{name: 'policy'}">Policy</router-link></li>
                <li><router-link :to="{name: 'creat-post'}">Creat-post</router-link></li>
                <li><router-link :to="{name: 'basket'}"><img width="33" src="../assets/img/basket.png" alt=""><span>{{ getBasket }}</span></router-link></li>
            </ul>
        </nav>
        <div class="gam" @click="openMobileMenu">
            <span :class="{'gam-span-first': state}"></span>
            <span :class="{'gam-span-second': state}"></span>
            <span :class="{'gam-span-none': state}"></span>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            state: false
        }
    },
    computed: {
        getBasket() {
            return this.$store.getters.getBasket.length
        }
    },
    methods: {
        openMobileMenu() {
            this.state = !this.state
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 27px;
}
.menu {
    max-width: 600px;
    width: 100%;
}
.menu ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
}
.menu a {
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    color: #212A2F;
}
.gam {
    display: none;
}
.gam span {
    width: 34px;
    height: 4px;
    margin-bottom: 4px;
    display: block;
    background: #000;
}
@media (max-width: 768px) {
    .gam {
        display: block;
    }
    .menu {
        width: 250px;
        height: 100vh;
        position: fixed;
        background: #fff;
        box-shadow: 0px 0px 10px 0px gray;
        top: 0;
        left: 0;
        margin-left: -50%;
        transition: 1s;
    }
    .menu ul {
        flex-direction: column;
        padding-top: 30px;
    }
    .menu li {
        margin-bottom: 10px;
    }
}
.active {
    margin-left: 0;
    transition: 1s;
}
.gam-span-first {
    width: 35px;
    height: 4px;
    background: #000;
    display: block;
    transform: rotate(45deg);
    position: absolute;
    transition: 1s;
}
.gam-span-second {
    width: 35px;
    height: 4px;
    background: #000;
    display: block;
    transform: rotate(-45deg);
    position: absolute;
    transition: 1s;
}
.gam-span-none {
    opacity: 0;
    transition: .5s;
}
</style>