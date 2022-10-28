<template>
    <TimeLine ref="Timeline" :enableZoom="false" :initZoomIndex="9" :timeSegments="timeSegments"></TimeLine>
</template>

<script>
export default {
    data() {
        return {
            timeSegments: [
                {
                    name: '时间段1',
                    beginTime: new Date('2021-01-13 10:00:00').getTime(),
                    endTime: new Date('2025-01-14 23:00:00').getTime(),
                    color: '#FA3239',
                    startRatio: 0.65,
                    endRatio: 0.9
                },
                {
                    name: '时间段2',
                    beginTime: new Date('2008-01-01 00:00:00').getTime(),
                    endTime: new Date('2021-01-15 18:00:00').getTime(),
                    color: '#836ABB',
                    startRatio: 0.65,
                    endRatio: 0.9
                }
            ]
        }
    }
}
</script>

<style>

</style>
