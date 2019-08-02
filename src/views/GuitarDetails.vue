<template>
  <a-card :title="`🎸 GUITAR LESSONS – ${titles[level]} LEVEL`">
    <a-row>
      <a-col :span="24">
        <div v-if="level===0">
          <p class="price">Starts at ₱10,000.00</p>
          <br />
          <br />
          <p>Gain skills with our guitar playing lessons from chord playing to basic finger styles</p>
          <a-list size="small" :dataSource="primary_checklist">
            <a-list-item slot="renderItem" slot-scope="item">✔️ {{item}}</a-list-item>
          </a-list>
        </div>
        <div v-else-if="level===1">
          <p class="price">Starts at ₱9,500.00</p>
          <br />
          <br />
          <p>Development of progress on guitar playing with emphasis on increased skills in chording, arpeggiation, passing chords, scales, accompaniment, improvisation, melodic reading, and development of personal style.</p>
          <br />
          <br />
          <b>
            <i>Reminder:</i>
          </b>
          <br />
          <i>Upon enrolling, students enrolled in this level must visit any YMA School Centers and undergo a skill assessment procedure to determine if he/she is qualified for this level.</i>
        </div>
        <div v-else-if="level===2">
          <p class="price">Starts at ₱10,500.00</p>
          <br />
          <br />
          <p>At this level we start to see faster Alternate Picking, more complex rhythmic figures such as galloping and triplets, along with some more complex chord shapes.</p>
          <br />
          <br />
          <p>This level emphasizes the development of style, articulation, dynamics, rhythmic ability and skills inherent to performance. Students will receive guidance and direction in solving problems related to playing the guitar on an advanced level and will learn many of the different styles, skills and techniques required to become a successful guitarist.</p>
          <br />
          <br />
          <b>
            <i>Reminder:</i>
          </b>
          <br />
          <i>Upon enrolling, students enrolled in this level must visit any YMA School Centers and undergo a skill assessment procedure to determine if he/she is qualified for this level.</i>
        </div>
      </a-col>
      <a-col :span="24">
        <a-divider></a-divider>
      </a-col>
      <a-col :span="24">
        <a-button
          v-for="(item, index) in lessons"
          :key="index"
          @click="lesson=index"
          :type="lesson===index?'primary':'ghost'"
        >{{item}}</a-button>
      </a-col>
      <a-col :span="24" v-if="amount">
        <span class="price">₱{{amount}}</span>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      level: null,
      titles: ["PRIMARY", "INTERMEDIATE", "ADVANCE"],
      primary_checklist: [
        "Guitar Parts,Tuning",
        "Rudiments,Positioning",
        "Right hand use of rest & free stroke,Left hand Thumb position",
        "Chromatic scales & arpeggios"
      ],
      lessons: [12, 24, 48],
      lesson: null,
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
  created() {
    console.log("this.$route.query :", this.$route.query);
    this.level = this.$route.query.level;
  },
  computed: {
    amount() {
      var amount = this.amounts.find(
        x => x.level === this.level && x.lesson === this.lesson
      );
      return amount;
    }
  }
};
</script>

<style>
.price {
  font-weight: bold;
  font-size: 18px;
}
</style>
