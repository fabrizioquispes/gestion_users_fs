<template>
<h1>{{ message }}</h1>  
<button @click="changeMessage">Cambiar Mensaje</button>
</template>

<script>
  export default{
    data() {
      return {
        message: "Hola Mundo"
      }
    },

    methods: {
      changeMessage(){
        this.message = "Hola Vue!"
      }
    },
  }

</script>

<style scoped>
h1{
  color: brown;
}
</style>