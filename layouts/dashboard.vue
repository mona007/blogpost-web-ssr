<template>
  <v-app>
    <client-only>
      <v-navigation-drawer
        v-model="drawer"
        app
        fixed
        floating
        color="default"
        class="px-4"
      >
        <v-row class="fill-height" align-content="space-between" no-gutters>
          <v-list dense width="100%">
            <div
              class="
                headline
                font-weight-bold
                text-center
                primary--text
                mt-5
                my-10
              "
            >
              BLOG
            </div>
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              :to="item.to"
              active-class="primary white--text"
              class="rounded mb-2"
            >
              <v-list-item-action>
                <v-icon small>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list dense width="100%">
            <v-list-item class="rounded mb-2 error--text" @click="onLogout">
              <v-list-item-action>
                <v-icon small color="error">mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>
      </v-navigation-drawer>

      <v-app-bar id="app-bar" elevation="0" color="mute" app fixed>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-space-between align-center">
              <div class="mr-3">
                <v-btn
                  depressed
                  class="px-0"
                  color="default"
                  height="40px"
                  min-width="40px"
                  @click="drawer = !drawer"
                >
                  <v-icon color="primary">mdi-menu</v-icon>
                </v-btn>
              </div>
              <div class="flex-sm-grow-1 flex-sm-shrink-0 mr-3">
                <search-component />
              </div>
              <div class="d-flex align-center text-center">
                <div class="mr-3">
                  <v-badge color="primary" content="6" overlap>
                    <v-btn
                      depressed
                      class="px-0"
                      color="default"
                      height="40px"
                      min-width="40px"
                    >
                      <v-icon color="primary">mdi-bell</v-icon>
                    </v-btn>
                  </v-badge>
                </div>

                <div class="mr-3">
                  <v-btn
                    depressed
                    class="px-0"
                    color="default"
                    height="40px"
                    min-width="40px"
                    @click="toggleTheme"
                  >
                    <v-icon color="primary">mdi-theme-light-dark</v-icon>
                  </v-btn>
                </div>

                <v-divider vertical />

                <v-hover v-slot="{ hover }">
                  <v-card
                    flat
                    to="/admin/profile"
                    max-height="40px"
                    class="d-flex align-center profile-avatar"
                    :color="hover ? 'default' : 'mute'"
                  >
                    <div class="d-none d-sm-inline-block subtitle-2 mx-3">
                      Hello, Mona
                    </div>
                    <v-avatar>
                      <v-img
                        height="35"
                        max-width="35"
                        src="https://kpopping.com/documents/f3/2/1440/211019-ITZY-Instagram-Update-Yeji-documents-1.jpeg"
                      />
                    </v-avatar>
                  </v-card>
                </v-hover>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <v-main class="mute">
        <Nuxt />
      </v-main>
    </client-only>
  </v-app>
</template>

<script>
export default {
  middleware({ store, route, redirect }) {
    if (!store.getters['admin/IS_AUTH']) {
      redirect('/admin', { redirect: route.fullPath });
    }
  },
  data() {
    return {
      drawer: true,
      menu: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/admin/home',
        },
        {
          icon: 'mdi-shape',
          title: 'Genres',
          to: '/admin/genres',
        },
        {
          icon: 'mdi-note-text',
          title: 'Posts',
          to: '/admin/posts',
        },
        {
          icon: 'mdi-cog',
          title: 'Settings',
          to: '/admin/settings',
        },
      ],
      search: '',
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    onLogout() {
      this.$cookies.remove('xa');
      this.$store.commit('admin/CLEAR_PROFILE');
      this.$router.replace('/admin');
    },
  },
};
</script>

<style>
#app-bar > .v-toolbar__content {
  padding: 0px 0px;
}

.profile-avatar:hover {
  cursor: pointer;
}
</style>
