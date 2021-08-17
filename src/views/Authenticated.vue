<template>
  <div>
    {{ validado }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
name: "Authenticated",

  data: () => ({
    'validado': false
  }),

  async created(){
    const response =  await axios.get('/auth/auth')
    console.log(response)

    if(response.data === 'Authorized')
      this.validado = true
    else
      this.validado = false
  }
}
</script>

<style scoped>

</style>
