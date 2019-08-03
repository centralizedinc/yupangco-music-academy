<template>
  <a-card
    :title="`🎸 GUITAR LESSONS – ${titles[level]} LEVEL`"
    :headStyle="card_head_style"
    :bodyStyle="card_body_style"
  >
    <img :src="images[level]" slot="cover" />
    <a-row>
      <a-col :span="24">
        <div v-if="level===0">
          <p class="price">Starts at ₱10,000.00</p>
          <p>Gain skills with our guitar playing lessons from chord playing to basic finger styles</p>
          <p v-for="(item, index) in primary_checklist" :key="index">✔️ {{item}}</p>
        </div>
        <div v-else-if="level===1">
          <p class="price">Starts at ₱9,500.00</p>
          <p>Development of progress on guitar playing with emphasis on increased skills in chording, arpeggiation, passing chords, scales, accompaniment, improvisation, melodic reading, and development of personal style.</p>
          <b>
            <i>Reminder:</i>
          </b>
          <br />
          <i>Upon enrolling, students enrolled in this level must visit any YMA School Centers and undergo a skill assessment procedure to determine if he/she is qualified for this level.</i>
        </div>
        <div v-else-if="level===2">
          <p class="price">Starts at ₱10,500.00</p>
          <p>At this level we start to see faster Alternate Picking, more complex rhythmic figures such as galloping and triplets, along with some more complex chord shapes.</p>
          <p>This level emphasizes the development of style, articulation, dynamics, rhythmic ability and skills inherent to performance. Students will receive guidance and direction in solving problems related to playing the guitar on an advanced level and will learn many of the different styles, skills and techniques required to become a successful guitarist.</p>
          <b>
            <i>Reminder:</i>
          </b>
          <br />
          <i>Upon enrolling, students enrolled in this level must visit any YMA School Centers and undergo a skill assessment procedure to determine if he/she is qualified for this level.</i>
        </div>
      </a-col>
      <a-col :span="24">
        <br />
        <span style="padding-right: 5px">Choose number of lessons:</span>
        <br />
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
      images: [
        "http://yupangcomusicacademy.com/wp-content/uploads/2017/05/guitar-primary-1.jpg",
        "http://yupangcomusicacademy.com/wp-content/uploads/2017/05/guitar-intermediate-2.jpg",
        "http://yupangcomusicacademy.com/wp-content/uploads/2017/05/guitar-advance.jpg"
      ],
      primary_checklist: [
        "Guitar Parts,Tuning",
        "Rudiments,Positioning",
        "Right hand use of rest & free stroke,Left hand Thumb position",
        "Chromatic scales & arpeggios"
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
    level() {
      return parseInt(this.$route.query.level);
    },
    amount() {
      var amount = this.amounts.find(
        x => x.level === this.level && x.lesson === this.$store.state.lesson
      );
      return amount && amount.cost ? amount.cost : null;
    },
    card_head_style() {
      return { background: "#F2E9C8", "font-weight": "bold" };
    },
    card_body_style() {
      return { "text-align": "left" };
    }
  },
  methods: {
    updateLesson(index) {
      console.log("update lesson");
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
