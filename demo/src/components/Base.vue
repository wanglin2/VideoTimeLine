<template>
    <div class="container">
        <div class="timeShow">当前时间：{{ showTime }}</div>
        <div class="timeLine">
            <TimeLine ref="Timeline" @timeChange="timeChange"></TimeLine>
        </div>
        <div class="btns">
            <el-button type="primary" @click="reRender">重新渲染</el-button>
            <el-button type="primary" @click="jump">跳转到2021-01-01零点</el-button>
            <el-select v-model="zoom" placeholder="请选择" style="width: 100px;margin: 0 10px;" @change="zoomChange">
                <el-option v-for="item in zoomList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
  
<script>
import dayjs from 'dayjs'

export default {
    data() {
        return {
            // 基础用法
            time: Date.now(),
            zoom: 5,
            zoomList: ['半小时', '1小时', '2小时', '6小时', '12小时', '1天', '3天', '15天', '30天', '1年', '10年'].map((item, index) => {
                return {
                    label: item,
                    value: index
                }
            })
        }
    },
    computed: {
        // 基础用法
        showTime() {
            return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    mounted() {
        // 基础用法
        setInterval(() => {
            this.time += 1000
            this.$refs.Timeline.setTime(this.time)
        }, 1000)
    },
    methods: {
        // 基础用法
        timeChange(t) {
            this.time = t
        },
        reRender() {
            this.initZoomIndex = 8
            this.$refs.Timeline.reRender()
        },
        jump() {
            this.$refs.Timeline.setTime('2021-01-01 00:00:00')
        },
        zoomChange(value) {
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