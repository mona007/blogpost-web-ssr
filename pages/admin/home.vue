<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="6" md="3">
        <card-info
          title="Follwers"
          amount="14K"
          icon="mdi-account-group"
          color="tertiary"
        />
      </v-col>
      <v-col cols="6" sm="6" md="3">
        <card-info
          title="Post"
          amount="150"
          icon="mdi-note-text"
          color="secondary"
        />
      </v-col>
      <v-col cols="6" sm="6" md="3">
        <card-info
          title="Like"
          amount="127K"
          icon="mdi-heart"
          color="quaternary"
        />
      </v-col>
      <v-col cols="6" sm="6" md="3">
        <card-info
          title="Viewers"
          amount="849K"
          icon="mdi-chart-box"
          color="primary"
        />
      </v-col>
      <v-col cols="12" sm="12" md="9">
        <v-card flat color="default">
          <div class="d-flex justify-space-between align-center px-3">
            <v-card-subtitle class="font-weight-bold text--primary px-0">
              Recent Posts
            </v-card-subtitle>

            <div>
              <v-btn depressed outlined color="primary" to="/admin/posts">
                View All
              </v-btn>
              <v-btn depressed color="primary" to="/admin/posts/create">
                <v-icon left>mdi-plus</v-icon> Add Post
              </v-btn>
            </div>
          </div>
          <v-card-text class="pt-0 px-0">
            <v-data-table
              id="table-none-border"
              class="default"
              disable-sort
              hide-default-footer
              :headers="headers"
              :items="items"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-card flat color="default">
          <v-card-subtitle class="font-weight-bold text--primary">
            Recent Comment
          </v-card-subtitle>
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
      headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'name',
        },
        { text: 'Post Date', value: 'category' },
        { text: 'Genre', value: 'category' },
        { text: 'Comment', value: 'category' },
        { text: 'Like', value: 'category' },
        { text: 'View', value: 'category' },
      ],
      items: [
        { name: 'Frozen Yogurt', category: 'Ice cream' },
        { name: 'Ice cream sandwich', category: 'Ice cream' },
        { name: 'Eclair', category: 'Cookie' },
        { name: 'Cupcake', category: 'Pastry' },
        {
          name: 'Gingerbread',
          category: 'Cookie',
        },
      ],
    };
  },
};
</script>

<style>
#table-none-border thead tr:last-child th,
#table-none-border tbody tr:not(:last-child) td:last-child,
#table-none-border tbody tr td,
#table-none-border tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {
  border-bottom: none;
}
</style>
