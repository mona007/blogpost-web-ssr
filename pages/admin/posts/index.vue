<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12">
        <v-card flat color="default">
          <div class="d-flex justify-space-between align-center">
            <v-card-subtitle class="text--secondary">Posts</v-card-subtitle>
            <v-btn
              depressed
              color="primary"
              to="/admin/posts/create"
              class="mr-4"
            >
              <v-icon left>mdi-plus</v-icon>
              New Post
            </v-btn>
          </div>
          <v-divider />
          <v-card-text>
            <v-text-field
              dense
              outlined
              hide-details
              placeholder="Search posts"
              prepend-inner-icon="mdi-magnify"
            />
          </v-card-text>
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <ui-datepicker
                  dense
                  outlined
                  hide-details
                  label="From Date"
                  prepend-inner-icon="mdi-calendar"
                />
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <ui-datepicker
                  dense
                  outlined
                  hide-details
                  label="To Date"
                  prepend-inner-icon="mdi-calendar"
                />
              </v-col>
              <v-col cols="12" sm="6" md="2">
                <v-select
                  v-model="filter.genre"
                  dense
                  outlined
                  clearable
                  hide-details
                  label="Genre"
                  item-text="text"
                  item-value="value"
                  :items="statuses"
                />
              </v-col>
              <v-col cols="12" sm="6" md="2">
                <v-select
                  v-model="filter.status"
                  dense
                  outlined
                  clearable
                  hide-details
                  label="Status"
                  item-text="text"
                  item-value="value"
                  :items="statuses"
                />
              </v-col>
              <v-col cols="12" sm="12" md="2" class="text-right">
                <v-btn depressed color="secondary" height="40px">
                  Filter
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />

          <v-card-text class="px-0">
            <v-data-table class="default" :headers="headers" :items="items">
              <template #[`item.status`]="{ item }">
                <ui-chip :type="item.status">{{ item.status }}</ui-chip>
              </template>

              <template #[`item.title`]="{ item }">
                <div class="d-flex align-center py-2">
                  <ui-avatar :src="item.thumbnail" />
                  <ui-link
                    class="ml-2 d-inline-block text-wrap"
                    style="max-width: 400px"
                    :to="`/admin/posts/${item.id}`"
                  >
                    {{ item.title }}
                  </ui-link>
                </div>
              </template>

              <template #[`item.createdAt`]="{ item }">
                {{ $helper.fullDateFormat(item.createdAt) }}
              </template>

              <template #[`item.action`]="{ item }">
                <v-btn icon small :to="`/admin/posts/${item.id}`">
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
        { text: 'Posts', exact: true, to: '/admin/posts' },
      ],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Genre', value: 'genre' },
        { text: 'Status', value: 'status' },
        { text: 'Posted Date', value: 'createdAt' },
        { text: 'Posted By', value: 'createdBy' },
        { text: 'Action', value: 'action', align: 'center', sortable: false },
      ],
      statuses: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
      ],
      items: [
        {
          id: 1,
          title: 'Cristiano Ronaldo transfer news man city',
          genre: 'Sport',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
          status: 'active',
          createdAt: '2021-01-11',
          createdBy: 'Mona',
        },
        {
          id: 2,
          title: 'Justin Bieber Net Worth and Income in 2021',
          genre: 'Entertainment',
          thumbnail:
            'https://media.gq.com/photos/56bcb218cdf2db6945d2ef93/4:3/w_2000,h_1500,c_limit/bieber-coverstory-square.jpg',
          status: 'inactive',
          createdAt: '2021-10-01',
          createdBy: 'Mona',
        },
      ],
      filter: { fromDate: '', toDate: '', status: '' },
    };
  },
  head: {
    title: 'Posts',
  },
};
</script>
