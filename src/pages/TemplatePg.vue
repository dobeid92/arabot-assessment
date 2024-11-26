<template>
  <div class="pa-5">
    <div class="">
      <div class="row breadcrumbs">
        <v-breadcrumbs divider=">"></v-breadcrumbs>
      </div>
      <div class="row">
        <div class="col-12 col-md-8">
          <TemplateDetails />
          <TemplateCategory />
          <TemplateHeader />
          <TemplateBody />
          <TemplateFooter />
          <TemplateButtons />
          <div class="row ma-0">
            <v-btn
              class="white--text"
              color="#9B7CB7"
              @click.native="$store.dispatch('downloadJSON')"
            >
              <v-icon left color="white">mdi-floppy</v-icon>
              Save
            </v-btn>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <TemplatePreview :image="template.header.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import TemplateDetails from '../components/pages/templates/TemplateDetails.vue'
import TemplateCategory from '../components/pages/templates/TemplateCategory.vue'
import TemplateHeader from '../components/pages/templates/TemplateHeader.vue'
import TemplateBody from '../components/pages/templates/TemplateBody.vue'
import TemplateFooter from '../components/pages/templates/TemplateFooter.vue'
import TemplateButtons from '../components/pages/templates/TemplateButtons.vue'
import TemplatePreview from '../components/pages/templates/TemplatePreview.vue'
import { mapFields } from 'vuex-map-fields';
export default {
  components: { TemplateDetails,
TemplateCategory,
TemplateHeader,
TemplateBody,
TemplateFooter,
TemplateButtons,
TemplatePreview
},
data: () => ({
  items: [
        {
          text: 'Templates',
          disabled: false,
          href: 'templates',
        },
        {
          text: 'New Template Message',
          disabled: false,
        },
      ],
  }),
  computed:{
    ...mapFields({
      template: "template",
    }),
  }
};
</script>
