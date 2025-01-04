<template>
  <div class="flex items-center justify-center h-screen">
    <el-card class="w-[450px] p-6">

      <div class="mb-8">
        <span class="text-xl font-bold"> Register</span>
        <div class="text-sm mt-2 font-bold">
          Register your account
        </div>
      </div>

      <div>
        <el-form size="large" label-position="top" label-width="auto" :model="registerForm" ref="loginFormRef"
          :rules="loginFormRules">

          <el-form-item label="Username" prop="username">
            <el-input v-model="registerForm.username" placeholder="Username" />
          </el-form-item>

          <el-form-item label="CompanyName" prop="companyName">
            <el-input v-model="registerForm.companyName" placeholder="CompanyName" />
          </el-form-item>


          <el-form-item label="Email" prop="email">
            <el-input v-model="registerForm.email" placeholder="Email" />
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input :type="showPassword ? 'text' : 'password'" v-model="registerForm.password" placeholder="Password">
              <template #append>
                <div @click="showPassword = !showPassword" class="w-full">
                  <el-icon v-if="showPassword">
                    <View />
                  </el-icon>

                  <el-icon v-else>
                    <Hide />
                  </el-icon>
                </div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="Captcha" prop="captcha">
            <div class="flex w-full">
              <el-input class="flex-1" v-model="registerForm.captcha" placeholder="Captcha" />
              <el-button type="warning"
                @click="sendEmailCode">Send</el-button>
            </div>
          </el-form-item>

        </el-form>

        <el-button size="large" type="primary" class="w-full" @click="handleSubmitRegister">CREATE ACCOUNT</el-button>
      </div>

      <el-divider />

      <div class="text-sm">
        <span class="mr-2">Already have an account?</span>
        <el-link type="primary">
          <span class="font-bold" @click="handleLoginClick">Login</span>
        </el-link>
      </div>

    </el-card>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch, useTemplateRef } from "vue";
import { View, Hide } from "@element-plus/icons-vue"
import { useRouter } from "vue-router";
const loginFormRef = useTemplateRef("loginFormRef");
const showPassword = ref(false);

const router = useRouter();
// 公司名字、邮箱、密码、验证码
const registerForm = reactive({
  username: "",
  companyName: "",
  email: "",
  password: "",
  captcha: ""
});

const loginFormRules = {
  username: [
    { required: true, message: "Please input username", trigger: "change" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "change" }
  ],
  companyName: [
    { required: true, message: "Please input companyName", trigger: "change" },
  ],
  email: [
    { required: true, message: "Please input email address", trigger: "change" },
    { type: "email", message: "Please input correct email address", trigger: ["blur", "change"] }
  ],
  password: [
    { required: true, message: "Please input password", trigger: "change" },
    { min: 6, max: 15, message: "Lengthshould be 6 to 15", trigger: "change" }
  ],
  captcha: [
    { required: true, message: "Please input captcha", trigger: "change" },
    { min: 6, max: 6, message: "Lengthshould be 6", trigger: "change" }
  ]
}

const sendEmailCode = () => {
  if (!registerForm.email) {
    ElMessage.error("请输入邮箱")
    return
  }
  ElMessage.success("发送成功")
}

const handleSubmitRegister = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage.success("注册成功");
          router.push("/login");
    }
  })
}

const handleLoginClick = () => {
  router.push("/login");
}
</script>

<style lang="scss" scoped></style>
