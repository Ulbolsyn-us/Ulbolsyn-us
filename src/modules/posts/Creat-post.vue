<template>
  <div>
      <p>img</p>
      <input type="text" v-model="img">
      <p>title</p>
      <input type="text" v-model="title">
      <p>description</p>
      <textarea v-model="description" name="" id="" cols="30" rows="10"></textarea>
      <button @click="createPost">Create post</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            img: '',
            title: '',
            description: ''
        }
    },
    methods: {
        createPost() {
            const data = {
                img : this.img,
                title: this.title,
                description: this.description
            }

            fetch("http://localhost:3000/posts",
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                })
                .then(function(res){ console.log(res) })
                .catch(function(res){ console.log(res) })

        }
    }
}
</script>

<style>

</style>