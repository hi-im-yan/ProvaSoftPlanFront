<template>
  <div class="align-center">
    <v-card elevation="4" max-width="1000px">
      <v-card-title>{{ formTitle }}</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <v-form ref="form" v-model="formularioValido">
          <v-row>
              <v-col v-for="field in formFields" :key="field.label" :cols="field.col">
                <v-text-field v-if="field.type === 'text-field'" :label="field.label" :rules="field.rules" v-model="field.value" :required="field.required || false"></v-text-field>
                <v-select v-else-if="field.type === 'select'" :label="field.label" :items="field.items" :rules="field.rules" v-model="field.value" :required="field.required || false"></v-select>
                <v-menu
                    v-model="menu"
                    v-else-if="field.type === 'date-picker'"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"

                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="field.value"
                        :label="field.label"
                        v-bind="attrs"
                        v-on="on"
                        :required="field.required || false"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="dataPicker"
                      no-title
                      @change="field.value = formatDate(dataPicker); menu = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
          </v-row>
        </v-form>
      </v-card-text>
<!--      {{formFields}}-->
      <v-divider class="mx-4"></v-divider>
      <v-btn class="mt-2 mb-2" @click="confirmar" :disabled="!formularioValido" color="purple" outlined>Confirmar</v-btn>
      <v-btn class="mt-2 mb-2 ml-5" @click="resetForm" color="red" outlined >Limpar</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    'formFields': Array,
    'formTitle': String
  },

  data: () => ({
    dataPicker: "",
    menu: false,
    formularioValido: false
  }),

  methods: {
    formatDate(date){
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    },
    resetForm(){
      this.$refs.form.reset();
    },
    confirmar(){
      this.$emit('confirmar', this.formFields);
      this.$refs.form.reset();
    }
  }
}
</script>

<style scoped>
.align-center{
  text-align: center;
}
</style>
