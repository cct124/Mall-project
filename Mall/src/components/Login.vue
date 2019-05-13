<template>
  <div class="login">
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
          <input
            class="signin-input"
            id="username"
            v-model="signInData.userName"
            name="username"
            type="text"
            placeholder="name"
          >
        </div>
        <div class="signin-password">
          <svg-icon icon-class="password"/>
          <input
            class="signin-input"
            id="password"
            name="password"
            type="password"
            placeholder="password"
            v-model="signInData.password"
          >
        </div>
        <div class="signin-button buttonPass" @click="signin">登陆</div>
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
            v-model.trim="signUpData.userName"
            @input="regexpVerification('signupName')"
          >
          <span ref="signupName" class="verification">账户名为字母和数字，开头字母，长度4-16位</span>
        </div>
        <div class="signin-email">
          <svg-icon icon-class="email"/>
          <input
            class="signin-input"
            id="email"
            name="email"
            type="email"
            placeholder="email"
            v-model="signUpData.email"
            autocomplete="off"
            @input="regexpVerification('signupEmail')"
          >
          <span ref="signupEmail" class="verification">邮箱格式不正确</span>
        </div>
        <div class="signin-password">
          <svg-icon icon-class="password"/>
          <input
            class="signin-input"
            id="signup_password"
            name="password"
            type="password"
            placeholder="password"
            v-model="signUpData.password"
            @input="regexpVerification('signupPassword')"
          >
          <span ref="signupPassword" class="verification">密码必须包含大小写字母，长度6-16位</span>
        </div>
        <div
          @click="signup"
          :class="{ buttonPass: signinButton }"
          ref="signinButton"
          class="signin-button"
        >注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import { buffer } from "./../assets/js/animation.js";
import { signupPOST, signinPOST } from "./../assets/js/http.js";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginShow: true,
      signUpData: {
        userName: null,
        email: null,
        password: null
      },
      signInData: {
        userName: null,
        password: null
      },
      signUpV: {
        userName: false,
        email: false,
        password: false
      }
    };
  },
  methods: {
    ...mapActions(["setLoginShow", "setUserInfo"]),
    // closeLogin() {
    //   this.$store.dispatch("setLoginShow");
    // },
    // 正则表达式验证表单
    regexpVerification(value) {
      let verification = (pattern, value, element) => {
        if (pattern.test(this.signUpData[value])) {
          this.$refs[element].style.display = "none";
          this.$refs[element].parentElement.style.borderBottom =
            "1px solid #24e800";
          this.signUpV[value] = true;
        } else {
          this.$refs[element].style.display = "block";
          this.$refs[element].parentElement.style.borderBottom =
            "1px solid red";
          this.signUpV[value] = false;
        }
      };
      // eslint-disable-next-line
      const loginName = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
      // eslint-disable-next-line
      const loginEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      // eslint-disable-next-line
      const loginPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.[~!@#$%^&*()_+`\-={}:";'<>?,.\/]{0,}).{6,16}$/;

      switch (value) {
        case "signupName":
          verification(loginName, "userName", "signupName");
          break;
        case "signupEmail":
          verification(loginEmail, "email", "signupEmail");
          break;
        case "signupPassword":
          verification(loginPassword, "password", "signupPassword");
          break;

        default:
          break;
      }
    },
    signin() {
      signinPOST(this.signInData)
        .then(result => {
          if (result.code === 1) {
            this.$message({
              message: result.message,
              type: "success"
            });
            this.setLoginShow();
            this.setUserInfo(result.data);
          } else {
            this.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    },
    signup() {
      if (!this.signinButton) return;
      signupPOST(this.signUpData)
        .then(result => {
          if (result.code === 1) {
            this.$message({
              message: result.message,
              type: "success"
            });
          } else {
            this.$message.error(result.message);
          }
        })
        .catch(error => {
          throw error;
        });
    },
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
  },
  computed: {
    signinButton() {
      return (
        this.signUpV.userName && this.signUpV.email && this.signUpV.password
      );
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
        position: relative;
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
      .verification {
        position: absolute;
        top: 3.4rem;
        display: block;
        font-size: 1rem;
        color: red;
        letter-spacing: 0.1rem;
        display: none;
        text-align: left;
        left: 1rem;
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
        // background-color: #2a80cc;
        background-color: #7a8086;
        border-radius: 0.4rem;
        line-height: 5.83rem;
        color: #ffffff;
        margin-top: 5rem;
        cursor: pointer;
      }
      .buttonPass {
        background-color: #2a80cc;
      }
      .signin-button:hover {
        opacity: 0.9;
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
