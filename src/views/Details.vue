<template>
  <div>
    <a-row>
      <a-col :span="24" v-if="reminder">
        <guitar-details v-if="course===5" />
      </a-col>
      <a-col :span="24" v-else>
        <guitar-details v-if="course===5" />
      </a-col>
      <a-col :span="24">
        <a-button
          type="primary"
          :disabled="lesson===null"
          block
          v-if="!reminder"
          @click="submit"
        >Enroll Now !</a-button>
        <a-button type="primary" :disabled="lesson===null" block v-else @click="enroll">Continue</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import GuitarDetails from "./details/GuitarDetails";
export default {
  components: {
    GuitarDetails
  },
  data() {
    return {
      reminder: false
    };
  },
  computed: {
    lesson() {
      return this.$store.state.lesson;
    },
    level() {
      return parseInt(this.$route.query.level);
    },
    course() {
      return parseInt(this.$route.query.course);
    }
  },
  methods: {
    submit() {
      // this.$router.push({ path: 'enroll', query: this.$route.query })
      if (parseInt(this.lesson) === 0) this.enroll();
      else this.reminder = true;
    },
    enroll() {
      this.$store.dispatch("ENROLLMENT", {
        details: {
          course: this.course,
          level: this.level
        },
        sender: this.$route.query.sender,
        postback: `CALLBACK_ENROLLMENT_#${this.getCourse(
          this.course
        )}_${this.getLevel(this.level)}_${this.getLesson(this.lesson)}`
      });
    }
  }
};
</script>

<style>
</style>
