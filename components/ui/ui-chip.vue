<template>
  <v-chip v-bind="$attrs" :class="classObject" :color="colorRgba[type]">
    <slot />
  </v-chip>
</template>

<script>
export default {
  props: {
    type: { type: String, default: '' },
  },
  data() {
    return {
      colorRgba: {
        success: 'rgba(0, 230, 118, 0.1)',
        active: 'rgba(0, 230, 118, 0.1)',

        error: 'rgba(255, 61, 0, 0.1)',
        inactive: 'rgba(255, 61, 0, 0.1)',
      },
    }
  },
  computed: {
    classObject() {
      let type = this.type
      if (type === 'active') type = 'success'
      else if (type === 'inactive') type = 'error'

      const textColor = `${type}--text`
      return { [textColor]: true, 'text-capitalize': true }
    },
  },
}
</script>
