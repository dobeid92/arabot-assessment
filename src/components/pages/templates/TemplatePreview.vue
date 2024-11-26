<template>
  <v-container class="d-flex justify-center" fluid>
    <v-card class="whatsapp-preview" elevation="2">
      <v-toolbar dense flat color="#00A884" dark> </v-toolbar>

      <v-container
        class="chat-body py-3 px-2"
        :style="`direction: ${
          !template.language || template.language == 'en_US' ? 'ltr' : 'rtl'
        }`"
      >
        <div class="message-bubble received">
          <div
            class="font-weight-bold text-subtitle-1 d-flex flex-column mb-2"
            v-if="template && template.header && template.header.text"
          >
            {{ template.header.text }}
          </div>
          <img
            :src="previewImage"
            width="150px"
            class="font-weight-bold"
            v-if="template && template.header && template.header.image.length>0"
          />
          <div class="mb-2 text-subtitle-2" v-if="template && template.body">
            {{ template.body }}
          </div>

          <div class="timestamp mb-2 text-caption	" style="color: #666666">
            <div class="d-flex justify-space-between items-center">
              <span v-if="template.footer"> {{ template.footer }}</span>
              <v-spacer v-else />
              <span class="">{{ getCurrentTime() }}</span>
            </div>
          </div>
          <div
            class="d-flex flex-column justify-center align-center"
            style="border-top: 1px solid #E2E8F0;"
            v-if="template.buttons && template.buttons.addedButtons.length > 0"
          >
            <div
              v-for="(button, index) in template.buttons.addedButtons"
              :key="index"
              v-show="button.text"
              :style="`${index != 0 ? 'border-top: 1px solid #E2E8F0;' : ''} width: 100%`"
              class="d-flex justify-center align-center"
            >
              <v-btn
                color="primary"
                plain
                @click.native="handleButtonClick(button)"
              >
                <v-icon left>{{ getButtonIcon(button.type) }}</v-icon>
                {{ button.text }}
              </v-btn>
            </div>
          </div>
        </div>
      </v-container>

      <v-footer class="chat-footer" padless>
        <v-container fluid class="d-flex align-center px-3">
          <v-text-field
            dense
            hide-details
            disabled
            outlined
            class="chat-input"
          ></v-text-field>
        </v-container>
      </v-footer>
    </v-card>
  </v-container>
</template>

<script lang="js">
import { mapFields } from "vuex-map-fields";
export default{
  props:{
    image: Array || null,
  },
  mounted(){
    console.log('this.template :>> ', this.template);
  },
  methods: {
    getCurrentTime(){
      let now = new Date();
      let hours = String(now.getHours()).padStart(2, '0');
      let minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    handleButtonClick(button){
      if(button.type === 'Visit Website'){
        window.open(button.url, '_blank');
      }else{
        window.location.href = `tel:${button.phoneNumber}`;
      }
    },
    getButtonIcon(type){
      if(type === 'Visit Website'){
        return 'mdi-open-in-new'
      }else{
        return 'mdi-phone'
      }
    },
  },
  computed:{
    ...mapFields({
      template: "template",
    }),
    previewImage() {
      let file= this.image;
      console.log('file :>> ', file);
      if (file && file.length > 0) {
        return URL.createObjectURL(file[0]);
      }else return null
    },
    buttons(){
      console.log(' this.template.buttons.addedButtons :>> ',  this.template.buttons.addedButtons);
      return this.template.buttons.addedButtons;
    },
}
}
</script>

<style scoped>
.whatsapp-preview {
  max-width: 400px;
  background: #eae6d8;
  border-radius: 12px;
  overflow: hidden;
}

.chat-body {
  background-color: #f4f3ee;
  flex-grow: 1;
  overflow-y: auto;
  height: 400px;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}

.message-bubble {
  max-width: 90%;
  width: 90%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  display: inline-block;
  position: relative;
  clear: both;
}

.message-bubble span.timestamp {
  font-size: 10px;
  color: gray;
  float: right;
  margin-left: 8px;
}

.message-bubble.received {
  background-color: #ffffff;
  color: #000;
  border-radius: 8px 8px 8px 0;
  margin-left: 10px;
}

.chat-footer {
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
}

.chat-input {
  flex-grow: 1;
}
</style>
