<template>
  <v-card flat color="default" width="100%">
    <v-menu open-on-click offset-y max-height="600px">
      <template #activator="{ on, attrs }">
        <v-text-field
          v-model="search"
          dense
          filled
          rounded
          hide-details
          background-color="default"
          append-icon="mdi-magnify"
          placeholder="Search"
          v-bind="attrs"
          v-on="on"
          @click="onFilter"
          @keyup="onFilter"
        >
        </v-text-field>
      </template>

      <v-list color="default" dense>
        <v-list-item
          v-for="(item, index) in searchComponents"
          :key="index"
          :to="item.to"
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      searchComponents: [],
      components: [
        {
          title: 'Dashboard',
          subtitle: 'Dashboard',
          to: '/admin/home',
        },
        {
          title: 'Genres',
          subtitle: 'Dashboard > Genres',
          to: '/admin/genres',
        },
        {
          title: 'Create Genre',
          subtitle: 'Dashboard > Genres > Create Genre',
          to: '/admin/genres/create',
        },
        {
          title: 'Posts',
          subtitle: 'Dashboard > Posts',
          to: '/admin/posts',
        },
        {
          title: 'Create Post',
          subtitle: 'Dashboard > Posts > Create Post',
          to: '/admin/posts/create',
        },
      ],
    };
  },
  methods: {
    onFilter() {
      let search = this.search ? this.search.trim() : this.search;
      search = search.toLowerCase();

      if (search) {
        this.searchComponents = this.components.filter(
          (x) =>
            x.title.toLowerCase().includes(search) ||
            x.subtitle.includes(search)
        );

        if (!this.searchComponents.length) {
          this.searchComponents = [{ title: 'No data available' }];
        }
      } else {
        this.searchComponents = this.components;
      }
    },
  },
};
</script>
