<template>
  <v-hover v-slot="{ hover }">
    <nuxt-link
      :to="to"
      :class="[$attrs.class, { 'text-decoration-none': !hover }]"
      class="text--primary"
    >
      <slot />
    </nuxt-link>
  </v-hover>
</template>

<script>
export default {
  props: {
    to: { type: String, default: '' },
  },
}
</script>
