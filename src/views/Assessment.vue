<template>
  <a-card
    title="Assessment"
    :headStyle="{ 'background': '#F2E9C8', 'font-weight': 'bold' }"
    :bodyStyle="{ 'text-align': 'left'}"
  >
    <p
      style="font-size: 15px; font-weight: bold;"
    >Assess yourself from the choices that match your skills.</p>
    <a-checkbox-group v-model="skills" @change="onChange">
      <a-row>
        <a-col :span="24" v-for="(item, index) in assessments" :key="index">
          <a-checkbox :value="item.code">{{item.description}}</a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
    <a-button type="primary" block @click="submit">Submit</a-button>
  </a-card>
</template>

<script>
import assessments from "./assessments.json";
export default {
  data() {
    return {
      assessments,
      skills: null
    };
  },
  watch: {
    skills(val) {
      console.log("val :", val);
    }
  },
  methods: {
    onChange() {},
    submit() {
      var primary_pass = this.skills.filter(x => x.indexOf("P") > -1).length;
      var intermediate_pass = this.skills.filter(x => x.indexOf("I") > -1)
        .length;
      var recommended_level = 0;
      if (primary_pass >= 4 && intermediate_pass >= 6) {
        // Advance
        recommended_level = 2;
        console.log("Recommended: Advance");
      } else if (primary_pass >= 4) {
        // Intermediate
        recommended_level = 1;
        console.log("Recommended: Intermediate");
      } else console.log("Recommended: Primary");
      this.$store.dispatch("ASSESSMENT", {
        sender: this.$route.query.sender,
        postback: `ASSESSMENT_#${this.$route.query.course}_${recommended_level}`
      });
    }
  }
};
</script>

<style>
</style>
