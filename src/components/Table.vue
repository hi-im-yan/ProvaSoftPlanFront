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
      <v-col :cols="filterSize">
        <v-text-field
            v-model="pesquisar"
            append-icon="mdi-magnify"
            label="Pesquisar"
        ></v-text-field>

      </v-col>
      <v-col cols="1" v-if="isCrud || false">
        <v-btn
            color="success"
            fab
            dark
        >
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-col>
    </v-row>


    <v-data-table
        :headers="tableHeaders"
        :items="tableItems"
        :search="pesquisar"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{row.item.nome}}</td>
          <td>{{row.item.data_nascimento}}</td>
          <td>
            <v-btn class="mx-2" fab dark small color="pink">
              <v-icon dark>mdi-heart</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>

      <template v-slot:item.actions="{  }">
        <v-icon
            small
            class="mr-2"
        >
          mdi-pencil
        </v-icon>
        <v-icon
            small
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog
        v-model="dialog"
        width="500"
        v-if="isCrud"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <Form></Form>
    </v-dialog>

  </div>
</template>

<script>
export default {
  name: "Table",

  props: {
    'tableHeaders': Array,
    'tableItems': Array,
    'tableTitle': String,
    'isCrud': Boolean
  },

  mounted() {

    this.filterSize = this.isCrud ? 7 : 8;
  },

  data() {
    return {
      pesquisar: '',
      filterSize: 0,
      dialog:false
    }
  }
}
</script>

<style scoped>

</style>
