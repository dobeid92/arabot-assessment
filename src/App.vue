<template>
  <v-app class="app">
    <v-app-bar app>
      <div class="d-flex align-center font-weight-bold text-h6">
        <v-icon left>mdi-plus</v-icon>
        New Template Message
      </div>

      <v-spacer></v-spacer>

      <v-btn class="white--text" color="#9B7CB7" @click.native="$store.dispatch('downloadJSON')">
        <v-icon left color="white">mdi-floppy</v-icon>
        Save
      </v-btn>
    </v-app-bar>

    <v-main>
      <TemplatePg />
    </v-main>
  </v-app>
</template>

<script>
import TemplatePg from './pages/TemplatePg.vue';

export default {
  name: 'App',

  components: {
    TemplatePg,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.app {
  background-color: #f8f9fa;
}
</style>
