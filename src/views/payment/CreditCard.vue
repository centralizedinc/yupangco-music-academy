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
          v-model="card_details.details.card_number"
          :formatter="value => value.toString().replace(/(?<=\d{4})\d(\d{0})/, '-')"
        />
      </p>
      <p>
        CVC
        <span style="color: red">*</span>
        <a-input-number style="width: 100%" v-model="card_details.details.cvc" />
      </p>
      <p>
        Card holder
        <span style="color: red">*</span>
        <a-input v-model="card_details.details.name" />
      </p>
      <p>
        Date Expiry
        <span style="color: red">*</span>
        <a-month-picker
          placeholder="YYYY-MM"
          v-model="card_details.details.date_expiry"
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
      card_details: {
        mode: 0,
        details: {},
        reference_no: "",
        sender: ""
      }
    };
  },
  computed: {
    course() {
      return this.$store.state.course;
    },
    level() {
      return this.$store.state.level;
    },
    lesson() {
      return this.$store.state.lesson;
    },
    details() {
      return [
        {
          description: "Course",
          value: this.getCourse(this.course)
          //   value: this.getCourse(5)
        },
        {
          description: "Level",
          value: this.getLevel(this.level)
          //   value: this.getLevel(0)
        },
        {
          description: "Number of Lesson",
          value: this.getLesson(this.lesson)
          //   value: this.getLesson(0)
        },
        {
          description: "Service Fee",
          value: this.parseCurrency(
            this.getServiceFee(
              parseInt(this.course),
              parseInt(this.level),
              parseInt(this.lesson)
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
  created() {
    this.card_details.mode = 0;
    this.card_details.reference_no = this.getReferenceNumber();
    this.card_details.sender = this.$store.state.sender;
  },
  methods: {
    submit() {
      this.$store
        .dispatch("SUBMIT_ENROLLMENT", {
          details: this.$store.state.details,
          payments_details: this.card_details
        })
        .then(result => {
          // return this.$store.dispatch("CLOSE", {
          //   sender: this.$store.state.sender,
          //   postback: "CB_PAYMENT"
          // });
          this.$router.push('/qrcode');
        })
        // .then(result => {
        //   console.log("Success enrollment");
        // })
        .catch(err => {
          console.log("Submit enrollment err :", err);
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
