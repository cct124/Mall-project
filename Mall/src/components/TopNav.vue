<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <el-dropdown class="left-avatar" v-if="userInfo">
        <span class="top-nav-left-dropdown-span">
          <img src="./../images/Avatar.png">
        </span>
        <el-dropdown-menu slot="dropdown">
          <ul class="top-nav-left-dropdown">
            <router-link tag="li" :to="{name:'personal'}">
              <svg-icon icon-class="Personal"/>个人中心
            </router-link>
            <router-link tag="li" to="/shoppingcart">
              <svg-icon icon-class="shoppingcart"/>购物车
            </router-link>
            <router-link tag="li" :to="{name:'order'}">
              <svg-icon icon-class="Order"/>订单管理
            </router-link>
            <router-link tag="li" :to="{name:'message'}">
              <svg-icon icon-class="message"/>消息中心
            </router-link>
            <router-link tag="li" :to="{name:'service'}">
              <svg-icon icon-class="service"/>售后服务
            </router-link>
            <li @click="signOut">
              <svg-icon icon-class="sign-in"/>退出登陆
            </li>
          </ul>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="left-login" @click="setLoginShow" title="登陆-注册" v-else>
        <svg-icon icon-class="login_user"/>
      </span>
    </div>
    <div class="top-nav-right">
      <ul>
        <router-link to="/" tag="li">首页</router-link>
        <li>iPhone</li>
        <li>HUAWEI</li>
        <li>VIVO</li>
        <li @click="shoppingcart">
          <svg-icon icon-class="shoppingcart"/>
        </li>
        <search-input/>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
import { mapState, mapActions } from "vuex";
import { localremove } from "./../assets/js/storage.js";

export default {
  name: "top-nav",
  components: {
    SearchInput
  },
  data() {
    return {
      searchShow: false,
      searchInputFocus: false
    };
  },
  methods: {
    ...mapActions(["setLoginShow"]),
    signOut() {
      this.$router.push("/");
      localremove("mall_token");
      window.location.reload();
    },
    shoppingcart() {
      if (this.userInfo) {
        this.$router.push("/shoppingcart");
      } else {
        this.$message({
          message: "请登陆",
          type: "warning"
        });
        this.setLoginShow();
      }
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.userData.userInfo.user_name
    })
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  margin: 3.5rem 15rem;
  height: 6.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  color: #818181;
  margin: 3.5rem 15rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);

  // 左侧头像
  .top-nav-left {
    .left-avatar {
      width: 9rem;
      height: 9rem;
      position: absolute;
      top: -1.1rem;
      left: -2rem;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);
      cursor: pointer;
      img {
        width: 9rem;
        height: 9rem;
        float: left;
      }
    }
    .left-login {
      font-size: 2rem;
      color: #818181;
      margin-left: 2rem;
      cursor: pointer;
      display: block;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      line-height: 3rem;
    }
    .left-login:hover {
      border: 1px solid;
      animation: slidein 0.2s;
    }
    @keyframes slidein {
      from {
        border-color: rgba(130, 130, 130, 0);
      }

      to {
        border-color: rgba(130, 130, 130, 0.7);
      }
    }
    // 偏移UI组件位置
    .top-nav-left-dropdown-span {
      width: 12rem;
      display: block;
    }
    .left-avatar:hover {
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.33);
    }
  }

  // 右侧列表栏
  .top-nav-right {
    margin-right: 1rem;
    ul {
      display: flex;
      font-size: 2.5rem;
      line-height: 4rem;
      align-items: center;
      li {
        cursor: pointer;
        margin: 0 2rem;
        svg {
          font-size: 4rem;
        }
      }
      li:hover {
        color: #2c2c2c;
      }
    }
  }
}

// 下拉菜单
.top-nav-left-dropdown {
  width: 14rem;
  // text-align: center;
  font-size: 1.8rem;
  color: #7e7e7e;
  li {
    cursor: pointer;
    margin: 2rem 1.3rem;
    svg {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
  li:hover {
    color: #2c2c2c;
  }
}
</style>
