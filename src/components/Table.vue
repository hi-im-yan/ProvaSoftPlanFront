<template>
  <div>
      <v-row>
        <v-col cols="3">
          <v-text-field
              :label="tableTitle || ''"
              disabled
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="8">
          <v-text-field
              v-model="pesquisar"
              append-icon="mdi-magnify"
              label="Pesquisar"
          ></v-text-field>
        </v-col>
      </v-row>


    <v-data-table
        :headers="tableHeaders"
        :items="tableItems"
        :search="pesquisar"
    ></v-data-table>

  </div>
</template>

<script>
export default {
  name: "Table",

  props: {
    'tableHeaders': Array,
    'tableItems': Array,
    'tableTitle': String,
  },

  data () {
    return {
      pesquisar: '',
    }
  }
}
</script>

<style scoped>

</style>
