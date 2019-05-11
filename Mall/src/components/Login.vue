<template>
  <div class="login" @click.self="setLoginShow">
    <div class="login-box">
      <div class="login-header">
        <div ref="radiusOne" class="login-header-radius">
          <div ref="signinDiv" class="signin" @click.stop="signinShow('signin')">Sign In</div>
          <div ref="signupDiv" class="signup" @click.stop="signinShow('signup')">Sign Up</div>
        </div>
        <div ref="radiusTwo" class="login-header-radius2">
          <span @click.stop="setLoginShow">
            <svg-icon icon-class="close"/>
          </span>
        </div>
      </div>
      <div ref="signin" style="display:flex;" class="login-content-signin">
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
        <div class="signin-button" @click="getTextPort({name:'app'})">登陆</div>
      </div>
      <div ref="signup" style="display:none;" class="login-content-signup">
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
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginShow: true
    };
  },
  methods: {
    // closeLogin() {
    //   this.$store.dispatch("setLoginShow");
    // },
    ...mapActions(["setLoginShow", "getTextPort"]),
    // Tab切换动画
    signinShow(value) {
      let signinElement = this.$refs.signin;
      let signupElement = this.$refs.signup;
      if (value === "signin" && signinElement.style.display === "flex") return;
      if (value === "signup" && signupElement.style.display === "flex") return;
      // window.getComputedStyle(signinElement).display === "flex";

      let signinDiv = this.$refs.signinDiv;
      let signupDiv = this.$refs.signupDiv;
      let radiusOne = this.$refs.radiusOne;
      let radiusTwo = this.$refs.radiusTwo;

      function animationFn(dispalyNone, displayBlock, callback) {
        radiusTwo.style.borderBottomLeftRadius = "0";
        radiusOne.style.background = "";
        radiusOne.style.backgroundColor = "#2b3457";
        callback();
        buffer(dispalyNone, { opacity: 0 }, 0.1, () => {
          dispalyNone.style.display = "none";
          displayBlock.style.display = "flex";
          buffer(displayBlock, { opacity: 1 });
        });
      }

      if (value === "signin") {
        animationFn(signupElement, signinElement, () => {
          buffer(signinDiv, { opacity: 0 }, 0.3, () => {
            signinDiv.style.backgroundColor = "#ffffff";
            signinDiv.style.color = "#2b3457";
            signupDiv.style.borderBottomLeftRadius = "0.4rem";
            buffer(signinDiv, { opacity: 1 }, 0.3);
          });
          buffer(signupDiv, { opacity: 0 }, 0.3, () => {
            signupDiv.style.backgroundColor = "#2b3457";
            signupDiv.style.color = "#ffffff";
            buffer(signupDiv, { opacity: 1 }, 0.3, () => {
              radiusOne.style.background = "linear-gradient(#2b3457, #ffffff)";
            });
          });
        });
      }
      if (value === "signup") {
        animationFn(signinElement, signupElement, () => {
          buffer(signinDiv, { opacity: 0 }, 0.3, () => {
            signinDiv.style.backgroundColor = "#2b3457";
            signinDiv.style.color = "#ffffff";
            buffer(signinDiv, { opacity: 1 }, 0.3);
          });
          buffer(signupDiv, { opacity: 0 }, 0.3, () => {
            signupDiv.style.backgroundColor = "#ffffff";
            signupDiv.style.color = "#2b3457";
            signupDiv.style.borderTopLeftRadius = "0.4rem";
            signinDiv.style.borderBottomRightRadius = "0.4rem";
            radiusTwo.style.borderBottomLeftRadius = "0.4rem";
            buffer(signupDiv, { opacity: 1 }, 0.3, () => {
              radiusOne.style.background = "linear-gradient(#2b3457, #ffffff)";
            });
          });
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  z-index: 4;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  .login-box {
    width: 47.5rem;
    height: 41.6rem;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 0.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -23.7rem;
    margin-top: -20.8rem;
    .login-header {
      height: 5.83rem;
      background: linear-gradient(#2b3457, #ffffff);
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
      display: flex;
      align-items: center;
      .login-header-radius {
        display: inherit;
        align-items: inherit;
        height: 100%;
        border-top-left-radius: 0.4rem;
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
          width: 14.4rem;
          height: 100%;
          color: #ffffff;
          line-height: 5.83rem;
          text-align: center;
          border-bottom-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
          background-color: #2b3457;
          cursor: pointer;
        }
      }
      .login-header-radius2 {
        background-color: #2b3457;
        border-top-right-radius: 0.4rem;
        width: 100%;
        height: 100%;
        line-height: 5.83rem;
        text-align: right;
        padding-right: 2rem;
        svg {
          font-size: 2rem;
          color: #ffffff;
          cursor: pointer;
        }
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
  .radiusOne {
    background: linear-gradient(#2b3457, #ffffff);
  }
}
</style>
