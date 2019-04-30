<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <el-dropdown>
        <span class="top-nav-left-dropdown-span">
          <img src="./../images/Avatar.png">
        </span>
        <el-dropdown-menu slot="dropdown">
          <ul class="top-nav-left-dropdown">
            <li>
              <svg-icon icon-class="Personal"/>个人中心
            </li>
            <li>
              <svg-icon icon-class="shoppingcart"/>购物车
            </li>
            <li>
              <svg-icon icon-class="Order"/>订单管理
            </li>
            <li>
              <svg-icon icon-class="message"/>消息中心
            </li>
            <li>
              <svg-icon icon-class="service"/>售后服务
            </li>
          </ul>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="top-nav-right">
      <ul>
        <li>首页</li>
        <li>iPhone</li>
        <li>HUAWEI</li>
        <li>VIVO</li>
        <li>
          <svg-icon icon-class="shoppingcart"/>
        </li>
        <search-input/>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput";
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
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  height: 6.8rem;
  background-color: #ffffff;
  position: relative;
  color: #818181;

  // 左侧头像
  .top-nav-left {
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

    // 偏移UI组件位置
    .top-nav-left-dropdown-span {
      width: 12rem;
      display: block;
    }
  }
  .top-nav-left:hover {
    box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.33);
  }

  // 右侧列表栏
  .top-nav-right {
    position: absolute;
    right: 1rem;
    margin: 1.3rem 0;

    ul {
      display: flex;
      font-size: 2.5rem;
      line-height: 4rem;
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
  height: 20rem;
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
