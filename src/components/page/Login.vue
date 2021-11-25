<template>
  <div class="login-wrap">
    <div class="ms-login">
      <el-row>
        <el-col :span="6">
          <img src="../../assets/images/login_logo.png" alt="CharlesKeith" style="max-height: 60px">
        </el-col>
        <el-col :span="18">
          <el-form
            :model="form"
            :rules="rules"
            ref="form"
            label-width="80px"
            class="ms-content"
            label-position="right"
          >
            <el-form-item prop="username" label="用户名">
              <el-input
                v-model="form.username"
                placeholder="username"
                tabindex="1"
                style="width:220px"
              >
                <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
              <el-input
                type="password"
                placeholder="password"
                v-model="form.password"
                @keyup.enter.native="submitForm('form')"
                tabindex="2"
                style="width:220px"
              >
                <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
              </el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button @click="submitForm('form')">登录</el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: 'admin',
        password: '123123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username', this.form.username);
          this.$router.push('/');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap {
  position: relative;
  background-image: url(../../assets/images/logo_bg.png);
  width: 520px;
  height: 302px;
  padding: 110px 160px 0px 160px;
  margin: 60px auto 0px auto;
  overflow: hidden;
  .ms-content {
    padding: 30px 30px;
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 220px;
    height: 36px;
    margin-bottom: 10px;
    position: relative;
    left: 25px;
  }
  img {
    vertical-align: middle;
    position: relative;
    top: 70px;
    left: 20px;
  }
}
</style>
