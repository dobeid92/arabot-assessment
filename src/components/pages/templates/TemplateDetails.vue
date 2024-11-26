<template>
  <div>
    <div class="mb-4 font-weight-bold">Template Details</div>
    <div class="mb-4">Define your template name and language</div>
    <v-card class="pa-5 mb-8">
      Template Name 
      <arabot-input-field v-model="template.name" label="Template Name" ></arabot-input-field>
      Language 
      <v-select
        :items="$store.state.languages"
        v-model="template.language"
        outlined
        dense
        label="Select Language"
      ></v-select>
    </v-card>
  </div>
</template>


<script lang="js">
import { mapFields } from "vuex-map-fields";
export default{
  methods: {
  
  },
  computed:{
  ...mapFields({
    languages: "languages",
    template: "template",
  }),
}
}
</script>

