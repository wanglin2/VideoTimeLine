一个基于Vue2的时间轴组件，一般用于监控视频的回放。

# 安装

```bash
npm i @wanglin1994/video-timeline
```

> 注意：源码未打包直接发布，有需要请自行配置打包文件。

# TimeLine 视频时间轴组件

## 安装

```bash
$ npm i @wanglin1994/video-timeline
```

## 引入

```js
import VideoTimeline from '@zf/video-timeline'
Vue.use(VideoTimeline)
```

## 基础用法

```vue
<template>
  <div class="container">
    <div class="timeShow">当前时间：{{showTime}}</div>
    <div class="timeLine">
        <TimeLine ref="Timeline" @timeChange="timeChange"></TimeLine>
    </div>
    <div class="btns">
        <el-button type="primary" @click="reRender">重新渲染</el-button>
        <el-button type="primary" @click="jump">跳转到2021-01-01零点</el-button>
        <el-select
            v-model="zoom"
            placeholder="请选择"
            style="width: 100px;margin: 0 10px;"
            @change="zoomChange"
        >
            <el-option
                v-for="item in zoomList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      // 基础用法
      time: Date.now(),
      zoom: 5,
      zoomList: ['半小时', '1小时', '2小时', '6小时', '12小时', '1天', '3天', '15天', '30天'].map((item, index) => {
        return {
          label: item,
          value: index
        }
      })
    }
  },
  computed: {
    // 基础用法
    showTime () {
      return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    // 基础用法
    setInterval(() => {
      this.time += 1000
      this.$refs.Timeline.setTime(this.time)
    }, 1000)
  },
  methods: {
    // 基础用法
    timeChange (t) {
      this.time = t
    },
    reRender () {
      this.initZoomIndex = 8
      this.$refs.Timeline.reRender()
    },
    jump () {
      this.$refs.Timeline.setTime('2021-01-01 00:00:00')
    },
    zoomChange (value) {
      this.$refs.Timeline.setZoom(value)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
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
```

## 显示时间段

```vue
<template>
  <div class="container">
    <div class="timeShow">当前时间：{{showTime2}}</div>
    <div class="timeLine">
        <TimeLine 
            ref="Timeline2" 
            :initTime="time2" 
            @timeChange="timeChange2" 
            :timeSegments="timeSegments" 
            @click_timeSegments="click_timeSegments"
        ></TimeLine>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      // 显示时间段
      time2: '2021-01-15 00:00:00',
      timeSegments: [
        {
          name: '时间段1',
          beginTime: new Date('2021-01-13 10:00:00').getTime(),
          endTime: new Date('2021-01-14 23:00:00').getTime(),
          color: '#FA3239',
          startRatio: 0.65,
          endRatio: 0.9
        },
        {
          name: '时间段2',
          beginTime: new Date('2021-01-15 02:00:00').getTime(),
          endTime: new Date('2021-01-15 18:00:00').getTime(),
          color: '#836ABB',
          startRatio: 0.65,
          endRatio: 0.9
        }
      ]
    }
  },
  computed: {
    // 显示时间段
    showTime2 () {
      return dayjs(this.time2).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    // 显示时间段
    setInterval(() => {
      this.time2 += 1000
      this.$refs.Timeline2.setTime(this.time2)
    }, 1000)
  },
  methods: {
    // 显示时间段
    timeChange2 (t) {
      this.time2 = t
    },
    click_timeSegments (arr) {
      alert('点击了：' + arr[0].name)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;

    .timeLine {
        height: 50px;
    }
}

.timeShow {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  user-select: none;
}
</style>
```

## 多个时间轴

当超过一个播放窗口时可以显示多个时间轴。

