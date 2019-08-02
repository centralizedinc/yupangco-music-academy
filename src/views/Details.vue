<template>
  <div>
    <guitar-details v-if="course===5" />
  </div>
</template>

<script>
import GuitarDetails from "./GuitarDetails";
export default {
  components: {
    GuitarDetails
  },
  data() {
    return {
      course: null
    };
  },
  created() {
    console.log("this.$route.query :", this.$route.query);
    this.course = this.$route.query.course;
  }
};
</script>

<style>
</style>
