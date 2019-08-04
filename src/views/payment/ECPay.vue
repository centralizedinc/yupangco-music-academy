<template>
    <a-card title="Payment via ECPay">
        <p style="font-weight:bold;">
            Your Reference Number:
        </p>
        <p style="backgroundfont-weight:bold;margin: 10px; font-size: 36px">
            {{reference_number}}
        </p>
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
    computed: {
        reference_number(){
            var d = new Date()
            return d.getFullYear().toString() + (d.getMonth() + 1).toString() + this.random_number
        },
        random_number(){
            return Math.floor(Math.random() * 999);
        }
    },
    methods: {
        close(){
            this.$store.dispatch("RESET", {sender: this.$route.query.sender, postback: "CALLBACK_ECPAY"})
        }
    },
}
</script>

<style>

</style>
