<template>
  <v-text-field
    @input.native="$emit('input', $event.target.value)"
    :label="label"
    outlined
    dense
    :hint="placeholder"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    btnTheme: {
      type: String,
      default: 'default',
    },
    placeholder: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    mandatory: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {};
  },
  methods: {},
  computed: {},
};
</script>


<style scoped>

</style>
