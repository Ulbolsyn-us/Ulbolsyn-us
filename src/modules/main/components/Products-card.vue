<template>
  <div>
    <div class="card-product">
        <div class="card-img">
          <img :src="data.image" alt="">
        </div>
        <div class="card-content">
          <h1>{{ data.title }}</h1>
          <h2>{{ data.category }}</h2>
          <p>{{ data.description }}</p>
          <p>{{ data.price }}</p>
          <button @click="addBasket">Добавить в корзину</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      data: ''
    }
  },
  created() {
    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then(json => {
                this.data = json
            })
  },
  methods: {
    addBasket() {
      const data = this.$store.state.basket 

      data.push(this.data)

      this.$store.dispatch('addToBasket', data)
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