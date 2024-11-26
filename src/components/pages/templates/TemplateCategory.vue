<template>
  <div>
    <div class="mb-4 font-weight-bold">Category</div>
    <div class="mb-4">Choose your message template</div>
    <v-card class="pa-5 mb-8">
      <v-card
        class="pa-5 d-flex align-center -mx-2 cursor-pointer"
        clickable
        @click.native="selectCategory(category)"
        :color="template.category == category ? '#E4E5EF' : '#EDF2F7'"
        v-for="(category, index) in categories"
        :key="index"
        :class="index < categories.length - 1 ? 'mb-4' : ''"
      >
        <div class="pa-4 rounded-circle white mx-2">
          <v-icon>{{ category.icon }}</v-icon>
        </div>

        <div class="d-flex flex-column mx-2">
          <div>{{ category.name }}</div>
          <div>{{ category.description }}</div>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="js">
import { mapFields } from "vuex-map-fields";
export default{
  methods: {
    selectCategory(category) {
     this.template.category = category;
    }
  },
  computed:{
  ...mapFields({
    template: "template",
    categories: "categories",
  }),
}
}
</script>
