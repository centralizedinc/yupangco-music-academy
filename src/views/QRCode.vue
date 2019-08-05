<template>
  <a-card>
    <p>Present this QR Code on your visit for Enrollment Confirmation.</p>
    <div style="width: 100%; text-align: center;">
      <img :src="image_src" :alt="image_alt" />
    </div>
    <a-button type="primary" block @click="close">CLOSE</a-button>
  </a-card>
</template>

<script>
export default {
  computed: {
    course() {
      return parseInt(this.$store.state.course);
    },
    level() {
      return parseInt(this.$store.state.level);
    },
    lesson() {
      return parseInt(this.$store.state.lesson);
    },
    image_src() {
      return `https://yupangco-music-academy.herokuapp.com/assets/qr/qr_${this.course}_${this.level}_${this.lesson}.png`;
    },
    image_alt() {
      return `${this.getCourse(this.course)}_${this.getLevel(
        this.level
      )}_${this.getLesson(this.lesson)}`;
    }
  },
  methods: {
    close() {
      this.$store.dispatch("CLOSE", {
        sender: this.$store.state.sender,
        postback: "DONE_ENROLLMENT"
      });
    }
  }
};
</script>

<style>
</style>
