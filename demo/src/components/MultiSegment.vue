<template>
    <div class="container">
        <div class="timeShow">当前时间：{{ showTime3 }}</div>
        <div class="timeline3">
            <TimeLine ref="Timeline3" :initTime="time3" @timeChange="timeChange3" :timeSegments="timeSegments3"
                @click_timeSegments="click_timeSegments3" :windowList="windowList"
                @click_window_timeSegments="click_window_timeSegments"></TimeLine>
        </div>
    </div>
</template>
  
<script>
import dayjs from 'dayjs'

export default {
    data() {
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
        showTime3() {
            return dayjs(this.time3).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted() {
        // 多个时间轴
        setInterval(() => {
            this.time3 += 1000
            this.$refs.Timeline3.setTime(this.time3)
        }, 1000)
    },
    methods: {
        // 多个时间轴
        timeChange3(t) {
            this.time3 = t
        },
        click_timeSegments3(arr) {
            alert('点击了：' + arr[0].name)
        },
        click_window_timeSegments(data, index, item) {
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