<template>
  <el-scrollbar height="100vh">
    <el-container>
      <el-header class="border-solid border-b-2 border-gray-300  h-[60px]">
        <div class="flex justify-between items-center">
          <div>
            <img src="../assets/images/logo.png" class="w-[60px]">
          </div>
          <el-dropdown trigger="click" size="large" @command="handleCommand">
            <div class="text-xl flex items-center gap-2">
              <span>Tom</span>
              <el-icon>
                <Setting />
              </el-icon>

              <el-icon v-if="isDark" @click="toggleDark()">
                <Sunny />
              </el-icon>

              <el-icon v-else @click="toggleDark()">
                <Moon />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-container>
        <el-aside width="collapse">
          <el-menu router :collapse="isCollapse" :default-active="route.path">
            <el-menu-item index="/">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>首页</span>
            </el-menu-item>

            <el-sub-menu :index="menu.redirect" v-for="(menu, index) in menus" :key="index">
              <template #title>
                <el-icon>
                  <component :is="menu.meta.icon" />
                </el-icon>
                <span> {{ menu.meta.title }}</span>
              </template>
              <el-menu-item v-for="(item, index) in menu.children" :index="menu.path + '/' + item.path">
                {{ item.meta.title }}
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>

        <el-main class="py-0">
          <div class="py-4 flex gap-6">
            <el-icon>
              <Expand @click="isCollapse = false" v-if="isCollapse" />
              <Fold @click="isCollapse = true" v-else />
            </el-icon>
            <el-breadcrumb class="app-breadcrumb" separator="/">
              <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                  <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
                    class="cursor-text text-gray-400">{{
                      item.meta.title }}</span>
                  <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
              </transition-group>
            </el-breadcrumb>
          </div>
          <el-config-provider :locale="locale" size="large">

            <router-view v-slot="{ Component }">
              <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </el-config-provider>
        </el-main>
      </el-container>
    </el-container>
  </el-scrollbar>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch } from "vue";
import { Menu, HomeFilled, Setting, Fold, Expand, DataBoard, Sunny, Moon } from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { useRoute } from "vue-router";
import { menus } from "@/router/index";
import { useDark, useToggle } from '@vueuse/core'
const locale = ref(zhCn);
const route = useRoute();
const router = useRouter();
const isCollapse = ref(false);


const isDark = useDark()
const toggleDark = useToggle(isDark)
const handleCommand = (command) => {
  if (command == "logout") {
    router.push("/login")
  }
  console.log(command)
}


watch(route, getBreadcrumb)
const levelList = ref([])
function getBreadcrumb() {
  const matched = route.matched.filter(item => item.meta && item.meta.title)
  levelList.value = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
}
getBreadcrumb()
const handleLink = (item) => {
  router.push(item.path)
}
</script>

<style scoped>
.fade-transform--move,
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
