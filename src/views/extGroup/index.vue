<template>
  <div class="extplay-wp">
    <div class="status-info">
      <p class="status-title">推广账户：正常生效</p>
      <p class="status-list">
        <span>账户余额：888.00元</span>
        <span>账户预算：2000.00元</span>
        <span>今日消耗：88.00元</span>
        <span>今日点击：58次</span>
        <span>昨日消耗：188.00元</span>
        <span>昨日点击：158次</span>
      </p>
    </div>
    <div class="form-box">
      <div class="factor">
        <el-button type="primary">
          <i class="el-icon-plus"></i>
          新建推广计划
        </el-button>
        <el-button>启动</el-button>
        <el-button>暂停</el-button>
        <el-button>删除</el-button>
        <el-input
          style="width:180px;margin-left:20px;"
          v-model="factorForm.addr"
          placeholder="投放地区：所有地区"
        ></el-input>
        <span class="inp-group">
          <span class="label">推广计划：</span>
          <el-select class="mySelect" v-model="factorForm.extplay">
            <el-option label="赚钱1" value="1"></el-option>
            <el-option label="赚钱2" value="2"></el-option>
            <el-option label="赚钱3" value="3"></el-option>
          </el-select>
          <el-input style="width:180px;" v-model="factorForm.play" placeholder="搜索推广计划"></el-input>
        </span>
        <el-select
          v-model="factorForm.type"
          placeholder="请选择"
          style="width:180px;margin-left:20px;"
        >
          <el-option label="全部" value="0"></el-option>
          <el-option label="启动" value="1"></el-option>
          <el-option label="暂停" value="2"></el-option>
        </el-select>
      </div>
      <div class="table">
        <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            v-for="item in tableHead"
            :key="item.id"
            :prop="item.id"
            :label="item.label"
          >
            <template slot-scope="scope">
              <span v-if="item.id=='status'">
                {{scope.row.status==1?'启动':'暂停'}}
                <el-switch
                  v-model="scope.row.status"
                  active-color="#1890ff"
                  inactive-color="#eee"
                  @click="scope.row.status=!scope.row.status"
                ></el-switch>
              </span>
              <span v-else>{{scope.row[item.id]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="text" @click="edititem(scope.row)" size="small">编辑</el-button>
              <el-button type="text" @click="additem(scope.row)" size="small">添加创意组</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <p class="tip">注意：上述并非实时数据，展示次数不包括当日次数，其他数据有可能不包含3小时内的数据。</p>
      <div class="page-box">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { extgroupTableHead } from "@/config/index";

export default {
  data() {
    return {
      factorForm: {
        addr: "",
        play: "",
        type: "0",
        extplay: "1"
      },
      tableHead: extgroupTableHead,
      tableData: [
        {
          extgroup: "赚钱1",
          extplay: "赚钱1",
          status: true,
          selectmedia: "QQ",
          putaddr: "QQ广告",
          ideacount: "0",
          grouppace: "0.5"
        },
        {
          extgroup: "赚钱2",
          extplay: "赚钱2",
          status: true,
          selectmedia: "微信",
          putaddr: "微信广告",
          ideacount: "0",
          grouppace: "0.5"
        },
        {
          extgroup: "赚钱1",
          extplay: "赚钱1",
          status: true,
          selectmedia: "QQ",
          putaddr: "QQ广告",
          ideacount: "0",
          grouppace: "0.5"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    edititem(row) {
      console.log(row);
    },
    additem(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped lang="less">
.extplay-wp {
  .status-info {
    .status-title {
      font-size: 20px;
      color: #d43030;
      margin: 10px 0;
    }
    .status-list {
      color: #2ae445;
      span {
        margin-right: 36px;
        font-size: 14px;
      }
    }
  }
  .form-box {
    margin-top: 36px;
    .table {
      border: 1px solid #ddd;
      border-radius: 2px;
      margin-top: 20px;
    }
    .tip {
      color: #d43030;
      font-size: 14px;
      margin-top: 25px;
    }
    .page-box {
      margin-top: 25px;
      text-align: right;
    }
    .factor {
      .inp-group {
        margin-left: 20px;
        .label {
          color: #009688;
          font-size: 14px;
        }
        .mySelect {
          width: 60px;
        }
      }
    }
  }
}
</style>

<style>
.mySelect .el-input__inner {
  border: none;
  color: #009688;
  padding: 0;
}
.el-select .el-input .el-select__caret{
  color: #009688;
}
</style>
