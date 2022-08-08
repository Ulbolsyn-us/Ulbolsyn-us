<template>
  <div>
    <div class="card-product" v-for="(item, index) of getBasket" :key="index">
        <div class="card-img">
          <img :src="item.image" alt="">
        </div>
        <div class="card-content">
          <h1>{{ item.title }}</h1>
          <h2>{{ item.category }}</h2>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}</p>
          <button @click="deleteProduct(index)">Удалить из корзины</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBasket() {
        return this.$store.getters.getBasket 
    }
  },
  methods: {
      deleteProduct(index) {
          const data = this.getBasket

          data.splice(index, 1)
      }
  }
}
</script>

<style scoped>
* {
  font-size: sans-serif;
}
.card-product {
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 30px -10px gray;
  padding: 30px;
  border-radius: 20px;
}
.card-img {
  width: 300px;
}
.card-img img {
  width: 100%;
  object-fit: cover;
}
.card-content {
  margin-left: 40px;
}
h1, h2, p {
  margin-bottom: 20px;
}
button {
  width: 200px;
  height: 45px;
  box-shadow: 0px 0px 15px -5px gray;
  border-radius: 20px;
  border: none;
  background: transparent;
}
</style>