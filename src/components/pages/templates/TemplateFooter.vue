<template>
  <div>
    <div class="mb-4 font-weight-bold">Footer</div>
    <div class="mb-4">
      Use this section for optional details like disclaimers, contact info, or
      additional context.
    </div>
    <v-card class="pa-5 mb-8">
      <div>
        <!-- <input-field v-model="template.footer" placeholder="Enter Text"/> -->
        <arabot-input-field v-model="template.footer" label="Enter Text"/>
      </div>
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
    template: "template",
  }),
}
}
</script>
