import Vue from 'vue';
import Vuex from 'vuex';
import { createHelpers } from 'vuex-map-fields';

Vue.use(Vuex);

const { getField, updateField } = createHelpers({
  getterType: 'getField',
  mutationType: 'updateField',
});

export default new Vuex.Store({
  state: {
    languages: [
      { value: 'en_US', text: 'English' },
      { value: 'ar_SA', text: 'Arabic' },
    ],
    categories: [
      {
        name: 'Marketing',
        description:
          'Send promotions and information about your products, services or business.',
        icon: 'mdi-bullhorn-outline',
      },
      {
        name: 'Utility',
        description: 'Send messages about an existing order or account.',
        icon: 'mdi-bell-outline',
      },
    ],
    headers: ['none', 'text', 'image'],
    buttonsOptions: ['none', 'call to actions'],
    buttonTypes: ['Visit Website', 'Phone Number'],
    template: {
      name: '',
      language: '',
      category: '',
      header: {
        type: 'none',
        text: '',
        image: [],
      },
      footer: '',
      body: '',
      buttons: {
        type: 'none',
        addedButtons: [],
      },
    },
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  actions: {
    downloadJSON() {
      let data = this.state.template;
      const jsonStr = JSON.stringify(data, null, 2);

      const blob = new Blob([jsonStr], { type: 'application/json' });
      const a = document.createElement('a');
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = 'template.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
  },
  modules: {},
});
