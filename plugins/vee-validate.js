import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // eslint-disable-next-line import/namespace
    ...rules[rule], // copies rule configuration
    message: `${messages[rule]}.`, // assign message
  });
});

Vue.component('VeeOb', ValidationObserver);
Vue.component('VeePro', ValidationProvider);
