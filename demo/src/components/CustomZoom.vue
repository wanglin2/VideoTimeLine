<template>
  <div class="container">
    <div class="timeShow">当前时间：{{ showTime }}</div>
    <div class="timeLine" ref="timeLine">
      <TimeLine
        ref="Timeline"
        :enableZoom="false"
        :enableDrag="false"
        :showDateAtZero="false"
        :initZoomIndex="11"
        :initTime="initTime"
        :customShowTime="customShowTime"
        :extendZOOM="extendZOOM"
        :formatTime="formatTime"
        :hoverTimeFormat="hoverTimeFormat"
        @click_timeline="click_timeline"
      ></TimeLine>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data() {
    return {
      time: Date.now(),
      initTime: dayjs().format('YYYY-MM-DD 12:00:00').valueOf(),
      // 扩展时间分辨率
      extendZOOM: [
        {
          zoom: 25,
          zoomHourGrid: 0.5
        }
      ]
    }
  },
  computed: {
    showTime() {
      return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    console.log(this.$refs.timeLine.getBoundingClientRect());
  },
  methods: {
    click_timeline(time, date) {
        this.time = time
    },
    // 格式化时间轴上显示的时间
    formatTime(time) {
      // 下一天的00:00显示24:00
      if (time.isAfter(dayjs().format('YYYY-MM-DD 23:59:59'))) {
        return '24:00'
      }
      if (
        time.hour() === 0 &&
        time.minute() === 0 &&
        time.millisecond() === 0
      ) {
        return time.format('HH:mm')
      }
    },
    // 格式化鼠标滑过显示的时间
    hoverTimeFormat(time) {
      // 小于今天，大于今天的时间不显示
      if (
        dayjs(time).isBefore(dayjs().format('YYYY-MM-DD 00:00:00')) ||
        dayjs(time).isAfter(dayjs().format('YYYY-MM-DD 23:59:59'))
      ) {
        return ''
      }
      return dayjs(time).format('HH:mm:ss')
    },
    // 自定义判断时间轴上是否显示某个日期时间
    customShowTime(date, zoomIndex) {
      // 当zoomIndex等于11，也就是等于我们开展的zoom时才自己处理
      if (zoomIndex === 11) {
        // 时间是2的倍数时才会显示
        return date.getHours() % 2 === 0 && date.getMinutes() === 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;

  .timeLine {
    height: 50px;
  }
}

.btns {
  margin: 10px 0;
  display: flex;
  justify-content: center;
}

.timeShow {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  user-select: none;
}
</style>
