<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from "vue";

const chartRef = ref(null)
let echartClient = null
onMounted(() => {
  initChart()
})
function initChart() {
  echartClient = echarts.init(chartRef.value)

  echartClient.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['入金', '买币', '卖币'],
      icon: "roundRect",
      left: '4%',
      bottom: '3%'
    },
    grid: {
      left: '4%',
      right: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '入金',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '买币',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '卖币',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
    ]

  })
}
</script>

<template>
  <el-card class="mt-4">
    <template #header>
      <div class="flex justify-between">
        <div class="text-xl">入金量（24小时）</div>
        <div>
          <el-button type="primary" size="small">今日</el-button>
          <el-button size="small">本周</el-button>
          <el-button size="small">本月</el-button>
        </div>
      </div>

    </template>
    <div class="chart-box" ref="chartRef"></div>
  </el-card>

</template>

<style scoped>
.chart-box {
  height: 600px;
}
</style>
