<template>
  <div>

    <Dashbord />
    <chart />
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
import Chart from "./chart.vue";
import Dashbord from "./dashbord.vue";
import { onMounted, ref, computed, reactive, watch } from "vue";
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}


</script>

<style scoped>
.container {
  @apply mt-4 bg-white rounded-md p-8
}
</style>
