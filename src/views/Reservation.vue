<template>
  <a-card title="Reservation" :headStyle="card_head_style" :bodyStyle="card_body_style">
    <p>
      First Name
      <span style="color: red">*</span>
      <a-input v-model="details.student.first_name" />
    </p>
    <p>
      Last Name
      <span style="color: red">*</span>
      <a-input v-model="details.student.last_name" />
    </p>
    <p>
      Gender
      <span style="color: red">*</span>
      <a-radio-group style="margin-left: 25px;" v-model="details.student.gender">
        <a-radio value="male">Male</a-radio>
        <a-radio value="female">Female</a-radio>
      </a-radio-group>
    </p>
    <p>
      Age
      <span style="color: red">*</span>
      <a-input v-model="details.student.age" style="width: 50px; margin-left: 50px" />
    </p>
    <p>
      Birth date
      <span style="color: red">*</span>
      <a-date-picker v-model="details.student.birthdate" />
    </p>
    <p>
      Payor's Name
      <span style="color: red">*</span>
      <a-input v-model="details.payor.name" />
    </p>
    <p>
      Payor's Contact Number
      <span style="color: red">*</span>
      <a-input v-model="details.payor.contact" />
    </p>
    <p>
      Email Address
      <span style="color: red">*</span>
      <a-input v-model="details.payor.email" />
    </p>
    <p>
      Address
      <span style="color: red">*</span>
      <a-input v-model="details.address_details.address" />
    </p>
    <p>
      Appartment, suite, unit etc.(optional)
      <a-input v-model="details.address_details.type" />
    </p>
    <p>
      Town/City
      <span style="color: red">*</span>
      <a-input v-model="details.address_details.city" />
    </p>
    <p>
      Province
      <span style="color: red">*</span>
      <a-select v-model="details.address_details.province">
        <a-select-option v-for="(item, index) in provinces" :key="index" :value="item">{{item}}</a-select-option>
      </a-select>
    </p>
    <p>
      Postal Code/Zip Code
      <span style="color: red">*</span>
      <a-input v-model="details.address_details.zip_code" />
    </p>
    <p>
      Additional Information
      <span style="color: red">*</span>
      <a-input v-model="details.additional_info" />
      <a-textarea v-model="details.additional_info" :autosize="{ minRows: 2, maxRows: 4 }" />
    </p>
    <a-button type="Primary" block @click="submit">Submit</a-button>
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
      },
      provinces: [
        "Abra",
        "Agusan del Norte",
        "Agusan del Sur",
        "Aklan",
        "Albay",
        "Metro Manila"
      ]
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
      this.details.order = {
        course: this.$store.state.course,
        level: this.$store.state.level,
        lesson: this.$store.state.lesson
      };
    },
    submit() {
      this.$store.dispatch("RESERVATION", {
        details: this.details,
        sender: this.$route.query.sender,
        postback: "CALLBACK_RESERVATION"
      });
    }
  }
};
</script>

<style>
</style>
