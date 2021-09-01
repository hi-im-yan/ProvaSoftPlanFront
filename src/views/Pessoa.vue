<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <Table :tableHeaders="tableHeaders" :tableItems="tableItems" :tableTitle="tableTitle" :isCrud="true"></Table>
        </v-col>
      </v-row>
    </v-container>

    <v-card elevation="4" max-width="1000px">
      <v-card-text>
        <Form :formFields="formFields" formTitle="Registrar Pessoa" @confirmar="registrarPessoa($event)"></Form>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
  // import Registrar from "@/components/Pessoa/Registrar";
  import Form from "@/components/Form";
  import Table from "@/components/Table";
  import axios from 'axios'
  import CheckAuthentication from "@/utils/CheckAuthentication";
  export default {
    name: "Pessoa",

    components:{
      // Registrar,
      Form,
      Table
    },

    data: () => ({
      formFields: [
        {"type": "text-field", "label": "Nome", "col": 4, "rules": [v => !!v || 'Nome é obrigatório'], "value": "", "required":false},
        {"type": "text-field", "label": "Email", "col": 4, "rules": [v => !!v || 'E-mail é obrigatório', v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'], "value": "", "required":false},
        {"type": "text-field", "label": "CPF", "col": 4, "rules": [v => !!v || 'CPF é obrigatório'], "value": "", "required":false},
        {"type": "date-picker", "label": "Data Nascimento", "col": 3, "rules": [v => !!v || 'Data Nascimento é obrigatório'], "value": "", "required":false},
        {"type": "text-field", "label": "Nacionalidade", "col": 3, "rules": [v => !!v || 'Nacionalidade é obrigatório'], "value": "", "required":false},
        {"type": "text-field", "label": "Naturalidade", "col": 3, "rules": [v => !!v || 'Naturalidade é obrigatório'], "value": "", "required":false},
        {"type": "select", "label": "Gênero", "col": 3, "rules": [v => !!v || 'Gênero é obrigatório'], "items": ["Masculino", "Feminino"], "value": "", "required":false},
      ],
      tableHeaders: [
        {text:"Nome", value: "nome", align: 'start'},
        {text:"Email", value: "email"},
        {text:"CPF", value: "cpf"},
        {text:"Naturalidade", value: "naturalidade"},
        {text:"Nacionalidade", value: "nacionalidade"},
        {text:"Data Nascimento", value: "data_nascimento"},
        {text:"Sexo", value: "sexo"},
      ],
      tableItems: [],
      tableTitle: "Pessoas"
    }),

    created(){
      let auth = new CheckAuthentication();

      auth.check().then(res => {
        if(res === false){
          this.$router.push("/login2")
        }
      })
    },

    async mounted() {
      let response = await axios.get('/pessoa/buscarTodos')
      this.tableItems = response.data
    },

    methods: {
      registrarPessoa(formValues){
        let pessoa = {
          nome: formValues[0].value,
          email: formValues[1].value,
          cpf: formValues[2].value,
          data_nascimento: formValues[3].value,
          nacionalidade: formValues[4].value,
          naturalidade: formValues[5].value,
          sexo: formValues[6].value,
        }

        axios.post('/pessoa/cadastrar', pessoa)
      }
    }
  }
</script>

<style scoped>

</style>
