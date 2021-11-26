<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-breadcrumbs :items="breadcrumbs" />
      </v-col>
      <v-col cols="12">
        <v-card flat color="default">
          <v-card-subtitle>Profile</v-card-subtitle>
          <v-divider />
          <v-card-text>
            <v-row dense>
              <v-col sm="4" md="4">
                <div class="d-flex flex-column justify-center align-center">
                  <v-avatar height="200px" width="200px">
                    <v-img
                      src="https://kpopping.com/documents/f3/2/1440/211019-ITZY-Instagram-Update-Yeji-documents-1.jpeg"
                    />
                  </v-avatar>
                  <div class="my-4">
                    <v-btn
                      outlined
                      color="primary"
                      @click="triggerChangePasswordDialog"
                    >
                      Change Password
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-col sm="8" md="8">
                <v-row :no-gutters="$vuetify.breakpoint.xsOnly">
                  <v-col cols="12" sm="6" class="pb-0">
                    <v-text-field dense outlined label="First Name" />
                  </v-col>
                  <v-col cols="12" sm="6" class="pb-0">
                    <v-text-field dense outlined label="Last Name" />
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field dense outlined label="E-mail" />
                  </v-col>
                  <v-col cols="12" sm="6" class="py-0">
                    <v-text-field dense outlined label="Phone" />
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-textarea dense outlined label="Bio" />
                  </v-col>
                  <v-col cols="12" class="pt-0 text-right">
                    <v-btn depressed color="primary">
                      <v-icon left>mdi-content-save</v-icon>
                      Save Profile
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-subtitle class="pa-4">Change Password</v-card-subtitle>
        <v-divider />
        <v-card-text class="pt-4">
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field dense outlined label="Current Password" />
            </v-col>
            <v-col cols="12">
              <v-text-field dense outlined label="New Password" />
            </v-col>
            <v-col cols="12">
              <v-text-field dense outlined label="Confirm Password" />
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn
                depressed
                outlined
                color="error"
                @click="triggerChangePasswordDialog"
              >
                Close
              </v-btn>
              <v-btn depressed color="primary"> Confirm </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      dialog: false,
      breadcrumbs: [
        { text: 'Dashboard', exact: true, to: '/admin/home' },
        { text: 'Profile', exact: true, to: '/admin/profile' },
      ],
    };
  },
  head: {
    title: 'Profile',
  },
  methods: {
    triggerChangePasswordDialog() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
