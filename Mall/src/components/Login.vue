<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <div class="signin" @click="loginShow=!loginShow">Sign In</div>
        <div class="signup">Sign Up</div>
      </div>
      <div ref="signin" class="login-content-signin">
        <div class="signin-username">
          <svg-icon icon-class="nickname"/>
          <input class="signin-input" id="username" name="username" type="text" placeholder="name">
        </div>
        <div class="signin-password">
          <svg-icon icon-class="password"/>
          <input
            class="signin-input"
            id="password"
            name="password"
            type="password"
            placeholder="password"
          >
        </div>
        <div class="signin-button">登陆</div>
      </div>
      <div ref="signup" class="login-content-signup">
        <div class="signup-username">
          <svg-icon icon-class="nickname"/>
          <input
            class="signin-input"
            id="signup-username"
            name="username"
            type="text"
            placeholder="name"
          >
        </div>
        <div class="signin-email">
          <svg-icon icon-class="email"/>
          <input class="signin-input" id="email" name="email" type="email" placeholder="email">
        </div>
        <div class="signin-password">
          <svg-icon icon-class="password"/>
          <input
            class="signin-input"
            id="signup_password"
            name="password"
            type="password"
            placeholder="password"
          >
        </div>
        <div class="signin-button">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import { buffer } from "./../assets/js/animation.js";
export default {
  name: "Login",
  data() {
    return {
      loginShow: true
    };
  },
  methods: {
    signinShow() {
      let signinElement = this.$refs.signin;
      let signupElement = this.$refs.signup;
      buffer(signinElement, { opacity: 0 }, 0.2, () => {
        signinElement.style.display = "none";
        signupElement.style.display = "flex";
        buffer(signupElement, { opacity: 1 });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -23.7rem;
  margin-top: -20.8rem;
  z-index: 1;
  .login-box {
    width: 47.5rem;
    height: 41.6rem;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 0.4rem;
    .login-header {
      height: 5.83rem;
      background: linear-gradient(#2b3457, #ffffff);
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
      display: flex;
      align-items: center;
      .signin {
        color: #2b3457;
        background-color: #ffffff;
        height: 100%;
        text-align: center;
        line-height: 5.83rem;
        width: 14.4rem;
        border-top-left-radius: 0.4rem;
        border-top-right-radius: 0.4rem;
        cursor: pointer;
      }
      .signup {
        width: 29.5rem;
        height: 100%;
        color: #ffffff;
        line-height: 5.83rem;
        text-align: left;
        padding-left: 4rem;
        border-bottom-left-radius: 0.4rem;
        border-top-right-radius: 0.4rem;
        background-color: #2b3457;
        cursor: pointer;
      }
    }
    .login-content-signup,
    .login-content-signin {
      display: flex;
      flex-direction: column;
      align-items: center;

      .signin-email,
      .signin-password,
      .signup-username,
      .signin-username {
        width: 25rem;
        height: 3.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #cfcfcf;
        ::-webkit-input-placeholder {
          color: #cccccc;
        }
        svg {
          font-size: 2rem；;
        }
        .signin-input {
          outline: none;
          border: none;
          margin-left: 1rem;
        }
      }
      .signup-username,
      .signin-username {
        margin-bottom: 2rem;
      }
      .signup-username {
        margin-top: 5rem;
      }
      .signin-username {
        margin-top: 8rem;
      }
      .signin-email {
        margin-bottom: 2rem;
      }
      .signin-button {
        width: 33rem;
        height: 5.83rem;
        background-color: #2a80cc;
        border-radius: 0.4rem;
        line-height: 5.83rem;
        color: #ffffff;
        margin-top: 5rem;
        cursor: pointer;
      }
      .signin-button:hover {
        background-color: #358cd8;
      }
    }
    .login-content-signup {
      opacity: 0;
      display: none;
    }
  }
}
</style>
