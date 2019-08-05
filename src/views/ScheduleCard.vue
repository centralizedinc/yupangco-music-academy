<template>
  <div>
    <a-layout>
      <a-layout-content>
        <a-card title="Schedule" :bodyStyle="{ 'text-align': 'left'}">
          <div :style="{ border: '1px solid #d9d9d9', borderRadius: '4px' }">
            <a-calendar :fullscreen="false" @panelChange="changePanel" @change="selectDate"></a-calendar>
          </div>
          <a-list itemLayout="horizontal" :dataSource="schedule">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.description">
                <span slot="title" style="font-weight: bold">{{item.name}}</span>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
              <a-icon
                :type="item.selected ? 'minus-circle' : 'plus-circle'"
                class="pointer"
                @click="reserve(index)"
              />
              <!-- <a-icon type="minus-circle" class="pointer" v-else @click="unreserve(item)" /> -->
            </a-list-item>
          </a-list>
        </a-card>
      </a-layout-content>
      <a-layout-footer style="position: absolute; bottom: 0px; left: 0px; width: 100%;">
        <a-affix :offsetBottom="10">
          <div
            style="font-weight: bold; text-align: left; width: 100%"
          >Remaining number of lesson: {{lesson}}</div>
        </a-affix>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import schedules from "./schedules.json";

export default {
  data() {
    return {
      schedules,
      selected_date: null,
      lesson: 12
    };
  },
  computed: {
    schedule() {
      var scheds = [];
      console.log("this.selected_date :", this.selected_date);
      if (this.selected_date) {
        scheds = this.schedules.filter(x => {
          var d = new Date(x.date);
          var d2 = new Date(this.selected_date);
          return (
            d.getFullYear() === d2.getFullYear() &&
            d.getMonth() === d2.getMonth() &&
            d.getDate() === d2.getDate()
          );
        });
      }
      return scheds;
    }
  },
  methods: {
    changePanel(value, mode) {
      console.log("value :", value);
      console.log("mode :", mode);
    },
    selectDate(value) {
      this.selected_date = value.toDate();
      console.log("date value :", value.toDate());
    },
    reserve(index) {
      if (this.schedule[index].selected) this.lesson--;
      else this.lesson++;
      this.schedule[index].selected = !this.schedule[index].selected;
    }
  }
};
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
