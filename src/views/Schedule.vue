<template>
  <div>
    <a-card title="Schedule" v-if="!show_schedule">
      <p style="text-align: left">
        Input your reference number:
        <a-input style="width: 100%;" v-model="ref_no" />
      </p>
      <a-button type="primary" block @click="submit">Submit</a-button>
    </a-card>
    <schedule-card v-else />
  </div>
</template>

<script>
import ScheduleCard from './ScheduleCard'
export default {
    components: {
        ScheduleCard
    },
  data() {
    return {
      ref_no: null,
      show_schedule: false
    };
  },
  methods: {
      submit(){
          this.show_schedule = true;
      }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
