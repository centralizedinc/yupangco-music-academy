<template>
  <div>
    <a-row>
      <a-col :span="24">
        <guitar-enrollment v-if="course===5" />
      </a-col>
      <a-col :span="24">
        <a-button type="primary" :disabled="lesson===null" block @click="enroll">Continue</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import GuitarEnrollment from "./enrollment/GuitarEnrollment";

export default {
  components: {
    GuitarEnrollment
  },
  computed: {
    course() {
      return parseInt(this.$route.query.course);
    },
    lesson() {
      return this.$store.state.lesson;
    }
  },
  methods: {
    enroll() {
      //   callback
      MessengerExtensions.requestCloseBrowser(
        function success() {
          // webview closed
        },
        function error(err) {
          // an error occurred
        }
      );
    }
  }
};
</script>

<style>
</style>
