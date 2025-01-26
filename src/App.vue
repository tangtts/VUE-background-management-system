<script setup>

import { ref, computed, reactive } from 'vue';
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en';
const language = computed(() => {
  return language.value === 'zh' ? zhCn : en
})
</script>

<template>
  <div class="app-container">
    <el-config-provider :locale="language" :value-on-clear="() => null" :empty-values="[undefined, null]">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.app-container,
.el-container {
  height: 100%;
  font-size: 16px;
}

.el-card__body:has(.el-form) {
  margin-bottom: -22px;
}

.el-menu--vertical {
  height: 100%;
  font-size: 1rem;
  width: 180px;
}
</style>
