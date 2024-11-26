<template>
  <div class="flex flex-col space-y-2">
    <label :for="id" class="text-gray-700 font-medium">
      {{ label }}
    </label>
    <select
      :id="id"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectMenu",
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
      // Expected format: [{ value: 'english', text: 'English' }, ...]
    },
    placeholder: {
      type: String,
      default: "Select an option",
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>
