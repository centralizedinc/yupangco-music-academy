<template>
  <a-card
    :title="`🎸 GUITAR LESSONS – ${titles[level]} LEVEL`"
    headStyle="background: #F2E9C8;font-weight:bold;"
    bodyStyle="text-align: left"
  >
    <a-row>
      <a-col :span="24" v-if="level===1||level===2">
        <i>
          <b>Reminder:</b>
          <br />Upon enrolling, students must be qualified for this level.
        </i>
        <div v-for="(item, index) in checklist[level]" :key="index">
          <span style="color: red">*</span>
          {{item}}
          <br/>
        </div>
      </a-col>
      <a-col :span="24">
        <br />
        <span style="padding-right: 5px">Choose number of lessons:</span>
        <a-button
          style="margin-right: 10px"
          v-for="(item, index) in lessons"
          :key="index"
          @click="updateLesson(index)"
          :type="$store.state.lesson===index?'primary':'default'"
        >{{item}}</a-button>
      </a-col>
      <a-col :span="24" v-if="amount">
        <br />
        <div style="font-size: 20px;">
          Service Fee:
          <span class="price" style="font-size: 22px;">₱ {{amount}}</span>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      titles: ["PRIMARY", "INTERMEDIATE", "ADVANCE"],
      checklist: [
        [],
        [
          "Guitar Parts,Tuning",
          "Rudiments,Positioning",
          "Right hand use of rest & free stroke,Left hand Thumb position",
          "Chromatic scales & arpeggios"
        ],
        [
          "chording",
          "arpeggiation",
          "passing chords",
          "scales",
          "accompaniment",
          "improvisation",
          "melodic reading",
          "development of personal style"
        ]
      ],
      lessons: [12, 24, 48],
      amounts: [
        {
          level: 0,
          lesson: 0,
          cost: "10,000"
        },
        {
          level: 0,
          lesson: 1,
          cost: "19,500"
        },
        {
          level: 0,
          lesson: 2,
          cost: "38,500"
        },
        {
          level: 1,
          lesson: 0,
          cost: "9,500"
        },
        {
          level: 1,
          lesson: 1,
          cost: "18,500"
        },
        {
          level: 1,
          lesson: 2,
          cost: "36,500"
        },
        {
          level: 2,
          lesson: 0,
          cost: "10,500"
        },
        {
          level: 2,
          lesson: 1,
          cost: "20,500"
        },
        {
          level: 2,
          lesson: 2,
          cost: "40,500"
        }
      ]
    };
  },
  computed: {
    amount() {
      var amount = this.amounts.find(
        x => x.level === this.level && x.lesson === this.$store.state.lesson
      );
      return amount && amount.cost ? amount.cost : null;
    },
    level() {
      return parseInt(this.$route.query.level);
    }
  },
  methods: {
    updateLesson(index) {
      this.$store.commit("SET_LESSON", index);
    }
  }
};
</script>

<style>
.price {
  font-weight: bold;
  font-size: 16px;
}
</style>
