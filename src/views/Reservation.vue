<template>
  <a-card title="Billing Details" :headStyle="card_head_style" :bodyStyle="card_body_style">
    <p>
      <span style="color: red">*</span> First Name
      <a-input v-model="details.student.first_name"/>
    </p>
    <p>
      <span style="color: red">*</span> Last Name
      <a-input v-model="details.student.Last_name"/>
    </p>
    <p>
      <span style="color: red">*</span> Gender
      <a-radio-group style="margin-left: 25px;" v-model="details.student.gender">
        <a-radio value="male">Male</a-radio>
        <a-radio value="female">Female</a-radio>
      </a-radio-group>
    </p>
    <p>
      <span style="color: red">*</span> Age
      <a-input v-model="details.student.age" style="width: 50px; margin-left: 50px"/>
    </p>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      details: {
        student: {},
        payor: {},
        address_details: {},
        additional_info: "",
        order: {}
      }
    };
  },
  created() {
    this.init();
  },
  computed: {
    card_head_style() {
      return { background: "#F2E9C8", "font-weight": "bold" };
    },
    card_body_style() {
      return { "text-align": "left" };
    }
  },
  methods: {
    init() {
      this.details.student.first_name = this.$route.query.fname;
      this.details.student.last_name = this.$route.query.lname;
      this.details.student.gender = this.$route.query.gender;
    }
  }
};
</script>

<style>
</style>
