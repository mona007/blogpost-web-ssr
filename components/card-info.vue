<template>
  <v-card
    flat
    height="120px"
    class="d-flex justify-center align-center px-3"
    color="default"
  >
    <div>
      <v-btn depressed min-width="60px" height="60px" :color="rgba[color]">
        <v-icon :color="color">{{ icon }}</v-icon>
      </v-btn>
    </div>
    <div>
      <v-card-title>{{ amount }}</v-card-title>
      <v-card-subtitle class="text--secondary">{{ title }}</v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    amount: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    icon: { type: String, default: '' },
    iconColor: { type: String, default: 'primary' },
    iconBackgroundColor: { type: String, default: 'primary' },
  },
  data() {
    return {
      rgba: {
        primary: 'rgba(16, 129, 232, 0.1)',
        secondary: 'rgba(255, 135, 0, 0.1)',
        tertiary: 'rgba(15, 179, 189, 0.1)',
        quaternary: 'rgba(255, 77, 109, 0.1)',
      },
    }
  },
}
</script>
