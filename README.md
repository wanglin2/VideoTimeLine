一个基于Vue2的时间轴组件，一般用于监控视频的回放。

# 文章

[手摸手带你实现一个时间轴组件](https://juejin.cn/post/7157917487953084429)

# 本地开发

```bash
git clone https://github.com/wanglin2/VideoTimeLine.git
cd package
npm i
npm link
cd ..
cd demo
npm i
npm link @wanglin1994/video-timeline
npm run serve
```

# 安装

```bash
npm i @wanglin1994/video-timeline
```

> 注意：源码未打包直接发布，有需要请自行配置打包文件。

# 引入

```js
import VideoTimeline from '@wanglin1994/video-timeline'
Vue.use(VideoTimeline)
```

# 基础用法

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

# 显示时间段

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

# 多个时间轴

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

# 显示自定义元素

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

# API

## 属性

| 参数  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| initTime | 初始时间，中点所在的时间，默认为当天0点。可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |
| timeRange | 中间刻度所允许显示的时间范围，即当前时间的限定范围，对象类型，字段见表1-1 | Object | —      |  |
| initZoomIndex | 初始的时间分辨率，数字索引，时间分辨率数组为：['半小时', '1小时', '2小时', '6小时', '12小时', '1天', '3天', '15天', '30天', '365天', '3650天'] | Number | —      | 5 |
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
| maxClickDistance（v0.1.2+） | 鼠标按下和松开的距离小于该值认为是点击事件 | Number | —      | 3 |
| roundWidthTimeSegments（v0.1.6+） | 绘制时间段时对计算出来的坐标进行四舍五入，可以防止相连的时间段绘制出来有间隔的问题 | Boolean | —      | true |
| customShowTime（v0.1.7+） | 自定义显示哪些时间，详细请阅读下方【属性详解1-1】 | Function | — |  |
| hoverTimeFormat（v0.1.9+） | 格式化鼠标滑过时间，函数类型，接收一个`time`参数，代表当前鼠标所在的时间戳，函数需要返回一个格式化后的时间字符串，默认显示的时间格式为`YYYY-MM-DD HH:mm:ss` | Function | — | |
| showDateAtZero（v0.1.9+） | `0`点处是否显示日期，时间轴上默认`0`点处显示的日期，需要显示成时间，那么就需要设为`false`，然后通过`formatTime`属性自定义格式化 | Boolean | — | true |
| formatTime（v0.1.9+） | 格式化时间轴显示时间，默认规则是`年`模式`YYYY`、`年月`模式`YYYY-MM`、`0`点`MM-DD`、其他`HH:mm`，如果想自定义，比如`0`点还是显示时间，不显示日期，就可以通过该函数进行格式化。如果该函数返回值为空值，那么还会走内部规则。 | Function | — |  |
| extendZOOM（v0.1.9+） | 扩展ZOOM列表，详细请参考下方【属性详解1-2】 | Array | — | [] |

### 属性详解1-1 customShowTime的用法

>  该属性在v0.1.7+版本开始支持

当你在使用本组件的时候可能会遇到一个很常见的问题，比如容器的宽度很小，然后时间段展示的又是几天、甚至半个月的时间，那么很容易遇到时间段里面时间都挤在一起的问题，比如这个[issue](https://github.com/wanglin2/VideoTimeLine/issues/3)，其实组件内部是内置了一些判断方法，比如在`3天`的时间分辨率下，对应的`initZoomIndex=6`，对应关系可参考上方属性表格，那么就会使用`3天`的这个判断规则，如下：

```js
date => { // 每三小时显示
    return date.getHours() % 3 === 0 && date.getMinutes() === 0
}
```

意思是显示`3`的倍数的整点小时，那么当你容器宽度不够，且时间分辨率设置的比较大，那么时间就会挤在一起看不清，这时候你就可以通过`customShowTime`属性传入自定义的判断方法，这个方法接收两个参数：

- `date`：是否要显示的时间，可以根据该时间进行判断是否要显示这个时间
- `currentZoomIndex`：当前的时间分辨率，比如`3天`对应的就是`6`，对应关系可参考上方属性表格

那么如果内置的规则不满足的话，就可以自定义，比如`3天`的时间分辨率下我想只显示`12`倍数的小时，可以这么做：

```html
<TimeLine :customShowTime="customShowTime""></TimeLine>
```

```js
export default {
    methods: {
        customShowTime(date, zoomIndex) {
            if (zoomIndex === 6) {
                return date.getHours() % 12 === 0 && date.getMinutes() === 0
            }
        }
    }
}
```

函数返回值需要注意一下，如果要显示返回`true`，如果不显示返回`false`，如果不处理，仍旧交给内部规则，返回其他值。



### 属性详解1-2  extendZOOM的用法

该属性用于扩展`ZOOM`列表，即时间分辨率，内置了`11`个时间分辨率，可以参考上方表格`initZoomIndex`属性，如果内置的时间分辨率满足不了你，那么可以通过该属性进行扩展。

`extendZOOM`为数组类型，数组的每一项为：

```js
{
    zoom: 26, // 时间分辨率，整个时间轴表示的时间范围，单位：小时
    zoomHourGrid: 0.5, //时间分辨率对应的每格小时数，即时间轴上最小格代表多少小时
    mobileZoomHourGrid: 2, // 手机模式下时间分辨率对应的每格小时数，如果不用适配手机端，可以不用设置
}
```

这个数组的数据会追加到内部的`ZOOM`数组，对应的`zoomIndex`往后累加即可，内部一共有`11`个`zoom`，那么你追加了一项，对应的`zoomIndex`为11，因为是从零开始计数。

同时你需要传递`customShowTime`属性来自定义控制时间显示，否则会报错，因为内置的规则只有`11`个。

接下来看一个案例。

> 只显示当天的时间， 从00:00:00到23:59:59，详细请看这个[issue](https://github.com/wanglin2/VideoTimeLine/issues/6)

首先默认的`initZoomIndex`为`5`，即`1`天，刚好满足，不用修改，然后将`enableZoom`设为`false`，不允许修改时间分辨率；将`enableDrag`设为`false`，不允许拖拽； 然后再将`initTime`设为当天的`12:00:00`，那么刚好整个时间轴显示的就是当前的时间，到这里，似乎就可以了。但是实际上会存在一些问题，如前面的`issue`中所示。

问题1：`0`点处显示的是日期，需要改成时间

很简单，将`showDateAtZero`设为`false`，`0`点就不会显示日期了

问题2：鼠标滑过显示的还是带日期的，这个好办，通过`hoverTimeFormat`属性自定义格式化规则即可：

```js
hoverTimeFormat(time) {
    // 小于今天，大于今天的时间不显示
    if (
        dayjs(time).isBefore(dayjs().format('YYYY-MM-DD 00:00:00')) ||
        dayjs(time).isAfter(dayjs().format('YYYY-MM-DD 23:59:59'))
    ) {
        return ''
    }
    return dayjs(time).format('HH:mm:ss')
}
```

问题3：左右两侧的时间显示不出来

即`0`点和`24`点的时间刚好是两端，因实现原理问题，无法显示，怎么办呢，其实很简单，假如时间轴表示的时间范围为`25`小时，那么左右两端不就会各多出半小时的时间吗，这个空间足够显示时间了，但是内部的时间分辨率没有`25`小时的，这时就需要扩展时间分辨率了：

```js
extendZOOM: [
    {
        zoom: 25,
        zoomHourGrid: 0.5
    }
]
```

扩展了`extendZOOM`，`customShowTime`不能少，否则会报错：

```js
customShowTime(date, zoomIndex) {
    // 当zoomIndex等于11，也就是等于我们开展的zoom时才自己处理
    if (zoomIndex === 11) {
        // 时间是2的倍数时才会显示
        return date.getHours() % 2 === 0 && date.getMinutes() === 0
    }
}
```

到这里，你还会发现一个问题，`24`点实际上是下一天的`0`点，所以显示的是`00:00`，这样可能不符合我们的需求，这时我们可以通过`formatTime`来格式化时间轴上的时间显示，判断是下一天的`0`点，那么就改成`24:00`：

```js
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
}
```

完整代码请参考：[CustomZoom.vue](https://github.com/wanglin2/VideoTimeLine/blob/main/demo/src/components/CustomZoom.vue)。



### 表1-1 timeRange对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| start | 允许显示的最小时间，可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |
| end | 允许显示的最大时间，可以传递数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00 | Number/String | —      |  |

### 表1-2 centerLineStyle对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| width | 线的宽度，单位px | Number | —      | 2 |
| color | 线的颜色 | String | —      | #fff |

### 表1-3 lineHeightRatio对象的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| date | 0点时的日期线段高度 | Number | —      | 0.3 |
| time | 显示时间的线段高度 | Number | —      | 0.2 |
| none | 不显示时间的线段高度 | Number | —      | 0.1 |
| hover | 鼠标滑过时显示的时间段高度 | Number | —      | 0.3 |

### 表1-4 timeSegments数组的对象元素的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| beginTime | 起始时间戳，必填 | Number | —      |  |
| endTime | 结束时间戳，必填 | Number | —      |  |
| color | 颜色，必填 | String | —      |  |
| startRatio | 高度的起始比例，即top=时间轴高度*startRatio | Number | —      | 0.6 |
| endRatio | 高度的结束比例，即bottom=时间轴高度*endRatio | Number | —      | 0.9 |

> 从v0.1.8+版本开始，时间段可以只传一个beginTime，绘制一根宽度为1px的线段

### 表1-5 windowList数组的对象元素的字段格式

| 字段名  | 说明                               | 类型   | 可选值 | 默认值 |
| ----- | ---------------------------------- | ------ | ------ | ------ |
| timeSegments | 要显示的时间段，对象数组，对象字段见表1-4 | Array | —      | [] |
可以添加你需要的其他任意字段

## 事件

| 事件  | 说明                               | 回调函数参数 |
| ----- | ---------------------------------- | ------ |
| timeChange | 当前时间切换事件 | currentTime（当前时间，时间戳格式） |
| dragTimeChange | 拖动时间条结束后的事件 | currentTime（当前时间，时间戳格式） |
| mousedown | 鼠标按下事件 | e（事件对象） |
| mouseup | 鼠标松开事件 | e（事件对象） |
| click_timeSegments | 点击到了基础时间轴里的时间段时触发 | timeSegments（点击到的时间段，数组类型）、time（v0.1.10+，点击位置对应的时间戳）、 date（v0.1.10+，点击位置对应的日期时间字符串）、 x（v0.1.10+，点击位置相对时间轴左侧的距离） |
| click_window_timeSegments | 点击到了窗口时间轴里的时间段时触发 | timeSegments（点击到的时间段，数组类型）、index（时间轴索引）、item（时间轴数据） |
| change_window_time_line | 点击窗口时间轴进行切换选中时触发 | index（时间轴索引）、item（时间轴数据） |
| click_timeline（v0.1.2+） | 时间轴的点击事件 | time（点击位置对应的时间戳）、 date（点击位置对应的日期时间字符串）、 x（点击位置相对时间轴左侧的距离） |

## 方法

| 方法名  | 说明                               | 参数 |
| ----- | ---------------------------------- | ------ |
| updateWatchTime | 手动更新观察的时间位置，比如页面滚动后时间轴的整体位置变化了需要调用，如果没有显示自定义元素时无需调用 |  |
| reRender | 重新渲染 |  |
| setTime | 设置当前时间 | t（数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00） |
| setZoom | 设置分辨率 | index（分辨率索引） |
| watchTime | 设置要观察的时间点，会返回该时间点的实时位置，可以根据该位置来设置一些自定义元素的位置，位置为相对于浏览器可视窗口的位置 | time（要观察的时间，数字类型的时间戳或字符串类型的时间，如：2020-12-19 18:30:00）, callback（时间点位置变化时会调用，回调参数为x水平位置、y重置位置，单位px）, windowTimeLineIndex（如果自定义元素是要显示到某个窗口时间轴里的话，可以通过该参数来指定第几个时间轴，数字索引，从1开始） |
| onResize | 如果时间轴所在的容器尺寸变化了需要调用该方法来适应 |  |
