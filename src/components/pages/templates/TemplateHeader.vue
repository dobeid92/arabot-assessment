<template>
  <div>
    <div class="mb-4 font-weight-bold">Header</div>
    <div class="mb-4">
      Highlight your brand here, use images or videos, to stand out
    </div>
    <v-card class="pa-5 mb-8">
      <v-btn-toggle
        style="background-color: #edf2f7"
        v-model="template.header.type"
        class="px-4 mb-4"
        group
      >
        <v-btn
          class="px-4"
          v-for="(type, index) in headers"
          :class="template.header.type == type ? 'white' : ''"
          :key="index"
          :value="type"
        >
          {{ type }}
        </v-btn>
      </v-btn-toggle>
      <div v-if="template.header.type == 'text'">
        Text *
        <arabot-input-field outlined v-model="template.header.text" />
      </div>
      <div v-if="template.header.type == 'image'">
        <v-container>
          <v-card
            class="pa-5 drag-drop-box"
            outlined
            :class="{ dragging: isDragging }"
            @dragover.prevent="onDragOver"
            @dragleave="onDragLeave"
            @drop.prevent="onDrop"
            v-if="!imagePreview"
          >
            <v-card-text class="text-center">
              <v-icon size="48">mdi-cloud-upload-outline</v-icon>
              <p>
                Drag and drop file here to upload or
                <span class="purple--text text--underline cursor-pointer" @click="browseFiles">
                  Browse
                </span>
              </p>
              <small class="text-grey">Allowed types: .jpeg, .jpg, .png</small>
              <br/>
              <br/>
              <v-btn outlined color="purple" @click="browseFiles"
                >Select File</v-btn
              >
            </v-card-text>
            <input
              type="file"
              accept="image/jpeg,image/png"
              ref="fileInput"
              @change="onFileSelected"
              style="display: none"
            />
          </v-card>
          <img :src="imagePreview" alt="Uploaded Preview" style="max-width: 300px; margin-top: 10px;" v-else/>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script lang="js">
import { mapFields } from "vuex-map-fields";
export default{
  data() {
    return {
      isDragging: false,
      imagePreview: null
    };
  },
  methods: {
    onDragOver() {
      this.isDragging = true;
    },
    onDragLeave() {
      this.isDragging = false;
    },
    onDrop(event) {
      this.isDragging = false;
      const files = event.dataTransfer.files;
      this.handleFiles(files);
    },
    onFileSelected(event) {
      const files = event.target.files;
      this.handleFiles(files);
    },
    browseFiles() {
      this.$refs.fileInput.click();
    },
    handleFiles(files) {
      const validFiles = Array.from(files).filter((file) =>
        ["image/jpeg", "image/png"].includes(file.type)
      );
      if (validFiles.length > 0) {
        this.template.header.image = validFiles;
        console.log('this.template :>> ', this.template);
        this.previewImage(validFiles)
      } else {
        console.log("error", "Only .jpeg, .jpg, and .png files are allowed.");
      }
    },
    previewImage(file) {
      console.log('file :>> ', file);
      if (file && file.length > 0) {
        this.imagePreview = URL.createObjectURL(file[0]); // Generate a URL for the uploaded file
      }
    },
  },
  computed:{
  ...mapFields({
    headers: "headers",
    template: "template",
  }),
}
}
</script>

<style scoped>
.drag-drop-box {
  border: 2px dashed #ccc;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.drag-drop-box.dragging {
  background-color: #f0f9ff;
  border-color: #6a0dad;
}

.text-center {
  text-align: center;
}

.text-grey {
  color: #999;
}
</style>
