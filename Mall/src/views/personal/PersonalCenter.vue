<template>
  <div class="personal-center">
    <top-nav class="shopping-center-nav"/>
    <div class="personal-center-content">
      <div class="content-left">
        <ul>
          <router-link :class="{current: currentLi==='personal'}" tag="li" :to="{name:'personal'}">
            <svg-icon icon-class="Personal"/>
            <span>个人中心</span>
          </router-link>
          <router-link tag="li" :to="{name:'shoppingcart'}">
            <svg-icon icon-class="shoppingcart"/>
            <span>购物车</span>
          </router-link>
          <router-link :class="{current: currentLi==='order'}" tag="li" :to="{name:'order'}">
            <svg-icon icon-class="Order"/>
            <span>订单管理</span>
          </router-link>
          <router-link :class="{current: currentLi==='message'}" tag="li" :to="{name:'message'}">
            <svg-icon icon-class="message"/>
            <span>消息中心</span>
          </router-link>
          <router-link :class="{current: currentLi==='service'}" tag="li" :to="{name:'service'}">
            <svg-icon icon-class="service"/>
            <span>售后服务</span>
          </router-link>
        </ul>
      </div>
      <div class="content-right">
        <router-view/>
      </div>
    </div>
    <web-footer/>
  </div>
</template>

<script>
import TopNav from "./../../components/TopNav";
import WebFooter from "./../../components/WebFooter";

export default {
  name: "PersonalCenter",
  computed: {
    currentLi() {
      return this.$route.name;
    }
  },
  components: {
    TopNav,
    WebFooter
  }
};
</script>
<style lang="scss" scoped>
.personal-center {
  .shopping-center-nav{

  }
  .personal-center-content {
    width: 75%;
    display: flex;
    margin: 7.1rem auto 10rem auto;
    // 中部左侧栏
    .content-left {
      width: 20%;
      height: 43rem;
      background-color: #ffffff;
      border-radius: 0.2rem;
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
      font-size: 2rem;
      color: rgba(84, 84, 84, 0.7);
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        padding: 2rem 0;
        box-sizing: border-box;
        li {
          width: 16rem;
          height: 3.25rem;
          cursor: pointer;
          border-bottom: 2px solid rgba(42, 128, 204, 0);
        }
        li:hover {
          color: #535353;
        }
        .current {
          border-bottom: 2px solid rgba(42, 128, 204, 1);
          color: #535353;
        }
      }
    }

    // 中部右侧栏
    .content-right {
      margin-left: 5%;
      width: 75%;
    }
  }
}
</style>