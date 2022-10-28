<template>
    <div class="container">
        <div class="timeShow">当前时间：{{ showTime4 }}</div>
        <div class="timeLine4">
            <TimeLine ref="Timeline4" :initTime="time4" :windowList="windowList4" @timeChange="timeChange4"></TimeLine>
        </div>
        <i class="icon el-icon-s-flag" ref="flagIcon" style="color: #E72528"></i>
        <i class="icon el-icon-bicycle" ref="carIcon" style="color: #2196F3"></i>
    </div>
</template>
  
<script>
import dayjs from 'dayjs'

export default {
    data() {
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
        showTime4() {
            return dayjs(this.time4).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted() {
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
        timeChange4(t) {
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