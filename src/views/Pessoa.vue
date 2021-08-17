<template>
<!--  <Registrar></Registrar>-->
  <Form :formFields="formFields" formTitle="Registrar Pessoa"></Form>
</template>

<script>
  // import Registrar from "@/components/Pessoa/Registrar";
  import Form from "@/components/Form";
export default {
  name: "Pessoa",

  components:{
    // Registrar,
    Form
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

  })
}
</script>

<style scoped>

</style>
