<template>
  <div class="text-center">
    <v-card
        class="mx-auto mt-lg-16"
        elevation="2"
        max-width="50vh"
    >
      <v-card-text>
        <v-form>
          <v-text-field label="login" v-model="formLogin" hint="example@example.com"></v-text-field>
          <v-text-field label="senha" type="password" v-model="formSenha" ></v-text-field>
          <v-input v-if="validado">Usuário ou senha inválidos</v-input>
          <v-btn
              color="success"
              @click="tryLogin()"
          >
            <v-icon left>
              mdi-login
            </v-icon>
            Entrar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import LoginScript from "@/components/Login/Login.js";

  export default {
    name: "Login",

    created(){
      let token = localStorage.getItem('token')
      if(token != null && token !== 'Unauthorized')
        this.$router.push('/authenticated')
    },

    data: () => ({
      formLogin: "",
      formSenha: "",
      validado: false
    }),

    methods: {
      tryLogin(){
        const script = new LoginScript();
        script.tryLogin(this.formLogin, this.formSenha)
        let token = localStorage.getItem('token')
        if(token != 'Unauthorized')
          this.$router.push('/authenticated')
        else
          this.validado = true
      }
    }
  }
</script>

<style scoped>

</style>
