<template>
  <div>
    {{storeCount}} {{doubleCount}} <el-button type="primary" @click="addCount"> store count +1</el-button>
    <delete theme="outline" size="24" fill="#FFF"/>
    <el-row :gutter="12">
      <el-col :span="12" v-for="item in state">
        <el-card class="mt-2">
          <template #header>
            <span class="text-2xl">{{ item.label }}</span>
          </template>
          <div class="flex justify-between p-4 mt-4">
            <div>
              image
            </div>
            <div class="flex flex-col items-center justify-between">
              <span class="text-3xl">{{ item.num }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="mt-4">
      <template #header>
        <div class="text-2xl">入金量（24小时）</div>
      </template>
    </el-card>

    <el-card class="mt-4">
      <template #header>
        <div class="text-2xl">平台公告</div>
      </template>
      <div class="h-[300px] text-center overflow-y-auto">
        <ul v-infinite-scroll="load" class="p-0 m-0 list-none" :infinite-scroll-disabled="disabled">
          <li v-for="i in count" :key="i" class="flex items-center 
          justify-center h-10 mt-3 py-3 bg-blue-400 text-white">
            2021.01.22春节假期通知 （Spring Festival holiday notice）
          </li>
        </ul>

        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
      </div>
    </el-card>


  </div>
</template>
<script setup>
import {useCounterStore} from "@/store/useCounterStore"
import { storeToRefs } from 'pinia'
import {Delete} from '@icon-park/vue-next';
import { onMounted, ref, computed, reactive, watch } from "vue";
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)

const countStore = useCounterStore()
// 需要配合使用 storeToRefs
const { count:storeCount, doubleCount } = storeToRefs(countStore)

const addCount = () => {
  countStore.increment()
}


const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}

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

<style scoped>
.container {
  @apply mt-4 bg-white rounded-md p-8
}
</style>
