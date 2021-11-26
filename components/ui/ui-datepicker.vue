<template>
  <v-menu
    v-model="menu"
    min-width="auto"
    transition="scale-transition"
    :disabled="disabled"
    :close-on-content-click="false"
  >
    <template #activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        class="pb-0"
        dense
        outlined
        readonly
        :clearable="clearable"
        v-bind="Object.assign(attrs, $attrs)"
        v-on="on"
        @click:clear="$emit('input', '')"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      color="primary"
      no-title
      scrollable
      :events="eventFormat"
      :event-color="eventColor"
      :min="minDateFormat"
      :max="maxDateFormat"
      @input="onChange"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: { type: [String, Date], default: '' },
    events: { type: [Array, Function, Object], default: null },
    eventColor: { type: [Array, Function, Object, String], default: null },
    minDate: { type: [String, Date], default: '2018-01-01' },
    maxDate: {
      type: [String, Date],
      default: () => {
        return null
        // return new Date(new Date().getFullYear() + 3, 12, 0)
        //   .toISOString()
        //   .substr(0, 10);
      },
    },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
  },
  data() {
    return {
      menu: false,
      date: null,
      //   minDateFormat: '',
      //   maxDateFormat: '',
      eventFormat: [],
    }
  },
  computed: {
    maxDateFormat() {
      return this.$helper.shortDateFormat(this.maxDate)
    },
    minDateFormat() {
      return this.$helper.shortDateFormat(this.minDate)
    },
  },
  watch: {
    value(v) {
      if (v !== this.date) {
        this.date = this.$helper.shortDateFormat(v)
        this.$emit('input', this.date)
      }
    },
    // maxDate() {
    //   this.maxDateFormat = this.$helper.shortDateFormat(this.maxDate);
    // },
    // minDate() {
    //   this.minDateFormat = this.$helper.shortDateFormat(this.minDate);
    // },
  },
  mounted() {
    this.date = this.value
    // this.minDateFormat = this.$helper.shortDateFormat(this.minDate);
    // this.maxDateFormat = this.$helper.shortDateFormat(this.maxDate);

    if (Array.isArray(this.events))
      this.eventFormat = this.events.map(this.$helper.shortDateFormat)
  },
  methods: {
    onChange() {
      this.menu = false
      this.$emit('input', this.date)
    },
  },
}
</script>
