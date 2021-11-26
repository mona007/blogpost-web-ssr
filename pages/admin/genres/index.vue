<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12">
        <v-card flat class="bg-default">
          <div class="d-flex justify-space-between align-center">
            <v-card-subtitle class="text--secondary">Genres</v-card-subtitle>
            <v-btn
              depressed
              color="primary"
              to="/admin/genres/create"
              class="mr-4"
            >
              <v-icon left>mdi-plus</v-icon>
              New Genre
            </v-btn>
          </div>
          <v-divider />
          <v-card-text>
            <v-text-field
              dense
              outlined
              hide-details
              placeholder="Search genres"
              prepend-inner-icon="mdi-magnify"
            />
          </v-card-text>
          <v-divider />
          <v-card-text class="px-0">
            <v-data-table class="bg-default" :headers="headers" :items="items">
              <template #[`item.title`]="{ item }">
                <ui-link :to="`/admin/genres/${item.id}`">
                  {{ item.title }}
                </ui-link>
              </template>

              <template #[`item.status`]="{ item }">
                <ui-chip :type="item.status">{{ item.status }}</ui-chip>
              </template>

              <template #[`item.action`]="{ item }">
                <v-btn icon small :to="`/admin/genres/${item.id}`">
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon small>
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </template>
            </v-data-table>
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
      ],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Descritpion', value: 'description' },
        { text: 'Status', value: 'status' },
        { text: 'Created Date', value: 'createdAt' },
        { text: 'Action', value: 'action', sortable: false },
      ],
      items: [
        {
          id: 1,
          title: 'Entertaiment',
          description: 'N/A',
          status: 'active',
          createdAt: '10 Jul 2021',
        },
        {
          id: 2,
          title: 'Sport',
          description: 'N/A',
          status: 'inactive',
          createdAt: '22 Nov 2021',
        },
      ],
    };
  },
  head: {
    title: 'Genres',
  },
};
</script>
