<template>
  <div>
    <el-row :gutter="12">

      <el-col :span="12">
        <el-card class="mt-2">
          <div class="flex justify-between">
            <div>
              <img src="@/assets/images/assets.png" class="h-[50px]" />
            </div>
            <div class="flex flex-col items-center justify-between">
              <span class="text-lg">净资产(U)</span>
              <span class="text-xl">0</span>
            </div>
          </div>
          <template #footer class="p-0">
            <span>折合人民币: {{ 0 }}</span>
          </template>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="mt-2">
          <div class="flex justify-between">
            <div>
              <img src="@/assets/images/assets-freeze.png" class="h-[52px]" />
            </div>
            <div class="flex flex-col items-center justify-between">
              <span class="text-lg">冻结资产(U)</span>
              <span class="text-xl">0</span>
            </div>
          </div>
          <template #footer class="p-0">
            <span>折合人民币: {{ 0 }}</span>
          </template>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="mt-2">
          <div class="flex justify-between">
            <div>
              <img src="@/assets/images/history.png" class="h-[46px]" />
            </div>
            <div class="flex flex-col items-center justify-between">
              <span class="text-lg">提币历史(U)</span>
              <span class="text-xl">0</span>
            </div>
          </div>
          <template #footer class="p-0">
           
          </template>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="mt-2">
          <div class="flex justify-between">
            <div>
              <img src="@/assets/images/audit.png" class="h-[50px]" />
            </div>
            <div class="flex flex-col items-center justify-between">
              <span class="text-lg">提币审核中(U)</span>
              <span class="text-xl">0</span>
            </div>
          </div>
          <template #footer class="p-0">
            
          </template>
        </el-card>
      </el-col>
      
    </el-row>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch } from "vue";
const state = ref([
  {
    label: "净资产(U)",
    num: 123
  },
  {
    label: "冻结资产(U)",
    num: 123
  },
  {
    label: "提币历史(U)",
    num: 123
  },
  {
    label: "提币审核中(U)",
    num: 123
  }
])
</script>

<style lang="scss" scoped>
:deep(.el-card__footer){
  padding: 14px;
 height: 50px;
}
</style>
