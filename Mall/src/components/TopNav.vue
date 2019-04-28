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
        <li>
          <svg-icon icon-class="search"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-nav"
};
</script>

<style lang="scss" scoped>
.top-nav {
  height: 68px;
  background-color: #ffffff;
  position: relative;
  color: #818181;

  // 左侧头像
  .top-nav-left {
    width: 90px;
    height: 90px;
    position: absolute;
    top: -11px;
    left: -20px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    img {
      width: 90px;
      height: 90px;
      float: left;
    }

    // 偏移UI组件位置
    .top-nav-left-dropdown-span {
      width: 120px;
      display: block;
    }
  }
  .top-nav-left:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.33);
  }

  // 右侧列表栏
  .top-nav-right {
    position: absolute;
    right: 10px;
    margin: 13px 0;
    ul {
      display: flex;
      font-size: 25px;
      line-height: 40px;
      li {
        cursor: pointer;
        margin: 0 20px;
        svg {
          font-size: 40px;
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
  width: 140px;
  height: 200px;
  // text-align: center;
  font-size: 18px;
  color: #7e7e7e;
  li {
    cursor: pointer;
    margin: 20px 13px;
    svg {
      margin: 0 5px;
      font-size: 20px;
    }
  }
  li:hover {
    color: #2c2c2c;
  }
}
</style>
