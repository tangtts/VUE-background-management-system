<template>
  <el-card>
    <template #header>
      <span class="text-lg">提币管理</span>
    </template>

    <el-form ref="formRef" :model="formState" label-width="auto" class="w-3/4 mx-auto" :rules="rules">

      <el-form-item label="提币网络" prop="network">
        <el-select v-model="formState.network" placeholder="请选择提币网络">
          <el-option v-for="item in takenInfo.networks" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>

      <el-form-item label="提币地址" prop="address">
        <div class="flex items-center w-full">
          <el-input class="flex-1" v-model="formState.address" placeholder="请输入提币地址" />
          <el-button type="primary" @click="onSubmit">常用账户</el-button>
        </div>
      </el-form-item>

      <el-form-item label="钱包密码" prop="walletPassword">
        <el-input v-model="formState.walletPassword" placeholder="请输入钱包密码" />
      </el-form-item>

      <el-form-item label="验证码" prop="cap't'cha">
        <div class="flex items-center w-full">
          <el-input class="flex-1" v-model="formState.captcha" placeholder="请输入验证码" />
          <el-button type="warning" @click="sendEmailCode">发送</el-button>
        </div>
      </el-form-item>

      <el-form-item label="提币数量" prop="quantity">
        <div class="flex items-center w-full">
          <el-input class="flex-1" v-model.number="formState.quantity" placeholder="最小提币数量为200" />
          <el-button type="danger" @click="handleAllQuantityClick">全部</el-button>
        </div>
      </el-form-item>

      <el-form-item label="到账数量" prop="quantityActual">
        <el-input disabled :value="quantityActual" placeholder="请输入到账数量" />
      </el-form-item>

      <el-form-item>
        <div class="flex justify-around w-full">
          <el-text type="info">可用数量：{{ takenInfo.balance }}</el-text>
          <el-text type="info">手续费：{{ takenInfo.fees }}</el-text>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="w-1/4 mx-auto" size="large" @click="onSubmit">申请提币</el-button>
      </el-form-item>
    </el-form>

  </el-card>
</template>

<script setup>
import { computed, reactive, ref, useTemplateRef } from 'vue'
const formEl = useTemplateRef("formRef")
const formState = reactive({
  network: "",
  walletPassword: "",
  address: "",
  captcha: "",
  quantity: "",
});

const takenInfo = ref({
  balance: "",
  fees: "",
  networks: []
})


const rules = reactive({
  "network": [
    { required: true, message: "请选择提币网络", trigger: "change" },
  ],
  "address": [
    { required: true, message: "请输入提币地址", trigger: "change" },
  ],
  "walletPassword": [
    { required: true, message: "请输入钱包密码", trigger: "change" },
  ],
  "captcha": [
    { required: true, message: "请输入验证码", trigger: "change" },
  ],
  "quantity": [
    { required: true, message: "请输入提币数量", trigger: "change" },
    {
      min: 200, type: "number", message: "小于最小提币数量200", trigger: "change", transform: (val) => {
        return Number(val)
      }
    }
  ],
})

const handleAllQuantityClick = () => {
  formState.quantity = takenInfo.value.balance
}


const onSubmit = () => {
  if (formState.quantity > takenInfo.balance) {
    ElMessage.error("提币数量大于余额")
    return
  }
  formEl.value.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("申请成功")
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const sendEmailCode = () => {
  ElMessage.success("发送成功")
}

const quantityActual = computed(() => {
  if (!formState.quantity) {
    return 0
  }
  // 提币数量不能小于手续费
  if (formState.quantity < takenInfo.value.fees) {
    return 0
  }
  // 提币数量不能大于可用数量
  if (formState.quantity > takenInfo.value.balance) {
    return 0
  }

  // 提币数量减去手续费
  return formState.quantity - takenInfo.value.fees
})
</script>
