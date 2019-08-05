<template>
  <a-card title="Payment via ECPay" :headStyle="card_head_style" :bodyStyle="card_body_style">
    <p style="font-weight:bold;">Your Reference Number:</p>
    <p
      style="text-align: center; background: lightblue; font-weight:bold;margin: 10px; font-size: 36px"
    >{{card_details.reference_no}}</p>
    <p style="font-weight:bold;text-align: left">General Guidelines:</p>
    <ul style="text-align: left">
      <li>Reference number can only be used once. If you made a short payment by mistake, do not try to correct it by making another bills payment with the same reference number.</li>
      <li>Amount is inclusive of convenience fee/ If you are paying for multiple reference numbers, pay separately for each reference number. Only one (1) transaction per reference number.</li>
      <li>The payment of fee is not a guarantee that the application will be granted. The processing of the application will still be subject to the evaluation of the concerned YMA personnel and its compliance with the pertinent laws, rules and regulations</li>
    </ul>
    <a-button type="primary" @click="close" block>CLOSE</a-button>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      card_details: {}
    }
  },
  computed: {
    card_head_style() {
      return { background: "#F2E9C8", "font-weight": "bold" };
    },
    card_body_style() {
      return { "text-align": "left" };
    }
  },
  created() {
      console.log('this.$route.query :', this.$route.query);
    this.card_details.mode = 0;
    this.card_details.reference_no = this.getReferenceNumber();
    this.card_details.sender = this.$route.query.sender;
    this.$store
      .dispatch("SUBMIT_ENROLLMENT", {
        details: this.$store.state.details,
        payments_details: this.card_details
      })
      .then(result => {
        console.log("Success enrollment");
      })
      .catch(err => {
        console.log("Submit ecpay enrollment err :", err);
      });
  },
  methods: {
    close() {
      this.$store.dispatch("CLOSE", {
        sender: this.$route.query.sender,
        postback: "CB_PAYMENT"
      });
    }
  }
};
</script>

<style>
</style>
