<template>
  <button :class="classes" :disabled="disabled" class="flex items-center">
    <img
      v-if="icon"
      :src="`/assets/images/${icon}`"
      :alt="icon"
      class="ml-2"
    />
    <span>
      {{ text }}
    </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    theme: {
      type: String,
      default: 'primary',
    },
    btnAlign: {
      type: String,
      default: 'center',
    },
    btnTextSize: {
      type: String,
      default: 'base',
    },
    btnPadding: {
      type: String,
      default: 'md',
    },
    
    btnRounded: {
      type: String,
      default: 'md',
    },
    btnSideRounded: {
      type: String,
      default: 'none',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      themes: {
        primary:
          'bg-primary-500 text-white hover:font-bold hover:bg-primary-600 border border-primary-500',
        secondary:
          'bg-white text-primary-500 border border-primary-500 hover:font-bold hover:bg-primary-600 hover:text-white',
        danger: 'bg-red-500 text-white hover:font-bold hover:bg-red-600',
        disabled: 'bg-light-500 text-primary-500 disabled cursor-not-allowed',
        primaryDisabled:
          'bg-primary-500 text-white disabled cursor-not-allowed',
        secondaryDisabled:
          'bg-white text-primary-500 border border-primary-500 disabled cursor-not-allowed',
        transparent:
          'bg-transparent text-primary-500 border border-primary-500 hover:font-bold hover:bg-primary-600 hover:text-white',
        yellow:
          'bg-customYellow2-600 text-primary-500 border border-customYellow2-600 font-bold hover:border-customYellow2-700 hover:bg-customYellow2-700 hover:text-white',
        purple:
          'bg-purple-500 text-white border border-purple-500 hover:font-bold hover:bg-purple-600 hover:text-white',
          flat: 'bg-white text-gray-600 border border-gray-200 hover:bg-blue-100'
      },
      textAlignments: {
        center: 'flex justify-center iitems-center text-center',
        right: 'flex justify-start iitems-center text-right',
        left: 'flex justify-start iitems-center text-left',
      },
      textSize: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      padding: {
        xs: 'px-4 py-3',
        sm: 'px-8 py-3',
        md: 'px-10 py-2',
        lg: 'px-12 py-3',
        xl: 'px-10 py-3 lg:px-4 lg:py-4',
        sales: 'px-10 py-3'
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
      },
      roundedside: {
        none: 'none',
        smrtl: 'rounded-l-sm',
        mdrtl: 'rounded-l-md',
        lgrtl: 'rounded-l-lg',
        xlrtl: 'rounded-l-xl',
        smltr: 'rounded-r-sm',
        mdltr: 'rounded-r-md',
        lgltr: 'rounded-r-lg',
        xlltr: 'rounded-r-xl',
      },
    }
  },
  computed: {
    classes: function () {
      let theme = 'focus:outline-none shadow transition'
      theme += ' ' + this.themes[this.theme]
      theme += ' ' + this.textAlignments[this.btnAlign]
      theme += ' ' + this.textSize[this.btnTextSize]
      theme += ' ' + this.padding[this.btnPadding]
      theme += ' ' + this.rounded[this.btnRounded]
      theme += ' ' + this.roundedside[this.btnSideRounded]
      return theme
    },
  },
}
</script>
