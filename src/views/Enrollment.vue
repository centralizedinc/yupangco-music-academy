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
  created() {
    if (this.$route.query.level && parseInt(this.$route.query.level) === 0 && this.lesson) {
      console.log('this.$route.query.level :', this.$route.query.level);
      console.log('this.lesson :', this.lesson);
      this.enroll();
    }
  },
  methods: {
    enroll() {
      //   callback
      this.$store.dispatch("ENROLLMENT", {
        details: {
          course: this.course,
          level: parseInt(this.$route.query.level)
        },
        sender: this.$route.query.sender,
        postback: `CALLBACK_ENROLLMENT_#${this.getCourse(
          this.course
        )}_${this.getLevel(parseInt(this.$route.query.level))}_${this.getLesson(
          this.lesson
        )}`
      });
    }
  }
};
</script>

<style>
</style>
