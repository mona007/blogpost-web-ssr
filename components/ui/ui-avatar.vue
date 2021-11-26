<template>
  <v-card flat>
    <v-img
      :src="src"
      :height="height"
      :width="width"
      max-height="50px"
      max-width="50px"
    />
  </v-card>
</template>

<script>
export default {
  props: {
    src: { type: String, default: '' },
    height: { type: String, default: '50px' },
    width: { type: String, default: '50x' },
  },
  data() {
    return {}
  },
}
</script>
