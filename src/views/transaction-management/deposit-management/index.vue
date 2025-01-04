<template>
  <div>
    <el-card>
      <el-form :model="searchForm" label-width="100px" ref="form">
        <el-row>
          <el-col :span="8">
            <el-form-item label="入金订单" prop="orderId">
              <el-input v-model="searchForm.orderId" placeholder="请输入入金订单号" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="商户订单号" prop="merchantOrderId">
              <el-input v-model="searchForm.merchantOrderId" placeholder="请输入商户订单号" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="客户姓名" prop="customerName">
              <el-input v-model="searchForm.customerName" placeholder="请输入客户姓名" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="状态" prop="orderState">
              <el-select v-model="searchForm.orderState" placeholder="请选择订单状态">
                <el-option value="" label="全部" />
                <el-option v-for="item of depositeStateList" :key="item.value" :label="item.lable"
                  :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="开始时间" prop="orderTimeBegin">
              <el-date-picker class="!w-full" v-model="searchForm.orderTimeBegin" type="date" placeholder="开始时间" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="结束时间" prop="orderTimeEnd">
              <el-date-picker class="!w-full" v-model="searchForm.orderTimeEnd" type="date" placeholder="结束时间" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="回调状态" prop="callbackStatus">
              <el-select v-model="searchForm.callbackStatus" placeholder="请选择回调状态">
                <el-option value="" label="全部" />
                <el-option value="1" label="已回调" />
                <el-option value="0" label="未回调" />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="">
              <el-button type="primary" :icon="Search" @click="reset">查询</el-button>
              <el-button type="warning" :icon="RefreshRight" @click="reset">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-card class="mt-4">
      <el-table :data="tableData" border stripe>
        <el-table-column prop="orderTime" label="交易时间" align="center" />
        <el-table-column prop="finishTime" label="完成时间" align="center" />
        <el-table-column prop="merchantId" label="商户号" align="center" />
        <el-table-column prop="orderId" label="订单号" align="center" />
        <el-table-column prop="merchantOrderId" label="商户订单号" align="center" />
        <el-table-column prop="mode" label="交易场景" align="center" />
        <el-table-column prop="state" label="交易状态" align="center" />
        <el-table-column prop="tradingVolume" label="交易量" align="center" />
        <el-table-column prop="tradingMoney" label="金额" align="center" />
        <el-table-column prop="customerName" label="客户姓名" align="center" />
      </el-table>

      <el-pagination background layout="prev, pager, next" :total="total" class="mt-4 flex justify-end"
        v-model:current-page="searchForm.pageIndex" @current-change="getTransactionList" />
    </el-card>
  </div>
</template>
<script setup>
import { Search, RefreshRight } from '@element-plus/icons-vue'
import { reactive, ref, useTemplateRef } from "vue";
const searchForm = reactive({
  "pageIndex": 0,
  "pageSize": 10,
  "orderId": "",
  "merchantOrderId": "",
  "customerName": "",
  "orderState": "",
  "orderTimeBegin": "",
  "orderTimeEnd": "",
  "callbackStatus": ""
});
const total = ref(0);
const tableData = ref([])
const depositeStateList = ref([])


const useForm = useTemplateRef("form")
const getTransactionList = () => {
}
const reset = () => {
  useForm.value.resetFields();
  getTransactionList();
}

</script>
<style scoped></style>
