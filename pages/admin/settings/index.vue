<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12" class="d-flex">
        <div class="title">Settings</div>
        <v-spacer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      breadcrumbs: [
        { text: 'Dashboard', exact: true, to: '/admin/home' },
        { text: 'Settings', exact: true, to: '/admin/settings' },
      ],
    }
  },
}
</script>
