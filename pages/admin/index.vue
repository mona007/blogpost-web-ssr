<template>
  <v-main class="primary"
    ><client-only>
      <v-row class="fill-height" justify="center" align-content="center">
        <v-card flat class="px-4 pt-8 pb-4" color="default" width="650px">
          <div class="primary--text text-center headline">BLOG</div>
          <v-card-title>Welcome to back</v-card-title>
          <v-card-subtitle>Please login in to continue...</v-card-subtitle>
          <v-card-text>
            <VeeOb ref="formLogin" v-slot="{ passes, invalid }">
              <v-form @submit.prevent="passes(callLogin)">
                <v-row no-gutters>
                  <v-col cols="12">
                    <VeePro v-slot="{ errors }" name="email" rules="required">
                      <v-text-field
                        v-model="auth.email"
                        dense
                        outlined
                        :error-messages="errors"
                        label="E-mail"
                        name="email"
                      />
                    </VeePro>
                  </v-col>
                  <v-col cols="12">
                    <VeePro
                      v-slot="{ errors }"
                      name="password"
                      rules="required"
                    >
                      <v-text-field
                        v-model="auth.password"
                        dense
                        outlined
                        label="Password"
                        name="password"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="
                          showPassword
                            ? 'mdi-eye-outline'
                            : 'mdi-eye-off-outline'
                        "
                        :error-messages="errors"
                        @click:append="showPassword = !showPassword"
                      />
                    </VeePro>
                  </v-col>
                  <v-col class="pb-5 text-right" cols="12">
                    <ui-link to="/admin/forgot-password">
                      Forgot Password ?
                    </ui-link>
                  </v-col>
                  <v-col cols="12" class="text-right">
                    <v-btn
                      :loading="loading"
                      :disabled="invalid"
                      block
                      type="submit"
                      color="primary"
                    >
                      Login
                      <v-icon right> mdi-arrow-right </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </VeeOb>
          </v-card-text>
        </v-card>
      </v-row>
    </client-only>
  </v-main>
</template>

<script>
export default {
  layout: 'empty',
  middleware({ store, redirect }) {
    if (store.getters['admin/IS_AUTH']) {
      return redirect('/admin/home');
    }
  },
  data() {
    return {
      showPassword: false,
      loading: false,
      auth: {
        email: '',
        password: '',
      },
    };
  },
  head: {
    title: 'Login',
  },
  mounted() {},
  methods: {
    callLogin() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$cookies.set('xa', 'token');
        this.$store.commit('admin/SET_PROFILE', { isAuth: true });
        this.$router.push('/admin/home');
      }, 2000);
    },
  },
};
</script>
