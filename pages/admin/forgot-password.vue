<template>
  <v-main class="primary">
    <client-only>
      <v-row class="fill-height" justify="center" align-content="center">
        <v-card flat class="px-4 pt-8 pb-4" color="default" width="650px">
          <!-- <v-card-title>Welcome to back</v-card-title> -->
          <v-btn text color="primary" @click="$router.push('/admin')">
            <v-icon left>mdi-arrow-left</v-icon>
            Back
          </v-btn>
          <div class="primary--text text-center headline mb-3">BLOG</div>

          <v-card-text class="pt-0">
            <v-stepper v-model="step" non-linear flat>
              <v-stepper-header class="elevation-0">
                <v-stepper-step class="pa-0" :complete="step > 1" step="1">
                  Find Account
                </v-stepper-step>
                <v-stepper-step class="pa-0" :complete="step > 2" step="2">
                  Security Code
                </v-stepper-step>
                <v-stepper-step class="pa-0" :complete="step > 3" step="3">
                  Reset Password
                </v-stepper-step>
              </v-stepper-header>

              <!-- find account -->
              <v-stepper-items>
                <v-stepper-content class="pa-0" step="1">
                  <VeeOb ref="formFindAccount" v-slot="{ passes, invalid }">
                    <v-form @submit.prevent="passes(callFindAccount)">
                      <div class="text--secondary py-3">
                        Please enter your email to recover your password
                      </div>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <VeePro
                            v-slot="{ errors }"
                            name="email"
                            rules="required"
                          >
                            <v-text-field
                              v-model="email"
                              autofocus
                              dense
                              outlined
                              :error-messages="errors"
                              label="E-mail"
                              name="email"
                            />
                          </VeePro>
                        </v-col>
                        <v-col cols="12" class="text-right">
                          <v-btn
                            :loading="loading"
                            :disabled="invalid"
                            block
                            type="submit"
                            color="primary"
                          >
                            <v-icon left> mdi-magnify </v-icon>
                            Find Account
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </VeeOb>
                </v-stepper-content>
              </v-stepper-items>

              <!-- submit security code -->
              <v-stepper-items>
                <v-stepper-content class="pa-0" step="2">
                  <VeeOb ref="formSecurityCode" v-slot="{ passes, invalid }">
                    <v-form @submit.prevent="passes(callSubmitSecurityCode)">
                      <div class="text--secondary py-3">
                        Please check your email and submit the security code
                        within ({{ expireInSecond }}s)
                      </div>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <VeePro
                            v-slot="{ errors }"
                            name="security code"
                            rules="required"
                          >
                            <v-text-field
                              v-model="code"
                              dense
                              outlined
                              autofocus
                              :error-messages="errors"
                              label="Security Code"
                              name="security code"
                            />
                          </VeePro>
                        </v-col>
                        <v-col cols="12" class="text-right">
                          <v-btn
                            :loading="loading"
                            :disabled="invalid"
                            block
                            type="submit"
                            color="primary"
                          >
                            <v-icon left> mdi-key </v-icon>
                            Submit Security Code
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </VeeOb>
                </v-stepper-content>
              </v-stepper-items>

              <!-- recover password -->
              <v-stepper-items>
                <v-stepper-content class="pa-0" step="3">
                  <VeeOb ref="formResetPassword" v-slot="{ passes, invalid }">
                    <v-form @submit.prevent="passes(callRecoverPassword)">
                      <div class="text--secondary py-3">
                        Please enter your new password
                      </div>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <VeePro
                            v-slot="{ errors }"
                            name="password"
                            rules="required"
                          >
                            <v-text-field
                              v-model="password"
                              autofocus
                              dense
                              outlined
                              autocomplete="new-password"
                              label="New Password"
                              name="password"
                              :error-messages="errors"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="
                                showPassword
                                  ? 'mdi-eye-outline'
                                  : 'mdi-eye-off-outline'
                              "
                              @click:append="showPassword = !showPassword"
                            />
                          </VeePro>
                        </v-col>
                        <v-col cols="12">
                          <VeePro
                            v-slot="{ errors }"
                            name="confirm password"
                            rules="required|confirmed:password"
                          >
                            <v-text-field
                              v-model="confirmPassword"
                              dense
                              outlined
                              autocomplete="new-password"
                              label="Confirm Password"
                              name="confirm password"
                              :error-messages="errors"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="
                                showPassword
                                  ? 'mdi-eye-outline'
                                  : 'mdi-eye-off-outline'
                              "
                            />
                          </VeePro>
                        </v-col>
                        <v-col cols="12" class="text-right">
                          <v-btn
                            :loading="loading"
                            :disabled="invalid"
                            block
                            type="submit"
                            color="primary"
                          >
                            <v-icon left> mdi-lock </v-icon>
                            Reset Password
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </VeeOb>
                </v-stepper-content>
              </v-stepper-items>

              <!-- success -->
              <v-stepper-items>
                <v-stepper-content class="pa-0" step="4">
                  <v-alert type="success">
                    <span class="font-weight-bold">Congratulations!</span> Your
                    password has been updated.
                  </v-alert>
                  <ui-link class="d-block text-center" to="/admin">
                    Back to login page
                  </ui-link>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-row>
    </client-only>
  </v-main>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.expireInSecondInterval) clearInterval(this.expireInSecondInterval);
    next();
  },
  layout: 'empty',
  middleware({ store, redirect }) {
    if (store.getters['admin/IS_AUTH']) {
      return redirect('/admin/home');
    }
  },
  data() {
    return {
      loading: false,
      showPassword: false,
      expireInSecond: 60,
      expireInSecondInterval: null,
      step: 1,
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
    };
  },
  head: {
    title: 'Login',
  },
  methods: {
    callFindAccount() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.step = 2;
        this.expireInSecondInterval = setInterval(() => {
          this.expireInSecond -= 1;
          if (this.expireInSecond < 1) {
            clearInterval(this.expireInSecondInterval);
            this.step = 1;
          }
        }, 1000);
      }, 2000);
    },
    callSubmitSecurityCode() {
      this.loading = true;
      setTimeout(() => {
        clearInterval(this.expireInSecondInterval);
        this.loading = false;
        this.step = 3;
      }, 2000);
    },
    callRecoverPassword() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.step = 4;
      }, 2000);
    },
  },
};
</script>
