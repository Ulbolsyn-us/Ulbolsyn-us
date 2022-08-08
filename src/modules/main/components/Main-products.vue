<template>
    <div>
        <div class="seasons-content">
              <h2>Shop The Collections</h2>
                  <div class="seasons-content__box">
                      <router-link :to="{path: '/products-card/' +item.id,params: {item}}" class="seasons-content__cards" v-for="(item, index) of getProducts" :key="index">
                      <img :src="item.image">
                      <h3>{{ item.title }}  </h3>
                      <p>{{ item.description }}</p>
                      </router-link>
                  </div>
                  <button v-show="limit < getProducts.length + 3" @click="loadMore" class="loadmore">View more</button>
          </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            limit: 6,
            
        }
    },
    computed: {
        getProducts() {
            return this.$store.getters.getProducts
        }
    },
    created() {
        this.$store.dispatch('fetchProducts', this.limit)
    },
    methods: {
        loadMore() {
            this.limit += 3
            this.$store.dispatch('fetchProducts', this.limit)
        }
    }
}
</script>

<style>
.seasons-content {
        padding-top: 64px;
        padding-bottom: 134px;
        padding-left: 102px;
}

.seasons-content__box img {
        width: 100%;
        height: 200px;
        object-fit: contain;
}
.seasons-content__box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 24px;
}
.seasons-content__cards {
        padding-top: 24px;
        width: 350px;
        height: 457px;
        overflow: hidden;
        margin-bottom: 30px;
        box-shadow: 0px 0px 10px 0px gray;
        padding: 20px
}
.seasons-content h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #000;
}
.seasons-content__box h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 29px;
        letter-spacing: 0.5px;
        color: #212A2F;
}
.seasons-content__box p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #212A2F;
        width: 357px;
}
.seasons-content button {
        width: 200px;
        display: block;
        height: 48px;
        align-items: center;
        text-align: center;
        margin: 24px 24px 60px 0;
        border: none;
        background: #000;
        border-radius: 2px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #fff;
}
</style>