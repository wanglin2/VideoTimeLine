<template>
    <div class="container">
        <div class="timeShow">当前时间：{{ showTime2 }}</div>
        <div class="timeLine">
            <TimeLine ref="Timeline2" :initTime="time2" @timeChange="timeChange2" :timeSegments="timeSegments"
                @click_timeSegments="click_timeSegments"></TimeLine>
        </div>
    </div>
</template>
  
<script>
import dayjs from 'dayjs'

export default {
    data() {
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
        showTime2() {
            return dayjs(this.time2).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted() {
        // 显示时间段
        setInterval(() => {
            this.time2 += 1000
            this.$refs.Timeline2.setTime(this.time2)
        }, 1000)
    },
    methods: {
        // 显示时间段
        timeChange2(t) {
            this.time2 = t
        },
        click_timeSegments(arr) {
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