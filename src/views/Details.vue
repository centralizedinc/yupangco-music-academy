<template>
  <div>
    <a-row>
      <a-col :span="24">
        <guitar-details v-if="course===5" />
      </a-col>
      <a-col :span="24">
        <a-button 
          type="primary" 
          :disabled="lesson===null" 
          block
          @click="enroll">
          Enroll Now !
        </a-button>
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
      course: null
    };
  },
  computed: {
    lesson() {
      return this.$store.state.lesson;
    }
  },
  created() {
    console.log("this.$route.query :", this.$route.query);
    this.course = parseInt(this.$route.query.course);
  },
  methods: {
    enroll(){
      this.$router.push({ path: 'enroll', query: this.$route.query })
    }
  },
};
</script>

<style>
</style>
