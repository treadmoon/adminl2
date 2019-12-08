<template>
  <div class="dp-wp">
    <div class="head">数据报告</div>
    <div class="factor">
      <div class="datebox">
        <span>日期范围：</span>
        <el-date-picker
          size="mini"
          v-model="dateval"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="tableinfo">
      <div class="main-box">
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="haed">消耗（元）</div>
            <div class="info">0.00元</div>
          </el-col>
          <el-col :span="8">
            <div class="haed">点击数</div>
            <div class="info">0次</div>
          </el-col>
          <el-col :span="8">
            <div class="haed">展示数</div>
            <div class="info">0次</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="chart-wp">
      <div id="myChart" class="chart-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        dateval:[]
    };
  },
  created() {},
  mounted() {
      this.setChart()   
  },
  methods: {
    setChart() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["点击数", "展示数", "消耗"],
          bottom: "10",
          icon:'roundRect'
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "0",
            "20191112",
            "20191113",
            "20191114",
            "20191115",
            "20191116",
            "20191117",
            "20191118"
          ]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "点击数",
            type: "line",
            stack: "总量",
            data: [null, 120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "展示数",
            type: "line",
            stack: "总量",
            data: [null, 220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "消耗",
            type: "line",
            stack: "总量",
            data: [null, 150, 232, 201, 154, 190, 330, 410]
          }
        ]
      });
    }
  }
};
</script>

<style scoped lang="less">
.dp-wp {
  .head {
    font-size: 17px;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
  }
  .factor {
    margin: 20px auto;
    display: table;
    width: 100%;
    .datebox {
      float: right;
    }
  }
  .tableinfo {
    padding: 0 150px;
    margin: 50px 0;
    .main-box {
      margin: 0 auto;
      .haed {
        border: 1px solid #ccc;
        height: 52px;
        line-height: 52px;
        padding: 0 15px;
      }
      .info {
        height: 52px;
        line-height: 52px;
        border: 1px solid #ccc;
        padding: 0 15px;
        border-top: none;
      }
    }
  }
  .chart-wp {
    .chart-box {
      width: 800px;
      height: 460px;
      margin: auto;
    }
  }
}
</style>
