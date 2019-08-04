<template>
  <a-card title="Payment via Credit Card" :headStyle="card_head_style" :bodyStyle="card_body_style">
    <a-card title="Payment Summary">
      <a-row>
        <template v-for="(item, index) in details">
          <a-col :span="6" :key="`a${index}`">{{item.description}}</a-col>
          <a-col :span="1" :key="`d${index}`">:</a-col>
          <a-col :span="17" :key="`b${index}`">{{item.value}}</a-col>
          <a-col :span="24" :key="`c${index}`">
            <a-divider style="margin: 12px 0" />
          </a-col>
        </template>
      </a-row>
    </a-card>
    <a-card title="Card Details">
      <p>
        Credit Card
        <span style="color: red">*</span>
        <a-input-number
          placeholder="####-####-####-####"
          style="width: 100%"
          v-model="card_details.number"
          :formatter="value => value.toString().replace(/(?<=\d{4})\d(\d{0})/, '-')"
        />
      </p>
      <p>
        CVC
        <span style="color: red">*</span>
        <a-input-number style="width: 100%" v-model="card_details.cvc" />
      </p>
      <p>
        Card holder
        <span style="color: red">*</span>
        <a-input v-model="card_details.name" />
      </p>
      <p>
        Date Expiry
        <span style="color: red">*</span>
        <a-month-picker
          placeholder="YYYY-MM"
          v-model="card_details.date_expiry"
          style="width: 100%"
        />
      </p>
      <a-row>
        <a-col :span="24">
          <span class="caption">Powered by:</span>
        </a-col>
        <a-col :span="24">
          <a href="https://magpie.im/" target="_blank">
            <img
              position="left left"
              contain
              height="30"
              src="https://magpie.im/assets/images/magpie-logo-outlines.svg"
            />
          </a>
          <a
            href="https://magpie.im/"
            target="_blank"
            class="caption"
            style="font-weight: bold; margin-left: -45px;"
          >Magpie.IM Pte. Ltd.</a>
        </a-col>
      </a-row>
      <br />
      <a-button type="primary" @click="submit" block>Pay</a-button>
    </a-card>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      card_details: {}
    };
  },
  computed: {
    details() {
      return [
        {
          description: "Course",
          value: this.getCourse(this.$store.state.course)
          //   value: this.getCourse(5)
        },
        {
          description: "Level",
          value: this.getLevel(this.$store.state.level)
          //   value: this.getLevel(0)
        },
        {
          description: "Number of Lesson",
          value: this.getLesson(this.$store.state.lesson)
          //   value: this.getLesson(0)
        },
        {
          description: "Service Fee",
          value: this.parseCurrency(
            this.getServiceFee(
              this.$store.state.course,
              this.$store.state.level,
              this.$store.state.lesson
            )
          )
          //   value: this.parseCurrency(this.getServiceFee(5, 0, 0))
        }
      ];
    },
    card_head_style() {
      return { background: "#F2E9C8", "font-weight": "bold" };
    },
    card_body_style() {
      return { "text-align": "left" };
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("RESET", {
        sender: this.$route.query.sender,
        postback: "CALLBACK_CREDIT_CARD"
      });
    }
  }
};
</script>

<style>
.caption {
  font-size: 10px;
}
</style>
