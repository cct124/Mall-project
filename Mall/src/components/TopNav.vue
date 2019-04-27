<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <img src="./../images/Avatar.png">
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
  width: 100%;
  height: 68px;
  background-color: #ffffff;
  position: relative;
  color: #818181;
  .top-nav-left {
    width: 90px;
    height: 90px;
    position: absolute;
    top: -11px;
    left: -20px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.33);
    cursor: pointer;
    img {
      width: 90px;
      height: 90px;
    }
  }
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
        color: #535353;
      }
    }
  }
}
</style>