```vue
<template>
  <div class="container">
    <div class="timeShow">当前时间：{{showTime3}}</div>
    <div class="timeline3">
        <TimeLine 
            ref="Timeline3" 
            :initTime="time3" 
            @timeChange="timeChange3" 
            :timeSegments="timeSegments3" 
            @click_timeSegments="click_timeSegments3" 
            :windowList="windowList" 
            @click_window_timeSegments="click_window_timeSegments"
        ></TimeLine>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      // 多个时间轴
      time3: '2021-01-15 00:00:00',
      timeSegments3: [
        {
          name: '时间段1',
          beginTime: new Date('2021-01-13 10:00:00').getTime(),
          endTime: new Date('2021-01-14 23:00:00').getTime(),
          color: '#FA3239',
          startRatio: 0.65,
          endRatio: 0.9
        },
        {
          name: '时间段2',
          beginTime: new Date('2021-01-15 02:00:00').getTime(),
          endTime: new Date('2021-01-15 18:00:00').getTime(),
          color: '#836ABB',
          startRatio: 0.65,
          endRatio: 0.9
        }
      ],
      windowList: [
        {
          name: '窗口1',
          timeSegments: [
            {
              name: '窗口1的时间段1',
              beginTime: new Date('2021-01-13 10:00:00').getTime(),
              endTime: new Date('2021-01-14 23:00:00').getTime(),
              color: '#FA3239',
              startRatio: 0.1,
              endRatio: 0.9
            },
            {
              name: '窗口1的时间段2',
              beginTime: new Date('2021-01-12 18:00:00').getTime(),
              endTime: new Date('2021-01-13 00:00:00').getTime(),
              color: '#00AEFF',
              startRatio: 0.1,
              endRatio: 0.9
            }
          ]
        },
        {
          name: '窗口2',
          timeSegments: [
            {
              name: '窗口2的时间段1',
              beginTime: new Date('2021-01-15 02:00:00').getTime(),
              endTime: new Date('2021-01-15 18:00:00').getTime(),
              color: '#FFCC00',
              startRatio: 0.1,
              endRatio: 0.9
            }
          ]
        },
        {
          name: '窗口3'
        },
        {
          name: '窗口4'
        },
        {
          name: '窗口5'
        },
        {
          name: '窗口6'
        }
      ],
    }
  },
  computed: {
    // 多个时间轴
    showTime3 () {
      return dayjs(this.time3).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    // 多个时间轴
    setInterval(() => {
      this.time3 += 1000
      this.$refs.Timeline3.setTime(this.time3)
    }, 1000)
  },
  methods: {
    // 多个时间轴
    timeChange3 (t) {
      this.time3 = t
    },
    click_timeSegments3 (arr) {
      alert('点击了：' + arr[0].name)
    },
    click_window_timeSegments (data, index, item) {
      alert('点击了窗口时间轴的时间段：' + data[0].name)
    },
  }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;

    .timeline3 {
        height: 200px;
    }
}

.timeShow {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  user-select: none;
}
</style>
```

## 显示自定义元素

有时候会想在时间轴上显示一些自定义的东西，比如某个时间段显示一张图片之类的，这可以通过监听某个时间点的位置来实现。

```vue
<template>
  <div class="container">
    <div class="timeShow">当前时间：{{showTime4}}</div>
    <div class="timeLine4">
        <TimeLine ref="Timeline4" :initTime="time4"  :windowList="windowList4" @timeChange="timeChange4"></TimeLine>
    </div>
    <i class="icon h-icon-mark_f" ref="flagIcon" style="color: #E72528"></i>
    <i class="icon h-icon-car" ref="carIcon" style="color: #2196F3"></i>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      // 显示自定义元素
      time4: '2021-01-02 00:00:00',
      windowList4: [
        {
          name: '窗口1',
        },
        {
          name: '窗口2',
        },
        {
          name: '窗口3'
        },
        {
          name: '窗口4'
        },
        {
          name: '窗口5'
        },
        {
          name: '窗口6'
        }
      ],
    }
  },
  computed: {
    // 显示自定义元素
    showTime4 () {
      return dayjs(this.time4).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted () {
    // 显示自定义元素
    setInterval(() => {
      this.time4 += 1000
      this.$refs.Timeline4.setTime(this.time4)
    }, 1000)
    window.addEventListener('scroll', () => {
        this.$refs.Timeline4.updateWatchTime()
    })
    this.$refs.Timeline4.watchTime('2021-01-01 23:30:00', (x, y) => {
        if (x === -1 || y === -1) {
            this.$refs.flagIcon.style.display = 'none'
        } else {
            this.$refs.flagIcon.style.display = 'block'
            this.$refs.flagIcon.style.left = x + 'px'
            this.$refs.flagIcon.style.top = y + 24 + 'px'
        }
    })
    this.$refs.Timeline4.watchTime('2021-01-02 02:30:00', (x, y) => {
        if (x === -1 || y === -1) {
            this.$refs.carIcon.style.display = 'none'
        } else {
            this.$refs.carIcon.style.display = 'block'
            this.$refs.carIcon.style.left = x + 'px'
            this.$refs.carIcon.style.top = y + 'px'
        }
    }, 2)
  },
  methods: {
    // 显示自定义元素
    timeChange4 (t) {
      this.time4 = t
    }
  }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;

    .timeLine4 {
        height: 200px;
    }
}

.timeShow {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  user-select: none;
}

.icon {
  position: fixed;
  font-size: 30px;
}
</style>
```

## API

### 属性

