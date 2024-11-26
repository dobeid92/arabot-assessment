<template>
  <div>
    <div class="mb-4 font-weight-bold">Body</div>
    <div class="mb-4">
      Enter the text of your message in the language you’ve selected
    </div>
    <v-card class="pa-5 mb-8">
      <div>
        <v-textarea
          rows="4"
          outlined
          dense
          placeholder="Template message"
          v-model="template.body"
        />
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
