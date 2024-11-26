<template>
  <div>
    <div class="mb-4 font-weight-bold">Buttons</div>
    <div class="mb-4">
      Create buttons that let your customers respond to your message or take an
      action.
    </div>
    <v-card class="pa-5 mb-8">
      <v-btn-toggle
        style="background-color: #edf2f7"
        v-model="template.buttons.type"
        class="px-4 mb-4"
        group
      >
        <v-btn
          class="px-4"
          v-for="(option, index) in buttonsOptions"
          :class="template.buttons.type == option ? 'white' : ''"
          :key="index"
          :value="option"
        >
          {{ option }}
        </v-btn>
      </v-btn-toggle>
      <div v-if="template.buttons.type == 'call to actions'">
        <v-card
          class="pa-3 mb-4"
          v-for="(button, index) in template.buttons.addedButtons"
          :key="index"
        >
          <v-row class="d-flex align-baseline">
            <v-col cols="12" md="3">
              <v-select
                v-model="button.type"
                outlined
                dense
                :items="buttonTypes"
                label="Button Type"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="3">
              <arabot-input-field
                v-model="button.text"
                label="Button Text"
                required
              ></arabot-input-field>
            </v-col>

            <v-col cols="12" md="4" v-if="button.type === 'Visit Website'">
              <arabot-input-field
                v-model="button.url"
                label="Website URL"
                required
              ></arabot-input-field>
            </v-col>

            <v-col cols="12" md="4" v-if="button.type === 'Phone Number'">
              <v-row>
                <vue-tel-input
                  v-model="button.phoneNumber"
                  :placeholder="'Enter phone number'"
                  :default-country="'jo'"
                ></vue-tel-input>
              </v-row>
            </v-col>

            <v-col cols="12" md="1" class="d-flex align-center">
              <v-btn icon @click="removeButtonFromTemplate(index)">
                <v-icon color="#797979">mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-btn @click.native="addNewButton" text>
          <v-icon>mdi-plus</v-icon>Add new Button</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="js">
import { mapFields } from "vuex-map-fields";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
  export default {
    components:{
      VueTelInput
    },
    mounted(){
      console.log('this.buttonsOptions :>> ', this.buttonsOptions);
    },
    methods: {
    addNewButton: function(){
      this.template.buttons.addedButtons.push({
        type: '',
        text: '',
        phoneNumber: '',
        url: '',
      });
    },
    removeButtonFromTemplate(index) {
      this.template.buttons.splice(index, 1);
    },
  },
computed:{
  ...mapFields({
    template: "template",
    buttonsOptions: "buttonsOptions",
    buttonTypes: "buttonTypes",
    countryCodes: "countryCodes",
  }),
}
}
</script>
