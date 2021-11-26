<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12">
        <v-card flat class="bg-default">
          <v-card-subtitle> Create Genre </v-card-subtitle>
          <v-divider />
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field dense outlined label="Title" />
              </v-col>
              <v-col cols="12">
                <v-textarea dense outlined label="Description" />
              </v-col>
              <v-col cols="12" class="text-right">
                <v-btn color="primary">
                  <v-icon left>mdi-content-save</v-icon>
                  Save Genre
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
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
        { text: 'Genres', exact: true, to: '/admin/genres' },
        { text: 'Create Genre', exact: true, to: '/admin/genres/create' },
      ],
    }
  },
  head: {
    title: 'Create Genre',
  },
}
</script>
