<template>
  <div class="flex items-center justify-center h-screen">
    <el-card class="w-[450px] p-6 relative">

      <div class="mb-8">
        <span class="text-xl font-bold"> Login</span>
        <div class="text-sm mt-2 font-bold">
          Login to your account
        </div>
      </div>

      <div>
        <el-form size="large" label-position="top" label-width="auto" :model="loginForm" ref="loginFormRef"
          :rules="loginFormRules">
          <el-form-item :label="$t('email')" prop="email">
            <el-input v-model="loginForm.email" placeholder="Email" />
          </el-form-item>
          <el-form-item :label="$t('password')" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="Password" />
          </el-form-item>
        </el-form>

        <div class="flex w-full items-end justify-between my-3">
          <div class="text-sm">
            <el-checkbox v-model="loginForm.remember">{{ $t('rememberMe') }}</el-checkbox>
          </div>
          <div>
            <el-link type="primary">
              <span>{{ $t('forgotPassword') }}?</span>
            </el-link>
          </div>
        </div>
        <el-button size="large" type="primary" class="w-full" @click="handleSubmitLogin">{{ $t('login') }}</el-button>
      </div>

      <el-divider />

      <div class="text-sm">
        <span class="mr-2">Don't have an account?</span>
        <el-link type="primary">
          <span class="font-bold cursor-pointer" @click="handleRegisterClick">Create an Account</span>
        </el-link>
      </div>

      <div class="mt-4 text-sm flex justify-center items-center">
        <el-link :type="loginForm.language == 'zh' ? 'primary' : 'info'" @click="handleLanguageClick">中文</el-link>
        <el-divider direction="vertical" />
        <el-link :type="loginForm.language == 'en' ? 'primary' : 'info'" @click="handleLanguageClick">English</el-link>
      </div>
    </el-card>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch, useTemplateRef } from "vue";
import { useRouter } from "vue-router";
const loginFormRef = useTemplateRef("loginFormRef");
const router = useRouter();
import { useLanguageStore } from '@/store/useLanguageStore';
const { defaultLanguage, changeLanguage } = useLanguageStore()
console.log(defaultLanguage)
const handleLanguageClick = () => {
  if (loginForm.language == 'en') {
    loginForm.language = 'zh'
  } else {
    loginForm.language = 'en'
  }
  changeLanguage(loginForm.language)
}
const loginForm = reactive({
  language: defaultLanguage,
  email: "",
  password: "",
  remember: false
});

const loginFormRules = {
  email: [
    { required: true, message: "Please input email address", trigger: "change" },
    { type: "email", message: "Please input correct email address", trigger: ["blur", "change"] }
  ],
  password: [
    { required: true, message: "Please input password", trigger: "change" },
    { min: 6, max: 15, message: "Lengthshould be 6 to 15", trigger: "change" }
  ]
}

const handleSubmitLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success("登录成功");
      router.push("/");
    }
  })
}

const handleRegisterClick = () => {
  router.push("/register");
}
</script>

<style lang="scss" scoped></style>
