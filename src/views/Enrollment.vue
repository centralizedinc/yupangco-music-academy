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
      console.log("this.$route.query :", this.$route.query)
      //   callback
      this.$store.dispatch("WEBVIEW_CALLBACK", {
        details: {
          course: this.course,
          level: parseInt(this.$route.query.level)
        },
        sender: this.$route.query.sender,
        postback: `CALLBACK_ENROLLMENT_#${this.getCourse(this.course)}_${this.getLevel(parseInt(this.$route.query.level))}_${this.getLesson(this.lesson)}`
      });
    }
  }
};
</script>

<style>
</style>
