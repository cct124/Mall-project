<template>
  <div class="personal">
    <div class="personal-left">
      <div class="avatar">
        <img src="../../images/Avatar.png" alt="头像">
        <span>头像</span>
      </div>
    </div>
    <div class="personal-right">
      <ul>
        <li v-for="(items, index) in userInfo.info" :key="index">
          <span>{{items.item}}</span>
          <span v-if="items.placeholder !== 'Nickname'">{{items.value}}</span>
          <input
            v-else
            type="text"
            name="userName"
            id="user_name"
            v-model.trim="items.value"
            :placeholder="items.placeholder"
          >
        </li>
      </ul>
      <div class="footer">
        <transition name="fade">
          <div class="left" v-if="userChange">
            <span class="define" @click="defineStatus('define')" title="确定">✓</span>
            <span class="cancel" @click="defineStatus('cancel')" title="取消">╳</span>
          </div>
        </transition>
        <div v-if="!userChange"></div>
        <div class="right">
          <span>{{userInfo.date.item}}</span>
          <span>{{userInfo.date.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      userChange: false,
      copyUserInfo: null,
      userInfo: {
        info: [
          {
            item: "昵称：",
            value: "Jane",
            placeholder: "Nickname"
          },
          {
            item: "账号：",
            value: "abc123",
            placeholder: "User Name"
          },
          {
            item: "邮箱：",
            value: "727751354@qq.com",
            placeholder: "Email"
          },
          {
            item: "电话：",
            value: "155****6511",
            placeholder: "Phone"
          }
        ],
        date: {
          item: "注册时间：",
          value: "2019-05-11"
        }
      }
    };
  },
  methods: {
    defineStatus(value) {
      new Promise((resolve, reject) => {
        if (value === "define") {
          resolve();
        }
        if (value === "cancel") {
          this.userInfo = JSON.parse(JSON.stringify(this.copyUserInfo));
          reject();
        }
      }).then(
        () => {
          this.userChange = false;
          this.copyUserInfo = JSON.parse(JSON.stringify(this.userInfo));
        },
        () => {
          this.userChange = false;
        }
      );
    }
  },
  mounted() {
    this.copyUserInfo = JSON.parse(JSON.stringify(this.userInfo));
  },
  watch: {
    userInfo: {
      handler() {
        this.userChange = true;
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.borderRS {
  border-radius: 0.2rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
}
.personal {
  height: 43rem;
  background-color: #ffffff;
  // border-radius: 0.2rem;
  // box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
  @extend .borderRS;
  display: flex;
  .personal-left {
    flex: 1;
    .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3rem;
      img {
        width: 50%;
        border-radius: 50%;
        margin-bottom: 2rem;
      }
    }
  }
  .personal-right {
    flex: 2;
    padding: 6rem 2rem 2rem 0;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      li {
        margin-bottom: 2rem;
        input {
          outline: none;
          border: 0;
          border-bottom: 1px solid rgba(83, 83, 83, 0);
        }
        input:hover {
          border-bottom: 1px solid rgba(83, 83, 83, 0.2);
        }
        input:focus {
          border-bottom: 1px solid #535353;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
      .left {
        width: 50%;
        display: flex;
        justify-content: space-around;
        min-width: 10rem;
        span {
          display: inline-block;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          line-height: 4rem;
          cursor: pointer;
          transition: all 0.1s;
        }
        .define {
          background-color: #ef624b;
          color: #ffffff;
        }
        .cancel {
          background-color: #efefef;
          color: #535353;
        }

        span:hover {
          transform: scale(1.08);
        }
      }
      .right {
        font-size: 1.5rem;
        color: #ababab;
        line-height: 5rem;
      }
    }
  }
}
</style>