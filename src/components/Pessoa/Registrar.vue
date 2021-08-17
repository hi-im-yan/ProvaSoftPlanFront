<template>
  <div class="align-center">
    <v-card elevation="4" max-width="1000px">
      <v-card-title>Registrar Pessoa</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="formularioValido">
          <v-row>
            <v-col cols="4"> <v-text-field label="Nome" v-model="nome" required :rules="nomeRules"></v-text-field> </v-col>
            <v-col cols="4"> <v-text-field label="E-mail" v-model="email" required :rules="emailRules"></v-text-field> </v-col>
            <v-col cols="4"> <v-text-field label="CPF" v-model="cpf" required :rules="cpfRules"></v-text-field> </v-col>
            <v-col cols="3">
              <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                  required
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="computedDateFormatted"
                      label="Data Nascimento"
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    no-title
                    @change="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="3"> <v-text-field label="Nacionalidade" v-model="nacionalidade" required :rules="nacionalidadeRules"></v-text-field> </v-col>
            <v-col cols="3"> <v-text-field label="Naturalidade" v-model="naturalidade" required :rules="naturalidadeRules"></v-text-field> </v-col>
            <v-col cols="3"> <v-select label="Genero" :items="['Masculino', 'Feminino']" v-model="genero" required :rules="generoRules"></v-select> </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
        <v-btn
            :disabled="!formularioValido"
            class="mt-1 mb-1"
            color="deep-purple lighten-2"
            outlined
            @click="confirmar"
        >
          Confirmar
        </v-btn>
      <v-btn
          class="mt-1 mb-1 ml-5"
          color="deep-purple lighten-2"
          outlined
          @click="resetForm"
      >
        Limpar
      </v-btn>
    </v-card>
  </div>

</template>

<script>
import PessoaScript from "@/components/Pessoa/Pessoa";
const script = new PessoaScript()
export default {
  name: "Registrar",

  data: () => ({
    menu2: "",
    date: "",
    nome: "",
    email: "",
    cpf: "",
    nacionalidade: "",
    naturalidade: "",
    genero: "",

    formularioValido: false,

    nomeRules: [v => !!v || 'Nome é obrigatório'],
    cpfRules: [v => !!v || 'CPF é obrigatório'],
    nacionalidadeRules: [v => !!v || 'Nacionalidade é obrigatório'],
    naturalidadeRules: [v => !!v || 'Naturalidade é obrigatório'],
    generoRules: [v => !!v || 'Gênero é obrigatório'],
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v =>   /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
    ]
  }),
  computed: {
    computedDateFormatted () {
      return script.formatDate(this.date)
    },
  },

  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },
    confirmar(){
      let pessoa = {
        'nome': this.nome,
        'email': this.email,
        'cpf': this.cpf,
        'data_nascimento': this.computedDateFormatted,
        'nacionalidade': this.nacionalidade,
        'naturalidade': this.naturalidade,
        'sexo': this.genero
      }
      script.registrarPessoa(pessoa)
      this.$refs.form.reset()
    },

    resetForm(){
      this.$refs.form.reset()
    }
  },
}
</script>

<style scoped>
  .align-center{
    text-align: center;
  }
</style>