| 参数  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| initTime | 初始时间，中点所在的时间，默认为当天0点。可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |
| timeRange | 中间刻度所允许显示的时间范围，即当前时间的限定范围，对象类型，字段见表1-1 | Object | —      |  |
| initZoomIndex | 初始的时间分辨率，数字索引，时间分辨率数组为：['半小时', '1小时', '2小时', '6小时', '12小时', '1天', '3天', '15天', '30天'] | Number | —      | 5 |
| showCenterLine | 是否显示中间的竖线 | Boolean | —      | true |
| centerLineStyle | 中间竖线的样式，对象类型，字段见表1-2 | Object | —      |  |
| textColor | 日期时间文字的颜色 | String | —      | rgba(151,158,167,1) |
| hoverTextColor | 鼠标滑过显示的时间文字颜色 | String | —      | rgb(194, 202, 215) |
| lineColor | 时间刻度的颜色 | String | —      | rgba(151,158,167,1) |
| lineHeightRatio | 时间刻度高度占时间轴高度的比例，对象格式，字段见表1-3 | Object | —      |  |
| showHoverTime | 鼠标滑过时是否显示实时所在的时间 | Boolean | —      | true |
| timeSegments | 要显示的时间颜色段，对象数组类型，对象字段见表1-4 | Array | —      | [] |
| backgroundColor | 时间轴背景颜色 | String | —      | #262626 |
| enableZoom | 是否允许鼠标滚动切换时间分辨率 | Boolean | —      | true |
| enableDrag | 是否允许拖动 | Boolean | —      | true |
| windowList | 播放窗口列表，播放窗口数量大于1的话可以配置此项，会显示和窗口对应数量的时间轴，只有一个窗口的话请直接使用基本时间轴，对象数组类型，对象字段见表1-5 | Array | —      | [] |
| baseTimeLineHeight | 当显示windowList时的基础时间轴高度 | Number | —      | 50 |
| initSelectWindowTimeLineIndex | 初始选中的窗口时间轴索引 | Number | —      | -1 |

#### 表1-1 timeRange对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| start | 允许显示的最小时间，可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |
| end | 允许显示的最大时间，可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |

#### 表1-2 centerLineStyle对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| width | 线的宽度，单位px | Number | —      | 2 |
| color | 线的颜色 | String | —      | #fff |

#### 表1-3 lineHeightRatio对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| date | 0点时的日期线段高度 | Number | —      | 0.3 |
| time | 显示时间的线段高度 | Number | —      | 0.2 |
| none | 不显示时间的线段高度 | Number | —      | 0.1 |
| hover | 鼠标滑过时显示的时间段高度 | Number | —      | 0.3 |

#### 表1-4 timeSegments数组的对象元素的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| beginTime | 起始时间戳，必填 | Number | —      |  |
| endTime | 结束时间戳，必填 | Number | —      |  |
| color | 颜色，必填 | String | —      |  |
| startRatio | 高度的起始比例，即top=时间轴高度*startRatio | Number | —      | 0.6 |
| endRatio | 高度的结束比例，即bottom=时间轴高度*endRatio | Number | —      | 0.9 |

#### 表1-5 windowList数组的对象元素的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| timeSegments | 要显示的时间段，对象数组，对象字段见表1-4 | Array | —      | [] |
可以添加你需要的其他任意字段

### 事件

| 事件  | 说明                               | 回调函数参数 |
| ----- | ---------------------------------- | ------ |
| timeChange | 当前时间切换事件 | currentTime（当前时间，时间戳格式） |
| dragTimeChange | 拖动时间条结束后的事件 | currentTime（当前时间，时间戳格式） |
| mousedown | 鼠标按下事件 | e（事件对象） |
| mouseup | 鼠标松开事件 | e（事件对象） |
| click_timeSegments | 点击到了基础时间轴里的时间段时触发 | timeSegments（点击到的时间段，数组类型） |
| click_window_timeSegments | 点击到了窗口时间轴里的时间段时触发 | timeSegments（点击到的时间段，数组类型）、index（时间轴索引）、item（时间轴数据） |
| change_window_time_line | 点击窗口时间轴进行切换选中时触发 | index（时间轴索引）、item（时间轴数据） |

### 方法

| 方法名  | 说明                               | 参数 |
| ----- | ---------------------------------- | ------ |
| updateWatchTime | 手动更新观察的时间位置，比如页面滚动后时间轴的整体位置变化了需要调用，如果没有显示自定义元素时无需调用 |  |
| reRender | 重新渲染 |  |
| setTime | 设置当前时间 | t（数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00） |
| setZoom | 设置分辨率 | index（分辨率索引） |
| watchTime | 设置要观察的时间点，会返回该时间点的实时位置，可以根据该位置来设置一些自定义元素的位置，位置为相对于浏览器可视窗口的位置 | time（要观察的时间，数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00）, callback（时间点位置变化时会调用，回调参数为x水平位置、y重置位置，单位px）, windowTimeLineIndex（如果自定义元素是要显示到某个窗口时间轴里的话，可以通过该参数来指定第几个时间轴，数字索引，从1开始） |
| onResize | 如果时间轴所在的容器尺寸变化了需要调用该方法来适应 |  |
