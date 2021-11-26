<template>
  <v-app>
    <v-main class="mute pa-0">
      <v-container class="fill-height">
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 v-if="error.statusCode === 404">Not Found</h1>
            <h1 v-else>{{ otherError }}</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
